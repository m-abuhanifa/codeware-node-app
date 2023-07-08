import mongoose, { Schema } from "mongoose";

const OrderItemsSchema = new Schema({
  products: [
    {
      product: String,
      quantity: Number,
    },
  ],
});

const OrderItems = mongoose.model("OrderItems", OrderItemsSchema);

export default OrderItems;
