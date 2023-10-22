import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  type: {type: String, required: true},
  // nic: {type: number, required: true},
  email: {type: String, required: true},
  address: {type: String, required: true},
  mobile: {type: String, required: true},
  password: {type: String, required: true }
});

export const userModel = model('users', UserSchema);