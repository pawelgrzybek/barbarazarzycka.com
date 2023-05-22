import fs from "fs";
import { fetchPosts } from "@/sanity/utils";
import RSS from "rss";
import { Header, Posts } from "./components";

export default async function Home() {
  const posts = await fetchPosts();
  const feed = new RSS({
    title: "RSS Feed",
    description: process.env.description,
    site_url: "https://barbarazarzycka.com",
    feed_url: `https://barbarazarzycka.com/rss.xml`,
    image_url: `https://barbarazarzycka.com/logo.jpg`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}`,
  });

  posts.map((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://barbarazarzycka.com/${post.slug}`,
      date: post.date,
    });
  });

  fs.writeFileSync("./public/rss.xml", feed.xml({ indent: true }));

  return (
    <>
      <Header>
        <h1>Most recent posts</h1>
      </Header>
      <Posts posts={posts} />
    </>
  );
}
