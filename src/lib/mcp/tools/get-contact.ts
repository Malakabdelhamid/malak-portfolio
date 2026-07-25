import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  email: "malakabdelhamid6@gmail.com",
  linkedin: "https://www.linkedin.com/in/malakabdelhamid1/",
  github: "https://github.com/Malakabdelhamid",
  portfolio: "https://malak-portfolio-five.vercel.app/",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns Malak's public contact details: email, LinkedIn, and GitHub.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Email: ${contact.email}\nLinkedIn: ${contact.linkedin}\nGitHub: ${contact.github}\nPortfolio: ${contact.portfolio}`,
      },
    ],
    structuredContent: contact,
  }),
});