import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "EyeSpeak",
    description:
      "AI-powered eye tracking system for hands-free interaction using Computer Vision and Machine Learning on Raspberry Pi Zero 2 W. Achieved 87% gaze estimation accuracy.",
    github: "https://github.com/Malakabdelhamid/EyeSpeak",
    tech: ["Python", "OpenCV", "Random Forest", "Raspberry Pi", "Android", "IoT"],
  },
  {
    title: "Calibra8 AI Chatbot",
    description:
      "Industrial AI chatbot combining LLMs, semantic search, and product recommendations built with FastAPI, Ollama, and MySQL.",
    tech: ["Python", "FastAPI", "Ollama", "MySQL", "LLMs"],
  },
  {
    title: "VisionWalk",
    description:
      "Real-time pedestrian detection using YOLOv5 and OpenCV trained on the Caltech Pedestrian Dataset. Achieved 80% accuracy.",
    github: "https://github.com/Malakabdelhamid/VisionWalk",
    demo: "/vision.mp4",
    tech: ["Python", "YOLOv5", "OpenCV", "TensorFlow"],
  },
  {
    title: "Sign Language Translator",
    description:
      "Smart gloves powered by ML that translate sign language into text using flex sensors and ESP32.",
    github: "https://github.com/Malakabdelhamid/Sign-Language-Translator",
    demo: "/gloves.mp4",
    tech: ["Python", "Random Forest", "ESP32", "Flutter"],
  },
  {
    title: "Heart Disease Prediction",
    description: "ML model predicting heart disease risk from patient medical data.",
    github: "https://github.com/Malakabdelhamid/Heart-Disease-Prediction",
    tech: ["Python", "Scikit-Learn", "Pandas"],
  },
  {
    title: "Earthquake Prediction",
    description: "ML model for earthquake prediction and seismic data analysis.",
    github: "https://github.com/Malakabdelhamid/Earthquake-Prediction",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy"],
  },
];

export default defineTool({
  name: "get_projects",
  title: "Get projects",
  description: "Returns Malak's featured portfolio projects with descriptions and demo links.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: projects
          .map(
            (p: any) =>
              `${p.title}\n${p.description}` +
              (p.tech ? `\nTech: ${p.tech.join(", ")}` : "") +
              (p.github ? `\nGitHub: ${p.github}` : "") +
              (p.demo ? `\nDemo: ${p.demo}` : "")
          )
          .join("\n\n"),
      },
    ],
    structuredContent: { projects },
  }),
});