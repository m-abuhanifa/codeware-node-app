import mongoose, { Schema } from "mongoose";

interface OrderItems {
  id: string;
  products: Product[];
  quantity: number;
}
interface OrderDocument extends OrderItems, Document {}

const OrderItemsSchema = new Schema<OrderDocument>({
  id: {
    type: String,
    required: true,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  quantity: {
    type: Number,
    required: true,
  },
});

const OrderItem = mongoose.model<OrderDocument>("OrderItems", OrderItemsSchema);

export default OrderItem;
