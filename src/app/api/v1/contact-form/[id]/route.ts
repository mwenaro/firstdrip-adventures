import { dbCon } from "@/libs/mongoose/dbCon";
import { ContactForm } from "@/models/ContactForm";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params: { id } }: any) {
console.log(req)
  try {
    await dbCon();
    const fetchedContactForm = await ContactForm.findOne({ _id: id });
    if (!fetchedContactForm)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json(fetchedContactForm);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params: { id } }: any) {
console.log(req)
  const body = await req.json();
  try {
    await dbCon();
    const deletedContactForm = await ContactForm.findByIdAndUpdate(id, body);
    if (!deletedContactForm)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );
    return NextResponse.json({ success: true, data: deletedContactForm });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params: { id } }: any) {
console.log(req)
  try {
    await dbCon();
    const updatedContactForms = await ContactForm.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, data: updatedContactForms },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
