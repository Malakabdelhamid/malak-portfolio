import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "EyeSpeak — AI-Based Eye Tracking System",
    description:
      "AI-powered eye tracking system for hands-free interaction using Computer Vision and Machine Learning, integrated with Android and IoT devices on Raspberry Pi Zero 2 W. Reported result: 87% gaze estimation accuracy.",
    github: "https://github.com/Malakabdelhamid/EyeSpeak",
    tech: ["Python", "OpenCV", "Random Forest", "Raspberry Pi", "Android", "IoT"],
  },
  {
    title: "VisionWalk — Real-Time Pedestrian Detection",
    description:
      "Real-time pedestrian detection system developed with YOLOv5 and Python, trained on the Caltech Pedestrian Dataset. Reported result: 80% detection accuracy in practical testing.",
    github: "https://github.com/Malakabdelhamid/VisionWalk",
    demo: "/vision.mp4",
    tech: ["Python", "YOLOv5", "Caltech Pedestrian Dataset"],
  },
  {
    title: "Smart Gloves for Sign Language Translation",
    description:
      "Wearable sign language translation system using Random Forest and sensor integration. Reported results: 87% translation accuracy and a 20% reduction in error rate.",
    github: "https://github.com/Malakabdelhamid/Sign-Language-Translator",
    demo: "/gloves.mp4",
    tech: ["Python", "Random Forest", "Sensor Integration"],
  },
];

export default defineTool({
  name: "get_projects",
  title: "Get projects",
  description: "Returns Malak's featured portfolio projects with descriptions, results, and links.",
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
