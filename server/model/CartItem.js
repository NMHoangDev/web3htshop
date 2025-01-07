import mongoose from "mongoose";
const CartItemSchema = new mongoose.Schema({
  product: {
    type: String,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },

  isCheck: {
    type: Boolean,
    required: true,
    default: false,
  },
  user: {
    type: String,
    required: true,
    ref: "User",
  },
  paid: {
    type: Boolean,
    required: true,
    default: false,
  },
});
export default mongoose.model("CartItem", CartItemSchema);
