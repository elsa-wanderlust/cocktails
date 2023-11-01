import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import bcrypt from "bcrypt";
import connectToDb from "@/middlewares/connectToDb";
import { signupFormSchema } from "@/app/lib/validations/signupFormSchema";

const uid2 = require("uid2");

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    const dataValidated = signupFormSchema.safeParse(body);
    let zodError = {};
    if (!dataValidated.success) {
      dataValidated.error.issues.forEach((issue) => {
        zodError = { ...zodError, [issue.path[0]]: issue.message };
      });
      return NextResponse.json({ errors: zodError });
    }
    const { email, password, age } = body;
    const userAlreadyExisted = await User.findOne({ email: email });
    if (userAlreadyExisted) {
      return NextResponse.json(
        { message: "There is already an account associated with that email" },
        { status: 409 }
      );
    } else {
      const hash = await bcrypt.hash(password, 10);
      const token = uid2(32);
      const newUser = new User({
        email,
        age,
        hash,
        token,
      });
      await newUser.save();
      return NextResponse.json(
        { message: "created", token: token },
        { status: 201 }
      );
    }
  } catch (error: unknown) {
    if (typeof error === "string") {
      return NextResponse.json({ message: error }, { status: 500 });
    } else if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ message: "server error" }, { status: 500 });
    }
  }
});
