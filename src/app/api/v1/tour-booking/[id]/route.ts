import { dbCon } from "@/libs/mongoose/dbCon";
import { TourBooking } from "@/models/TourBooking";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params: { id } }: any) {
console.log(req)
  try {
    await dbCon();
    const fetchedTourBooking = await TourBooking.findOne({ _id: id });
    if (!fetchedTourBooking)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );

    return NextResponse.json(fetchedTourBooking);
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
    const deletedTourBooking = await TourBooking.findByIdAndUpdate(id, body);
    if (!deletedTourBooking)
      return NextResponse.json(
        { success: false, message: "Not Found" },
        { status: 404 }
      );
    return NextResponse.json({ success: true, data: deletedTourBooking });
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
    const updatedTourBookings = await TourBooking.findByIdAndDelete(id);

    return NextResponse.json(
      { success: true, data: updatedTourBookings },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
