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
    { name: "LKY Group" },
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
    { name: "St. Peter's Academy", logoSrc: "/images/logo_clients/StPeterAcademy.jpg" },
    { name: "St. Stephen's High School", logoSrc: "/images/logo_clients/StStephenHS.png" },
    { name: "St. Vermillion Academy", logoSrc: "/images/logo_clients/StVermillionAcademy.jpg" },
    { name: "Philippine Institute of Quezon City", logoSrc: "/images/logo_clients/PhilippineInstituteofQC.png" },
    { name: "University of Santo Tomas-Legazpi", logoSrc: "/images/logo_clients/UST-Legazpi.png" },
    { name: "St. Mary's Academy Branches", logoSrc: "/images/logo_clients/StMaryAcademy.png" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header
        isScrolled={isScrolled}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="grow pt-20">
        <section
          className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-navy"
          aria-label="MVPManila Clients and Partners"
        >
          <motion.div
            className="absolute inset-0 z-0 w-full h-[120%]"
            style={{ y: isMounted ? scrollY * 0.4 : 0 }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop"
              alt="Professional security personnel in uniform standing in a diverse lineup"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={75}
            />
          </motion.div>

          <div className="absolute inset-0 z-10 bg-navy/80 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" aria-hidden="true" />

          <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center mt-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.h1
                variants={fadeInUp}
                className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4"
              >
                OUR CLIENTS
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="font-roboto text-lg md:text-xl text-gold font-bold tracking-widest uppercase mb-8"
              >
                LIST OF CURRENT AND ON-GOING PROJECTS/CLIENTS
              </motion.p>
              <motion.p
                variants={fadeInUp}
                className="font-roboto text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto"
              >
                Protecting corporate, commercial, and residential clients with proven expertise.
              </motion.p>
            </motion.div>
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
