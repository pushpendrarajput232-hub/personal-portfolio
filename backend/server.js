require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Portfolio backend is running successfully!"
    });
});

// Contact API
app.use("/api/contact", contactRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});