export default function handler(req, res) {
    // Enable CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    // Handle preflight request
    if (req.method === "OPTIONS") {
      res.status(200).end();
      return;
    }
  
    if (req.method === "GET") {
      const featureCards = [
        { title: "ATS Optimization", description: "AI-powered resume scanning", icon: "ats-icon.png", learnMore: "Learn More" },
        { title: "AI Cover Letters", description: "Instant personalized cover letters", icon: "ai-cover-icon.png", learnMore: "Learn More" },
        { title: "Professional Templates", description: "Recruiter-approved resume templates", icon: "templates-icon.png", learnMore: "Learn More" },
        { title: "Keyword Optimization", description: "Match job descriptions with AI", icon: "keyword-icon.png", learnMore: "Learn More" },
        { title: "Real-Time Feedback", description: "AI-powered resume improvement suggestions", icon: "feedback-icon.png", learnMore: "Learn More" },
        { title: "Lightning Fast", description: "Create a professional resume in minutes", icon: "lightning-icon.png", learnMore: "Learn More" }
      ];
      res.status(200).json({ featureCards });
    } else {
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  