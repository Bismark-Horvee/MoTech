import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    organization: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    contact: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const contact = mongoose.model("contact", contactSchema);
export default contact;
