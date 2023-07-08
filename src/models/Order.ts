import mongoose, { Schema } from "mongoose";

interface OrderDocument extends Order, Document {}

const OrderSchema = new Schema<OrderDocument>({
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

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);

export default Order;
