import { groq } from "next-sanity";
import { Post } from "@/types/project.js";
import client from "./client";

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "date": date,
  content,
}`;

export default async function fetchPost(slug: string): Promise<Post> {
  return client.fetch(query, { slug });
}
