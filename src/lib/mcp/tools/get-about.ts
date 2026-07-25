import { defineTool } from "@lovable.dev/mcp-js";

const about = `Malak Abd-ElHamid — Artificial Intelligence Graduate from Helwan International Technological University (HITU), 2022–2026.

Focused on Machine Learning, Computer Vision, and NLP with hands-on experience building end-to-end AI applications. Featured projects include EyeSpeak (AI-powered eye tracking on Raspberry Pi), VisionWalk (YOLOv5 pedestrian detection), and Calibra8 (industrial LLM chatbot with FastAPI and MySQL).

Currently a Machine Learning Intern at the Digital Egypt Pioneers Initiative (DEPI), with prior AI & Business training at Commercial International Bank (CIB).

Core stack: Python, FastAPI, TensorFlow, Keras, OpenCV, Scikit-Learn, Pandas, NumPy, YOLOv5, MySQL.`;

export default defineTool({
  name: "get_about",
  title: "Get about / bio",
  description: "Returns a short biography and professional summary for Malak Mohamed.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: about }] }),
});