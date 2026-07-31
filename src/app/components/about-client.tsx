"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  GraduationCap,
  Briefcase,
  HeartPulse,
  UtensilsCrossed,
  Store,
  Factory,
  Home,
  CheckCircle2,
  Target,
  Compass,
  Star,
  ShieldCheck,
  Truck,
  Radio,
  Siren,
  Award,
  Users,
  Clock,
  TrendingUp,
  Shield,
} from "lucide-react";
import Header from "./header";
import Footer from "./footer";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

export default function AboutClient() {
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

  const stats = [
    { value: "12+", label: "Years Active", icon: <Clock className="w-5 h-5" /> },
    { value: "700+", label: "Elite Personnel", icon: <Users className="w-5 h-5" /> },
    { value: "99.8%", label: "Client Retention", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "500+", label: "Clients Nationwide", icon: <Shield className="w-5 h-5" /> },
  ];

  const coreValues = [
    { title: "God-fearing", desc: "Guided by faith and moral principles in every decision we make." },
    { title: "Humble", desc: "Approaching every client and challenge with modesty and respect." },
    { title: "Loyal", desc: "Unwavering dedication to our clients, personnel, and mission." },
    { title: "Integrity", desc: "Transparent operations and honest dealings at every level." },
    { title: "Reliability", desc: "Consistent, dependable service when it matters most." },
    { title: "Service Excellence", desc: "Relentless pursuit of the highest standards in security." },
  ];

  const pillars = [
    {
      icon: <Target className="w-7 h-7" />,
      title: "Our Vision",
      desc: "Be the leader in providing competent, functional & resilient security and manpower services with an end result of being one of the finest services provider in the country.",
      span: "col-span-1 md:col-span-2",
    },
    {
      icon: <Compass className="w-7 h-7" />,
      title: "Our Mission",
      desc: "To effectively provide SECURITY & MANPOWER SOLUTIONS for every business establishment, multinational corporations, schools, universities, and events nationwide, servicing fellow Filipinos to create more jobs helping this industry to grow further.",
      span: "col-span-1 md:col-span-2",
    },
  ];

  const industries = [
    { icon: <Building2 className="w-6 h-6" />, title: "Commercial & High-Rise Buildings", image: "/images/industries/img1.jpeg" },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Educational Institutions", image: "/images/industries/img2.jpeg" },
    { icon: <Briefcase className="w-6 h-6" />, title: "Multinational Corporations & BPOs", image: "/images/industries/img3.jpeg" },
    { icon: <HeartPulse className="w-6 h-6" />, title: "Healthcare Facilities & Hospitals", image: "/images/industries/taytayDoctors.jpg" },
    { icon: <UtensilsCrossed className="w-6 h-6" />, title: "Hospitality (Hotels & Restaurants)", image: "/images/industries/elJardin.jpg" },
    { icon: <Store className="w-6 h-6" />, title: "Retail Centers & Malls", image: "/images/industries/LazadaWarehouse.jpg" },
    { icon: <Factory className="w-6 h-6" />, title: "Industrial, Manufacturing & Logistics", image: "/images/industries/Logistics.png", zoom: true },
    { icon: <Home className="w-6 h-6" />, title: "Residential Subdivisions & Condos", image: "/images/industries/GolfHill.jpeg" },
  ];

  const competencies = [
    "Experienced security and safety services provider",
    "Skillful Security Personnel",
    "Emergency Response Management",
    "First Aid Administration",
    "Safety Measures & Logistics",
    "Reviews and Evaluations",
    "Deployment of Security Guards and Officers",
    "Design and Installation of CCTV cameras",
    "Security Risk Assessment, Planning and Design",
    "Investigation and Surveillance / VIP Security and K9 Services",
    "Security Consultancy",
  ];

  const logistics = [
    { icon: <Radio className="w-5 h-5" />, title: "Communications", desc: "State-of-the-art radio & dispatch systems." },
    { icon: <Truck className="w-5 h-5" />, title: "Response Vehicles", desc: "Rapid deployment and emergency transport." },
    { icon: <Siren className="w-5 h-5" />, title: "Fire Safety", desc: "Advanced fire suppression and monitoring." },
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Weapons Asset", desc: "Licensed and strictly regulated armory." },
  ];

  const certifications = [
    "SEC Registration",
    "License to Operate (valid until September 2029)",
    "Business / Mayor's Permit",
    "BIR Certificate of Registration",
    "BIR Tax Clearance Certificate",
    "Firearms Licenses (Authentic, Validated)",
    "SSS Certificate of Registration",
    "PhilHealth Certificate of Registration",
    "PAG-IBIG Certificate of Registration",
    "Telecommunication & Radio Licenses, NTC License Certification",
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
            SECTION 1: PREMIUM TACTICAL PAGE BANNER
            Ultra-modern corporate header with abstract background textures
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative bg-white overflow-hidden border-b border-[#E2E8F0]">
          {/* ── Radial gradient base ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FFFFFF 0%, #F8FAFC 100%)",
            }}
          />

          {/* ── LEFT: Vertical tech lines (blueprint margins) ── */}
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.04] to-transparent" style={{ left: "8%" }} aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.03] to-transparent" style={{ left: "8.5%" }} aria-hidden="true" />
          <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#047857]/[0.04] to-transparent" style={{ left: "9%" }} aria-hidden="true" />

          {/* ── RIGHT: Isometric radar/sonar rings ── */}
          <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none" style={{ right: "-5%", opacity: 0.04 }} aria-hidden="true">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none">
              {/* Concentric sonar rings */}
              <circle cx="300" cy="300" r="80" stroke="#0A192F" strokeWidth="1" />
              <circle cx="300" cy="300" r="140" stroke="#0A192F" strokeWidth="0.75" strokeDasharray="4 6" />
              <circle cx="300" cy="300" r="200" stroke="#0A192F" strokeWidth="0.5" />
              <circle cx="300" cy="300" r="260" stroke="#0A192F" strokeWidth="0.5" strokeDasharray="2 8" />
              <circle cx="300" cy="300" r="300" stroke="#0A192F" strokeWidth="0.5" strokeDasharray="1 12" />
              {/* Crosshair lines */}
              <line x1="300" y1="0" x2="300" y2="600" stroke="#0A192F" strokeWidth="0.5" />
              <line x1="0" y1="300" x2="600" y2="300" stroke="#0A192F" strokeWidth="0.5" />
              {/* Diagonal tracking lines */}
              <line x1="100" y1="100" x2="500" y2="500" stroke="#047857" strokeWidth="0.5" />
              <line x1="500" y1="100" x2="100" y2="500" stroke="#047857" strokeWidth="0.5" />
              {/* Small tracking dots */}
              <circle cx="300" cy="300" r="3" fill="#047857" />
              <circle cx="380" cy="260" r="2" fill="#0A192F" />
              <circle cx="240" cy="340" r="2" fill="#0A192F" />
              <circle cx="320" cy="180" r="1.5" fill="#047857" />
              <circle cx="200" cy="280" r="1.5" fill="#0A192F" />
            </svg>
          </div>

          {/* ── RIGHT-LOWER: Fine grid mesh ── */}
          <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.025 }} aria-hidden="true">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none">
              {/* Horizontal grid lines */}
              {[...Array(16)].map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 20} x2="400" y2={i * 20} stroke="#0A192F" strokeWidth="0.5" />
              ))}
              {/* Vertical grid lines */}
              {[...Array(21)].map((_, i) => (
                <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="300" stroke="#0A192F" strokeWidth="0.5" />
              ))}
              {/* Accent crosshair at intersection */}
              <rect x="195" y="135" width="10" height="10" stroke="#047857" strokeWidth="0.75" fill="none" />
              <line x1="200" y1="120" x2="200" y2="180" stroke="#047857" strokeWidth="0.5" />
              <line x1="180" y1="140" x2="220" y2="140" stroke="#047857" strokeWidth="0.5" />
            </svg>
          </div>

          {/* ── Content ── */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

              {/* LEFT — Breadcrumb + Title */}
              <motion.div
                className="lg:col-span-8"
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Breadcrumb */}
                <motion.nav
                  variants={fadeInUp}
                  aria-label="Breadcrumb"
                  className="flex items-center gap-2 mb-6"
                >
                  <a
                    href="/"
                    className="font-roboto text-sm text-[#94A3B8] hover:text-[#0A192F] transition-colors duration-200 cursor-pointer"
                  >
                    Home
                  </a>
                  <span className="font-roboto text-sm text-[#CBD5E1]">/</span>
                  <span className="font-roboto text-sm font-medium text-[#047857] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
                    About Us
                  </span>
                </motion.nav>

                {/* Page Title */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#0A192F] leading-[1.05] tracking-[-0.02em]"
                >
                  About Us
                </motion.h1>
              </motion.div>

            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 2: THE SECURITY BENTO GRID
            Vision / Mission / Core Values — asymmetric bento layout
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-3xl md:text-4xl font-bold text-[#0A192F] mb-6"
              >
                Foundation of Trust
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-16 h-[3px] bg-[#047857] mx-auto rounded-full"
              />
            </motion.div>

            {/* Vision + Mission Row */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-5"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group relative bg-white border border-[#E2E8F0] rounded-2xl p-8 md:p-10 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,120,87,0.06)] ${pillar.span}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] group-hover:bg-[#047857]/5 group-hover:text-[#047857] group-hover:border-[#047857]/20 transition-all duration-300 mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-montserrat text-xl font-bold text-[#0A192F] mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-roboto text-[15px] leading-[1.8] text-[#64748B]">
                    {pillar.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Core Values Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#047857]/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#047857]" />
                </div>
                <h3 className="font-montserrat text-xl font-bold text-[#0A192F] tracking-tight">
                  Core Values
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group flex items-start gap-4 bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)]"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center font-montserrat text-xs font-bold text-[#94A3B8] group-hover:bg-[#047857] group-hover:text-white group-hover:border-[#047857] transition-all duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-montserrat text-base font-bold text-[#0A192F] mb-1 group-hover:text-[#047857] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="font-roboto text-sm text-[#94A3B8] leading-relaxed group-hover:text-[#64748B] transition-colors duration-300">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 3: INDUSTRIES WE PROTECT
            Image-forward grid with overlay hover
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-20"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-3xl md:text-4xl font-bold text-[#0A192F] mb-6"
              >
                Industries We Protect
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-16 h-[3px] bg-[#047857] mx-auto rounded-full"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group relative bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden hover:border-[#047857] hover:shadow-[0_12px_32px_rgba(4,120,87,0.1)] transition-all duration-300"
                >
                  <div className="relative w-full overflow-hidden aspect-[4/3]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${industry.zoom ? "scale-125 group-hover:scale-150" : ""}`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-[#0A192F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white mb-2">{industry.icon}</div>
                      <h4 className="font-montserrat font-bold text-white text-sm leading-snug">
                        {industry.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="font-mono text-[10px] font-semibold text-[#CBD5E1] tracking-widest uppercase mb-2 group-hover:text-[#047857] transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-montserrat font-bold text-[#0A192F] text-sm leading-snug group-hover:text-[#047857] transition-colors duration-300">
                      {industry.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 4: COMPETENCIES
            Split layout — image left, checklist right
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header — centered */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 mb-4"
              >
                <ShieldCheck className="w-5 h-5 text-[#047857]" />
                <span className="font-roboto text-sm font-semibold text-[#047857] tracking-wider uppercase">
                  Our Expertise
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A192F] tracking-tight"
              >
                Competencies
              </motion.h2>
            </motion.div>

            {/* Row 1 — Images Left | Competencies 1-3 Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] lg:h-[420px] w-full"
              >
                <div className="row-span-2 relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-1.jpeg" alt="Security personnel briefing" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-2.jpeg" alt="Security operations" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-3.jpeg" alt="CCTV surveillance" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={staggerContainer} className="space-y-6">
                {competencies.slice(0, 3).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-lg md:text-xl text-[#475569] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Row 2 — Competencies 4-6 Left (right-aligned) | Images Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12"
            >
              <motion.div variants={staggerContainer} className="space-y-6 order-2 lg:order-1 flex flex-col items-end text-right">
                {competencies.slice(3, 6).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                    <span className="font-roboto text-lg md:text-xl text-[#475569] font-medium leading-snug">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] lg:h-[420px] w-full order-1 lg:order-2"
              >
                <div className="row-span-2 relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-4.jpeg" alt="Building security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-5.jpeg" alt="Event security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-6.jpeg" alt="Campus protection" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
            </motion.div>

            {/* Row 3 — Images Left | Competencies 7-9 Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] lg:h-[420px] w-full"
              >
                <div className="row-span-2 relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-7.jpeg" alt="Guard deployment" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-8.jpeg" alt="CCTV installation" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-9.jpeg" alt="Risk assessment" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={staggerContainer} className="space-y-6">
                {competencies.slice(6, 9).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-lg md:text-xl text-[#475569] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Row 4 — Competencies 10-11 Left (right-aligned) | Images Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <motion.div variants={staggerContainer} className="space-y-6 order-2 lg:order-1 flex flex-col items-end text-right">
                {competencies.slice(9, 11).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-3">
                    <span className="font-roboto text-lg md:text-xl text-[#475569] font-medium leading-snug">{item}</span>
                    <CheckCircle2 className="w-5 h-5 text-[#047857] shrink-0 mt-0.5" />
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-3 h-[350px] lg:h-[420px] w-full order-1 lg:order-2"
              >
                <div className="row-span-2 relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-10.jpeg" alt="Investigation team" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-11.jpeg" alt="VIP security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-12.jpeg" alt="Security consultancy" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 5: LOGISTICS & SUPPORT
            Bento cards with image
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#047857]/10 border border-[#047857]/20 mb-6"
                >
                  <Truck className="w-4 h-4 text-[#047857]" />
                  <span className="font-roboto text-xs font-semibold text-[#047857] tracking-wider uppercase">
                    Operational Assets
                  </span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="font-montserrat text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 tracking-tight"
                >
                  Logistics & Support
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="font-roboto text-lg text-[#64748B] mb-10 leading-relaxed"
                >
                  Behind every secure operation is our commitment to dependable logistics and support. We equip our detachments with the highest grade of operational assets.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {logistics.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="group bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)]"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] group-hover:bg-[#047857]/5 group-hover:text-[#047857] group-hover:border-[#047857]/20 transition-all duration-300 mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-montserrat font-bold text-[#0A192F] text-sm mb-1.5 group-hover:text-[#047857] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="font-roboto text-xs text-[#94A3B8] leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden border border-[#E2E8F0]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
                  alt="Security logistics and tactical equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
              </motion.div>

            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 6: PERMITS, LICENSES & COMPLIANCE
            Military-grade metrics with green status indicators
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-24 md:py-32 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="w-14 h-14 rounded-2xl bg-[#047857]/10 border border-[#047857]/20 flex items-center justify-center mx-auto mb-6"
              >
                <Award className="w-7 h-7 text-[#047857]" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-3xl md:text-4xl font-bold text-[#0A192F] mb-6 tracking-tight"
              >
                Permits, Licenses & Compliance
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-roboto text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto"
              >
                MVPManila Security Agency Inc. strictly complies with all government-mandated business permits, licenses, registrations, certifications, and memberships.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group flex items-start gap-3 p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#047857] hover:bg-white hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)] transition-all duration-300 ${
                    idx === certifications.length - 1 && certifications.length % 3 === 1
                      ? "md:col-start-2"
                      : ""
                  }`}
                >
                  <div className="shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#047857] group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="font-roboto text-sm font-medium text-[#334155] leading-snug group-hover:text-[#0A192F] transition-colors duration-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Compliance Ticker */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 py-8 px-6 rounded-2xl bg-[#0A192F]"
            >
              {[
                "PNP-SOSIA Compliant",
                "DOLE Registered",
                "Fully Bonded & Insured",
                "RA-11917 Certified",
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#047857] shadow-[0_0_8px_rgba(4,120,87,0.6)]" />
                  <span className="font-roboto text-sm font-medium text-white/80">
                    {badge}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </section>

      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}
