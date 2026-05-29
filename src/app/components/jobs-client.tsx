"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const qualifications = [
  "Filipino citizen",
  "Holder of a valid and authentic License to Exercise Security Profession (LESP) card cleared and validated by PNP-SOSIA",
  "At least 21 to 45 years old for security personnel, applicants aged 46 and above may still be considered based on skills, experience, and health status",
  "No physical deformities and no mental disorder",
  "At least a minimum of High School graduate, with College Level and Graduate applicants preferred for officer roles",
  "At least 5'2\" in height for female applicants and 5'6\" for male applicants, unless there is a client reference",
  "Holder of related security and safety training certificates, preferred",
  "With complete training documents from a PNP-SOSIA accredited security training center",
  "With complete national clearances and certifications such as Police Clearance and NBI clearance",
  "With SSS, PHIC, PAG-IBIG membership, and Tax Identification Number (TIN)",
  "Diploma and Transcript of Records (TOR)",
];

const guardingProcesses = [
  "Briefing and orientation of personnel a week before actual deployment.",
  "Deploy day-off reliever for every week cycle.",
  "Initiate preparatory posting, or shadow guarding, two days prior to deployment.",
  "Reliever briefing and orientation prior to deployment.",
  "Review standard patrolling and screening before deployment.",
  "Fifteen-day change shifting cycle as the standard setup.",
  "Emergency reliever deployment within a minimum of six hours from point of call.",
  "Performance evaluation by operations on a semi-annual to annual basis.",
  "Security inspection and updates at least twice a week.",
  "Incident reporting to agency and client within 24 hours or less.",
  "Operational emergency response within four to six hours from point of call.",
];

const trainingHighlights = [
  {
    title: "In-house Security Training",
    description:
      "MVPMSAI conducts in-house training, seminars, forums, and workshops for different threat scenarios and site-specific security requirements.",
    icon: GraduationCap,
  },
  {
    title: "Emergency Preparedness Support",
    description:
      "The agency also conducts emergency preparedness and response seminars for both agency personnel and client employees at no additional cost.",
    icon: ShieldCheck,
  },
  {
    title: "On-site Client Modules",
    description:
      "Training modules are customized per client request and are often delivered on-site to include frontliners and employees for free.",
    icon: ClipboardCheck,
  },
];

const quickFacts = [
  "Valid LESP and PNP-SOSIA validation required",
  "Complete clearances and government IDs expected",
  "Structured deployment, briefing, and reliever process",
  "Regular workshops on safety, awareness, and service excellence",
];

const SectionHeading = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) => (
  <motion.div variants={fadeInUp} className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-4 font-montserrat text-sm font-semibold uppercase tracking-[0.22em] text-gold">
      {eyebrow}
    </p>
    <h2 className="font-montserrat text-3xl font-bold tracking-tight text-navy md:text-4xl">
      {title}
    </h2>
    {description ? (
      <p className="mx-auto mt-5 max-w-2xl font-roboto text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    ) : null}
  </motion.div>
);

export default function JobsClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="grow pt-20">
        <section
          className="relative flex min-h-[72vh] items-center overflow-hidden bg-navy"
          aria-label="Job opportunities at MVPManila Security Agency"
        >
          <motion.div
            className="absolute inset-0 z-0 h-[115%] w-full"
            style={{ y: scrollY * 0.22 }}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop"
              alt="MVPManila security personnel on duty in a corporate setting"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={92}
            />
          </motion.div>
          <div className="absolute inset-0 z-10 bg-navy/75" aria-hidden="true" />
          <div
            className="absolute inset-0 z-10 bg-linear-to-b from-[#07172d]/55 via-[#07172d]/45 to-[#07172d]/88"
            aria-hidden="true"
          />

          <div className="relative z-20 mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.75fr)] lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.p
                variants={fadeInUp}
                className="mb-5 font-montserrat text-sm font-semibold uppercase tracking-[0.26em] text-gold"
              >
                Career Openings
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="max-w-4xl text-balance font-montserrat text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
              >
                Join a security team built on discipline, readiness, and service excellence.
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 max-w-2xl font-roboto text-base leading-7 text-slate-200 sm:text-lg"
              >
                Explore job opportunities with MVPManila Security Agency Inc. Review the
                required qualifications, understand our deployment standards, and see how
                our in-house training supports every security professional we deploy.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
              </motion.div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="self-end rounded-2xl border border-white/12 bg-white/8 p-6 backdrop-blur-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/18 text-gold">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                    Applicant Notes
                  </p>
                  <p className="font-roboto text-sm text-slate-300">
                    Quick screening essentials
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact} className="flex items-start gap-3">
                    <BadgeCheck size={18} className="mt-0.5 shrink-0 text-gold" />
                    <p className="font-roboto text-sm leading-6 text-slate-100">{fact}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </section>

        <section id="qualifications" className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <SectionHeading
                eyebrow="Hiring Standards"
                title="Qualifications and selection process for security personnel"
                description="Applicants are screened against operational readiness, document completeness, and deployment suitability to ensure every assignment starts with a dependable team."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {qualifications.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeInUp}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 shadow-sm shadow-slate-200/40"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-gold" />
                      <p className="font-roboto text-sm leading-7 text-slate-700">{item}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <SectionHeading
                eyebrow="Deployment System"
                title="Guarding system and operational process"
                description="The agency follows a disciplined deployment structure so personnel arrive prepared, supported, and accountable from pre-deployment briefing through incident response."
              />

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {guardingProcesses.map((step, index) => (
                  <motion.div
                    key={step}
                    variants={fadeInUp}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                  >
                    <div className="mb-4 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="h-px flex-1 bg-slate-200" aria-hidden="true" />
                    </div>
                    <p className="font-roboto text-sm leading-7 text-slate-700">{step}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              <SectionHeading
                eyebrow="Training Support"
                title="Security training program and seminars"
                description="MVPMSAI supports every deployment with continuing training, client-specific workshops, and regular performance evaluation for both security and service quality."
              />

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div className="grid gap-4 md:grid-cols-3">
                  {trainingHighlights.map(({ title, description, icon: Icon }) => (
                    <motion.div
                      key={title}
                      variants={fadeInUp}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-montserrat text-lg font-bold text-navy">{title}</h3>
                      <p className="mt-3 font-roboto text-sm leading-7 text-slate-600">
                        {description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={fadeInUp}
                  className="rounded-2xl bg-navy p-7 text-white shadow-xl shadow-navy/10"
                >
                  <p className="font-montserrat text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                    Included Training Topics
                  </p>
                  <p className="mt-4 font-roboto text-sm leading-7 text-slate-200">
                    Seminars and workshops may include bomb threat management, active
                    shooting response, security awareness on common modus operandi, gun
                    safety, report writing, customer service excellence, workplace attitude,
                    related violence prevention, unarmed defense, and other security and
                    safety topics requested by clients.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <a
                      href="mailto:mvpmanila2013@yahoo.com?subject=Security%20Application%20Inquiry"
                      className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-roboto text-sm text-white transition-colors hover:bg-white/15"
                    >
                      <Mail size={16} className="text-gold" />
                      mvpmanila2013@yahoo.com
                    </a>
                    <a
                      href="tel:83537353"
                      className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-roboto text-sm text-white transition-colors hover:bg-white/15"
                    >
                      <Phone size={16} className="text-gold" />
                      8353-7353
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}
