const express = require("express");
const Joi = require("joi");

const router = express.Router();

// 🎤 Request Interview Session
router.post("/request", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    jobTitle: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  res.json({
    success: true,
    message: `Interview session for ${value.name} (${value.jobTitle}) has been scheduled on ${value.date} at ${value.time}.`,
  });
});

// 🏆 Start Practice Session
router.get("/practice", (req, res) => {
  const practiceQuestions = [
    "Tell me about yourself.",
    "What are your strengths and weaknesses?",
    "Why should we hire you?",
    "Describe a challenge you've faced at work and how you handled it.",
  ];

  res.json({ success: true, questions: practiceQuestions });
});

module.exports = router;
