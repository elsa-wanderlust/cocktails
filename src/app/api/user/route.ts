import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const res = await req.formData();
  console.log(res);
  return NextResponse.json({ message: "created" }, { status: 201 });
};
