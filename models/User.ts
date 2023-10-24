import { Schema, model, models } from "mongoose";

const user = new Schema({
  account: {
    email: String,
    firstName: String,
    lastName: String,
    DOB: Date,
  },
  password: {
    token: String,
    hash: String,
    salt: String,
  },
  savedCocktails: [
    {
      idDrink: String,
      status: String,
      note: String,
    },
  ],
});
