import { defineTool } from "@lovable.dev/mcp-js";

const about = `Malak Mohamed — AI student and ML developer.

Passionate about end-to-end workflows: data preparation, exploratory data analysis, baseline modeling, and thorough evaluation. Currently part of the DEPI national ML internship with comprehensive training in machine learning, deep learning fundamentals, and modern AI techniques.

Core skills: Python, data cleaning, exploratory data analysis, and building scikit-learn pipelines.

Professional approach: clear and honest communication, conservative timelines, well-documented tidy notebooks, and open to feedback for continuous improvement.`;

export default defineTool({
  name: "get_about",
  title: "Get about / bio",
  description: "Returns a short biography and professional summary for Malak Mohamed.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({ content: [{ type: "text", text: about }] }),
});