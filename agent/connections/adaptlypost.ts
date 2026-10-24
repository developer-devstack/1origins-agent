import { connect } from "@vercel/connect/eve";
import { defineMcpClientConnection } from "eve/connections";

export default defineMcpClientConnection({
  url: "https://mcp.adaptlypost.com/mcp",
  description: "Schedule and publish social media posts and read post analytics.",
  auth: connect("mcp.adaptlypost.com/" + process.env.VERCEL_PROJECT_ID),
});
