import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import connectToDb from "@/middlewares/connectToDb";

export const POST = connectToDb(async (req: NextRequest) => {
  const formaData = await req.formData();
  const firstName = formaData.get("firstName");
  const lastName = formaData.get("lastName");
  const email = formaData.get("email");
  try {
    const userAlreadyExisted = await User.findOne({ "account.email": email });
    if (userAlreadyExisted !== null) {
      return NextResponse.json(
        { message: "email already used" },
        { status: 409 }
      );
    }
    const newUser = new User({
      account: { firstName, lastName, email },
    });
    await newUser.save();
    return NextResponse.json({ message: "created" }, { status: 201 });
  } catch (error) {
    // return NextResponse.json({ error: message }, { status: 201 });
    return NextResponse.json({ message: error }, { status: 400 });
    // res.status(500).json({ error: error.message });
  }
});
