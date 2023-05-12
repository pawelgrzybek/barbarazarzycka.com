import { PortableTextBlock } from "sanity";

export type Post = {
  _id: string;
  title: string;
  slug: string;
  date: Date;
  content: PortableTextBlock[];
};
