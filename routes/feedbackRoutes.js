const express = require("express");
const Joi = require("joi");

const router = express.Router();

// 🔑 Keyword Optimization
router.post("/optimize-keywords", (req, res) => {
  const schema = Joi.object({
    jobTitle: Joi.string().required(),
    skills: Joi.array().items(Joi.string()).required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const optimizedKeywords = [...value.skills, value.jobTitle, "Leadership", "Adaptability"];

  res.json({ success: true, optimizedKeywords });
});

// 📊 Realtime Feedback
router.post("/resume-feedback", (req, res) => {
  const schema = Joi.object({
    resumeText: Joi.string().required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const feedback = [
    { message: "Use more action verbs for a stronger impact.", score: 85 },
    { message: "Add more industry-related keywords.", score: 90 },
  ];

  res.json({ success: true, feedback });
});

module.exports = router;
