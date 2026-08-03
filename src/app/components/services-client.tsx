"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, ShieldAlert, Camera, Activity } from "lucide-react";
import Header from "./header";
import Footer from "./footer";

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

export default function ServicesClient() {
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow pt-20">
        {/* ═══════════════════════════════════════════════════════════
            PAGE HEADER BANNER — Premium Tactical Style
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
                    Services
                  </span>
                </motion.nav>

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

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="w-24 h-24 mx-auto mb-10 bg-gray-100  flex items-center justify-center border-4 border-gray-50 shadow-sm"
              >
                <Image
                  src="/images/logo1.jpg"
                  alt="MVPManila Security Agency logo"
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                  sizes="96px"
                />
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="font-roboto text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto"
              >
                MVPManila Security Agency Inc. (MVPMSAI) offers an extensive range of security management services that can be customized to correspond to a particular customers&apos; need. Our Central Operation Team will do an on-site visit and evaluation to create a plan for a tailor fit course of action and solutions. Our goal is to provide security services that will meet customer&apos;s total satisfaction.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <section className="bg-slate py-12">
          <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/industries/img9.png"
                    alt="Corporate building protection"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <ShieldCheck className="w-8 h-8 text-gold" />
                    <span className="font-montserrat font-bold text-navy text-sm md:text-base">Protection Services</span>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="order-1 lg:order-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy font-montserrat text-xs font-bold tracking-wider mb-6 w-max">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    SERVICE 01
                  </div>
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                    UNIVERSITIES, COLLEGES, CAMPUSES AND BUILDING PROTECTION SERVICES
                  </h2>
                                      <p className="font-roboto text-black text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Campuses & Building Protection Services. We have stationed our security officers wherever additional security is required. Our officers are available to work in a corporate environment as well. First thing in the morning to last thing at night, welcoming your visitors, providing cover, patrolling your premises, securing vulnerabilities and helping you as well.
                  </p>
                  <div className="bg-white p-6 rounded-xl border-l-4 border-gold shadow-sm mt-4">
                    <p className="font-roboto text-gray-800 text-[15px] font-medium leading-[1.7]">
                      <span className="text-gold font-bold mr-2">Key Highlight:</span>
                      MVPMSAI is compliant with PNP-SOSIA Directives as mandated by RA-11917. But no matter what level of security you need, we will deploy trained security personnel on your premises. To employ security and safety, peace and order.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp} className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy font-montserrat text-xs font-bold tracking-wider mb-6 w-max">
                    <ShieldAlert className="w-4 h-4 text-gold" />
                    SERVICE 02
                  </div>
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                    UNIVERSITIES, COLLEGES, BUILDINGS AND EVENT SECURITY MANAGEMENT
                  </h2>
                                      <p className="font-roboto text-black text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Campuses, Buildings and Event Security Management. With our trained security officers we have been able to diffuse any situation that may have had potential to grow. Our team is fully wired for quick response and assistance from one officer to another. Our goal is to keep the environment peaceful and to make certain that the whole safety and security of the activities and the event is truly a success without any unnecessary incidents nor accidents.
                  </p>
                  <div className="bg-slate p-6 rounded-xl border-l-4 border-gold shadow-sm mt-4">
                    <p className="font-roboto text-gray-800 text-[15px] font-medium leading-[1.7]">
                      <span className="text-gold font-bold mr-2">Key Highlight:</span>
                      Whether you prefer active, proactive or resilient type of security, MVPMSAI will accommodate to satisfy your requirements.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/industries/GolfHill.jpeg"
                    alt="Event security management team"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <span className="font-montserrat font-bold text-navy text-sm md:text-base">Security Management</span>
                    <ShieldAlert className="w-8 h-8 text-gold" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp} className="order-2 lg:order-1 relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/industries/img11.jpeg" 
                    alt="CCTV and electronic surveillance systems"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <Camera className="w-8 h-8 text-gold" />
                    <span className="font-montserrat font-bold text-navy text-sm md:text-base">Electronic Surveillance</span>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeInUp} className="order-1 lg:order-2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy font-montserrat text-xs font-bold tracking-wider mb-6 w-max">
                    <Camera className="w-4 h-4 text-gold" />
                    SERVICE 03
                  </div>
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                    DESIGN AND INSTALLATION OF CLOSED CIRCUIT TELEVISION (CCTV) SYSTEM
                  </h2>
                                      <p className="font-roboto text-black text-[15px] md:text-base leading-[1.8]">
                    MVPMSAI offers Closed Circuit Television (CCTV) Systems design and installation. Our Central Technical team will do a detailed site analysis and evaluation to create a highly efficient and reliable electronic surveillance systems solution.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                <motion.div variants={fadeInUp} className="flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy/5 text-navy font-montserrat text-xs font-bold tracking-wider mb-6 w-max">
                    <Activity className="w-4 h-4 text-gold" />
                    SERVICE 04
                  </div>
                  <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                    SECURITY RISK ANALYSIS AND PLANNING
                  </h2>
                  <p className="font-roboto text-black text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Security Risk Analysis and Planning. We understand that you have invested heavily in your business and you need to ensure it remains safe, secure and viable. Being better prepared reassures your customers and suppliers that you take security seriously. It is good for you, your business and reputation.
                  </p>
                  <p className="font-roboto text-black text-[14px] leading-[1.7] italic bg-slate p-6 rounded-xl border-l-2 border-gray-300">
                    Our aim is to make you aware of the threats your business may be vulnerable to, from both outside and within your operations. In reality, your business is more likely to suffer from the effects of theft, burglary, fraud, fire, etc. However, these unfriendly elements are always looking for ways to exploit the vulnerabilities of those they wish to damage. By remaining vigilant, being security minded and having an in-placed security measures, We can help to protect your business against this group of people and individuals.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/industries/img12.jpeg"
                    alt="Security risk analysis data and planning"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent"></div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex items-center gap-4">
                    <span className="font-montserrat font-bold text-navy text-sm md:text-base">Risk Analysis</span>
                    <Activity className="w-8 h-8 text-gold" />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

        </section>
      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}
