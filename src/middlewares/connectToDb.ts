import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

// to type handler, request and response

const connectToDb =
  (handler: any) => async (request: NextRequest, response: NextResponse) => {
    try {
      if (mongoose.connections[0].readyState) {
        return handler(request, response);
      } else {
        await mongoose.connect(process.env.MONGODB_URI);
        return handler(request, response);
      }
    } catch (error) {
      console.log(error);
    }
  };

export default connectToDb;
