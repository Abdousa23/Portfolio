import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Preahvihear } from "next/font/google";
const inter = Preahvihear({
  weight: '400',
  style: "normal",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My personnal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
