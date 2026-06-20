"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  FileBadge, 
  Users, 
  Building2, 
  HeartHandshake,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";
import Header from "./header";
import ContactModal from "./contact-modal";

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <h2 className={`font-montserrat text-3xl md:text-4xl font-bold text-navy mb-12 text-center ${className}`}>
    {children}
  </h2>
);

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const welfarePartners = [
  {
    src: "/images/standardInsurance.jpeg",
    alt: "Standard Insurance logo"
  },
  {
    src: "/images/RiteCareDoctorsClinic.jpeg",
    alt: "Rite Care Doctors Clinic logo"
  },
  {
    src: "/images/TaytayDoctorsMultispecialtyHospital.jpeg",
    alt: "Taytay Doctors Multispecialty Hospital logo"
  },
  {
    src: "/images/LoseriagaCarullo.jpeg",
    alt: "Loseriaga and Carullo Law Firm logo"
  },
  {
    src: "/images/DanielRadjitPineda.jpeg",
    alt: "Daniel Radjit D. Pineda profile card"
  }
];

const awardCertificates = [
  {
    src: "/images/cert1.jpeg",
    alt: "Certificate of Service Excellence from Marina Square Suites Condominium Association"
  },
  {
    src: "/images/cert2.jpeg",
    alt: "Certificate of Service Excellence from Chiang Kai Shek College"
  },
  {
    src: "/images/cert3.jpeg",
    alt: "Certificate of Recognition from Bayshore Residential Resort Condominium Association"
  }
];

const lawEnforcementLogos = [
  { src: "/images/logo/CEAP.png", alt: "CEAP logo" },
  { src: "/images/logo/Enhancing.jpg", alt: "Enhancing logo" },
  { src: "/images/logo/LungsodNgManila.png", alt: "Lungsod ng Manila logo" },
  { src: "/images/logo/OHS.webp", alt: "OHS logo" },
  { src: "/images/logo/PADPAO.webp", alt: "PADPAO logo" },
  { src: "/images/logo/PEAC.png", alt: "PEAC logo" },
  { src: "/images/logo/PNP.png", alt: "Philippine National Police logo" },
  { src: "/images/logo/SEC.png", alt: "Securities and Exchange Commission logo" },
  { src: "/images/logo/WNCAA.png", alt: "WNCAA logo" },
  { src: "/images/logo/dole.png", alt: "Department of Labor and Employment logo" },
  { src: "/images/logo/ehnace3.jpg", alt: "Enhance 3 logo" },
  { src: "/images/logo/enhance2.png", alt: "Enhance 2 logo" },
  { src: "/images/logo/nationalLaborRelationCommision.png", alt: "National Labor Relations Commission logo" },
  { src: "/images/logo/redcross.jpg", alt: "Philippine Red Cross logo" }
];

export default function HomeClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Fixed Background Logo Silhouette - follows scroll everywhere */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0" aria-hidden="true">
        <Image
          src="/images/logo1.jpg"
          alt=""
          width={800}
          height={800}
          className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] object-contain opacity-[0.06]"
          priority={false}
        />
      </div>

      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow relative z-10">
        <section 
          id="home" 
          className="relative w-full overflow-hidden"
          aria-label="Welcome to MVPManila Security Agency"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28">
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 lg:gap-16">
              {/* Left Column - Text Content */}
              <motion.div 
                className="flex-1 w-full"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
                  }
                }}
              >
                {/* Badge */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 bg-gray-50/50"
                >
                  <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gold/10">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold"></span>
                  </span>
                  <span className="font-montserrat text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.12em] text-gray-600 uppercase">
                    DOLE Certified · Since 2013
                  </span>
                </motion.div>

                {/* Heading */}
                <motion.h1 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] sm:leading-[1.08] tracking-tight text-navy mb-5 sm:mb-6"
                >
                  Securing people, facilities, and assets with{" "}
                  <span className="italic">reliability, integrity, and service excellence.</span>
                </motion.h1>

                {/* Description */}
                <motion.p 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="font-roboto text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-xl"
                >
                  Since 2013, MVPManila has been the trusted security partner for multinational 
                  corporations, educational institutions, and healthcare facilities across the 
                  Philippines. We deliver professional guarding, risk management, and comprehensive 
                  security solutions tailored to your organization&apos;s needs.
                </motion.p>

                {/* CTAs */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                >
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full sm:w-auto group inline-flex items-center justify-center bg-navy text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded font-montserrat text-xs sm:text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#0D2240] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-navy focus:ring-offset-2 cursor-pointer"
                  >
                    Get a Free Consultation
                  </button>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto group inline-flex items-center justify-center sm:justify-start gap-2 font-montserrat text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-navy transition-colors duration-300 hover:text-gray-600"
                  >
                    Our Services
                    <svg 
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div 
                className="flex-1 w-full relative hidden sm:block"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src="/images/HeroSection.jpeg"
                    alt="MVPManila security professionals in modern corporate lobby"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                  />
                </div>

                {/* Floating Card */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-sm rounded-lg px-4 py-3 sm:px-5 sm:py-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[220px] sm:max-w-[280px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-navy" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">24/7 Coverage</p>
                      <p className="font-montserrat text-sm sm:text-lg font-bold text-navy">Active Operations</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24"
            >
              <motion.div variants={fadeInUp} className="flex gap-8 items-center">
                <Image
                  src="/images/logo1.jpg"
                  alt="DOLE Certificate"
                  width={96}
                  height={96}
                  className="w-30 h-25 shadow-md"
                />
                <Image
                  src="/images/logo2.jpg"
                  alt="MVPManila Logo"
                  width={100}
                  height={100}
                  className="w-30 h-25 shadow-md"
                />
              </motion.div>
              
              <motion.div variants={fadeInUp} className="text-center md:text-left max-w-2xl">
                <h3 className="font-montserrat text-2xl font-bold text-navy mb-3">DOLE Compliant Agency Since 2013</h3>
                <p className="font-roboto text-gray-600 leading-relaxed text-lg">
                  Certified holder of D.O 174-17 Certificate from the Department of Labor & Employment (DOLE).
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading>Why Choose MVPManila</SectionHeading>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <motion.div variants={fadeInUp} className="lg:col-span-2 bg-slate p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                <ShieldCheck className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Over 12 Years of Service</h3>
                <p className="font-roboto text-gray-600">Securing valued clients nationwide from 2013 to 2025 with an unblemished track record of excellence and reliability.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-navy p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <FileBadge className="w-12 h-12 text-gold mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat text-xl font-bold text-white mb-3">Fully Licensed</h3>
                <p className="font-roboto text-gray-300">Holder of a Regular License to Operate (LTO) valid until September 2029.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-slate p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                <Users className="w-12 h-12 text-navy mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">700+ Strong Force</h3>
                <p className="font-roboto text-gray-600">A dedicated, highly-trained, and continuously growing security and manpower force.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-slate p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                <Building2 className="w-12 h-12 text-navy mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Premium Clientele</h3>
                <p className="font-roboto text-gray-600">Trusted by Multinational Corporations, Educational Institutions, Healthcare Facilities, and Logistics Hubs.</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="bg-slate p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
                <HeartHandshake className="w-12 h-12 text-navy mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-montserrat text-xl font-bold text-navy mb-3">Employee Focus</h3>
                <p className="font-roboto text-gray-600">Standard wages and comprehensive health benefits provided in full and always on time.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-[#f8fafc] border-y border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <h3 className="font-montserrat text-2xl font-bold text-navy">Agency Employee&apos;s Welfare Program & Legal Partners</h3>
          </div>
          
          <div className="relative w-full flex overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-gray-50 to-transparent pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee" style={{ willChange: "transform" }}>
              {[...Array(3)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex justify-around items-center shrink-0 min-w-max">
                  {welfarePartners.map((partner, i) => (
                    <div
                      key={`${arrayIndex}-${i}`}
                      className="flex items-center justify-center w-[240px] md:w-[290px] lg:w-[340px] h-[140px] md:h-[165px] lg:h-[190px]"
                    >
                      <Image
                        src={partner.src}
                        alt={partner.alt}
                        width={560}
                        height={200}
                        className="h-[104px] md:h-[118px] lg:h-[132px] max-w-full object-contain"
                        sizes="(max-width: 768px) 240px, (max-width: 1024px) 290px, 340px"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading>Awards, Certificate of Appreciation & Service Excellence</SectionHeading>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10"
            >
              {awardCertificates.map((certificate, index) => (
                <motion.div 
                  key={certificate.src}
                  variants={fadeInUp}
                  className="rounded-lg overflow-hidden shadow-md"
                >
                  <Image
                    src={certificate.src}
                    alt={certificate.alt}
                    width={764}
                    height={992}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                  />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mx-auto grid max-w-6xl grid-cols-1 gap-2 px-1 sm:gap-4 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:grid-rows-[minmax(0,1fr)_minmax(0,0.72fr)]"
            >
              {/* LEFT SIDE: Featured Award 1 (Occupies the full height of the left column) */}
              <motion.div
                variants={fadeInUp}
                className="relative flex mb-5 h-[570px] w-full items-center justify-center sm:h-[420px] md:row-span-2 md:h-[650px] lg:h-[750px]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/award1.jpeg"
                    alt="Plaque of gratitude awarded to MVP Manila Manpower Agency"
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 767px) 88vw, 420px"
                    className="object-cover rounded-lg"
                    priority
                  />
                </div>
              </motion.div>

              {/* RIGHT SIDE: Award 2 on top, Awards 3 and 4 side by side below */}
              {/* Award 2 */}
              <motion.div
                variants={fadeInUp}
                className="relative flex mb-5 h-[350px] w-full overflow-hidden rounded-lg sm:h-[220px] md:h-[286px] lg:h-[490px] lg:mb-0"
              >
                <Image
                  src="/images/award2.jpeg"
                  alt="University of Santo Tomas certificate of appreciation for MVP Manila Security Agency"
                  width={700}
                  height={500}
                  sizes="(max-width: 600px) 100vw, (max-width: 767px) 88vw, (max-width: 1280px) 50vw, 560px"
                  className="object-cover rounded-lg"
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 lg:gap-2">
                {/* Award 3 */}
                <motion.div
                  variants={fadeInUp}
                  className="relative flex mb-5 h-[350px] items-center justify-center overflow-hidden rounded-lg sm:h-[180px] md:h-[196px] lg:h-[300px]"
                >
                  <div className="relative h-full w-full rounded-lg">
                    <Image
                      src="/images/award3.jpeg"
                      alt="Lazada Logistics certificate of appreciation for MVP Manila Security Agency"
                      width={500}
                      height={500}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </motion.div>

                {/* Award 4 */}
                <motion.div
                  variants={fadeInUp}
                  className="relative flex mb-5 h-[350px] items-center justify-center overflow-hidden rounded-lg sm:h-[180px] md:h-[196px] lg:h-[300px]"
                >
                  <div className="relative h-full w-full rounded-lg">
                    <Image
                      src="/images/award4.jpeg"
                      alt="St. Mary's Academy excellence in customer service award"
                      width={500}
                      height={500}
                      className="object-contain rounded-lg"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 px-4 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <SectionHeading>Trusted by Law Enforcement & Safety Organizations</SectionHeading>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {lawEnforcementLogos.map((logo) => (
              <motion.div 
                key={logo.src}
                variants={fadeInUp}
                className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-inner border border-gray-200 flex items-center justify-center p-3 hover:-translate-y-1 transition-transform"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={128}
                  height={128}
                  className="w-full h-full object-contain rounded-full"
                  sizes="(max-width: 768px) 96px, 128px"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <Footer showScrollTop={showScrollTop} />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}
