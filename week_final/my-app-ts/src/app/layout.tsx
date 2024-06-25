/**
 * @author CHANG, HUNG-YING <horningch@gmail.com>
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import "@styles/globals.css";
import "@styles/font.css";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "雲林好好玩",
  description: "臺灣雲林縣各地景點介紹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Flowbite>
        <body className={`${inter.className} font-['jf-openhuninn-2.0']`}>{children}</body>
      </Flowbite>
    </html>
  );
}
