// import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import bcrypt from "bcrypt";
import connectToDb from "@/middlewares/connectToDb";
import { cookies } from "next/headers";
import { loginFormSchema } from "@/app/lib/validations/loginFormSchema";

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    // check on the server side that the received data is valid
    const dataValidated = loginFormSchema.safeParse(body);
    let zodError = {};
    if (!dataValidated.success) {
      console.log("zod failed");
      dataValidated.error.issues.forEach((issue) => {
        zodError = { ...zodError, [issue.path[0]]: issue.message };
      });
      return NextResponse.json({ errors: zodError });
    }
    // if zod validated
    const { email, password } = body;
    // check if user exists with that email
    const userExists = await User.findOne({ email: "kjashf" });
    if (!userExists) {
      return NextResponse.json(
        {
          message:
            "Either the email or password, or maybe even both, are incorrect",
        },
        { status: 401 }
      );
    }
    // check if pw is correct
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
    // if both user and pw are OK - save token in cookie
    cookies().set({
      name: "cocktails",
      value: userExists.token,
    });
    return NextResponse.json({ message: "logged in" }, { status: 201 });
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
