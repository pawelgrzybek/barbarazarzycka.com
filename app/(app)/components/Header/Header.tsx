import { ReactNode } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Title = ({ children }: HeaderProps) => (
  <header className={styles.header}>{children}</header>
);

export default Title;
