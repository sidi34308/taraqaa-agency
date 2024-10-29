import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

// Configure Inter font
const inter = Inter({
  subsets: ["latin"],
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
