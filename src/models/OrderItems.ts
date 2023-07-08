import mongoose, { Schema } from "mongoose";

const OrderItemsSchema = new Schema({
  products: [
    {
      product: String,
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderItems = mongoose.model("OrderItems", OrderItemsSchema);

export default OrderItems;
