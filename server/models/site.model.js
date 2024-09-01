import mongoose from "mongoose";

const siteSchema = new mongoose.Schema(
  {
    host: { type: String, required: true, unique: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Site = mongoose.model("Site", siteSchema);
