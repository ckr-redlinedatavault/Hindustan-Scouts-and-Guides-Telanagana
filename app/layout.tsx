import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hindustan Scouts and Guides Association | HSGA Telangana",
  description: "Official portal for the Hindustan Scouts and Guides Association (HSGA) Telangana State Government Project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <TopBanner />
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <BottomBanner />
      </body>
    </html>
  );
}
