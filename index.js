require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const resumeRoutes = require("./routes/resumeRoutes");
const interviewRoutes = require("./routes/interviewRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL || "*" })); // Use environment variable for allowed origins
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

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
