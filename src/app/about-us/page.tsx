import type { Metadata } from "next";
import AboutClient from "../components/about-client";

export const metadata: Metadata = {
  title: "About MVPManila Security Agency - Our Story & Values",
  description: "Learn about MVPManila Security Agency Inc., our mission, vision, core values, and 12+ years of experience providing professional security services in the Philippines.",
  openGraph: {
    title: "About MVPManila Security Agency",
    description: "Discover our story, mission, vision, and values. Learn why we're a trusted security agency in the Philippines since 2013.",
    url: "https://mvpmanila.com/about-us",
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
    title: "About MVPManila Security Agency",
    description: "Discover our story, mission, vision, and values. Learn why we're a trusted security agency in the Philippines since 2013.",
    images: ["https://mvp-manila.vercel.app/images/logo1.jpg"],
  },
};

export default function AboutUs() {
  return <AboutClient />;
}