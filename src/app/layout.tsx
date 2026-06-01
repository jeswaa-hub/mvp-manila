import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import JSONLD from "./components/json-ld";
import DevToolsBlocker from "./components/devtools-blocker";

const montserrat = Montserrat({
  variable: "--next-font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--next-font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

// Base metadata - will be overridden by page-specific metadata
export const metadata: Metadata = {
  icons: {
    icon: "/images/logo1.jpg",
    shortcut: "/images/logo1.jpg",
    apple: "/images/logo1.jpg",
  },
  title: {
    template: "%s | MVPManila Security Agency Inc.",
    default: "MVPManila Security Agency Inc.",
  },
  description: "Securing people, facilities, and assets with reliability, integrity, and service excellence.",
  // Open Graph / Facebook
  openGraph: {
    title: "MVPManila Security Agency Inc.",
    description: "Professional security services provider in the Philippines since 2013",
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
  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "MVPManila Security Agency Inc.",
    description: "Professional security services provider in the Philippines since 2013",
    images: ["https://mvp-manila.vercel.app/images/logo1.jpg"],
  },
  // Additional metadata
  authors: [{ name: "MVPManila Security Agency Inc." }],
  creator: "MVPManila Security Agency Inc.",
  publisher: "MVPManila Security Agency Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    languages: {
      "en-PH": "https://mvp-manila.vercel.app/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-roboto bg-slate">
        <JSONLD />
        <DevToolsBlocker />
        {children}
      </body>
    </html>
  );
}
