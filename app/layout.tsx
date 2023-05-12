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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
