import validator from "validator";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: validator.isEmail,
      message: "Vui lòng nhập email đúng định dạng",
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
});
// UserSchema.pre("save", async function () {
//   const salt = await bcryptjs.genSalt(10);
//   this.password = await bcryptjs.hash(this.password, salt);
// });
UserSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this._id }, "jwtSecret", { expiresIn: "3d" });
};
UserSchema.methods.comparePassword = async function (candidatePassword) {
  if (candidatePassword === this.password) {
    return true;
  } else return false;
};

export default mongoose.model("User", UserSchema);
