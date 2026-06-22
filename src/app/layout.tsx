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
  title: "Akshay Pillalamarri — AI Engineer",
  description:
    "AI Engineer specializing in LangGraph & LangChain certified agentic systems, full-stack Python, and test automation. Building production AI applications that ship.",
  openGraph: {
    title: "Akshay Pillalamarri — AI Engineer",
    description:
      "LangGraph & LangChain certified. Building production agentic AI systems, RAG pipelines, and automated test frameworks.",
    url: "https://akshaypillalamarri.github.io",
    siteName: "Akshay Pillalamarri",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
