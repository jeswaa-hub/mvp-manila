import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--next-font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--next-font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo2.jpg",
    shortcut: "/images/logo2.jpg",
    apple: "/images/logo2.jpg",
  },
  title: {
    template: "%s | MVPManila Manpower Services",
    default: "MVPManila Manpower Services",
  },
  description: "Professional manpower outsourcing and staffing solutions in the Philippines.",
  openGraph: {
    title: "MVPManila Manpower Services",
    description: "Professional manpower outsourcing and staffing solutions in the Philippines.",
    url: "https://mvpmanila.com/manpower",
    siteName: "MVPManila Manpower Services",
    images: [
      {
        url: "https://mvp-manila.vercel.app/images/logo2.jpg",
        width: 1200,
        height: 630,
        alt: "MVPManila Manpower Services Logo",
      },
    ],
    locale: "en_PH",
    type: "website",
  },
};

export default function ManpowerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
