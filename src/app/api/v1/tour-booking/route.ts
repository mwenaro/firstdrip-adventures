import { dbCon } from "@/libs/mongoose/dbCon";
import {
  generateAdminBookingNotificationTemplate,
  generateUserBookingConfirmationTemplate,
} from "@/libs/nodemailer/email-templates-generators copy";

import { sendTestEmail } from "@/libs/nodemailer/gmail2";
import { TourBooking } from "@/models/TourBooking";
import mongoose from "mongoose";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  // return NextResponse.json([{message:'Heloo', email:'test@my-email.net'}])
  try {
    await dbCon();
    const fetchedTourBookings = await TourBooking.find();

    return NextResponse.json(fetchedTourBookings);
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name } = body;

  await dbCon();
  const session = await mongoose.startSession();

  try {
    await session.withTransaction(async () => {
      const bookingDate = new Date().toLocaleDateString();
      const newTourBooking = new TourBooking(body);

      // Save the booking WITHIN the transaction
      const savedTourBooking = await newTourBooking.save({ session });

      const url = `${req.nextUrl.origin}/tour-charging/${savedTourBooking._id}`;
      const adminEmailBody = generateAdminBookingNotificationTemplate(
        `${name} (${email})`,
        bookingDate,
        body,
        url
      );
      const userEmailBody = generateUserBookingConfirmationTemplate(
        name,
        bookingDate,
        body
      );

      // Send emails — still part of transaction logic
      await Promise.all([
        sendTestEmail(
          "mashudimwayama@gmail.com;mweroabdalla@gmail.com",
          `Tour Booking (${bookingDate})`,
          adminEmailBody,
          true
        ),
        sendTestEmail(email, `Tour Booking (${bookingDate})`, userEmailBody, true),
      ]);
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error({ error: error.message });
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    session.endSession();
  }
}
