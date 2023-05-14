import { fetchPosts } from "@/sanity/utils";
import { Header, Posts } from "./components";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <Header>
        <h1>Latest posts</h1>
      </Header>
      <Posts posts={posts} />
    </>
  );
}
