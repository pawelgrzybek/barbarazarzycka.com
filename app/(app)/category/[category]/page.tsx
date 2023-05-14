import styles from "./page.module.css";
import { Header, Posts } from "../../components";
import { fetchCategory, fetchPostsInCategory } from "@/sanity/utils/";

interface PostPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  const { name } = await fetchCategory(params.category);

  return {
    title: `${name} | ${process.env.title}`,
    description: `${process.env.description}`,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const [{ name }, posts] = await Promise.all([
    await fetchCategory(params.category),
    await fetchPostsInCategory(params.category),
  ]);

  return (
    <article className={styles.article}>
      <Header>
        <h1>Posts in the category: {name}</h1>
      </Header>
      <Posts posts={posts} />
    </article>
  );
}
