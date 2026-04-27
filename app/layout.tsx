import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AEAEA's Grandline — Find Your Perfect Engineering College",
  description:
    "Get personalized college recommendations, real placement insights, and expert guidance to choose the right engineering college. Available in Telugu, Hindi, English & more.",
  keywords: [
    "engineering college",
    "college recommendation",
    "edtech",
    "AEAEA's Grandline",
    "career guidance",
    "college counseling",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
