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

export default function ManpowerCareersClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                  Careers & Contact
                </span>
              </motion.nav>

              {/* Page Title */}
              <motion.h1
                variants={fadeInUp}
                className="font-montserrat text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold text-[#0A192F] leading-[1.05] tracking-[-0.02em]"
              >
                Careers & Contact
              </motion.h1>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main 2-Column Partition */}
      <section className="bg-[#F8FAFC]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 border-b border-slate-200">

            {/* ───────── LEFT COLUMN: Corporate Clients ───────── */}
            <div className="border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Header Band */}
              <div className="border-b border-slate-200 px-8 lg:px-12 py-6 bg-white">
                <span className="text-[#047857] font-montserrat font-bold text-[10px] tracking-[0.25em] uppercase block mb-2">For Corporate Clients</span>
                <h2 className="text-xl font-bold text-[#0A192F] font-montserrat tracking-tight">
                  Institutional Manpower Solutions
                </h2>
              </div>

              {/* Addresses */}
              <div className="px-8 lg:px-12 py-10 border-b border-slate-200 bg-white">
                <h3 className="text-[10px] font-bold text-[#047857] font-montserrat uppercase tracking-[0.2em] mb-6">Office Locations</h3>
                <div className="grid sm:grid-cols-2 gap-px bg-slate-200">
                  <div className="bg-white p-6">
                    <span className="text-[10px] font-bold text-[#0A192F] font-montserrat uppercase tracking-wider block mb-3">Main Office (Manila)</span>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      1269 Estrada Street, Brgy. 749, Zone 81,<br />
                      Sta. Ana, Manila 1009, Philippines
                    </p>
                  </div>
                  <div className="bg-white p-6">
                    <span className="text-[10px] font-bold text-[#0A192F] font-montserrat uppercase tracking-wider block mb-3">Office (Legazpi)</span>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      72 Purok 2, Brgy. 40, Washington Drive,<br />
                      Cruzada, Legazpi City 4500, Philippines
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="px-8 lg:px-12 py-10 bg-white">
                <h3 className="text-[10px] font-bold text-[#047857] font-montserrat uppercase tracking-[0.2em] mb-6">Communication Channels</h3>
                <div className="space-y-0">
                  {[
                    { label: "Landline Operations", value: "(8) 353-7353" },
                    { label: "Mobile Operations", value: "(0925) 877-1953" },
                    { label: "Secure B2B Email", value: "mvpmanila2013@yahoo.com" },
                  ].map((channel, i) => (
                    <div key={i} className="border-b border-slate-100 py-4 last:border-0">
                      <span className="text-[10px] font-bold text-[#047857] font-montserrat uppercase tracking-wider block mb-1">{channel.label}</span>
                      <span className="text-[#0A192F] font-medium text-sm">{channel.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ───────── RIGHT COLUMN: Job Seekers ───────── */}
            <div>
              {/* Header Band */}
              <div className="border-b border-slate-200 px-8 lg:px-12 py-6 bg-white">
                <span className="text-[#047857] font-montserrat font-bold text-[10px] tracking-[0.25em] uppercase block mb-2">For Job Seekers</span>
                <h2 className="text-xl font-bold text-[#0A192F] font-montserrat tracking-tight">
                  Join Our Workforce
                </h2>
              </div>

              {/* Qualifications Checklist */}
              <div className="px-8 lg:px-12 py-10 border-b border-slate-200 bg-white">
                <h3 className="text-[10px] font-bold text-[#047857] font-montserrat uppercase tracking-[0.2em] mb-6">Pre-Employment Qualifications</h3>
                <div className="space-y-0">
                  {[
                    { title: "Valid Government ID", detail: "Any issued government identification card for identity verification." },
                    { title: "NBI / Police Clearance", detail: "Clearance certificate confirming no pending criminal records." },
                    { title: "Medical Certificate", detail: "Passing the agency's Annual Physical Examination (APE) and drug testing." },
                    { title: "TESDA Certification (if applicable)", detail: "Required for all skilled technical positions including electricians, plumbers, and maintenance staff." },
                    { title: "Resume / Curriculum Vitae", detail: "Updated resume with complete contact details and employment history." },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-100 py-4 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="w-4 h-4 border border-slate-300 flex-shrink-0 mt-0.5 flex items-center justify-center">
                          <span className="text-[#047857] text-[10px] font-bold">{i + 1}</span>
                        </span>
                        <div>
                          <span className="font-montserrat font-semibold text-[#0A192F] text-xs block mb-1">{item.title}</span>
                          <span className="text-slate-400 text-[11px] font-light leading-relaxed">{item.detail}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4-Step Pipeline */}
              <div className="px-8 lg:px-12 py-10 bg-white">
                <h3 className="text-[10px] font-bold text-[#047857] font-montserrat uppercase tracking-[0.2em] mb-6">4-Step Recruitment Pipeline</h3>
                <div className="space-y-0">
                  {[
                    { step: "01", title: "Systematic Vetting & Interview", description: "Comprehensive assessment of background documents and technical capacity verification." },
                    { step: "02", title: "Comprehensive Protocol Briefing", description: "Intensive orientation regarding the MVPManila Policy Handbook and client-specific field protocols." },
                    { step: "03", title: "Code of Discipline Induction", description: "Formal evaluation and alignment with the agency's strict Manpower Code of Discipline." },
                    { step: "04", title: "Assured Resilient Deployment", description: "Official on-site deployment backed by a cashless payroll setup under BDO." },
                  ].map((item, i) => (
                    <div key={i} className="border-b border-slate-100 py-4 last:border-0">
                      <div className="flex items-start gap-3">
                        <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em] flex-shrink-0 mt-0.5">{item.step}</span>
                        <div>
                          <span className="font-montserrat font-semibold text-[#0A192F] text-xs block mb-1">{item.title}</span>
                          <span className="text-slate-400 text-[11px] font-light leading-relaxed">{item.description}</span>
                        </div>
                      </div>
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
