import { defineTool } from "@lovable.dev/mcp-js";

const categories = {
  programming: ["Python"],
  machineLearning: ["Scikit-learn", "NumPy", "Pandas", "Feature Engineering", "Model Training and Evaluation"],
  deepLearning: ["PyTorch", "TensorFlow", "CNNs"],
  computerVision: ["OpenCV", "YOLO", "Image Processing"],
  nlpAndGenerativeAI: ["NLP", "LLMs", "Prompt Engineering", "RAG", "LangChain", "Hugging Face Transformers"],
  aiAgentsAndBackend: ["AI Agents", "Tool Calling", "Multi-Agent Systems", "FastAPI", "Model Inference", "Model Deployment"],
  tools: ["Git", "GitHub", "Jupyter Notebook"],
};

const soft = ["Communication", "Teamwork", "Fast Learner", "Flexible and Adaptable"];

export default defineTool({
  name: "get_skills",
  title: "Get skills",
  description: "Returns Malak's technical skills and soft skills.",
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
