import mongoose from "mongoose";
import { user } from "../utils/types";

const userSchema = new mongoose.Schema<user>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});


module.exports = mongoose.model("User", userSchema);