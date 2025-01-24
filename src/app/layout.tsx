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
  title: "FirstDrip Adventures - Explore East Africa's Hidden Gems",
  description:
    "FirstDrip Adventures offers expertly curated safari tours, custom travel packages, and unforgettable experiences in East Africa. Plan your journey today.",
  keywords: [
    "safari",
    "East Africa",
    "travel",
    "adventures",
    "wildlife",
    "Kenya",
    "custom trips",
    "FirstDrip Adventures",
    "safari packages",
    "coastal destinations",
  ],
  authors: [{ name: "FirstDrip Adventures Team", url: "https://firstdripadventures.vercel.app" }],
  creator: "FirstDrip Adventures",
  publisher: "FirstDrip Adventures",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "FirstDrip Adventures - Explore East Africa's Hidden Gems",
    description:
      "Discover the best of East Africa with FirstDrip Adventures. Experience the magic of safaris, pristine beaches, and unforgettable wildlife encounters.",
    url: "https://firstdripadventures.vercel.app",
    siteName: "FirstDrip Adventures",
    images: [
      {
        url: "https://firstdripadventures.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FirstDrip Adventures - Explore East Africa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FirstDrip Adventures - Explore East Africa's Hidden Gems",
    description:
      "Discover the best of East Africa with FirstDrip Adventures. Experience the magic of safaris, pristine beaches, and unforgettable wildlife encounters.",
    images: ["https://firstdripadventures.vercel.app/og-image.jpg"],
    site: "@firstdripadventures",
  },
  icons: {
    icon: "/firstdrip-favicons/favicon.ico",
    apple: "/firstdrip-favicons/apple-touch-icon.png",
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
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
