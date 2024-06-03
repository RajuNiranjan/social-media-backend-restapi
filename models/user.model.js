import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 5,
  },
  blog: [{ type: mongoose.Types.ObjectId, ref: "Blog", require: true }],
});

export default mongoose.model("User", UserSchema);
