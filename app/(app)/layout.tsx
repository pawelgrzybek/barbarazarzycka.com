import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import {
  AiTwotoneMail,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.title,
  description: process.env.description,
  generator: "Next.js",
  authors: [{ name: "Paweł Grzybek", url: "https://pawelgrzybek.com" }],
  metadataBase: new URL("https://barbarazarzycka.com"),
  openGraph: {
    title: process.env.title,
    description: process.env.description,
    images: "/og.jpg",
  },
  alternates: {
    types: {
      "application/rss+xml": [{ url: "rss.xml", title: "barbarazarzycka.com" }],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper wrapper--wide">
          <header className="header">
            <Link href="/" className="logo">
              <Image
                className="logo__image"
                src="/logo.jpg"
                alt="Barbara Zarzycka"
                width={200}
                height={200}
              />
              <div className="logo__text">
                <div className="logo__title">{process.env.title}</div>
                <div className="logo__tagline">{process.env.description}</div>
              </div>
            </Link>

            <ul className="header__list">
              <li className="header__item">
                <a
                  href="mailto:zarzabarbara@gmail.com"
                  className="header__link"
                >
                  <AiTwotoneMail className="header__icon" />
                </a>
              </li>
              <li className="header__item">
                <a
                  href="https://www.linkedin.com/in/zarzabarbara/"
                  className="header__link"
                >
                  <AiFillLinkedin className="header__icon" />
                </a>
              </li>
              <li className="header__item">
                <a
                  href="https://www.instagram.com/basiaabarbs/"
                  className="header__link"
                >
                  <AiFillInstagram className="header__icon" />
                </a>
              </li>
              <li className="header__item">
                <a
                  href="https://www.facebook.com/zarzabarbara/"
                  className="header__link"
                >
                  <AiFillFacebook className="header__icon" />
                </a>
              </li>
              <li className="header__item">
                <a
                  href="https://twitter.com/barbs_zarzycka"
                  className="header__link"
                >
                  <AiFillTwitterSquare className="header__icon" />
                </a>
              </li>
            </ul>
          </header>
        </div>
        <div className="wrapper">
          <main>{children}</main>
          <footer className="footer">
            © 2023 Copyright Barbara Zarzycka. All rights reserved.
            <br />
            <br />
            This site is built by{" "}
            <a href="https://pawelgrzybek.com">Paweł Grzybek</a> using{" "}
            <a href="https://nextjs.org">Next.js</a>,{" "}
            <a href="http://sanity.io">Sanity</a> and it is hosted on{" "}
            <a href="https://vercel.com">Vercel</a>. The source code is hosted
            on{" "}
            <a href="https://github.com/pawelgrzybek/barbarazarzycka.com">
              GitHub
            </a>
            .
          </footer>
        </div>
      </body>
    </html>
  );
}
