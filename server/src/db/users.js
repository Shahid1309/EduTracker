

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  userType: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

export const getUserByEmail = (email) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken) =>
  UserModel.findOne({
    "authentication.sessionToken": sessionToken,
  });
export const createUser = (values) =>
  new UserModel(values).save().then((user) => user.toObject());

export { UserModel };
