import mongoose from "mongoose";
const connect = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/bwd2024");
    console.log("Ket noi thanh cong");
  } catch (error) {}
};
export default connect;
