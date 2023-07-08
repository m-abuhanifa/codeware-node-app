import mongoose, { Schema } from "mongoose";

const OrderSchema = new Schema({
  phone: {
    type: String,
  },
  orderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderItems",
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema);

export default Order;
