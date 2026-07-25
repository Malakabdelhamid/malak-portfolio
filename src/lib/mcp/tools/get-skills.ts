import { defineTool } from "@lovable.dev/mcp-js";

const technical = [
  { name: "Python", level: 90 },
  { name: "Data Preparation & EDA", level: 88 },
  { name: "Machine Learning", level: 85 },
  { name: "Pandas", level: 85 },
  { name: "Scikit-learn", level: 75 },
  { name: "NumPy", level: 85 },
  { name: "Deep Learning", level: 60 },
  { name: "Computer Vision", level: 50 },
];

const soft = [
  "Communication",
  "Teamwork",
  "Fast Learner",
  "Leadership",
  "Flexible and adaptable",
];

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "Returns Malak's technical skills (with proficiency levels) and soft skills.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text =
      "Technical skills:\n" +
      technical.map((s) => `- ${s.name} (${s.level}%)`).join("\n") +
      "\n\nSoft skills:\n" +
      soft.map((s) => `- ${s}`).join("\n");
    return {
      content: [{ type: "text", text }],
      structuredContent: { technical, soft },
    };
  },
});