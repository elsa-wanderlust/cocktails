import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  savedCocktails: [
    {
      idDrink: {
        type: String,
        required: true,
      },
      strDrink: {
        type: String,
        required: true,
      },
      strDrinkThumb: {
        type: String,
        required: true,
      },
      note: {
        type: String,
      },
    },
  ],
});

export default models.User || model("User", userSchema);
