import mongoose from "mongoose";

const RateSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: true,
    trim: true,
  },
  numberOfStar: {
    type: Number,
    required: true,
    trim: true,
  },
});

export default mongoose.model("Product", ProductSchema);
