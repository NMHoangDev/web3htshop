import mongoose from "mongoose";
const OrderSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  dateOder: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  dateExpress: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  user: {
    type: String,
    required: true,
    ref: "User",
  },
  cartItems: {
    type: Array,
    required: true,
    ref: "CartItem",
  },
  price: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Order", OrderSchema);
