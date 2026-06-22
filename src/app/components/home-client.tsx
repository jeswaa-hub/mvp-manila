"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { 
  ShieldCheck, 
  FileBadge, 
  Users, 
  Building2, 
  HeartHandshake
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

  // Parallax Effects
  const { scrollY: framerScrollY } = useScroll();
  const yBackground = useTransform(framerScrollY, [0, 1000], [0, 300]);
  
  // Mouse Tracking for Gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const mouseXProgress = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig);
  const mouseYProgress = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig);
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${mouseXProgress}% ${mouseYProgress}%, rgba(255, 215, 0, 0.15) 0%, transparent 60%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (matchMedia("(pointer: coarse)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXValue = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseYValue = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(mouseXValue);
    mouseY.set(mouseYValue);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow relative z-10">
        <section 
          id="home" 
          className="hero-fullscreen relative w-full flex items-center justify-center overflow-hidden bg-[#050B14]"
          aria-label="Welcome to MVPManila Security Agency"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1200 }}
        >
          {/* Layered Parallax Background */}
          <motion.div 
            className="absolute inset-0 z-0 w-full h-[120%]"
            style={{ y: yBackground }}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/images/bgHeroSection.jpeg"
              alt="Modern corporate skyscrapers representing secure facilities and corporate integrity"
              fill
              priority
              className="object-cover object-[62%_center] md:object-center"
              sizes="100vw"
              quality={75}
            />
          </motion.div>

          {/* Premium Gradient Overlays for Depth */}
          <div className="absolute inset-0 z-10 bg-navy/70 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-[#050B14]/94 via-[#0A192F]/72 to-[#050B14]/96 md:from-[#050B14]/90 md:via-[#0A192F]/50 md:to-[#050B14]/95" aria-hidden="true" />
          <motion.div 
            className="absolute inset-0 z-10" 
            style={{ background: backgroundGradient }} 
            aria-hidden="true" 
          />

          {/* Glowing Orbs / Particles */}
          <div className="pointer-events-none absolute left-1/2 top-[16%] h-48 w-48 -translate-x-1/2 rounded-full bg-gold/10 blur-[72px] mix-blend-screen md:left-1/4 md:top-1/4 md:h-96 md:w-96 md:translate-x-0 md:blur-[100px]" />
          <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px] mix-blend-screen md:block" />

          {/* Content Container */}
          <motion.div 
            className="relative z-20 mx-auto flex min-h-full w-full max-w-5xl flex-col items-center justify-center px-5 py-28 text-center sm:px-6 sm:py-32 md:px-6 md:py-28"
            style={{ 
              y: yBackground,
              transformStyle: "preserve-3d" 
            }}
          >
            {/* Top Accent Line */}
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "60px", opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mx-auto mb-6 h-1 w-12 rounded-full bg-gold shadow-[0_0_10px_rgba(255,215,0,0.5)] sm:mb-8 sm:w-[60px]"
            />

            <h1 className="mb-6 font-montserrat text-[clamp(2.55rem,10vw,4.6rem)] font-extrabold leading-[0.96] tracking-[-0.03em] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] sm:mb-8 sm:text-[clamp(3.2rem,9vw,5.25rem)] sm:leading-[1.01] md:text-6xl md:leading-[1.03] lg:text-7xl xl:text-[80px]">
              {"Securing people, facilities, and assets with reliability, integrity, and service excellence.".split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  initial={{ opacity: 0, y: 15, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1], delay: 0.3 + i * 0.04 }}
                  className="inline-block mr-[0.25em]"
                  style={{ transformOrigin: "bottom" }}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
              className="mb-8 font-roboto text-sm font-medium uppercase tracking-[0.16em] text-gold sm:mb-10 sm:text-base sm:tracking-[0.2em] md:text-xl lg:text-2xl"
            >
              Together we can, Together we will
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1 }}
              className="mt-2 w-full sm:mt-4"
            >
              <Link
                href="/about-us"
                className="group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-gold px-6 py-4 text-navy shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_0_60px_rgba(255,215,0,0.5)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#050B14] sm:min-h-0 sm:w-auto sm:px-10 md:px-12"
                aria-label="Learn more about MVPManila Security Agency services"
              >
                <span className="relative z-10 text-center font-montserrat text-sm font-bold uppercase tracking-[0.12em] sm:text-base md:text-lg">Learn More About Us</span>
                <div className="absolute inset-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover:w-full z-0 transform skew-x-12 -ml-4"></div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-4 lg:-bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center justify-center sm:flex md:bottom-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            <span className="mb-3 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 font-montserrat text-[11px] font-semibold uppercase tracking-[0.3em] text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm">
              Scroll Explore
            </span>
            <div className="relative h-12 w-[2px] overflow-hidden rounded-full bg-white/35 shadow-[0_0_12px_rgba(255,255,255,0.18)]">
              <motion.div 
                className="absolute top-0 h-1/2 w-full rounded-full bg-gold shadow-[0_0_14px_rgba(255,215,0,0.75)]"
                animate={{ top: ["-50%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </motion.div>
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
