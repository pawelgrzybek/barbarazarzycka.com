import { createClient, groq } from "next-sanity";
import { Post } from "@/types/project.js";

export default async function fetchPost(slug: string): Promise<Post> {
  const client = createClient({
    projectId: "2am8kkp5",
    dataset: "production",
    apiVersion: "2023-05-06",
    useCdn: false,
  });

  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    "date": date,
    content,
  }`,
    { slug }
  );
}
