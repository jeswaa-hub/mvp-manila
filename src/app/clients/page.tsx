import type { Metadata } from "next";
import ClientsClient from "../components/clients-client";

export const metadata: Metadata = {
  title: "Our Clients - MVPManila Security Agency",
  description: "List of current and ongoing clients and partners of MVPManila Security Agency Inc. Trusted by corporate, commercial, and educational institutions nationwide.",
  openGraph: {
    title: "Our Clients - MVPManila Security Agency",
    description: "Trusted by leading corporations, educational institutions, and organizations for professional security services.",
    url: "https://mvp-manila.vercel.app/clients",
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
    title: "Our Clients - MVPManila Security Agency",
    description: "Trusted by leading corporations, educational institutions, and organizations for professional security services.",
    images: ["https://mvp-manila.vercel.app/images/logo1.jpg"],
  },
};

export default function ClientsPage() {
  return <ClientsClient />;
}
