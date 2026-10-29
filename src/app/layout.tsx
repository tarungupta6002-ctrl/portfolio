import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/sections/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-calistoga",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tarungupta.me"),
  title: "Tarun Gupta | Full Stack Developer",
  description: "Tarun Gupta's portfolio — Full Stack Developer building robust web and real-time communication platforms.",
  openGraph: {
    title: "Tarun Gupta | Full Stack Developer",
    description: "Tarun Gupta's portfolio — Full Stack Developer building robust web and real-time communication platforms.",
    url: "https://www.tarungupta.me",
    siteName: "Tarun Gupta Portfolio",
    locale: "en_US",
    type: "website",
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
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
