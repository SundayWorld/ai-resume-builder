const express = require("express");
const Joi = require("joi");

const router = express.Router();

// 🚀 Generate ATS Optimized Resume
router.post("/generate", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    jobTitle: Joi.string().required(),
    skills: Joi.array().items(Joi.string()).required(),
  });

  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const atsOptimizedSkills = [...value.skills, "Teamwork", "Problem Solving", "Communication"];

  const resume = {
    name: value.name,
    jobTitle: value.jobTitle,
    skills: atsOptimizedSkills,
    summary: `Hello, I am ${value.name}, a professional ${value.jobTitle} skilled in ${atsOptimizedSkills.join(", ")}.`,
  };

  res.json({ success: true, resume });
});

// 📄 Professional Resume Templates
router.get("/templates", (req, res) => {
  const templates = [
    { id: 1, name: "Modern", format: "PDF" },
    { id: 2, name: "Classic", format: "DOCX" },
    { id: 3, name: "Minimalist", format: "PDF" },
  ];

  res.json({ success: true, templates });
});

module.exports = router;
