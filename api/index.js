require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const resumeRoutes = require("./resumeRoutes");
const interviewRoutes = require("./interviewRoutes");
const feedbackRoutes = require("./feedbackRoutes");

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(morgan("dev"));
app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("AI Resume API is running!");
});

// Modular Routes
app.use("/resume", resumeRoutes);
app.use("/interview", interviewRoutes);
app.use("/feedback", feedbackRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

module.exports = app; // 🚀 Required for Vercel Deployment
