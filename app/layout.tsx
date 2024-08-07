import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#0f172a",
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Benedict Umeozor",
  description: `I'm a frontend developer passionate about crafting immersive interactive experiences with modern web technologies.`,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Benedict Umeozor - Frontend Developer",
    siteName: "Benedict Umeozor",
    url: "https://benedictumeozor.vercel.app/",
    description: `I'm a frontend developer passionate about crafting immersive interactive experiences with modern web technologies.`,
    locale: "en-US",
    type: "website",
    countryName: "Nigeria",
    emails: "benedictumeozor@gmail.com",
    phoneNumbers: "+2348108218964",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Benedict Umeozor - Frontend Developer",
  },
  alternates: {
    canonical: "https://benedictumeozor.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-normal`}>{children}</body>
    </html>
  );
}
