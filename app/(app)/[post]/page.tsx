import { fetchPost } from "@/sanity/utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    post: string;
  };
};

export default async function PostPage({ params }: Props) {
  const slug = params.post;
  const post = await fetchPost(slug);

  return (
    <article>
      <h1>{post.title}</h1>
      <PortableText value={post.content} />
    </article>
  );
}
