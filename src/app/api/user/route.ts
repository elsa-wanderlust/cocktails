import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import connectToDb from "@/middlewares/connectToDb";
import { signupFormSchema } from "@/app/lib/validations/signupFormSchema";

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
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
  try {
    const userAlreadyExisted = await User.findOne({ "account.email": email });
    if (userAlreadyExisted !== null) {
      return NextResponse.json(
        { message: "There is already an account associated with that email" },
        { status: 409 }
      );
    }
    const newUser = new User({
      account: { firstName, lastName, email },
    });
    await newUser.save();
    return NextResponse.json({ message: "created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 400 });
  }
});
