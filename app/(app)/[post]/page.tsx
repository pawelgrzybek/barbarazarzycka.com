import Link from "next/link.js";
import { fetchPost } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import styles from "./page.module.css";
import {
  PortableTextComponentImage,
  PortableTextComponentYouTube,
  Header,
} from "../components";

type Props = {
  params: {
    post: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { title, description } = await fetchPost(params.post);
  const post = await fetchPost(params.post);

  console.log({ post });

  return {
    title: `${title} | ${process.env.title}`,
    description,
    openGraph: {
      title: `${title} | ${process.env.title}`,
      description,
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { title, content, date, categories } = await fetchPost(params.post);

  return (
    <article className={styles.article}>
      <Header>
        <p className={styles.meta}>
          Published:{" "}
          <time dateTime={date.toString()}>
            {date.toString().replaceAll("-", ".")}
          </time>
          , Categories:{" "}
          {categories.map(({ name, slug }, index) => [
            index > 0 && ", ",
            <Link
              key={slug}
              href={`/category/${slug}`}
              className={styles.metaLink}
            >
              {name}
            </Link>,
          ])}
        </p>
        <h1>{title}</h1>
      </Header>
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
