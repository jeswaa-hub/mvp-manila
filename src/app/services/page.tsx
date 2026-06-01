import type { Metadata } from "next";
import ServicesClient from "../components/services-client";

export const metadata: Metadata = {
  title: "Security Services Offered by MVPManila Security Agency",
  description: "Comprehensive security services including protection, security management, electronic surveillance, and risk analysis. Trusted security provider in the Philippines.",
  openGraph: {
    title: "Security Services - MVPManila Security Agency",
    description: "Explore our comprehensive security services: protection, security management, CCTV installation, and risk analysis. Serving clients nationwide since 2013.",
    url: "https://mvpmanila.com/services",
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
    title: "Security Services - MVPManila Security Agency",
    description: "Explore our comprehensive security services: protection, security management, CCTV installation, and risk analysis. Serving clients nationwide since 2013.",
    images: ["https://mvp-manila.vercel.app/images/logo1.jpg"],
  },
};

export default function Services() {
  return <ServicesClient />;
}