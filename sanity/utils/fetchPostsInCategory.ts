import { groq } from "next-sanity";
import { Post } from "@/types/Post.js";
import client from "./client";

const query = groq`*[_type=="post" && references(*[_type=="category" && slug.current == $slug]._id)] | order(date desc) {
  _id,
  title,
  "slug": slug.current,
  "date": date,
  description,
  "categories": categories[]->{name, "slug": slug.current}
}`;

export default async function fetchPostsInCategory(
  slug: string
): Promise<Post[]> {
  return client.fetch(query, { slug });
}
