"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";

// Animations
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

// Reusable Components
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

const LogoPlaceholder = ({ name }: { name: string }) => (
  <motion.div 
    variants={itemScale}
    className="group flex flex-col items-center justify-center p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 grayscale hover:grayscale-0 hover:-translate-y-1 cursor-default h-full"
  >
    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-500">
      <span className="text-[10px] text-gray-400 text-center font-roboto">Logo</span>
    </div>
    <span className="font-montserrat text-sm font-semibold text-navy text-center leading-tight">
      {name}
    </span>
  </motion.div>
);

export default function Clients() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const accreditations = [
    "FOPM", "APMC", "PHINMA Properties", "Anchor Land Holdings Inc.", 
    "LKY Group", "Ever Scapes", "AFPSLAI", "Airspeed", 
    "University of Santo Tomas-Legazpi", "Colegio de San Juan de Letran", "St. Mary's Academy"
  ];

  const corporatePartners = [
    "FAST Logistics", "Max's Group", "Golfhill Gardens", "U.N. Gardens", 
    "Marina Residential Suites", "Zenutna Development & Realty Corporation", 
    "Narra Heights Condominium", "El Jardin Del Presidente 1", "Sherwood Heights Townhouses", 
    "FOPM", "Anchor Land", "LKY Group", "PHINMA Properties"
  ];

  const learningInstitutions = [
    "Claret School", "St. Scholastica's Academy", "St. Agnes Academy", 
    "Saint Jude Catholic School", "CKS College", "PEAC (Private Education Assistance Committee)", 
    "Hope Christian High School", "Chiang Kai Shek College", "St. Mary's Academy Branches"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow pt-20">
        {/* 1. Hero Section (Clients Overview) */}
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
              quality={90}
            />
          </motion.div>
          
          {/* Dark Overlays (Opacity 80) */}
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

        {/* 2. Agency Accreditation (Sleek Logo Grid) */}
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
                {accreditations.map((name, idx) => (
                  <LogoPlaceholder key={`acc-${idx}`} name={name} />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 3. Corporate Partners (Infinite Marquee) */}
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
            {/* Gradient Masks for smooth fade at edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-linear-to-r from-slate to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 z-10 bg-linear-to-l from-slate to-transparent pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee">
              {/* Duplicate array to ensure seamless infinite loop */}
              {[...Array(3)].map((_, arrayIndex) => (
                <div key={`marquee-${arrayIndex}`} className="flex justify-around items-stretch shrink-0 min-w-max gap-6 px-3">
                  {corporatePartners.map((partner, i) => (
                    <div 
                      key={`${arrayIndex}-${i}`} 
                      className="w-48 h-48 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all duration-500 hover:-translate-y-1 cursor-default shrink-0"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <span className="text-[8px] text-gray-400">Logo</span>
                      </div>
                      <span className="font-montserrat text-sm font-semibold text-navy text-center leading-tight">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Learning Institutions & Organizations (Organized Logo Wall) */}
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
                {learningInstitutions.map((name, idx) => (
                  <LogoPlaceholder key={`edu-${idx}`} name={name} />
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
