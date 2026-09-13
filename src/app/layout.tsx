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
  title: "Lumen — Automatisiere deinen Workflow",
  description:
    "Lumen hilft Teams schneller zu arbeiten mit KI-Automatisierung, Echtzeit-Insights und einem Workflow-Builder, der einfach funktioniert.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05050a] text-[#f5f5f7] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
