import mongoose, { Document, Schema, Types } from "mongoose";

interface FolderType extends Document {
  name: string;
  parent: Types.ObjectId | null;
  children: Types.ObjectId[] | null;
}

const FolderSchema: Schema = new Schema({
  name: { type: String, required: true },
  parent: { type: Schema.Types.ObjectId, ref: "Folder" },
  children: [{ type: Schema.Types.ObjectId, ref: "Folder" }],
});

const Folder = mongoose.model<FolderType>("Folder", FolderSchema);

export default Folder;
