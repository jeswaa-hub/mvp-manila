"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BadgeCheck, FileText } from "lucide-react";
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

interface CredentialType {
  title: string;
  number: string;
  description: string;
  images: string[];
  span?: string;
  authority?: string;
  issued?: string;
  type?: string;
}

function CredentialCard({
  credential,
  onView
}: {
  credential: CredentialType;
  onView: (credential: CredentialType, initialIndex: number) => void;
}) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const hasMultiple = credential.images.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? credential.images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === credential.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className={`bg-white border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between ${credential.span || ""}`}
    >
      <div 
        className="relative w-full h-[250px] bg-slate-100 overflow-hidden cursor-pointer"
        onClick={() => onView(credential, currentIdx)}
      >
        <Image
          src={credential.images[currentIdx]}
          alt={`${credential.title} - Page ${currentIdx + 1}`}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
        />
        
        {/* Navigation arrows overlay (only if multiple images) */}
        {hasMultiple && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button 
              onClick={handlePrev}
              className="bg-white/90 hover:bg-white text-[#0A192F] p-1.5 rounded-full shadow-md hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white/90 hover:bg-white text-[#0A192F] p-1.5 rounded-full shadow-md hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Page dot indicators (only if multiple images) */}
        {hasMultiple && (
          <div className="absolute bottom-4 left-4 flex gap-1 z-10">
            {credential.images.map((_, i) => (
              <span 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === currentIdx ? "w-4 bg-white" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
          <button 
            className="bg-white text-[#0A192F] px-4 py-2 text-xs font-semibold hover:bg-slate-100 transition-colors tracking-wider uppercase shadow-sm cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onView(credential, currentIdx);
            }}
          >
            View
          </button>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="font-montserrat font-bold text-[#0A192F] text-sm mb-2 tracking-tight">
            {credential.title}
          </h4>
          <p className="text-[#047857] text-xs font-medium mb-2 uppercase tracking-wider">
            {credential.number}
          </p>
        </div>
        <p className="text-slate-400 text-xs leading-relaxed font-light mt-2">
          {credential.description}
        </p>
      </div>
    </div>
  );
}

export default function ManpowerAboutClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCredential, setSelectedCredential] = useState<CredentialType | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedCredential) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCredential]);

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

      {/* Brand Narrative Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-t border-slate-200 pt-12">
            <p className="text-slate-600 leading-[1.8] text-lg mb-8 font-light">
              Established in 2022, MVPManila Manpower Services was founded with a singular, resolute mission: to effectively bridge the gap between premium business establishments and competent, dedicated Filipino workers.
            </p>
            <p className="text-slate-600 leading-[1.8] text-lg font-light">
              Led and managed by our President and CEO, <span className="text-[#0A192F] font-medium">Maria Vivian Perea Manila</span>, our agency has grown into a resilient and highly trusted service partner nationwide. Even amidst previous global pandemics and shifts in the economic climate, our field personnel have remained standing on the ground—unwaveringly serving, maintaining, and protecting our valuable clientele across multi-use real estate, educational institutions, and healthcare complexes.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, & Strategic Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-px bg-slate-200">
            {/* Mission */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">01</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-6 uppercase tracking-[0.15em]">
                Our Mission
              </h3>
              <p className="text-slate-500 leading-[1.8] text-sm font-light">
                To effectively provide tailored manpower solutions for business establishments, multinational corporations, schools, universities, and high-profile events nationwide—servicing fellow Filipinos by creating sustainable jobs and proactively driving industry growth.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">02</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-6 uppercase tracking-[0.15em]">
                Our Vision
              </h3>
              <p className="text-slate-500 leading-[1.8] text-sm font-light">
                To be the pioneering leader in providing highly competent, structural, functional, and efficient manpower services with an end result of being recognized as one of the finest and most reliable service providers in the country.
              </p>
            </div>

            {/* Strategic Values */}
            <div className="bg-white p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em]">03</span>
                <span className="w-8 h-px bg-slate-300" />
              </div>
              <h3 className="text-sm font-bold text-[#0A192F] font-montserrat mb-6 uppercase tracking-[0.15em]">
                Our Strategic Values
              </h3>
              <p className="text-slate-400 text-xs mb-6 uppercase tracking-wider">
                Our organization operates rigidly under a distinct code of institutional behavior:
              </p>
              <div className="space-y-4">
                {[
                  { label: "God-fearing", description: "We anchor our practices in strong ethical governance." },
                  { label: "Loyalty & Respect", description: "Cultivating long-term trust with our employees and partners." },
                  { label: "Integrity & Reliability", description: "Uncompromising transparency in all legal and billing compliance." },
                  { label: "Service Excellence-driven", description: "Delivering strict operational protocols on every deployment." }
                ].map((value, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                    <span className="font-montserrat font-semibold text-xs text-[#0A192F] uppercase tracking-wider">{value.label}</span>
                    <span className="text-slate-400 text-xs"> — {value.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Framework & Legal Counsel */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Our Corporate Management Group
            </h2>
            <p className="text-slate-400 max-w-xl text-sm">
              Guided by experienced administrators to ensure seamless deployment and zero operational downtime.
            </p>
          </div>

          {/* President & CEO */}
          <div className="border border-slate-200 p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 border border-slate-300 flex items-center justify-center flex-shrink-0">
                <span className="text-[#0A192F] font-montserrat font-bold text-sm tracking-wider">MVM</span>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-montserrat uppercase tracking-[0.2em] mb-1">President & CEO</p>
                <h3 className="text-xl font-bold text-[#0A192F] font-montserrat tracking-tight">
                  Maria Vivian Perea Manila
                </h3>
              </div>
            </div>
          </div>

          {/* Operational Divisions */}
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 mb-8">
            <div className="bg-white p-8">
              <p className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em] mb-6">01</p>
              <h4 className="font-montserrat font-bold text-[#0A192F] mb-4 text-sm uppercase tracking-wider">
                Operational Division
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Managing on-site personnel deployments, shift rotation scheduling (7-to-15 days cycles), and continuous quarterly and annual performance reviews.
              </p>
            </div>

            <div className="bg-white p-8">
              <p className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em] mb-6">02</p>
              <h4 className="font-montserrat font-bold text-[#0A192F] mb-4 text-sm uppercase tracking-wider">
                Human Resources & Welfare Unit
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Overseeing legal background checks, mandatory health evaluations (Annual Physical Exams and drug testings), and remittance operations.
              </p>
            </div>

            <div className="bg-white p-8">
              <p className="text-[#047857] font-montserrat font-bold text-xs tracking-[0.2em] mb-6">03</p>
              <h4 className="font-montserrat font-bold text-[#0A192F] mb-4 text-sm uppercase tracking-wider">
                Finance & Payroll Group
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed font-light">
                Mandating precise, cashless payroll releases securely backed up by our banking integration partner, BDO.
              </p>
            </div>
          </div>

          {/* Institutional Legal Counsel */}
          <div className="border border-slate-200 p-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[#047857] font-montserrat font-bold text-xs uppercase tracking-[0.2em]">Institutional Legal Counsel</span>
              <span className="flex-1 h-px bg-slate-200" />
            </div>
            <p className="text-slate-500 leading-relaxed text-sm font-light">
              To guarantee maximum compliance with existing labor statutes and administrative mandates, our entire nationwide operational landscape is rigidly advised and legally protected by the <span className="text-[#0A192F] font-medium">Loseriaga Carullo Tulay Law Firm</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Gallery */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] font-montserrat mb-4 tracking-tight">
              Credentials, Registrations & Certifications
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm">
              Absolute legal compliance is non-negotiable. Below is our verified documentation ecosystem validating our capacity to operate legally under Department of Labor and Employment (DOLE) mandates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DTI Registration",
                number: "Business Name No. 3346939",
                description: "Duly registered since December 3, 2021",
                images: [
                  "/images/mvpmanila-manpower/papers/dti-image-2.jpeg"
                ],
                authority: "Department of Trade and Industry (DTI)",
                issued: "Dec 03, 2021",
                type: "National Registration Name Certificate"
              },
              {
                title: "BIR Form 2303",
                number: "Certificate of Registration",
                description: "Official certificate for strict tax compliances",
                images: [
                  "/images/mvpmanila-manpower/papers/bir-form.jpeg"
                ],
                authority: "Bureau of Internal Revenue (BIR)",
                issued: "Compliance Active",
                type: "Taxpayer Registration Certificate"
              },
              {
                title: "Business Permit",
                number: "Current Calendar Year",
                description: "Fully cleared and updated for operations",
                images: [
                  "/images/mvpmanila-manpower/papers/business-image-1.jpeg",
                  "/images/mvpmanila-manpower/papers/business-image-2.jpeg",
                  "/images/mvpmanila-manpower/papers/business-image-3.jpeg"
                ],
                authority: "City of Manila LGU",
                issued: "Annual Renewal Active",
                type: "Local Government Unit Business Permit"
              },
              {
                title: "DOLE D.O. 174-17 Certificate",
                number: "Official Registration",
                description: "Registration license from Department of Labor and Employment",
                images: ["/images/mvpmanila-manpower/papers/dole-certificate.jpeg"],
                authority: "Department of Labor and Employment (DOLE)",
                issued: "Verified Active",
                type: "Contractor Registration Certificate"
              },
              {
                title: "DOLE Non-Pending Case Certificate",
                number: "Complete Clearance",
                description: "Verifying clean institutional and corporate standing",
                images: ["/images/mvpmanila-manpower/papers/dole-non-pending.jpeg"],
                authority: "DOLE Regional Office",
                issued: "Current Compliance",
                type: "Certificate of Non-Pending Case"
              },
              {
                title: "NLRC Non-Pending Case Certificate",
                number: "Official Clearance",
                description: "Showing zero labor issues from National Labor Relations Commission",
                images: ["/images/mvpmanila-manpower/papers/nlrc-non-pending.jpeg"],
                authority: "National Labor Relations Commission (NLRC)",
                issued: "Current Compliance",
                type: "Certificate of Clearance"
              },
              {
                title: "SSS, PhilHealth & Pag-IBIG",
                number: "Certificates of Compliance",
                description: "Full registration validating complete and punctual remittance of statutory contributions",
                images: [
                  "/images/mvpmanila-manpower/papers/sss-certificate.png",
                  "/images/mvpmanila-manpower/papers/philhealth-certificate.jpeg",
                  "/images/mvpmanila-manpower/papers/employer-data.png"
                ],
                authority: "SSS, PhilHealth, Pag-IBIG Funds",
                issued: "Compliance Active",
                type: "Statutory Contributions Compliance",
                span: "md:col-span-2 lg:col-span-3"
              }
            ].map((credential, index) => (
              <CredentialCard 
                key={index} 
                credential={credential} 
                onView={(cred, startIdx) => {
                  setSelectedCredential(cred);
                  setActiveImageIndex(startIdx);
                  setShowSidebar(false);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Code of Discipline & Training Standards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0A192F] font-montserrat tracking-tight">
              Operational Directives
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="border border-slate-200 p-8 md:p-12 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[#047857] font-montserrat font-bold text-xs uppercase tracking-[0.2em]">The Handbook Directive</span>
                <span className="flex-1 h-px bg-slate-200" />
              </div>
              <p className="text-slate-500 leading-[1.8] text-base mb-6 font-light">
                Every deployment under the MVPManila banner is strictly bounded by our proprietary Agency Policy Handbook. This comprehensive framework is embedded into our mandatory Manpower Code of Discipline, followed meticulously by all technical, housekeeping, and professional units deployed nationwide.
              </p>
              <p className="text-[#0A192F] leading-[1.8] text-base font-medium">
                Our strict preparation protocols assure our corporate partners that every worker who steps foot into their facility is fully vetted, medically cleared, highly trained, and legally compliant.
              </p>
            </div>

            {/* Preparation Protocols */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
              {[
                { step: "01", title: "Fully Vetted", description: "Comprehensive background verification" },
                { step: "02", title: "Medically Cleared", description: "Annual physical exams & drug testing" },
                { step: "03", title: "Highly Trained", description: "Agency policy handbook certification" },
                { step: "04", title: "Legally Compliant", description: "Complete statutory documentation" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 text-center">
                  <span className="text-[#047857] font-montserrat font-bold text-2xl">{item.step}</span>
                  <h4 className="font-montserrat font-bold text-[#0A192F] mt-4 mb-2 text-xs uppercase tracking-wider">{item.title}</h4>
                  <p className="text-slate-400 text-xs font-light">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedCredential && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 md:p-6 transition-all duration-300 animate-fadeIn"
          onClick={() => setSelectedCredential(null)}
        >
          {/* Modal Content container - Split Layout */}
          <div 
            className="relative max-w-5xl w-full h-[90vh] md:h-[80vh] bg-[#0A192F] border border-white/10 shadow-2xl rounded-2xl flex flex-col md:flex-row overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              className="absolute top-4 right-4 text-white/50 hover:text-white p-2 hover:bg-white/5 rounded-full transition-all z-50 cursor-pointer"
              onClick={() => setSelectedCredential(null)}
              aria-label="Close inspector"
            >
              <X size={20} />
            </button>

            {/* LEFT / CENTER STAGE: Image Canvas */}
            <div className="relative flex-1 bg-slate-950/40 p-6 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-white/5 select-none">
              {/* Paper Canvas Shadow Wrap */}
              <div className="relative w-full max-w-[90%] md:max-w-none md:h-full max-h-[68vh] aspect-[1/1.414] bg-white shadow-[0_15px_45px_rgba(0,0,0,0.4)] border border-slate-200/80 p-2 md:p-3 transition-transform duration-300 hover:scale-[1.01] flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedCredential.images[activeImageIndex]}
                    alt={`${selectedCredential.title} large view - Page ${activeImageIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Floating Controls Row */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
                {selectedCredential.images.length > 1 && (
                  <div className="bg-slate-900/95 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-4 text-white text-xs shadow-lg font-mono">
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? selectedCredential.images.length - 1 : prev - 1))}
                      className="hover:text-[#34D399] transition-colors p-1 cursor-pointer flex items-center justify-center animate-pulse"
                      aria-label="Previous page"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="select-none text-slate-300">
                      Page <strong className="text-white font-semibold">{activeImageIndex + 1}</strong> of <strong className="text-white font-semibold">{selectedCredential.images.length}</strong>
                    </span>
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev === selectedCredential.images.length - 1 ? 0 : prev + 1))}
                      className="hover:text-[#34D399] transition-colors p-1 cursor-pointer flex items-center justify-center animate-pulse"
                      aria-label="Next page"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                )}
                
                {/* Info Button for Mobile Drawer Toggle */}
                <button 
                  onClick={() => setShowSidebar(true)}
                  className="bg-slate-900/95 border border-white/10 hover:bg-slate-800 text-white px-4 py-2 rounded-full backdrop-blur-md transition-all md:hidden cursor-pointer shadow-lg flex items-center gap-1.5 text-xs font-semibold select-none"
                >
                  <FileText size={14} className="text-[#34D399]" />
                  Info
                </button>
              </div>
            </div>

            {/* RIGHT STAGE: Inspector Sidebar (Desktop Only) */}
            <div className="hidden md:flex w-[340px] shrink-0 p-8 flex-col justify-between bg-[#0C1E36]/30 overflow-y-auto">
              <div className="space-y-6">
                {/* Badge and Title */}
                <div className="space-y-2 text-left">
                  <div className="inline-flex items-center gap-1.5 bg-[#047857]/10 border border-[#047857]/20 text-[#34D399] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    <BadgeCheck size={12} className="shrink-0" />
                    Verified Compliance
                  </div>
                  <h3 className="font-montserrat font-bold text-white text-lg tracking-tight leading-snug">
                    {selectedCredential.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <FileText size={12} className="shrink-0" />
                    {selectedCredential.number}
                  </div>
                </div>

                <div className="h-px bg-white/10" />

                {/* Metadata Properties */}
                <div className="space-y-4 text-left">
                  {selectedCredential.authority && (
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                        Issuing Authority
                      </span>
                      <p className="text-white text-xs font-light leading-relaxed">
                        {selectedCredential.authority}
                      </p>
                    </div>
                  )}

                  {selectedCredential.type && (
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                        Document Classification
                      </span>
                      <p className="text-white text-xs font-light">
                        {selectedCredential.type}
                      </p>
                    </div>
                  )}

                  {selectedCredential.issued && (
                    <div className="space-y-1">
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                        Compliance Status
                      </span>
                      <p className="text-white text-xs font-light">
                        {selectedCredential.issued}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Details Sidebar Drawer Overlay */}
            {showSidebar && (
              <div 
                className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-xs md:hidden transition-all duration-300"
                onClick={() => setShowSidebar(false)}
              >
                <div 
                  className="absolute bottom-0 inset-x-0 bg-[#0A192F] border-t border-white/10 p-6 rounded-t-2xl max-h-[60vh] overflow-y-auto space-y-6"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center">
                    <div className="inline-flex items-center gap-1.5 bg-[#047857]/10 border border-[#047857]/20 text-[#34D399] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      <BadgeCheck size={12} className="shrink-0" />
                      Verified Compliance
                    </div>
                    <button 
                      onClick={() => setShowSidebar(false)}
                      className="text-white/40 hover:text-white text-xs font-semibold cursor-pointer py-1 px-3 bg-white/5 border border-white/10 rounded-full transition-colors"
                    >
                      Done
                    </button>
                  </div>

                  <div className="space-y-1 text-left">
                    <h3 className="font-montserrat font-bold text-white text-base tracking-tight leading-snug">
                      {selectedCredential.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <FileText size={12} className="shrink-0" />
                      {selectedCredential.number}
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  {/* Metadata Properties */}
                  <div className="space-y-4 text-left">
                    {selectedCredential.authority && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                          Issuing Authority
                        </span>
                        <p className="text-white text-xs font-light leading-relaxed">
                          {selectedCredential.authority}
                        </p>
                      </div>
                    )}

                    {selectedCredential.type && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                          Document Classification
                        </span>
                        <p className="text-white text-xs font-light">
                          {selectedCredential.type}
                        </p>
                      </div>
                    )}

                    {selectedCredential.issued && (
                      <div className="space-y-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold block">
                          Compliance Status
                        </span>
                        <p className="text-white text-xs font-light">
                          {selectedCredential.issued}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
