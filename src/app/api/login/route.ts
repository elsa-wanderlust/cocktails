import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import bcrypt from "bcrypt";
import connectToDb from "@/middlewares/connectToDb";
import { loginFormSchema } from "@/app/lib/validations/loginFormSchema";

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    const dataValidated = loginFormSchema.safeParse(body);
    let zodError = {};
    if (!dataValidated.success) {
      console.log("zod failed");
      dataValidated.error.issues.forEach((issue) => {
        zodError = { ...zodError, [issue.path[0]]: issue.message };
      });
      return NextResponse.json({ errors: zodError }, { status: 400 });
    }
    const { email, password } = body;
    const userExists = await User.findOne({ email: email });
    if (!userExists) {
      return NextResponse.json(
        {
          message:
            "Either the email or password, or maybe even both, are incorrect",
        },
        { status: 401 }
      );
    }
    const pwValid = await bcrypt.compare(password, userExists.hash);
    if (!pwValid) {
      return NextResponse.json(
        {
          message:
            "Either the email or password, or maybe even both, are incorrect",
        },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { message: "logged in", token: userExists.token },
      { status: 201 }
    );
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
