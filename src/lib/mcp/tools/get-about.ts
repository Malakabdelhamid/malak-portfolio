import { defineTool } from "@lovable.dev/mcp-js";

const about = `Malak Mohamed Abd-ElHamid — Junior AI Engineer and Artificial Intelligence graduate from Helwan International Technological University (2022–2026).

Hands-on experience in Machine Learning, Deep Learning, Computer Vision, and NLP. Interested in building AI-powered applications using LLMs, RAG, and AI agents.

Experience: Machine Learning Intern at the Digital Egypt Pioneers Initiative (MCIT), Jun 2025 – Dec 2025. AI & Business Training Program at Commercial International Bank (CIB), Sep 2024 – Oct 2024.

Featured projects: EyeSpeak (AI-based eye tracking, 87% gaze estimation accuracy), VisionWalk (real-time pedestrian detection with YOLOv5, 80% detection accuracy), and Smart Gloves for Sign Language Translation (87% translation accuracy, 20% error rate reduction).

Core stack: Python, FastAPI, PyTorch, TensorFlow, Scikit-learn, OpenCV, YOLO, LangChain, Hugging Face Transformers, NumPy, Pandas.`;

export default defineTool({
  name: "get_about",
  title: "Get about / bio",
  description: "Returns a short biography and professional summary for Malak Mohamed Abd-ElHamid.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: about }] }),
});
