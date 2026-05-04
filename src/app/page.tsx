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
        url: "https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png",
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
    images: ["https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}