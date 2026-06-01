import type { Metadata } from "next";
import HomeClient from "./components/home-client";

export const metadata: Metadata = {
  title: "MVPManila Security Agency - Professional Security Services Philippines",
  description: "Leading security agency in Manila since 2013. Providing reliable security services to businesses, residential areas, and events nationwide. DOLE compliant with 700+ trained personnel.",
  openGraph: {
    title: "MVPManila Security Agency - Professional Security Services",
    description: "Trusted security agency in the Philippines since 2013. Offering comprehensive security solutions for businesses, residential areas, and events.",
    url: "https://mvpmanila.com/",
    siteName: "MVPManila Security Agency Inc.",
    images: [
      {
        url: "https://mvp-manila.vercel.app/images/logo1.jpg",
        width: 1200,
        height: 630,
        alt: "MVPManila Security Agency Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MVPManila Security Agency - Professional Security Services",
    description: "Trusted security agency in the Philippines since 2013. Offering comprehensive security solutions for businesses, residential areas, and events.",
    images: ["https://mvp-manila.vercel.app/images/logo1.jpg"],
  },
};

export default function Home() {
  return <HomeClient />;
}