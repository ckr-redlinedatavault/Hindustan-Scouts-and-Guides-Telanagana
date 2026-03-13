import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import ScrollingTicker from "@/components/ScrollingTicker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomBanner from "@/components/BottomBanner";
import CookieConsent from "@/components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hindustan Scouts and Guides Association | HSGA Telangana",
    template: "%s | HSGA Telangana"
  },
  description: "Official portal for the Hindustan Scouts and Guides Association (HSGA) Telangana State Headquarters. Recognized by the Ministry of Youth Affairs & Sports, Govt. of India.",
  keywords: ["Scouting", "HSGA Telangana", "Hindustan Scouts", "Youth Development", "Telangana Scouting", "WFIS", "Leadership Training"],
  authors: [{ name: "HSGA Telangana" }],
  creator: "HSGA Telangana",
  publisher: "HSGA Telangana",
  metadataBase: new URL('https://hsgatelangana.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Hindustan Scouts and Guides Association | HSGA Telangana",
    description: "Official portal for the Hindustan Scouts and Guides Association (HSGA) Telangana State Headquarters. Recognized by the Ministry of Youth Affairs & Sports, Govt. of India.",
    url: 'https://hsgatelangana.com',
    siteName: 'HSGA Telangana',
    images: [
      {
        url: '/icon.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Hindustan Scouts and Guides Association | HSGA Telangana",
    description: "Official portal for the Hindustan Scouts and Guides Association (HSGA) Telangana State Headquarters.",
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ScrollingTicker />
        <TopBanner />
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <BottomBanner />
        <CookieConsent />
      </body>
    </html>
  );
}
