import { createClient } from "next-sanity";

const client = createClient({
  projectId: "2am8kkp5",
  dataset: "production",
  apiVersion: "2023-05-06",
  useCdn: false,
});

export default client;
