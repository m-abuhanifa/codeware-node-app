import mongoose, { Document, Schema, Types } from "mongoose";

interface GrandType extends Document {
  name: string;
  parent: Types.ObjectId | null;
  children: Types.ObjectId[] | null;
}

const GrandSchema: Schema = new Schema({
  name: { type: String, required: true },
  parent: {
    type: Schema.Types.ObjectId,
    ref: "Child",
    require: true,
  },
  children: [{ type: Schema.Types.ObjectId, ref: "Child" }],
});

const Grand = mongoose.model<GrandType>("Grand", GrandSchema);

export default Grand;
