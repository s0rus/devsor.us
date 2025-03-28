import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Piotr Mól - fullstack developer",
  description: "typescript tourist",
  authors: {
    name: "Piotr sorus Mól",
    url: "https://github.com/s0rus",
  },
  creator: "Piotr sorus Mól",
  keywords: [
    "next.js",
    "typescript",
    "react",
    "tailwindcss",
    "fullstack",
    "developer",
  ],
  openGraph: {
    images: [
      {
        url: "https://devsor.us/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Piotr Mól - fullstack developer",
        type: "image/jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
