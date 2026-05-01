import type { Metadata } from "next";
import AboutClient from "../components/about-client";

export const metadata: Metadata = {
  title: "About MVP Manila Security Agency - Our Story & Values",
  description: "Learn about MVP Manila Security Agency Inc., our mission, vision, core values, and 12+ years of experience providing professional security services in the Philippines.",
  openGraph: {
    title: "About MVP Manila Security Agency",
    description: "Discover our story, mission, vision, and values. Learn why we're a trusted security agency in the Philippines since 2013.",
    url: "https://mvpmanila.com/about-us",
    siteName: "MVP Manila Security Agency Inc.",
    images: [
      {
        url: "https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png",
        width: 1200,
        height: 630,
        alt: "MVP Manila Security Agency Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About MVP Manila Security Agency",
    description: "Discover our story, mission, vision, and values. Learn why we're a trusted security agency in the Philippines since 2013.",
    images: ["https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png"],
  },
};

export default function AboutUs() {
  return <AboutClient />;
}