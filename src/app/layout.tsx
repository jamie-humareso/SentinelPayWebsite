import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

export const metadata: Metadata = {
  title: "Sentinel Pay Analytics - Expert-Guided Pay Equity Platform",
  description: "Sentinel combines a powerful, defensible analytics platform with on-demand access to our team of pay equity experts. Get the clarity of a world-class tool and the confidence of a trusted human advisor.",
  keywords: ["pay equity", "analytics", "hr compliance", "data science", "expert consulting"],
  authors: [{ name: "Sentinel Pay Analytics" }],
  creator: "Sentinel Pay Analytics",
  publisher: "Sentinel Pay Analytics",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sentinel-pay-analytics.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sentinel Pay Analytics - Expert-Guided Pay Equity Platform",
    description: "Sentinel combines a powerful, defensible analytics platform with on-demand access to our team of pay equity experts.",
    url: "https://sentinel-pay-analytics.com",
    siteName: "Sentinel Pay Analytics",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sentinel Pay Analytics - Expert-Guided Pay Equity Platform",
    description: "Sentinel combines a powerful, defensible analytics platform with on-demand access to our team of pay equity experts.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
