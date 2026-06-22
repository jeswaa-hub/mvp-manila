"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemScale: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const getLogoLabel = (name: string) =>
  name
    .split(/[\s&()-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0]?.toUpperCase())
    .join("");

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="text-center mb-16">
    <motion.h2
      variants={fadeInUp}
      className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4"
    >
      {title}
    </motion.h2>
    <motion.div variants={fadeInUp} className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
    {subtitle && (
      <motion.p variants={fadeInUp} className="font-roboto text-gray-500 max-w-2xl mx-auto">
        {subtitle}
      </motion.p>
    )}
  </div>
);

const LogoPlaceholder = ({ name, logoSrc }: { name: string, logoSrc?: string }) => (
  <motion.div
    variants={itemScale}
    className="group flex h-full flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md cursor-default"
  >
    <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-white p-3 shadow-inner border border-gray-200 transition-transform duration-300 group-hover:-translate-y-1 md:h-36 md:w-36">
      {logoSrc ? (
        <Image
          src={logoSrc}
          alt={`${name} logo`}
          width={144}
          height={144}
          className="h-full w-full object-contain rounded-full"
          sizes="(max-width: 768px) 112px, 144px"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-50 text-navy">
          <span className="font-montserrat text-xl font-bold tracking-[0.08em] md:text-2xl">
            {getLogoLabel(name)}
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

export default function ClientsClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsMounted(true));
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const accreditations = [
    { name: "FOPM", logoSrc: "/images/logo_clients/FOPM.png" },
    { name: "APMC", logoSrc: "/images/logo_clients/APMC.jpg" },
    { name: "PHINMA Properties", logoSrc: "/images/logo_clients/PhinmaProperties.png" },
    { name: "Anchor Land Holdings Inc.", logoSrc: "/images/logo_clients/AnchorLand.jpg" },
    { name: "Ever Scapes", logoSrc: "/images/logo_clients/everScapes.jpg" },
    { name: "AFPSLAI", logoSrc: "/images/logo_clients/AFPSLAI.jpg" },
    { name: "Airspeed", logoSrc: "/images/logo_clients/airspeed.png" },
    { name: "University of Santo Tomas-Legazpi", logoSrc: "/images/logo_clients/UST-Legazpi.png" },
    { name: "Colegio de San Juan de Letran", logoSrc: "/images/logo_clients/PatriaDeusLetran.png" },
    { name: "St. Mary's Academy", logoSrc: "/images/logo_clients/StMaryAcademy.png" }
  ];

  const corporatePartners = [
    { name: "FOPM", logoSrc: "/images/logo_clients/FOPM.png" },
    { name: "Anchor Land", logoSrc: "/images/logo_clients/AnchorLand.jpg" },
    { name: "PHINMA Properties", logoSrc: "/images/logo_clients/PhinmaProperties.png" },
    { name: "FAST Logistics", logoSrc: "/images/logo_clients/fastLogistic.png" },
    { name: "Max's Group", logoSrc: "/images/logo_clients/maxGroup.png" },
    { name: "Golfhill Gardens", logoSrc: "/images/logo_clients/golfHillGarden.png" },
    { name: "U.N. Gardens", logoSrc: "/images/logo_clients/ungardens.jpeg" },
    { name: "Zenutna Development & Realty Corporation", logoSrc: "/images/logo_clients/zenutna.png" },
  ];

  const corporatePartnerSequence = Array.from({ length: 4 }, () => corporatePartners).flat();
  const corporatePartnerSlides = [...corporatePartnerSequence, ...corporatePartnerSequence];

  const learningInstitutions = [
    { name: "Claret School", logoSrc: "/images/logo_clients/claret.jpg" },
    { name: "St. Scholastica's Academy", logoSrc: "/images/logo_clients/StScholasticaAcademy.jpg" },
    { name: "St. Agnes Academy", logoSrc: "/images/logo_clients/StAgnesAcademy.jpg" },
    { name: "Saint Jude Catholic School", logoSrc: "/images/logo_clients/SaintJude.png" },
    { name: "CKS College", logoSrc: "/images/logo_clients/CKS.png" },
    { name: "Colegio de San Juan de Letran", logoSrc: "/images/logo_clients/PatriaDeusLetran.png" },
    { name: "PEAC (Private Education Assistance Committee)", logoSrc: "/images/logo/PEAC.png" },
    { name: "Hope Christian High School", logoSrc: "/images/logo_clients/HopeChristianHS.jpg" },
    { name: "Elizabeth Seton School", logoSrc: "/images/logo_clients/elizabethSetonSchool.png" },
    { name: "St. Mary's Academy - Pasay", logoSrc: "/images/logo_clients/StMaryAcademyPasay.png" },
    { name: "St. Mary's Academy - Sta. Ana Manila", logoSrc: "/images/logo_clients/StMaryAcademyStaAnaManila.png" },
    { name: "St. Stephen's High School", logoSrc: "/images/logo_clients/StStephenHS.png" },
    { name: "St. Vermillion Academy", logoSrc: "/images/logo_clients/StVermillionAcademy.jpg" },
    { name: "Philippine Institute of Quezon City", logoSrc: "/images/logo_clients/PhilippineInstituteofQC.png" },
    { name: "University of Santo Tomas-Legazpi", logoSrc: "/images/logo_clients/UST-Legazpi.png" },
    { name: "St. Peter Academy", logoSrc: "/images/logo_clients/StPeterAcademy.jpg" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="grow pt-20">
        {/* ═══════════════════════════════════════════════════════════
            PAGE HEADER BANNER — Premium Tactical Style
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative bg-white overflow-hidden border-b border-[#E2E8F0]">
          {/* Radial gradient base */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FFFFFF 0%, #F8FAFC 100%)",
            }}
          />

          {/* LEFT: Vertical tech lines */}
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.04] to-transparent" style={{ left: "8%" }} aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.03] to-transparent" style={{ left: "8.5%" }} aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#047857]/[0.04] to-transparent" style={{ left: "9%" }} aria-hidden="true" />

          {/* RIGHT: Isometric radar/sonar rings */}
          <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none" style={{ right: "-5%", opacity: 0.04 }} aria-hidden="true">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
              <circle cx="300" cy="300" r="80" stroke="#0A192F" strokeWidth="1" />
              <circle cx="300" cy="300" r="140" stroke="#0A192F" strokeWidth="0.75" strokeDasharray="4 6" />
              <circle cx="300" cy="300" r="200" stroke="#0A192F" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="260" stroke="#0A192F" strokeWidth="0.5" strokeDasharray="2 8" />
              <circle cx="300" cy="300" r="300" stroke="#0A192F" strokeWidth="0.5" strokeDasharray="1 12" />
              <line x1="300" y1="0" x2="300" y2="600" stroke="#0A192F" strokeWidth="0.5" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="#0A192F" strokeWidth="0.5" />
              <line x1="100" y1="100" x2="500" y2="500" stroke="#047857" strokeWidth="0.5" />
              <line x1="500" y1="100" x2="100" y2="500" stroke="#047857" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="3" fill="#047857" />
              <circle cx="380" cy="260" r="2" fill="#0A192F" />
              <circle cx="240" cy="340" r="2" fill="#0A192F" />
              <circle cx="320" cy="180" r="1.5" fill="#047857" />
              <circle cx="200" cy="280" r="1.5" fill="#0A192F" />
            </svg>
          </div>

          {/* RIGHT-LOWER: Fine grid mesh */}
          <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.025 }} aria-hidden="true">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
              {[...Array(16)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#0A192F" strokeWidth="0.5" />
              ))}
              {[...Array(21)].map((_, i) => (
                <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="300" stroke="#0A192F" strokeWidth="0.5" />
              ))}
              <rect x="195" y="135" width="10" height="10" stroke="#047857" strokeWidth="0.75" fill="none" />
              <line x1="200" y1="120" x2="200" y2="180" stroke="#047857" strokeWidth="0.5" />
              <line x1="180" y1="140" x2="220" y2="140" stroke="#047857" strokeWidth="0.5" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <motion.div
                className="lg:col-span-12"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.nav
                  variants={fadeInUp}
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 mb-6"
                >
                  <a href="/" className="font-roboto text-sm text-[#94A3B8] hover:text-[#0A192F] transition-colors duration-200 cursor-pointer">
                    Home
                  </a>
                  <span className="font-roboto text-sm text-[#CBD5E1]">/</span>
                  <span className="font-roboto text-sm font-medium text-[#047857] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
                    Clients
                  </span>
                </motion.nav>

                <motion.h1
                  variants={fadeInUp}
                  className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#0A192F] leading-[1.05] tracking-[-0.02em]"
                >
                  Our Clients
                </motion.h1>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="AGENCY ACCREDITATION" />

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {accreditations.map((item, idx) => (
                  <LogoPlaceholder key={`acc-${idx}`} name={item.name} logoSrc={item.logoSrc} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-slate border-y border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="OUR CORPORATE PARTNERS" />
            </motion.div>
          </div>

          <div className="relative w-full flex overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-linear-to-r from-slate to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-linear-to-l from-slate to-transparent pointer-events-none"></div>

            <div className="flex w-max items-stretch gap-6 animate-marquee" style={{ animationDuration: "48s", willChange: "transform" }}>
              {corporatePartnerSlides.map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex h-44 w-44 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md cursor-default md:h-48 md:w-48"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gray-200 bg-white p-3 shadow-inner md:h-32 md:w-32">
                    <Image
                      src={partner.logoSrc}
                      alt={`${partner.name} logo`}
                      width={176}
                      height={176}
                      className="h-full w-full object-contain rounded-full"
                      sizes="(max-width: 768px) 112px, 128px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <SectionHeading title="PARTNERS ON LEARNING INSTITUTIONS & ORGANIZATION" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 justify-center">
                {learningInstitutions.map((item, idx) => (
                  <LogoPlaceholder key={`edu-${idx}`} name={item.name} logoSrc={item.logoSrc} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}
