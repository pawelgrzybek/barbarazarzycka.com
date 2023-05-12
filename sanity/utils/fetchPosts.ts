import { createClient, groq } from "next-sanity";
import { Post } from "@/types/project.js";

export default async function fetchPosts(): Promise<Post[]> {
  const client = createClient({
    projectId: "2am8kkp5",
    dataset: "production",
    apiVersion: "2023-05-06",
  });

  return client.fetch(groq`*[_type == "post"]{
    _id,
    title,
    "slug": slug.current,
    "date": date,
  }`);
}
