import "./globals.css";
import { Cairo } from "next/font/google";
import Head from "next/head";

// Configure Cairo font
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Taraqaa",
  description:
    "We are a Qatar-based design agency, transforming websites or software into modern, user-centric platforms that elevate your digital presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <Head>
        <title>Taraqaa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
