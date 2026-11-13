import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "FatherShops",
  description: "Browse categories and products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Link href="/" className="logo">
            FatherShops
          </Link>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}