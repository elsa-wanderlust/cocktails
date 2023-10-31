import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // firstName: {
  //   type: String,
  //   required: true,
  // },
  // lastName: {
  //   type: String,
  //   required: true,
  // },
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
  // salt: {
  //   type: String,
  //   // required: true,
  // },

  savedCocktails: [
    {
      idDrink: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      note: {
        type: String,
      },
    },
  ],
});

export default model("User", userSchema);
// export default models.User || model("User", userSchema);
