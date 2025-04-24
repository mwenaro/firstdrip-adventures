// Import database connection function
import { dbCon } from "@/libs/mongoose/dbCon";

// Import email template generators for user payment communication
import {
    generateUserTourPaymentRequest,
} from "@/libs/nodemailer/email-templates-generators";

// Gmail email sender function (likely configured for dev/test or live use)
import { sendTestEmail } from "@/libs/nodemailer/gmail2";

// Import TourBooking model
import { TourBooking } from "@/models/TourBooking";

// Next.js API Route utilities
import { NextRequest, NextResponse } from "next/server";

// API route: Update booking and send payment request email
// PUT /api/v1/tour-booking/[id]/charging
export async function PUT(req: NextRequest, { params: { id } }: any) {
  const body = await req.json();

  try {
    // Connect to MongoDB
    await dbCon();

    // Update booking by ID with the incoming body data
    const updatedTourBooking = await TourBooking.findByIdAndUpdate(id, body);

    // If no booking found, return 404
    if (!updatedTourBooking)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    // Extract necessary details for email
    const { email: customerEmail, _id: bookingId, name } = updatedTourBooking;

    // Construct a payment URL for the customer
    const paymentUrl = `${req.nextUrl.origin}/payment?customerEmail=${customerEmail}&totalAmount=${body.totalAmount}&bookingId=${bookingId}`;

    // Generate email body using the template
    const customerEmailBody = generateUserTourPaymentRequest(
      name, // Make sure 'name' exists in the schema/model
      // body.packageName || "Tour Package", // Optional: add fallback
      body.totalAmount,
      paymentUrl
    );

    // Send the payment request email to the customer
    await sendTestEmail(
      customerEmail,
      `🧾 Complete Your Tour Payment`,
      customerEmailBody,
      true
    );

    // Respond with updated data
    return NextResponse.json({ success: true, data: updatedTourBooking });

  } catch (error: any) {
    // Handle and return server error
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
