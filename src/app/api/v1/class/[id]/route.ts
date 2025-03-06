import { dbCon } from "@/libs/mongoose/dbCon";
import { ClassModel } from "@/models/Class";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(req);
  try {
    await dbCon();
    const fetchedClass = await ClassModel.findById(params.id);
    if (!fetchedClass)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json(fetchedClass);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(req);
  const body = await req.json();
  try {
    await dbCon();
    const updatedClass = await ClassModel.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedClass)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true, data: updatedClass });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  console.log(req);
  try {
    await dbCon();
    const deletedClass = await ClassModel.findByIdAndDelete(params.id);
    if (!deletedClass)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json(
      { success: true, data: deletedClass },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
