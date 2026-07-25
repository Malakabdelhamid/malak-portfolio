import { defineTool } from "@lovable.dev/mcp-js";

const categories = {
  programming: ["Python", "Java"],
  ai: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
  backend: ["FastAPI", "REST APIs"],
  database: ["SQL", "MySQL"],
  libraries: ["TensorFlow", "Keras", "OpenCV", "Scikit-Learn", "Pandas", "NumPy", "YOLOv5"],
  tools: ["Git", "GitHub", "VS Code", "Raspberry Pi", "Microsoft Office"],
};

const soft = ["Communication", "Teamwork", "Fast Learner", "Flexible and Adaptable"];

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "Returns Malak's technical skills (with proficiency levels) and soft skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text =
      Object.entries(categories)
        .map(([k, v]) => `${k[0].toUpperCase() + k.slice(1)}:\n` + v.map((s) => `- ${s}`).join("\n"))
        .join("\n\n") +
      "\n\nSoft skills:\n" +
      soft.map((s) => `- ${s}`).join("\n");
    return {
      content: [{ type: "text", text }],
      structuredContent: { ...categories, soft },
    };
  },
});