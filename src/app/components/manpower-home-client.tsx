"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import ContactModal from "./contact-modal";

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

const getLogoLabel = (name: string) => {
  if (name.includes("LCC")) return "LCC";
  return name
    .split(/[\s&()–-]+/)
    .filter(Boolean)
    .slice(0, 3)
    .map((word) => word[0]?.toUpperCase())
    .join("");
};

const clientele = [
  { name: "University of Santo Tomas – Legazpi", logoSrc: "/images/mvpmanila-manpower/ust_legazpi.jpeg" },
  { name: "UST Legazpi Hospital", logoSrc: "/images/mvpmanila-manpower/ust_hospital.jpeg" },
  { name: "Claret School of Quezon City", logoSrc: "/images/mvpmanila-manpower/claret_school.jpeg" },
  { name: "Divine Word College of Legazpi", logoSrc: "/images/mvpmanila-manpower/divine_word.jpeg" },
  { name: "Ayala Property Management Corporation", logoSrc: "/images/mvpmanila-manpower/ayala_apmc.jpeg" },
  { name: "Anchor Land Holdings Inc.", logoSrc: "/images/mvpmanila-manpower/anchor_land.jpeg" },
  { name: "FOPM Property Management", logoSrc: "/images/mvpmanila-manpower/fopm.jpeg" },
  { name: "Palmdale Heights", logoSrc: "/images/mvpmanila-manpower/palmdale_heights.jpeg" },
  { name: "LCC", logoSrc: "/images/mvpmanila-manpower/lcc.jpeg" },
  { name: "Investment Realty", logoSrc: "/images/mvpmanila-manpower/investment_realty.jpeg" },
  { name: "Yntalco", logoSrc: "/images/mvpmanila-manpower/yntalco.jpeg" }
];

export default function ManpowerHomeClient() {
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
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${mouseXProgress}% ${mouseYProgress}%, rgba(4, 120, 87, 0.15) 0%, transparent 60%)`;

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
    <>
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Hero Section */}
      <section 
        id="home" 
        className="hero-fullscreen relative w-full flex items-center justify-center overflow-hidden bg-[#050B14]"
        aria-label="Welcome to MVPManila Manpower Services"
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
            src="/images/manpowerHeroBg.png"
            alt="MVPManila Manpower Team Deployment representing secure facilities and dedicated workforce"
            fill
            priority
            className="object-cover opacity-35 object-[62%_center] md:object-center"
            sizes="100vw"
            quality={75}
          />
        </motion.div>

        {/* Premium Gradient Overlays for Depth */}
        <div className="absolute inset-0 z-10 bg-navy/35 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-linear-to-b from-[#050B14]/55 via-[#0A192F]/25 to-[#050B14]/60 md:from-[#050B14]/50 md:via-[#0A192F]/20 md:to-[#050B14]/55" aria-hidden="true" />
        <motion.div 
          className="absolute inset-0 z-10" 
          style={{ background: backgroundGradient }} 
          aria-hidden="true" 
        />

        {/* Glowing Orbs / Particles */}
        <div className="pointer-events-none absolute left-1/2 top-[16%] h-48 w-48 -translate-x-1/2 rounded-full bg-gold/10 blur-[72px] mix-blend-screen md:left-1/4 md:top-1/4 md:h-96 md:w-96 md:translate-x-0 md:blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] mix-blend-screen md:block" />

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
            className="mx-auto mb-6 h-1 w-12 rounded-full bg-gold shadow-[0_0_10px_rgba(4,120,87,0.5)] sm:mb-8 sm:w-[60px]"
          />

          <h1 className="mb-6 font-montserrat text-[clamp(2.55rem,10vw,4.6rem)] font-extrabold leading-[0.96] tracking-[-0.03em] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] sm:mb-8 sm:text-[clamp(3.2rem,9vw,5.25rem)] sm:leading-[1.01] md:text-6xl md:leading-[1.03] lg:text-7xl xl:text-[80px]">
            {"Tailored Fit Manpower Solutions for Your Business".split(" ").map((word, i) => (
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
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="mb-8 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            Providing competent, functional, and efficient manpower services nationwide since 2022. We effectively bridge the gap between businesses and dedicated Filipino workers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
            className="mt-2 w-full sm:mt-4 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full bg-gold px-6 py-4 text-white shadow-[0_0_40px_rgba(4,120,87,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-[0_0_60px_rgba(4,120,87,0.5)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#050B14] sm:min-h-0 sm:w-auto sm:px-10 md:px-12 cursor-pointer font-bold uppercase tracking-wider text-sm"
              aria-label="Partner with MVPManila Manpower Services"
            >
              <span className="relative z-10 text-center font-montserrat text-sm font-bold uppercase tracking-[0.12em] sm:text-base md:text-lg">Partner With Us</span>
              <div className="absolute inset-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover:w-full z-0 transform skew-x-12 -ml-4"></div>
            </button>

            <Link
              href="/manpower/careers"
              className="group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-full border border-white/30 px-6 py-4 text-white shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#050B14] sm:min-h-0 sm:w-auto sm:px-10 md:px-12 font-bold uppercase tracking-wider text-sm"
              aria-label="Apply for a job with MVPManila Manpower Services"
            >
              <span className="relative z-10 text-center font-montserrat text-sm font-bold uppercase tracking-[0.12em] sm:text-base md:text-lg">Apply for a Job</span>
              <div className="absolute inset-0 h-full w-0 bg-white/10 transition-all duration-500 ease-out group-hover:w-full z-0 transform skew-x-12 -ml-4"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-4 lg:bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center justify-center sm:flex opacity-30 hover:opacity-80 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="mb-2 font-montserrat text-[10px] font-medium uppercase tracking-[0.25em] text-white">
            Scroll Explore
          </span>
          <div className="relative h-10 w-[1.5px] overflow-hidden rounded-full bg-white/20">
            <motion.div 
              className="absolute top-0 h-1/2 w-full rounded-full bg-gold shadow-[0_0_10px_rgba(4,120,87,0.5)]"
              animate={{ top: ["-50%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Trust & Compliance Strip */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200">
            {[
              { label: "DOLE Compliant Agency", sublabel: "Since 2022" },
              { label: "Certified D.O. 174-17 Holder", sublabel: "Department of Labor & Employment" },
              { label: "DTI Registered & BIR Compliant", sublabel: "Fully Registered" },
              { label: "100% Zero Pending Cases", sublabel: "DOLE & NLRC Certified" },
            ].map((badge, index) => (
              <div key={index} className="bg-white p-6 text-center">
                <p className="font-montserrat font-bold text-xs text-[#0A192F] leading-tight uppercase tracking-wider">
                  {badge.label}
                </p>
                <p className="text-slate-400 text-[10px] mt-1 font-light">
                  {badge.sublabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Our Manpower Solutions
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              We delicately offer service solutions tailored exactly to our client's needs, ensuring high performance and proper job protocols.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {[
              {
                title: "Skilled Workers",
                description: "Competent technical personnel equipped with proper expertise and TESDA certifications when required.",
                items: ["Maintenance Staff", "Electricians", "Plumbers", "Professional Drivers"]
              },
              {
                title: "Non-Skilled Workers",
                description: "Efficient and reliable personnel trained to maintain the highest standards of cleanliness and operational support.",
                items: ["Janitorial Services", "Housekeeping", "Messengerial", "Parking Attendants"]
              },
              {
                title: "Professional Staff",
                description: "Highly functional office and administrative support to keep your business operations running smoothly.",
                items: ["Admin Assistants & Support", "Finance Assistants", "Liaison Officers"]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-10">
                <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-wider">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm font-light">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="border-t border-slate-100 pt-3">
                      <span className="text-slate-400 text-xs font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/manpower/services" className="inline-flex items-center text-[#047857] font-semibold font-montserrat text-sm hover:text-[#15803D] transition-colors group">
              View Full Services & Employee Welfare
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Partner with MVPManila Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Grounded in Integrity, Driven by Excellence
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Why Partner with MVPManila?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200">
            {[
              {
                number: "01",
                title: "Legal & Regulatory Assurance",
                description: "Our partnership with the Loseriaga Carullo Tulay Law Firm ensures full compliance with all institutional and legal obligations."
              },
              {
                number: "02",
                title: "Employee Welfare First",
                description: "We proudly protect our technical and janitorial units through an accident protection program heavily subsidized by the agency via Standard Insurance."
              },
              {
                number: "03",
                title: "Financial Prudence & On-Time Payroll",
                description: "Backed up by a cashless payroll system through BDO, our personnel receive their standard wages and health benefits (SSS, PhilHealth, Pag-IBIG) in full and strictly on time."
              },
              {
                number: "04",
                title: "Proven Field Resilience",
                description: "Even amidst challenging economic climates and past pandemics, we continue to serve and protect our valuable clientele through highly dedicated field personnel."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">{feature.number}</span>
                  <span className="w-8 h-px bg-slate-300" />
                </div>
                <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by Leading Institutions */}
      <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Our Valued Clientele
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Proudly servicing schools, universities, hospitals, residential property management, and private firms nationwide.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
          >
            {clientele.map((client) => (
              <motion.div 
                key={client.name}
                variants={fadeInUp}
                className="w-28 h-28 md:w-36 md:h-36 bg-white rounded-full shadow-inner border border-slate-200 flex flex-col items-center justify-center p-4 hover:-translate-y-1 hover:shadow-md transition-all duration-300 group cursor-default"
                title={client.name}
              >
                {client.logoSrc ? (
                  <Image
                    src={client.logoSrc}
                    alt={`${client.name} logo`}
                    width={144}
                    height={144}
                    className="h-full w-full object-contain rounded-full"
                    sizes="(max-width: 768px) 112px, 144px"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-2">
                    <span className="font-montserrat text-sm md:text-base font-extrabold text-[#0A192F] tracking-[0.08em] uppercase">
                      {getLogoLabel(client.name)}
                    </span>
                    <span className="text-[8px] md:text-[9px] text-slate-400 font-light mt-1 max-w-[80px] leading-tight truncate block">
                      {client.name}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[32px] bg-[#050B14] border border-slate-800/40 p-12 md:p-20 text-center overflow-hidden shadow-2xl shadow-navy/20">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-montserrat mb-6 leading-[1.1] tracking-tight">
                Ready to elevate your operations with the right manpower solutions?
              </h2>
              <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed font-light">
                Partner with a DOLE-compliant, highly reliable agency today. Let us manage the workforce so you can focus on growing your business.
              </p>
              
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="group relative inline-flex min-h-14 items-center justify-center overflow-hidden rounded-full bg-gold px-8 py-4 text-white shadow-[0_0_40px_rgba(4,120,87,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-[0_0_60px_rgba(4,120,87,0.5)] focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-[#050B14] cursor-pointer font-montserrat font-bold uppercase tracking-wider text-sm"
              >
                <span className="relative z-10">Contact Our Management Group</span>
                <div className="absolute inset-0 h-full w-0 bg-white/30 transition-all duration-500 ease-out group-hover:w-full z-0 transform skew-x-12 -ml-4"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer showScrollTop={showScrollTop} />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
