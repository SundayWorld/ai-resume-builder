export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
  }

  if (req.method === "POST") {
      try {
          const { name, jobTitle, skills } = req.body;

          // Validate request body
          if (!name || !jobTitle || !skills || !Array.isArray(skills)) {
              return res.status(400).json({ error: "Missing or invalid required fields" });
          }

          // Generate a summary
          const summary = `Hello, I am ${name}, a professional ${jobTitle} skilled in ${skills.join(", ")}.`;

          return res.status(200).json({
              success: true,
              resume: { name, jobTitle, skills, summary }
          });
      } catch (error) {
          return res.status(500).json({ error: "Internal Server Error" });
      }
  }

  if (req.method === "GET") {
      return res.status(200).json({ message: "Resume analysis data" });
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
