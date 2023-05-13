import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  date: Date;
  description: string;
  categories: { name: string; slug: string }[];
  content: PortableTextBlock[];
};
