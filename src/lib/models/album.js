import mongoose from "mongoose";
const AlbumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    photos: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Album || mongoose.model("Album", AlbumSchema);
