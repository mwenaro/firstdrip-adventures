import { dbCon } from "@/libs/mongoose/dbCon";
import {
  generateAdminNotificationTemplate,
  generateUserConfirmationTemplate,
} from "@/libs/nodemailer/email-templates-generators";
import { sendTestEmail } from "@/libs/nodemailer/gmail2";
import { ContactForm } from "@/models/ContactForm";
import mongoose from "mongoose";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  // return NextResponse.json([{message:'Heloo', email:'test@my-email.net'}])
  try {
    await dbCon();
    const fetchedContactForms = await ContactForm.find();

    return NextResponse.json(fetchedContactForms);
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
    const newContactForm = new ContactForm(body);
    const adminEmailBody = generateAdminNotificationTemplate(
      `${name}(${email})`,
      new Date().toLocaleDateString(),
      ""
    );
    const userEmailBody = generateUserConfirmationTemplate(`${name}`);

    await Promise.all([
      // send to admin
      sendTestEmail(
        "mashudimwayama@gmail.com;mweroabdalla@gmail.com",
        "Contact Form",
        adminEmailBody,
        true
      ),
      //send to user
      sendTestEmail(email, "Contact Form", userEmailBody, true),
    ]);
    const savedContactForm = await newContactForm.save();

    // Commit the transaction if everything succeeds
    await session.commitTransaction();
    session.endSession();

    return NextResponse.json(
      { success: true, data: savedContactForm },
      { status: 201 }
    );
  } catch (error: any) {
    // Roll back the transaction if any error occurs
    await session.abortTransaction();
    session.endSession();

    return NextResponse.json({ error: error }, { status: 500 });
  }
}
