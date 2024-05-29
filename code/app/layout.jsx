
import "./globals.css";
import { IBM_Plex_Sans_Arabic } from '@next/font/google'
import Head from "next/head";




const iBM_Plex_Sans_Arabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['100', '200', '300', '400', '500', '600', '700']
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>

        <title>taraqaa</title>
        <meta name="description" content="taraqaa" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={iBM_Plex_Sans_Arabic.className}>{children}</body>
    </html>
  );
}
