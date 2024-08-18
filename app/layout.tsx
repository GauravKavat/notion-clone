import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "An app inspired by notion",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon_dark.png",
        href: "/favicon_dark.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon_light.png",
        href: "/favicon_light.png",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
