import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
  user_name: { type: String, unique: true },
  first_name: String,
  last_name: String,
  email: { type: String, unique: true },
  phone_number: { type: String, required: true }
});

export default mongoose.model("users", schema);
