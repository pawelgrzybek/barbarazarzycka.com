import { fetchPosts } from "@/sanity/utils";
import Link from "next/link.js";
import styles from "./page.module.css";
import { Header } from "./components";

export default async function Home() {
  const posts = await fetchPosts();

  return (
    <>
      <Header>
        <h1>Latest posts</h1>
      </Header>

      <ul className={styles.list}>
        {posts.map((post) => (
          <li className={styles.item} key={post._id}>
            <p className={styles.meta}>
              Published:{" "}
              <time dateTime={post.date.toString()}>
                {post.date.toString().replaceAll("-", ".")}
              </time>
              , Categories:{" "}
              {post.categories.map(({ name, slug }, index) => [
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
            <Link href={post.slug} className={styles.postLink}>
              <h2 className={styles.postTitle}>{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
