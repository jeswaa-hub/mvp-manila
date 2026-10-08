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
  Shield,
  Calendar,
  Flag,
  User,
  Quote,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Camera,
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
  const [activeMilestone, setActiveMilestone] = useState(0);

  // CEO / Proprietor photo path — can be set to an image URL (e.g. "/images/leadership/maria-vivian-manila.jpg")
  const ceoImage: string | null = null;

  const historyProfile = [
    {
      label: "Established",
      value: "February 1, 2013",
      subtext: "Originally RL Fernandez Security Agency",
      icon: <Calendar className="w-5 h-5 text-[#047857]" />,
    },
    {
      label: "Ownership",
      value: "100% Filipino-Owned",
      subtext: "Dedicated to creating jobs for Filipinos",
      icon: <Flag className="w-5 h-5 text-[#047857]" />,
    },
    {
      label: "Accreditations",
      value: "PNP-SOSIA & SEC",
      subtext: "Certified by PNP-SOSIA and registered under SEC",
      icon: <Award className="w-5 h-5 text-[#047857]" />,
    },
    {
      label: "Primary Market",
      value: "Schools & Businesses",
      subtext: "Schools, campuses, and private institutions nationwide",
      icon: <Building2 className="w-5 h-5 text-[#047857]" />,
    },
  ];

  const milestones = [
    {
      year: "2013",
      date: "February 1, 2013",
      shortDate: "Feb 2013",
      tag: "Company Inception",
      title: "Operations Commenced",
      subtitle: "Originally RL Fernandez Security Agency",
      description:
        "MVPMANILA SECURITY AGENCY INC. (MVPMSAI) began operations on February 1, 2013, initially known as RL Fernandez Security Agency. Starting with a modest team of 42 security guards, the company steadily built its client base, securing 56 solid contracts within the first few months.",
      note: "Started with 42 security guards and 56 solid contracts",
      image: "/images/about-us-mvpmanila/about-us-1.jpeg",
      metric: "42 Guards · 56 Contracts",
      highlights: [
        "First deployment of 42 licensed security personnel",
        "56 commercial contracts secured in opening months",
      ],
      icon: <Users className="w-5 h-5" />,
    },
    {
      year: "2013",
      date: "Mid 2013",
      shortDate: "Mid 2013",
      tag: "Vision & Rebrand",
      title: "Rebranding to MVPMANILA",
      subtitle: "DTI Registration Under Ms. Maria Vivian Perea Manila",
      description:
        "To elevate its presence and competitiveness in the evolving security industry, the company underwent a reorganization and rebranding initiative. It applied for a name change with the Department of Trade and Industry (DTI) to reflect the vision and leadership of its proprietor, Ms. Maria Vivian Perea Manila. This marked the birth of MVPMANILA SECURITY AGENCY.",
      note: "Registered with DTI as MVPMANILA SECURITY AGENCY",
      image: "/images/about-us-mvpmanila/about-us-3.jpeg",
      metric: "DTI Registered · Proprietor Leadership",
      highlights: [
        "Officially named MVPMANILA under Ms. Maria Vivian Perea Manila",
        "Modernized command protocols for competitive commercial security",
      ],
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      year: "2013",
      date: "May 2013",
      shortDate: "May 2013",
      tag: "Regulatory Standards",
      title: "PNP-SOSIA Certification",
      subtitle: "Official Security Agency Certification",
      description:
        "In May 2013, the agency received certification from the PNP Supervisory Office for Security and Investigation Agencies (PNP-SOSIA), confirming full adherence to national security regulations, operational guidelines, and guard force compliance.",
      note: "Certified by PNP Supervisory Office (PNP-SOSIA)",
      image: "/images/about-us-mvpmanila/about-us-6.jpeg",
      metric: "PNP-SOSIA Accredited Agency",
      highlights: [
        "Full certification under PNP supervisory inspection",
        "Firearms validation, tactical training, and guard credentials verified",
      ],
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      year: "2013",
      date: "August 2013",
      shortDate: "Aug 2013",
      tag: "Corporate Registration",
      title: "SEC Corporation Registration",
      subtitle: "Official Name: MVPMANILA SECURITY AGENCY INC.",
      description:
        "By August 2013, it had successfully registered as a corporation under the Securities & Exchange Commission (SEC) with the official corporate name MVPMANILA SECURITY AGENCY INC. (MVPMSAI), institutionalizing its capability to serve nationwide accounts.",
      note: "Officially registered as a corporation under SEC",
      image: "/images/about-us-mvpmanila/about-us-7.jpeg",
      metric: "SEC Registered Corporation",
      highlights: [
        "Official SEC incorporation for nationwide corporate contracting",
        "Expansion into large-scale educational institutions and enterprise campuses",
      ],
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      year: "Present",
      date: "Present Day",
      shortDate: "Present",
      tag: "Decade of Trust",
      title: "Over a Decade of Service",
      subtitle: "Trusted Security Across the Philippines",
      description:
        "With over a decade of dedicated service, MVPMSAI has established itself as a trusted provider of contract security, especially in schools, campuses, and private business institutions across the nation. The agency prides itself on tailoring security solutions to meet the unique needs of each client, resulting in sustainable customer satisfaction.",
      note: "Over 10 years of reliable security service nationwide",
      image: "/images/about-us-mvpmanila/about-us-13.jpeg",
      metric: "10+ Years Nationwide Presence",
      highlights: [
        "Long-standing security partner for top schools and corporate clients",
        "24/7 dedicated dispatch, supervisory mobile patrol, and rapid response",
      ],
      icon: <Award className="w-5 h-5" />,
    },
  ];

  const whyChoosePoints = [
    {
      title: "Over 10 Years of Industry Experience",
      desc: "Proven track record in contract security and safety management since February 2013.",
    },
    {
      title: "Certified and Licensed by PNP-SOSIA",
      desc: "Fully compliant with PNP-SOSIA regulations, standards, and operational guidelines.",
    },
    {
      title: "Registered Corporation Under SEC",
      desc: "Registered corporation under the Securities and Exchange Commission.",
    },
    {
      title: "Specializes in School and Business Security",
      desc: "Trusted protection for schools, universities, and private business establishments.",
    },
    {
      title: "Dedicated to Filipino Employment and Excellence",
      desc: "100% Filipino-owned, committed to creating opportunities for fellow Filipinos.",
    },
    {
      title: "Committed to Client Safety and Satisfaction",
      desc: "Tailored security services that ensure peace of mind for clients today and in the future.",
    },
  ];

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
            PAGE HEADER BANNER — Premium Tactical Style (Matches Services)
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
              {/* LEFT — Breadcrumb + Title */}
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
                    About Us
                  </span>
                </motion.nav>

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
            SECTION 2: CORPORATE HISTORY & EVOLUTION (MVPMSAI)
            Document-backed heritage, CEO Leadership & Timeline
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0] relative overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 md:mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#047857] mb-2 sm:mb-3"
              >
                <span className="w-2 h-0.5 bg-[#047857]" />
                Company History & Profile
                <span className="w-2 h-0.5 bg-[#047857]" />
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] mb-3 sm:mb-5 tracking-tight"
              >
                Corporate History
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="w-12 sm:w-16 h-[3px] bg-[#047857] mx-auto rounded-full mb-3 sm:mb-5"
              />

              <motion.p
                variants={fadeInUp}
                className="font-roboto text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto"
              >
                MVPMANILA SECURITY AGENCY INC. (MVPMSAI) began operations on February 1, 2013. Starting from 42 security guards, we have grown into a trusted security agency serving schools, campuses, and private businesses nationwide.
              </motion.p>
            </motion.div>

            {/* 1. Company Profile Quick Facts (Organized 2x2 on mobile, 4-col on desktop) */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-14"
            >
              {historyProfile.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-[#E2E8F0] rounded-xl p-3.5 sm:p-5 lg:p-6 hover:border-[#047857] hover:shadow-[0_8px_24px_rgba(4,120,87,0.06)] transition-all duration-300"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#047857]/10 flex items-center justify-center mb-2.5 sm:mb-4 text-[#047857]">
                    {item.icon}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#475569] font-bold mb-1">
                    {item.label}
                  </div>
                  <div className="font-montserrat text-sm sm:text-base lg:text-lg font-bold text-[#0A192F] mb-1 leading-snug">
                    {item.value}
                  </div>
                  <p className="font-roboto text-xs sm:text-sm text-[#475569] leading-relaxed mt-1">
                    {item.subtext}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* 2. Leadership Spotlight & Reorganization Story */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm mb-8 sm:mb-16 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">

                {/* LEFT: Executive Founder Profile & Vision Card (Cols 1-5) */}
                <div className="lg:col-span-5 flex flex-col justify-between bg-[#0A192F] rounded-xl sm:rounded-2xl p-5 sm:p-7 text-white relative overflow-hidden border border-[#1E293B] shadow-md">
                  {/* Subtle background tech glow */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20"
                    aria-hidden="true"
                    style={{
                      background: "radial-gradient(circle at 85% 15%, #047857 0%, transparent 60%)"
                    }}
                  />

                  {/* Header / Crest or Portrait */}
                  <div className="relative z-10">
                    {ceoImage ? (
                      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden mb-5 border border-white/10">
                        <Image
                          src={ceoImage}
                          alt="Ms. Maria Vivian Perea Manila"
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 360px"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#047857]/25 border border-[#047857]/50 flex items-center justify-center text-[#34D399]">
                            <ShieldCheck className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#34D399] block">
                              Executive Leadership
                            </span>
                            <span className="text-xs text-white/70 font-medium">
                              Founded February 1, 2013
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-white/50 tracking-wider">
                          MVPMSAI
                        </span>
                      </div>
                    )}

                    {/* Founder Identity */}
                    <div className="mb-4 sm:mb-5">
                      <div className="text-xs uppercase tracking-wider text-[#34D399] font-bold mb-1">
                        Proprietor & Founder
                      </div>
                      <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-white mb-1">
                        Ms. Maria Vivian Perea Manila
                      </h3>
                      <p className="font-roboto text-xs sm:text-sm text-white/70 font-medium">
                        MVPMANILA Security Agency Inc.
                      </p>
                    </div>

                    {/* Founder's Vision Quote */}
                    <div className="bg-white/5 border-l-2 border-[#34D399] rounded-r-lg p-3.5 sm:p-4 mb-4 sm:mb-5">
                      <p className="font-roboto text-sm text-white/95 italic leading-relaxed">
                        &ldquo;As a fully Filipino-owned company, MVPMSAI is committed to creating job opportunities for fellow Filipinos while consistently delivering high-quality security services and adhering to the highest security standards.&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Bottom Credentials Strip */}
                  <div className="relative z-10 pt-3.5 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-white/80 font-medium">
                    <span className="flex items-center gap-1.5 text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                      100% Filipino-Owned
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/75">Nationwide Reach</span>
                    <span className="text-white/40">·</span>
                    <span className="text-white/75">DTI Registered</span>
                  </div>
                </div>

                {/* RIGHT: Company History & Development Narrative (Cols 6-12) */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-[#0A192F] leading-tight mb-3 sm:mb-4">
                      Company History and Development
                    </h3>

                    <div className="space-y-3 font-roboto text-sm sm:text-base text-[#334155] leading-relaxed">
                      <p>
                        MVPMANILA began operations on February 1, 2013, initially known as <strong className="text-[#0A192F] font-semibold">RL Fernandez Security Agency</strong>. Starting with a modest team of 42 security guards, the company steadily built its client base, securing 56 solid contracts within the first few months.
                      </p>
                      <p>
                        To elevate its presence and competitiveness in the evolving security industry, the company underwent a reorganization and rebranding initiative. It applied for a name change with the Department of Trade and Industry (DTI) to reflect the vision and leadership of its proprietor, <strong className="text-[#0A192F] font-semibold">Ms. Maria Vivian Perea Manila</strong>. This marked the birth of MVPMANILA SECURITY AGENCY.
                      </p>
                    </div>

                    {/* 2-Stat Genesis Highlight Grid */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mt-4 sm:mt-6">
                      <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="font-montserrat text-lg sm:text-2xl font-extrabold text-[#0A192F]">
                          42 Guards
                        </div>
                        <div className="font-roboto text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                          Initial security force deployed in February 2013
                        </div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                        <div className="font-montserrat text-lg sm:text-2xl font-extrabold text-[#047857]">
                          56 Contracts
                        </div>
                        <div className="font-roboto text-xs sm:text-sm text-[#475569] mt-0.5 leading-snug">
                          Rapidly secured within the first few months
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Clean Key Points Checkmarks */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-3 border-t border-[#E2E8F0] text-sm text-[#1E293B] font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                      <span>100% Filipino-Owned</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                      <span>PNP-SOSIA Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0" />
                      <span>SEC Registered</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* 3. Key Milestones Timeline */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="mb-8 sm:mb-16"
            >
              <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#047857] mb-1 sm:mb-2">
                  Company Milestones
                </div>
                <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-[#0A192F] mb-1.5 sm:mb-3">
                  Key Milestones in Our Journey
                </h3>
                <p className="font-roboto text-sm sm:text-base text-[#475569]">
                  Explore the critical milestones that shaped MVPMSAI into a trusted security agency nationwide.
                </p>
              </div>

              {/* Interactive Connected Timeline Track */}
              <div className="relative mb-6 sm:mb-10 max-w-4xl mx-auto">
                {/* Horizontal Progress Track for Desktop / Tablet */}
                <div className="hidden sm:block absolute top-[43px] left-[8%] right-[8%] h-[3px] bg-[#E2E8F0] z-0">
                  <div
                    className="h-full bg-[#047857] transition-all duration-500 ease-out"
                    style={{
                      width: `${(activeMilestone / (milestones.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                {/* 5 Stepper Station Buttons */}
                <div className="flex items-center justify-between gap-1 sm:gap-2 overflow-x-auto py-3 sm:py-4 px-2 sm:px-4 no-scrollbar">
                  {milestones.map((m, idx) => {
                    const isActive = activeMilestone === idx;
                    const isPassed = idx < activeMilestone;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveMilestone(idx)}
                        className="relative z-10 flex flex-col items-center shrink-0 min-w-[68px] sm:min-w-[110px] group cursor-pointer focus:outline-none transition-transform"
                      >
                        {/* Stepper Node Icon Circle */}
                        <div
                          className={`w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-300 border ${isActive
                              ? "bg-[#0A192F] text-[#34D399] border-[#047857] shadow-lg scale-110 ring-4 ring-[#047857]/20"
                              : isPassed
                                ? "bg-[#047857] text-white border-[#047857]"
                                : "bg-white text-[#64748B] border-[#CBD5E1] group-hover:border-[#047857] group-hover:text-[#0A192F]"
                            }`}
                        >
                          {m.icon}
                        </div>

                        {/* Date Label */}
                        <span
                          className={`mt-2 font-montserrat text-xs sm:text-sm font-bold transition-colors ${isActive
                              ? "text-[#0A192F]"
                              : "text-[#64748B] group-hover:text-[#0A192F]"
                            }`}
                        >
                          {m.shortDate}
                        </span>

                        {/* Tag Sub-label */}
                        <span
                          className={`hidden sm:inline-block text-[11px] font-medium transition-colors text-center line-clamp-1 max-w-[100px] ${isActive
                              ? "text-[#047857] font-semibold"
                              : "text-[#94A3B8]"
                            }`}
                        >
                          {m.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Featured Milestone Showcase Stage */}
              <motion.div
                key={activeMilestone}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-stretch">

                  {/* LEFT: Contextual Photo & Tactical Badge Overlay (Significantly Enlarged & Prominent) */}
                  <div className="lg:col-span-6 relative w-full h-[320px] sm:h-[420px] lg:h-full min-h-[360px] lg:min-h-[460px] xl:min-h-[500px] rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0] bg-[#0A192F] group shadow-md">
                    <Image
                      src={milestones[activeMilestone].image}
                      alt={milestones[activeMilestone].title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 650px"
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/20 to-transparent" />

                    {/* Top Tag on Image */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 bg-[#0A192F]/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-lg text-white shadow-md">
                      <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                      <span className="text-xs font-bold tracking-wider uppercase">
                        {milestones[activeMilestone].tag}
                      </span>
                    </div>

                    {/* Bottom Metric Bar on Image */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#0A192F]/90 backdrop-blur-md border border-white/20 p-3 sm:p-3.5 rounded-xl text-white shadow-lg">
                      <div className="text-[11px] text-[#34D399] uppercase tracking-wider font-bold mb-0.5">
                        Key Milestone Metric
                      </div>
                      <div className="font-montserrat text-sm sm:text-base font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                        <span>{milestones[activeMilestone].metric}</span>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Milestone Story & Structured Highlights */}
                  <div className="lg:col-span-6 flex flex-col justify-between py-1 lg:py-2">
                    <div>
                      {/* Top Header with Prev/Next Controls */}
                      <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#F1F5F9]">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#047857]">
                          <Calendar className="w-4 h-4 text-[#047857]" />
                          <span>{milestones[activeMilestone].date}</span>
                        </div>

                        {/* Prev / Next Buttons */}
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-[#64748B] font-medium mr-1.5">
                            Phase {activeMilestone + 1} of {milestones.length}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMilestone((prev) =>
                                prev > 0 ? prev - 1 : milestones.length - 1
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] hover:bg-[#047857] hover:text-white hover:border-[#047857] transition-all cursor-pointer"
                            aria-label="Previous Milestone"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              setActiveMilestone((prev) =>
                                prev < milestones.length - 1 ? prev + 1 : 0
                              )
                            }
                            className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] hover:bg-[#047857] hover:text-white hover:border-[#047857] transition-all cursor-pointer"
                            aria-label="Next Milestone"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0A192F] leading-tight mb-1">
                        {milestones[activeMilestone].title}
                      </h4>
                      <p className="font-roboto text-xs sm:text-sm font-semibold text-[#047857] mb-3">
                        {milestones[activeMilestone].subtitle}
                      </p>

                      {/* Main Paragraph */}
                      <p className="font-roboto text-sm sm:text-base text-[#334155] leading-relaxed mb-4">
                        {milestones[activeMilestone].description}
                      </p>

                      {/* Structured 2-Item Accomplishments Bento */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
                        {milestones[activeMilestone].highlights.map((hl, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#047857] shrink-0 mt-0.5" />
                            <span className="font-roboto text-xs sm:text-sm text-[#334155] font-medium leading-snug">
                              {hl}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Official Record Note Banner */}
                    <div className="bg-[#047857]/5 border-l-3 border-[#047857] p-3 rounded-r-xl flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-[#047857] shrink-0" />
                      <span className="font-roboto text-xs sm:text-sm font-semibold text-[#0A192F]">
                        Official Record: {milestones[activeMilestone].note}
                      </span>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>

            {/* 4. Why Choose MVPMSAI? */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-4 sm:p-8 lg:p-10 shadow-sm"
            >
              <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#047857] mb-1 sm:mb-2">
                  Our Commitment
                </div>
                <h3 className="font-montserrat text-xl sm:text-2xl md:text-3xl font-bold text-[#0A192F] mb-1.5 sm:mb-3">
                  Why Choose MVPMSAI?
                </h3>
                <div className="w-12 h-[3px] bg-[#047857] mx-auto rounded-full mb-2.5 sm:mb-4" />
                <p className="font-roboto text-sm sm:text-base text-[#475569] leading-relaxed">
                  MVPMANILA SECURITY AGENCY INC. remains a leader in the contract security sector, delivering tailored protection services that ensure peace of mind for our clients today and into the future.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5">
                {whyChoosePoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-3.5 sm:p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#047857] hover:bg-white transition-all duration-300"
                  >
                    <div className="flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-montserrat font-bold text-sm sm:text-base text-[#0A192F] mb-1">
                          {point.title}
                        </h4>
                        <p className="font-roboto text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 3: THE SECURITY BENTO GRID
            Vision / Mission / Core Values — asymmetric bento layout
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] mb-3 sm:mb-6"
              >
                Foundation of Trust
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-12 sm:w-16 h-[3px] bg-[#047857] mx-auto rounded-full"
              />
            </motion.div>

            {/* Vision + Mission Row */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-5 mb-3 sm:mb-5"
            >
              {pillars.map((pillar, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group relative bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-10 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(4,120,87,0.06)] ${pillar.span}`}
                >
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] group-hover:bg-[#047857]/5 group-hover:text-[#047857] group-hover:border-[#047857]/20 transition-all duration-300 mb-3 sm:mb-6">
                    {pillar.icon}
                  </div>
                  <h3 className="font-montserrat text-lg sm:text-xl font-bold text-[#0A192F] mb-2 sm:mb-4 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="font-roboto text-sm sm:text-base leading-relaxed text-[#475569]">
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
              <div className="flex items-center gap-2.5 sm:gap-4 mb-4 sm:mb-8">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#047857]/10 flex items-center justify-center">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857]" />
                </div>
                <h3 className="font-montserrat text-lg sm:text-xl font-bold text-[#0A192F] tracking-tight">
                  Core Values
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
                {coreValues.map((value, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="group flex items-start gap-3 sm:gap-4 bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-3.5 sm:p-6 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)]"
                  >
                    <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center font-montserrat text-xs sm:text-sm font-bold text-[#475569] group-hover:bg-[#047857] group-hover:text-white group-hover:border-[#047857] transition-all duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-montserrat text-sm sm:text-base font-bold text-[#0A192F] mb-1 group-hover:text-[#047857] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="font-roboto text-xs sm:text-sm text-[#475569] leading-relaxed group-hover:text-[#334155] transition-colors duration-300">
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
            SECTION 4: INDUSTRIES WE PROTECT
            Organized 2-column visual grid on mobile, 4-col on desktop
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-16"
            >
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] mb-3 sm:mb-6"
              >
                Industries We Protect
              </motion.h2>
              <motion.div
                variants={fadeInUp}
                className="w-12 sm:w-16 h-[3px] bg-[#047857] mx-auto rounded-full"
              />
            </motion.div>

            {/* Responsive 2-column grid on phones instead of endless 1-column scroll */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-5"
            >
              {industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="group relative bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#047857] hover:shadow-[0_12px_32px_rgba(4,120,87,0.1)] transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative w-full overflow-hidden aspect-[4/3]">
                    <Image
                      src={industry.image}
                      alt={industry.title}
                      fill
                      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${industry.zoom ? "scale-125 group-hover:scale-150" : ""}`}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/70 via-[#0A192F]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white mb-1.5 sm:mb-2">{industry.icon}</div>
                      <h4 className="font-montserrat font-bold text-white text-xs sm:text-sm leading-snug">
                        {industry.title}
                      </h4>
                    </div>
                  </div>
                  <div className="p-2.5 sm:p-5">
                    <div className="font-mono text-xs font-semibold text-[#64748B] tracking-widest uppercase mb-1 sm:mb-2 group-hover:text-[#047857] transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </div>
                    <h4 className="font-montserrat font-bold text-[#0A192F] text-xs sm:text-sm leading-snug group-hover:text-[#047857] transition-colors duration-300 line-clamp-2">
                      {industry.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 5: COMPETENCIES
            Split layout — image left, checklist right
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header — centered */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 mb-2 sm:mb-4"
              >
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857]" />
                <span className="font-roboto text-xs sm:text-sm font-semibold text-[#047857] tracking-wider uppercase">
                  Our Expertise
                </span>
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A192F] tracking-tight"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-8 sm:mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[190px] sm:h-[300px] lg:h-[420px] w-full"
              >
                <div className="row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-1.jpeg" alt="Security personnel briefing" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-13.jpeg" alt="Security operations" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-14.jpeg" alt="CCTV surveillance" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={staggerContainer} className="space-y-2.5 sm:space-y-4 lg:space-y-6">
                {competencies.slice(0, 3).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl text-[#334155] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Row 2 — Competencies 4-6 Left (right-aligned on desktop, left on mobile) | Images Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-8 sm:mb-12"
            >
              <motion.div variants={staggerContainer} className="space-y-2.5 sm:space-y-4 lg:space-y-6 order-2 lg:order-1 flex flex-col items-start text-left lg:items-end lg:text-right">
                {competencies.slice(3, 6).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-2.5 sm:gap-3 lg:flex-row-reverse">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl text-[#334155] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[190px] sm:h-[300px] lg:h-[420px] w-full order-1 lg:order-2"
              >
                <div className="row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-4.jpeg" alt="Building security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-5.jpeg" alt="Event security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-3.jpeg" alt="Campus protection" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center mb-8 sm:mb-12"
            >
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[190px] sm:h-[300px] lg:h-[420px] w-full"
              >
                <div className="row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-7.jpeg" alt="Guard deployment" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-8.jpeg" alt="CCTV installation" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-9.jpeg" alt="Risk assessment" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
              <motion.div variants={staggerContainer} className="space-y-2.5 sm:space-y-4 lg:space-y-6">
                {competencies.slice(6, 9).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-2.5 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl text-[#334155] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Row 4 — Competencies 10-11 Left | Images Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center"
            >
              <motion.div variants={staggerContainer} className="space-y-2.5 sm:space-y-4 lg:space-y-6 order-2 lg:order-1 flex flex-col items-start text-left lg:items-end lg:text-right">
                {competencies.slice(9, 11).map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="flex items-start gap-2.5 sm:gap-3 lg:flex-row-reverse">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#047857] shrink-0 mt-0.5" />
                    <span className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl text-[#334155] font-medium leading-snug">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 h-[190px] sm:h-[300px] lg:h-[420px] w-full order-1 lg:order-2"
              >
                <div className="row-span-2 relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-10.jpeg" alt="Investigation team" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A192F]/40 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-11.jpeg" alt="VIP security" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]">
                  <Image src="/images/about-us-mvpmanila/about-us-12.jpeg" alt="Security consultancy" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/30 to-transparent" />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════
            SECTION 6: LOGISTICS & SUPPORT
            Bento cards with image
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.div
                  variants={fadeInUp}
                  className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#047857] uppercase tracking-wider mb-2 sm:mb-4"
                >
                  <Truck className="w-4 h-4 text-[#047857]" />
                  <span>Operational Assets</span>
                </motion.div>

                <motion.h2
                  variants={fadeInUp}
                  className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] mb-3 sm:mb-6 tracking-tight"
                >
                  Logistics & Support
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="font-roboto text-sm sm:text-base md:text-lg text-[#475569] mb-5 sm:mb-10 leading-relaxed"
                >
                  Behind every secure operation is our commitment to dependable logistics and support. We equip our detachments with the highest grade of operational assets.
                </motion.p>

                {/* 2x2 grid for mobile & tablet instead of 4 giant stacked cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {logistics.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="group bg-white border border-[#E2E8F0] rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-[#047857] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)]"
                    >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#0A192F] group-hover:bg-[#047857]/5 group-hover:text-[#047857] group-hover:border-[#047857]/20 transition-all duration-300 mb-2 sm:mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-montserrat font-bold text-[#0A192F] text-sm sm:text-base mb-1 group-hover:text-[#047857] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="font-roboto text-xs sm:text-sm text-[#475569] leading-relaxed">
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
                className="relative h-[200px] sm:h-[320px] lg:h-[550px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0]"
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
            SECTION 7: PERMITS, LICENSES & COMPLIANCE
            Government and operational compliance
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-10 sm:py-16 md:py-24 bg-white border-t border-[#E2E8F0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center mb-8 sm:mb-16"
            >
              <motion.div
                variants={fadeInUp}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-[#047857]/10 border border-[#047857]/20 flex items-center justify-center mx-auto mb-3 sm:mb-6"
              >
                <Award className="w-5 h-5 sm:w-7 sm:h-7 text-[#047857]" />
              </motion.div>
              <motion.h2
                variants={fadeInUp}
                className="font-montserrat text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] mb-3 sm:mb-6 tracking-tight"
              >
                Permits, Licenses & Compliance
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="font-roboto text-sm sm:text-base md:text-lg text-[#475569] leading-relaxed max-w-3xl mx-auto"
              >
                MVPManila Security Agency Inc. strictly complies with all government-mandated business permits, licenses, registrations, certifications, and memberships.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3.5"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`group flex items-start gap-2.5 sm:gap-3 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#047857] hover:bg-white hover:shadow-[0_4px_20px_rgba(4,120,87,0.06)] transition-all duration-300 ${idx === certifications.length - 1 && certifications.length % 3 === 1
                      ? "md:col-start-2"
                      : ""
                    }`}
                >
                  <div className="shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#047857] group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <span className="font-roboto text-xs sm:text-sm font-medium text-[#0F172A] leading-relaxed group-hover:text-[#0A192F] transition-colors duration-300">
                    {cert}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Compliance Ticker (Organized 2x2 on mobile, flex row on tablet/desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-2.5 sm:gap-6 md:gap-10 py-4 sm:py-7 px-3.5 sm:px-6 rounded-xl sm:rounded-2xl bg-[#0A192F]"
            >
              {[
                "PNP-SOSIA Compliant",
                "DOLE Registered",
                "Fully Bonded & Insured",
                "RA-11917 Certified",
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center justify-center sm:justify-start gap-1.5 sm:gap-2.5 text-center sm:text-left">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#047857] shadow-[0_0_8px_rgba(4,120,87,0.6)]" />
                  <span className="font-roboto text-xs sm:text-sm font-semibold text-white">
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
