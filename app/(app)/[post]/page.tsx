import { client, fetchPost } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
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

const SampleImageComponent = ({ value }: any) => {
  const { width, height } = getImageDimensions(value);

  return (
    <img
      src={urlBuilder(client).image(value).url()}
      alt={value.alt || " "}
      loading="lazy"
      width={width}
      height={height}
    />
  );
};

export default async function PostPage({ params }: Props) {
  const slug = params.post;
  const post = await fetchPost(slug);
  console.log(post);

  return (
    <article className={styles.article}>
      <h1>{post.title}</h1>
      <PortableText
        value={post.content}
        components={{
          // ...
          types: {
            image: SampleImageComponent,
          },
        }}
      />
    </article>
  );
}
