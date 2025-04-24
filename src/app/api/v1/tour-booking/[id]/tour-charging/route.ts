// Import database connection function
import { dbCon } from "@/libs/mongoose/dbCon";

// Import email template generator
import { generateUserTourPaymentRequest } from "@/libs/nodemailer/email-templates-generators";

// Gmail email sender function
import { sendTestEmail } from "@/libs/nodemailer/gmail2";

// Import TourBooking model
import { TourBooking } from "@/models/TourBooking";

// Next.js API Route utilities
import { NextRequest, NextResponse } from "next/server";

// PUT /api/v1/tour-booking/[id]/charging
export async function PUT(req: NextRequest, { params: { id } }: any) {
  try {
    // Parse request body
    const body = await req.json();

    // Connect to DB
    await dbCon();

    // Update the booking
    const updatedTourBooking = await TourBooking.findByIdAndUpdate(id, body, { new: true });

    if (!updatedTourBooking) {
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );
    }

    // Respond immediately to the user
    const response = NextResponse.json({ success: true, data: updatedTourBooking });

    // Send email in the background (non-blocking)
    (async () => {
      try {
        const { email: customerEmail, _id: bookingId, name } = updatedTourBooking;
        const paymentUrl = `${req.nextUrl.origin}/payment?customerEmail=${customerEmail}&totalAmount=${body.totalAmount}&bookingId=${bookingId}`;
        const customerEmailBody = generateUserTourPaymentRequest(name, body.totalAmount, paymentUrl);

        await sendTestEmail(
          customerEmail,
          `🧾 Complete Your Tour Payment`,
          customerEmailBody,
          true
        );
      } catch (emailError) {
        console.error("Failed to send payment email:", emailError);
      }
    })();

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
