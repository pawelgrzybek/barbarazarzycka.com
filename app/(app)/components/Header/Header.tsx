import { ReactNode } from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => (
  <header className={styles.header}>{children}</header>
);

export default Header;
