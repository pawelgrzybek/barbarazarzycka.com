import { groq } from "next-sanity";
import { Category } from "@/types/Category.js";
import client from "./client";

const query = groq`*[_type == "category" && slug.current == $slug][0] {
  category, description, _id
}`;

export default async function fetchCategory(slug: string): Promise<Category> {
  return client.fetch(query, { slug });
}
