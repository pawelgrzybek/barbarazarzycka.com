import Link from "next/link.js";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Barbara Zarzycka - Marketing Executive Account Developer at the Institute of Physics Publishing",
  description:
    "Marketing Executive Account Developer at the Institute of Physics Publishing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          <Link href="/" className="logo">
            Barbara Zarzycka
          </Link>
          <p className="tagline">
            Marketing Executive Account Developer at the Institute of Physics
            Publishing
          </p>
        </header>
        <main>{children}</main>
        <footer className="footer">
          © 2023 Copyright Pawel Grzybek. All rights reserved.
          <br />
          This site is built by{" "}
          <a href="https://pawelgrzybek.com">Paweł Grzybek</a> using{" "}
          <a href="https://nextjs.org">Next.js</a>,{" "}
          <a href="http://sanity.io">Sanity</a> and it is hosted on{" "}
          <a href="https://vercel.com">Vercel</a>.
        </footer>
      </body>
    </html>
  );
}
