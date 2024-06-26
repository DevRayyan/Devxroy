import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DevXRoy | Rayyan's Portfolio",
  description: "Generated by create next app",

};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head><link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css" />
          <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/img/favicon.png" />

        </head>
        <body cz-shortcut-listen="true" className={inter.className}>{children}</body>
      </html>
    </>
  );
}
