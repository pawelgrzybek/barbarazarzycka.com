import { fetchPosts } from "@/sanity/utils";

export default async function Home() {
  const posts = await fetchPosts();
  console.log(posts);

  return (
    <main>
      <h1>posts</h1>
      {posts.map((post) => (
        <article key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.slug}</p>
          <p>{post.date.toString()}</p>
        </article>
      ))}
    </main>
  );
}
