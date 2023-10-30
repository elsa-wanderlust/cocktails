// import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import bcrypt from "bcrypt";
import connectToDb from "@/middlewares/connectToDb";
import { signupFormSchema } from "@/app/lib/validations/signupFormSchema";

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    // check on the server side that the received data is valid
    const dataValidated = signupFormSchema.safeParse(body);
    let zodError = {};
    if (!dataValidated.success) {
      dataValidated.error.issues.forEach((issue) => {
        zodError = { ...zodError, [issue.path[0]]: issue.message };
      });
      return NextResponse.json({ errors: zodError });
    }
    const { firstName, lastName, email, password, age } = body;
    const userAlreadyExisted = await User.findOne({ "account.email": email });
    if (userAlreadyExisted !== null) {
      return NextResponse.json(
        { message: "There is already an account associated with that email" },
        { status: 409 }
      );
    } else {
      // handle password
      const hash = await bcrypt.hash(password, 10);
      const token = "fewkjf";
      const newUser = new User({
        account: { firstName, lastName, email, age },
        password: { hash, token },
      });
      await newUser.save();
      return NextResponse.json({ message: "created" }, { status: 201 });
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
