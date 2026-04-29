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
    "aeaea technologies",
    "aeaeagrandline",
    "aeaea Grandline",
    "engineering college",
    "college recommendation",
    "edtech",
    "AEAEA's Grandline",
    "career guidance",
    "college counseling",
    "best engineering colleges in Hyderabad",
    "EAMCET college selection",
    "engineering college placements",
    "college counseling India",
    "JNTUH colleges ranking",
    "AP/TS engineering admissions 2026",
  ],
  metadataBase: new URL("https://grandline.aeaeatech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AEAEA's Grandline — Find Your Perfect Engineering College",
    description: "Get personalized college recommendations, real placement insights, and expert guidance to choose the right engineering college.",
    url: "https://grandline.aeaeatech.com/",
    siteName: "AEAEA's Grandline",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "AEAEA's Grandline Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AEAEA's Grandline — Find Your Perfect Engineering College",
    description: "Get personalized college recommendations, real placement insights, and expert guidance to choose the right engineering college.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
    apple: "/icon.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://grandline.aeaeatech.com/#website",
        url: "https://grandline.aeaeatech.com/",
        name: "AEAEA's Grandline",
        description: "Find your perfect engineering college with personalized recommendations.",
        publisher: {
          "@id": "https://grandline.aeaeatech.com/#organization",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://grandline.aeaeatech.com/#organization",
        name: "AEAEA Technologies",
        url: "https://grandline.aeaeatech.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://grandline.aeaeatech.com/logo.png",
        },
        sameAs: [
          "https://www.youtube.com/@aeaeatech",
          "https://www.linkedin.com/company/aeaea-technologies-pvt-ltd/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-9440472314",
          contactType: "customer support",
          email: "grandline@aeaeatech.com",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
