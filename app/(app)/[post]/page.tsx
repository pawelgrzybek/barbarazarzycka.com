import { fetchPost } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.css";
import {
  PortableTextComponentImage,
  PortableTextComponentYouTube,
} from "../components";

type Props = {
  params: {
    post: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { title, description } = await fetchPost(params.post);

  return {
    title: `${title} | ${process.env.title}`,
    description,
  };
}

export default async function PostPage({ params }: Props) {
  const { title, content } = await fetchPost(params.post);

  return (
    <article className={styles.article}>
      <h1>{title}</h1>
      <PortableText
        value={content}
        components={{
          types: {
            image: PortableTextComponentImage,
            youtube: PortableTextComponentYouTube,
          },
        }}
      />
    </article>
  );
}
