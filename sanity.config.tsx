import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

export default defineConfig({
  title: "Barbara Zarzycka",
  projectId: "2am8kkp5",
  dataset: "production",
  apiVersion: "2023-05-06",
  plugins: [deskTool(), visionTool()],
  tools: (prev, { currentUser }) => {
    // display visionTool only for admins
    const isAdmin = currentUser?.roles.some(
      (role) => role.name === "administrator"
    );
    return isAdmin ? prev : prev.filter((tool) => tool.name !== "vision");
  },
  basePath: "/admin",
  schema: {
    types: schemas,
  },
});
