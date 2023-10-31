import { NextRequest, NextResponse } from "next/server";

import User from "../../models/User";
import connectToDb from "@/middlewares/connectToDb";

export const isAuthenticated = async (
  req: NextRequest,
  res: NextResponse,
  next
) => {
  // check IF a token has been provided - we'll get the token using req.headers.authorization
  // by convention, it will be called 'Bearer tokenName'
  //   console.log(req.headers.authorization);
  try {
    if (!req.headers.authorization) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      console.log("no token");
    }
    const user = await User.findOne({
      token: req.headers.authorization.replace("Bearer ", ""),
    }).select("account");
    // check IF there is a user with that token in the DB
    if (!user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      console.log("wrong token");
    } else {
      req.user = user;
      // On crée une clé "user" dans req. La route dans laquelle le middleware est appelé pourra avoir accès à req.user
      return next();
    }
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
