import { NextRequest, NextResponse } from "next/server";

import User from "../../models/User";
import connectToDb from "@/middlewares/connectToDb";

export const isAuthenticated = async (req: string) => {
  try {
    const user = await User.findOne({ token: req });
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } else {
      const userId = user._id;
      return NextResponse.json(
        { message: "authorized", userId: userId },
        { status: 201 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
