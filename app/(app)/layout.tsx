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
        {children}
      </body>
    </html>
  );
}
