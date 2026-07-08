"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
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

type TabId = "skilled" | "nonskilled" | "professional";

const tabs: { id: TabId; label: string; number: string }[] = [
  { id: "skilled", label: "Skilled", number: "01" },
  { id: "nonskilled", label: "Non-Skilled", number: "02" },
  { id: "professional", label: "Professional", number: "03" },
];

const tabContent: Record<TabId, { title: string; subtitle: string; description: string; items: { title: string; description: string }[] }> = {
  skilled: {
    title: "Skilled Manpower Solutions",
    subtitle: "Technical Personnel with Guaranteed Expertise",
    description: "Competent and technically proficient personnel equipped with the right operational expertise and necessary TESDA/professional certifications to execute specialized on-site maintenance.",
    items: [
      { title: "Maintenance Staff", description: "General facility repairs, structural troubleshooting, and equipment checkups." },
      { title: "Electricians", description: "Commercial wiring maintenance, power grid monitoring, and electrical safety compliance." },
      { title: "Plumbers", description: "Complex commercial piping systems, drainage tracking, and preventative plumbing repairs." },
      { title: "Professional Drivers", description: "Highly disciplined corporate, executive, and logistics deployment drivers with clean traffic records." }
    ]
  },
  nonskilled: {
    title: "Non-Skilled Manpower Solutions",
    subtitle: "Reliable Operational & Environmental Support Services",
    description: "Highly trained, courteous, and efficient personnel focused on maintaining pristine environmental hygiene, sanitation protocols, and smooth facility movement.",
    items: [
      { title: "Janitorial Services", description: "Comprehensive commercial building cleaning, surface sterilization, and floor maintenance." },
      { title: "Housekeeping Units", description: "Structured hospitality and accommodation room preparation and maintenance management." },
      { title: "Messengerial Support", description: "Punctual and trustworthy document tracking, office routing, and bank transaction handling." },
      { title: "Parking Attendants", description: "Systematic vehicle entry/exit mapping, parking space organization, and customer assistance." }
    ]
  },
  professional: {
    title: "Professional Staffing Solutions",
    subtitle: "Functional Administrative & Corporate Support",
    description: "Dynamic, highly articulate, and functional office workers capable of integrating seamlessly into your business units to optimize clerical workflows.",
    items: [
      { title: "Liaison Officers", description: "Swift institutional processing, external corporate communication, and government documentation routing." },
      { title: "Finance Assistants", description: "Ledger bookkeeping support, petty cash auditing, and basic billing reconciliations." },
      { title: "Admin Assistants & Support Staff", description: "Modern office scheduling, document control, reception desk handling, and general clerical assistance." }
    ]
  }
};

export default function ManpowerServicesClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("skilled");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1: PREMIUM TACTICAL PAGE BANNER
          Ultra-modern corporate header with abstract background textures
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-white overflow-hidden border-b border-[#E2E8F0] pt-20">
        {/* ── Radial gradient base ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FFFFFF 0%, #F8FAFC 100%)",
          }}
        />

        {/* ── LEFT: Vertical tech lines (blueprint margins) ── */}
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.1] to-transparent" style={{ left: "8%" }} aria-hidden="true" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#0A192F]/[0.08] to-transparent" style={{ left: "8.5%" }} aria-hidden="true" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-[#047857]/[0.1] to-transparent" style={{ left: "9%" }} aria-hidden="true" />

        {/* ── RIGHT: Isometric radar/sonar rings ── */}
        <div className="absolute top-1/2 -translate-y-1/2 pointer-events-none" style={{ right: "-5%", opacity: 0.12 }} aria-hidden="true">
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
        <div className="absolute bottom-0 right-0 pointer-events-none" style={{ opacity: 0.07 }} aria-hidden="true">
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
                <span className="font-roboto text-sm text-[#CBD5E1]">Manpower</span>
                <span className="font-roboto text-sm text-[#CBD5E1]">/</span>
                <span className="font-roboto text-sm font-medium text-[#047857] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#047857]" />
                  Services
                </span>
              </motion.nav>

              {/* Page Title */}
              <motion.h1
                variants={fadeInUp}
                className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#0A192F] leading-[1.05] tracking-[-0.02em]"
              >
                Services
              </motion.h1>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Introductory Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-12">
            <p className="text-slate-600 leading-[1.8] text-lg font-light">
              At MVPManila, we delicately offer corporate service solutions tailored exactly to our clients' evolving institutional needs. We do not just deploy personnel; we manage an ecosystem of highly vetted, thoroughly evaluated, and legally compliant workers. More importantly, we believe that operational excellence on the field begins with the outstanding care and protection of our workforce.
            </p>
          </div>
        </div>
      </section>

      {/* Manpower Segments — Bento Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Our Manpower Segments
            </h2>
          </div>

          {/* Mobile: Text Tabs */}
          <div className="lg:hidden">
            <div className="flex border-b border-slate-200 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-center font-montserrat text-xs uppercase tracking-wider transition-colors border-b-2 -mb-px ${activeTab === tab.id
                    ? "text-[#0A192F] border-[#0A192F] font-bold"
                    : "text-slate-400 border-transparent font-medium hover:text-slate-600"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">
                  {tabs.find(t => t.id === activeTab)?.number}
                </span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-2 uppercase tracking-[0.15em]">
                {tabContent[activeTab].title}
              </h3>
              <p className="text-[#047857] text-xs font-medium mb-6 uppercase tracking-wider">
                {tabContent[activeTab].subtitle}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                {tabContent[activeTab].description}
              </p>
              <div className="space-y-4">
                {tabContent[activeTab].items.map((item, i) => (
                  <div key={i} className="border-t border-slate-100 pt-4">
                    <h4 className="font-montserrat font-semibold text-[#0A192F] text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Bento Grid */}
          <div className="hidden lg:grid grid-cols-12 gap-px bg-slate-200">
            {/* Skilled — Large Card (spans 2 rows, 5 cols) */}
            <div className="col-span-5 row-span-2 bg-white p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">01</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-2 uppercase tracking-[0.15em]">
                Skilled Manpower Solutions
              </h3>
              <p className="text-[#047857] text-xs font-medium mb-6 uppercase tracking-wider">
                Technical Personnel with Guaranteed Expertise
              </p>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-light">
                Competent and technically proficient personnel equipped with the right operational expertise and necessary TESDA/professional certifications to execute specialized on-site maintenance.
              </p>
              <div className="space-y-4 mt-auto">
                {tabContent.skilled.items.map((item, i) => (
                  <div key={i} className="border-t border-slate-100 pt-4">
                    <h4 className="font-montserrat font-semibold text-[#0A192F] text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Skilled — Medium Card (spans 1 row, 4 cols) */}
            <div className="col-span-4 bg-white p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">02</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-2 uppercase tracking-[0.15em]">
                Non-Skilled Manpower Solutions
              </h3>
              <p className="text-[#047857] text-xs font-medium mb-6 uppercase tracking-wider">
                Reliable Operational & Environmental Support
              </p>
              <div className="space-y-4">
                {tabContent.nonskilled.items.map((item, i) => (
                  <div key={i} className="border-t border-slate-100 pt-4">
                    <h4 className="font-montserrat font-semibold text-[#0A192F] text-sm mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs font-light">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Professional — Small Accent Card (spans 1 row, 3 cols) */}
            <div className="col-span-3 bg-[#0A192F] p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">03</span>
                <span className="w-8 h-px bg-slate-600" />
              </div>
              <h3 className="text-sm font-bold text-white font-montserrat mb-2 uppercase tracking-[0.15em]">
                Professional Staffing
              </h3>
              <p className="text-slate-400 text-xs font-medium mb-4 uppercase tracking-wider">
                Administrative & Corporate Support
              </p>
              <div className="space-y-3">
                {tabContent.professional.items.map((item, i) => (
                  <div key={i} className="border-t border-white/10 pt-3">
                    <h4 className="font-montserrat font-semibold text-white text-xs mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-[11px] font-light leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary Stat — Small Card (spans 1 row, 3 cols) */}
            <div className="col-span-3 bg-slate-100 p-10 flex flex-col justify-center">
              <span className="text-4xl font-bold text-[#0A192F] font-montserrat mb-2">3</span>
              <span className="text-sm font-bold text-[#0A192F] font-montserrat uppercase tracking-wider mb-4">
                Manpower Categories
              </span>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                End-to-end workforce solutions across technical, operational, and corporate functions.
              </p>
            </div>

            {/* Summary Stat — Small Card (spans 1 row, 4 cols) */}
            <div className="col-span-4 bg-slate-100 p-10 flex flex-col justify-center">
              <span className="text-4xl font-bold text-[#0A192F] font-montserrat mb-2">100%</span>
              <span className="text-sm font-bold text-[#0A192F] font-montserrat uppercase tracking-wider mb-4">
                DOLE Compliant Deployment
              </span>
              <p className="text-slate-500 text-xs font-light leading-relaxed">
                Every personnel is fully vetted, medically cleared, and legally documented before on-site deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Deployment Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Our Team Deployment
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              Showcasing our active, compliant, and resilient manpower units deployed across premier national institutions and commercial estates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
            {/* Column 1 (Desktop): Stacked Landscape Cards (img4 and img2) */}
            <div className="space-y-8 flex flex-col justify-between">
              {/* Card 1: Other Deployment (Landscape img4) */}
              <div className="group">
                <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden rounded-md border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src="/images/mvpmanila-manpower/img1.png"
                    alt="Active Field Operations & Multi-Use Real Estate Maintenance"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
              </div>

              {/* Card 2: UST Hospital (Landscape img2) */}
              <div className="group">
                <div className="relative w-full h-[200px] md:h-[260px] overflow-hidden rounded-md border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                  <Image
                    src="/images/mvpmanila-manpower/img2.png"
                    alt="UST Legazpi Hospital"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="transition-transform duration-500 group-hover:scale-102"
                  />
                </div>
                <p className="text-xs font-mono text-slate-500 uppercase mt-2 tracking-wider">
                  Claret School of Quezon City
                </p>
              </div>
            </div>

            {/* Column 2 (Desktop): Tall Portrait Card (img1) */}
            <div className="group h-full">
              <div className="relative w-full h-[360px] md:h-[576px] overflow-hidden rounded-md border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src="/images/mvpmanila-manpower/img4.png"
                  alt="University of Santo Tomas – Legazpi"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 512px"
                  className="transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase mt-2 tracking-wider">
                University of Santo Tomas – Legazpi
              </p>
            </div>

            {/* Bottom Row spanning full width (Desktop): Card 4 (Landscape img3) */}
            <div className="col-span-1 md:col-span-2 group">
              <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-md border border-slate-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src="/images/mvpmanila-manpower/img3.png"
                  alt="Claret School of Quezon City"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 1024px"
                  className="transition-transform duration-500 group-hover:scale-102"
                />
              </div>
              <p className="text-xs font-mono text-slate-500 uppercase mt-2 tracking-wider">
                UST Legazpi Hospital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Protocols & Performance Control */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Hiring & Operation
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-light">
              MVPMANILA MANPOWER SERVICES (MVPMS) has managed its operations thru the following discipline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {[
              {
                number: "01",
                title: "Flexible & Systematic Shifting",
                description: "All deployed manpower follows a strict Seven (7) to Fifteen (15) Days Change Shifting Cycle (unless specified or requested otherwise by clients for special events) to eliminate physical fatigue and ensure 24/7 field vigilance."
              },
              {
                number: "02",
                title: "Data-Driven Appraisals",
                description: "Personnel undergo rigorous performance evaluations on a Quarterly and Annual Basis. Results are shared transparently with client administrators to maintain a self-improving manpower ecosystem."
              },
              {
                number: "03",
                title: "Mandatory Medical Clearance",
                description: "To ensure maximum health compliance, the agency conducts a strict Annual Physical Examination (APE) and Annual Random Drug Testing for all deployed personnel nationwide."
              }
            ].map((protocol, index) => (
              <div key={index} className="bg-white p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">{protocol.number}</span>
                  <span className="w-8 h-px bg-slate-300" />
                </div>
                <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-wider">
                  {protocol.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {protocol.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Welfare & Benefits Ecosystem — B2B Value Proposition */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Employee Welfare Protection Program
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light">
              True operational excellence comes from financial protection and compliance. Our institutional-grade welfare infrastructure is a core B2B value proposition.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-slate-200">
            {/* Accident Protection — Hero Card */}
            <div className="bg-white p-10 lg:row-span-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">01</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-[0.15em]">
                Guaranteed Accident Protection Program
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                We heavily protect our valuable field assets. All deployed technical and janitorial units are covered by a robust accident protection program, significantly subsidized by the agency under Standard Insurance. This ensures your facilities remain safe and completely insulated from liability issues.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs uppercase tracking-wider">Coverage Highlights</span>
                <ul className="mt-4 space-y-3">
                  {[
                    "Subsidized by agency under Standard Insurance",
                    "Covers all deployed technical and janitorial units",
                    "Shields client facilities from liability exposure",
                    "Accident and injury claims fully managed by MVPManila"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                      <span className="w-1 h-1 rounded-full bg-[#047857] mt-2 flex-shrink-0" />
                      <span className="text-slate-600 text-xs font-light leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Statutory Compliance */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">02</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-[0.15em]">
                Rigid Statutory Compliance & Remittance
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                MVPManila strictly mandates the regular and punctual remittance of all government-mandated employee contributions. For every billing cycle, our clients are proactively provided with verifiable copies of paid remittance slips.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <div className="space-y-3">
                  {[
                    { label: "SSS", detail: "Social Security System — complete and punctual monthly remittance" },
                    { label: "PhilHealth", detail: "National health insurance — 100% employer share compliance" },
                    { label: "Pag-IBIG", detail: "Home Development Mutual Fund — mandatory contribution compliance" }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-montserrat font-bold text-[#0A192F] text-xs">{item.label}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cashless Payroll */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">03</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-4 uppercase tracking-[0.15em]">
                Cashless Payroll Infrastructure
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-6">
                To eliminate delays in field wages, our financial system is backed by a professional, cashless banking integration with BDO. Personnel receive their standard legal salaries on time, every time.
              </p>
              <div className="border-t border-slate-100 pt-6">
                <div className="space-y-3">
                  {[
                    { label: "BDO Integration", detail: "Direct deposit payroll via BDO corporate banking" },
                    { label: "On-Time Release", detail: "Standard legal salaries disbursed every cycle without fail" },
                    { label: "Transparent Auditing", detail: "Verifiable payroll records available for client review" }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-montserrat font-bold text-[#0A192F] text-xs">{item.label}</span>
                      </div>
                      <p className="text-slate-500 text-[11px] font-light leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </>
  );
}
