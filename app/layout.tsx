import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VGG Deals — Premium Empfehlungen",
  description: "Handverlesene Empfehlungen für Premium-Produkte, Reisen und Lifestyle. Entdecke exklusive Deals und Angebote.",
  keywords: ["affiliate", "deals", "empfehlungen", "premium", "shopping"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
