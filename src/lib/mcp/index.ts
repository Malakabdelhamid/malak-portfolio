import { defineMcp } from "@lovable.dev/mcp-js";
import getAboutTool from "./tools/get-about";
import getSkillsTool from "./tools/get-skills";
import getProjectsTool from "./tools/get-projects";
import getContactTool from "./tools/get-contact";

export default defineMcp({
  name: "malak-portfolio-mcp",
  title: "Malak Mohamed — Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Public tools that expose Malak Mohamed's portfolio: bio, skills, projects, and contact info. All tools are read-only and require no authentication.",
  tools: [getAboutTool, getSkillsTool, getProjectsTool, getContactTool],
});