import mongoose, { Schema } from "mongoose";

interface OrderDocument extends Order, Document {}

const OrderSchema = new Schema<OrderDocument>({
  id: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  orderItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "OrderItems",
      required: true,
    },
  ],
});

const Order = mongoose.model<OrderDocument>("Order", OrderSchema);

export default Order;
