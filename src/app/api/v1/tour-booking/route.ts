import { dbCon } from "@/libs/mongoose/dbCon";
import {
  generateAdminBookingNotificationTemplate,
  generateUserBookingConfirmationTemplate,
} from "@/libs/nodemailer/email-templates-generators";
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
  const body = await req.json(),
    { email, name } = body;
  // Start a Mongoose session for the transaction
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    await dbCon();
    const bookingDate = new Date().toLocaleDateString();
    const newTourBooking = new TourBooking(body);
    const url = `${req.nextUrl.origin}/tour-charging/${newTourBooking._id}`
    const adminEmailBody = generateAdminBookingNotificationTemplate(
      `${name}(${email})`,
      bookingDate,
      body,
      url
    );
    const userEmailBody = generateUserBookingConfirmationTemplate(
      `${name}`,
      bookingDate,
      body
    );

    await Promise.all([
      // send to admin
      sendTestEmail(
        "mashudimwayama@gmail.com;mweroabdalla@gmail.com",
        "Tour Booking",
        adminEmailBody,
        true
      ),
      //send to user
      sendTestEmail(email, "TourBooking", userEmailBody, true),
    ]);
    const savedTourBooking = await newTourBooking.save();
    // Commit the transaction if everything succeeds
    await session.commitTransaction();
    session.endSession();

    return NextResponse.json(
      { success: true, data: savedTourBooking },
      { status: 201 }
    );
  } catch (error: any) {
    // Roll back the transaction if any error occurs
    await session.abortTransaction();
    session.endSession();
    console.log({ error: error.message });
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
