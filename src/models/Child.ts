import mongoose, { Document, Schema, Types } from "mongoose";

interface ChildType extends Document {
  name: string;
  parent: Types.ObjectId | null;
  children: Types.ObjectId[] | null;
}

const ChildSchema: Schema = new Schema({
  name: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: "Folder", require: true },
  children: [{ type: Schema.Types.ObjectId, ref: "Child" }],
});

const Child = mongoose.model<ChildType>("Child", ChildSchema);

export default Child;
