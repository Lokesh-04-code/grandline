import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AEAEA Technologies - Coming Soon",
  description: "We are building next-generation intelligent solutions for the future. Something extraordinary is launching soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
