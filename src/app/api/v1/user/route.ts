import { dbCon } from "@/libs/mongoose/dbCon";
import { User } from "@/models/User";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await dbCon();
    const fetchedUsers = await User.find({$or:[{ role: "user" }, {role:'admin'}]});

    return NextResponse.json(fetchedUsers);
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await dbCon();
    const savedUsers = await User.insertMany(Array.isArray(body) ? body : [body])
    
    return NextResponse.json(
      { success: true, data: savedUsers },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
