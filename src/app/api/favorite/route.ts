import { NextRequest, NextResponse } from "next/server";

import User from "../../../../models/User";
import connectToDb from "@/middlewares/connectToDb";
import { headers } from "next/headers";
import { isAuthenticated } from "@/middlewares/isAuthenticated";

export const POST = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    const responseAuth = await isAuthenticated(body.token);
    const responseAuthData = await responseAuth.json();
    if (responseAuthData.message !== "authorized") {
      throw new Error(responseAuthData.message);
    } else {
      const { token, idDrink } = body;
      const { _id, savedCocktails } = await User.findOne({
        token: token,
      }).select("savedCocktails");
      let newSavedCocktails = [...savedCocktails];
      newSavedCocktails.push({ idDrink: idDrink, note: "" });
      let doc = await User.findByIdAndUpdate(
        { _id: _id },
        { savedCocktails: newSavedCocktails },
        { new: true }
      );
      return NextResponse.json(
        { message: "saved", favCocktails: doc },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
});

export const DELETE = connectToDb(async (req: NextRequest) => {
  const body = await req.json();
  try {
    const responseAuth = await isAuthenticated(body.token);
    const responseAuthData = await responseAuth.json();
    if (responseAuthData.message !== "authorized") {
      throw new Error(responseAuthData.message);
    } else {
      const { token, idDrink } = body;
      const { _id, savedCocktails } = await User.findOne({
        token: token,
      }).select("savedCocktails");
      let newSavedCocktails = [];
      for (let i = 0; i < savedCocktails.length; i++) {
        if (savedCocktails[i].idDrink !== idDrink) {
          newSavedCocktails.push(savedCocktails[i]);
        }
      }
      let doc = await User.findByIdAndUpdate(
        { _id: _id },
        { savedCocktails: newSavedCocktails },
        { new: true }
      );
      return NextResponse.json(
        { message: "saved", favCocktails: doc },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
});

// USE SWR
// TypeError: Failed to execute 'fetch' on 'Window': Request with GET/HEAD method cannot have body.
export const GET = connectToDb(async (req: NextRequest) => {
  const headersList = headers();
  const authorization = headersList.get("authorization");
  if (!authorization) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }
  try {
    const responseAuth = await isAuthenticated(
      authorization.replace("Bearer ", "")
    );
    const responseAuthData = await responseAuth.json();
    if (responseAuthData.message !== "authorized") {
      throw new Error(responseAuthData.message);
    } else {
      const { savedCocktails } = await User.findOne({
        token: authorization.replace("Bearer ", ""),
      }).select("savedCocktails");
      return NextResponse.json(
        { message: "got list", favCocktails: savedCocktails },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "server error" }, { status: 500 });
  }
});
