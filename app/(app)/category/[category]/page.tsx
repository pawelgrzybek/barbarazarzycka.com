import styles from "./page.module.css";
import { Header } from "../../components";
import { fetchCategory } from "@/sanity/utils/";

type Props = {
  params: {
    category: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { category, description } = await fetchCategory(params.category);

  return {
    title: `${category} | ${process.env.title}`,
    description,
  };
}

export default async function PostPage({ params }: Props) {
  const { category, description, _id } = await fetchCategory(params.category);
  console.log({ _id });
  return (
    <article className={styles.article}>
      <Header>
        <h1>Posts in the category: {category}</h1>
        <p className={styles.categoryDescription}>{description}</p>
      </Header>
      <p>This feature is coming 👋</p>
    </article>
  );
}
