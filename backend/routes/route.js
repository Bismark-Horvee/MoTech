import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullname, email, organization, contact, message } = req.body;

    if (!fullname || !email || !organization || !contact || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const newContact = await Contact.create({
      fullname,
      email,
      organization,
      contact,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      data: newContact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
});

export default router;
