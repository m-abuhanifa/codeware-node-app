import mongoose, { Document, Schema } from "mongoose";

interface ProductDocument extends Product, Document {}

const ProductSchema = new Schema<ProductDocument>({
  product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
