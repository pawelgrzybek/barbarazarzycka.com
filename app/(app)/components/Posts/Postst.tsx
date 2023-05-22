import Link from "next/link.js";
import styles from "./Posts.module.css";
import { Post } from "@/types/Post.js";

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => (
  <ul className={styles.list}>
    {posts.map((post) => (
      <li className={styles.item} key={post._id}>
        <Link href={post.slug} className={styles.postLink}>
          <h2 className={styles.postTitle}>{post.title}</h2>
        </Link>
        <p>{post.description}</p>
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
      </li>
    ))}
  </ul>
);

export default Posts;
