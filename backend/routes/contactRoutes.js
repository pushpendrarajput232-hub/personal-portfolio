const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST - Save contact message
router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        await contact.save();

        res.status(201).json({
            message: "Message sent successfully!",
            contact
        });

    } catch (error) {
        console.error("Contact error:", error);

        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;