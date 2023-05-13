import { fetchPosts } from "@/sanity/utils";
import Link from "next/link.js";
import styles from "./page.module.css";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <h1 className={styles.title}>Latest posts</h1>
      <ul className={styles.list}>
        {posts.map((post) => (
          <li className={styles.item} key={post._id}>
            <Link href={post.slug}>
              <h2>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
