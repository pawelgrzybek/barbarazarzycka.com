import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

export default defineConfig({
  title: "Barbara Zarzycka",
  projectId: "2am8kkp5",
  dataset: "production",
  plugins: [deskTool()],
  basePath: "/admin",
  apiVersion: "2023-05-06",
  schema: {
    types: schemas,
  },
});
