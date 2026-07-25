import { defineTool } from "@lovable.dev/mcp-js";

const projects = [
  {
    title: "VisionWalk",
    description:
      "AI-powered pedestrian detection system using computer vision to enhance urban safety and traffic management.",
    demo: "/vision.mp4",
  },
  {
    title: "EgGuide",
    description:
      "VR-based tourism platform showcasing Egyptian landmarks with immersive virtual reality experiences.",
  },
  {
    title: "Sign Language Translator",
    description:
      "Smart gloves powered by IoT and machine learning that translate sign language into text, bridging communication for the deaf and dumb community.",
    demo: "/gloves.mp4",
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
          .map((p) => `${p.title}\n${p.description}${p.demo ? `\nDemo: ${p.demo}` : ""}`)
          .join("\n\n"),
      },
    ],
    structuredContent: { projects },
  }),
});