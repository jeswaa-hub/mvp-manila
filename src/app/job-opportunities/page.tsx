import type { Metadata } from "next";
import JobsClient from "../components/jobs-client";

export const metadata: Metadata = {
  title: "Job Opportunities - MVPManila Security Agency",
  description:
    "Review the qualifications, guarding process, and training support for applicants interested in job opportunities at MVPManila Security Agency Inc.",
  openGraph: {
    title: "Job Opportunities - MVPManila Security Agency",
    description:
      "Explore security job opportunities, applicant qualifications, and training support at MVPManila Security Agency Inc.",
    url: "https://mvpmanila.com/job-opportunities",
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
    title: "Job Opportunities - MVPManila Security Agency",
    description:
      "Explore security job opportunities, qualifications, and training support at MVPManila Security Agency Inc.",
    images: ["https://mvpmanila.com/wp-content/uploads/2023/08/MVP-MANILA-LOGO-HORIZPONTAL.png"],
  },
};

export default function JobOpportunitiesPage() {
  return <JobsClient />;
}
