import { defineTool } from "@lovable.dev/mcp-js";

const contact = {
  email: "malakabdelhamid6@gmail.com",
  linkedin: "https://linkedin.com/in/malakabdelhamid1/",
  github: "https://github.com/Malakabdelhamid",
  cv: "/Resume_Malak_Mohamed.pdf",
};

export default defineTool({
  name: "get_contact",
  title: "Get contact info",
  description: "Returns Malak's public contact details: email, LinkedIn, GitHub, and CV.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Email: ${contact.email}\nLinkedIn: ${contact.linkedin}\nGitHub: ${contact.github}\nCV: ${contact.cv}`,
      },
    ],
    structuredContent: contact,
  }),
});