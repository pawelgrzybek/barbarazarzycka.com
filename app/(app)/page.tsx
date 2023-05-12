import { fetchPosts } from "@/sanity/utils";
import Link from "next/link.js";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <main>
      <h1>posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
