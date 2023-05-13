import { fetchPost } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.css";

type Props = {
  params: {
    post: string;
  };
};

export const metadata = {
  title: "🔥",
  description: "🍝",
};

export default async function PostPage({ params }: Props) {
  const slug = params.post;
  const post = await fetchPost(slug);

  return (
    <article className={styles.article}>
      <h1>{post.title}</h1>
      <PortableText value={post.content} />
    </article>
  );
}
