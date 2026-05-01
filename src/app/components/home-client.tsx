"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  ShieldCheck, 
  FileBadge, 
  Users, 
  Building2, 
  HeartHandshake
} from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import Header from "./header";

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

export default function HomeClient() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow pt-20">
        <section 
          id="home" 
          className="relative h-[90vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-navy"
          aria-label="Welcome to MVP Manila Security Agency"
        >
          <motion.div 
            className="absolute inset-0 z-0 w-full h-[120%]"
            style={{ y: isMounted ? scrollY * 0.5 : 0 }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3840&auto=format&fit=crop"
              alt="Modern corporate skyscrapers representing secure facilities and corporate integrity"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
            />
          </motion.div>

          <div className="absolute inset-0 z-10 bg-navy/60 mix-blend-multiply" aria-hidden="true" />
          <div className="absolute inset-0 z-10 bg-linear-to-t from-navy/95 via-navy/50 to-transparent" aria-hidden="true" />
          <div className="absolute inset-0 z-10 bg-linear-to-b from-navy/80 via-transparent to-transparent" aria-hidden="true" />
          
          <div className="relative z-20 w-full max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center mt-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.08, delayChildren: 0.3 }
                }
              }}
              className="mb-6"
            >
              <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                {"Securing people, facilities, and assets with reliability, integrity, and service excellence.".split(" ").map((word, i) => (
                  <motion.span 
                    key={i} 
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                    }} 
                    className="inline-block mr-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="font-roboto text-lg md:text-xl lg:text-2xl text-gold mb-10 font-medium tracking-wide"
            >
              Together we can, Together we will.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
            >
              <button 
                className="group relative flex items-center justify-center bg-gold text-navy font-bold py-4 px-10 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
                aria-label="Learn more about MVP Manila Security Agency services"
              >
                <span className="relative z-10 font-montserrat text-base md:text-lg">Learn More About Us</span>
                <div className="absolute inset-0 h-full w-0 bg-yellow-400 transition-all duration-300 ease-out group-hover:w-full z-0"></div>
              </button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20 bg-slate">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24"
            >
              <motion.div variants={fadeInUp} className="flex gap-8 items-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-xs text-gray-500 text-center px-2">Logo 1 Placeholder</span>
                </div>
                <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  <span className="text-xs text-gray-500 text-center px-2">Logo 2 Placeholder</span>
                </div>
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

        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading>Why Choose MVP Manila</SectionHeading>
            
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

        <section className="py-20 bg-gray-50 border-y border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
            <h3 className="font-montserrat text-2xl font-bold text-navy">Agency Employee&apos;s Welfare Program & Legal Partners</h3>
          </div>
          
          <div className="relative w-full flex overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-gray-50 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-gray-50 to-transparent pointer-events-none"></div>
            
            <div className="flex w-max animate-marquee">
              {[...Array(3)].map((_, arrayIndex) => (
                <div key={arrayIndex} className="flex justify-around items-center shrink-0 min-w-max gap-16 px-8">
                  {["Standard Insurance", "Rite Care Doctors Clinic", "Taytay Doctors Hospital", "Loseriaga Carullo Law Firm"].map((partner, i) => (
                    <div key={`${arrayIndex}-${i}`} className="flex flex-col items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 w-48">
                      <div className="w-32 h-16 bg-gray-200 rounded-md mb-2 flex items-center justify-center text-[10px] text-gray-500 text-center px-2 shrink-0">Logo Placeholder</div>
                      <span className="font-roboto font-medium text-sm text-gray-600 text-center">{partner}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <SectionHeading>Awards, Certificate of Appreciation & Service Excellence</SectionHeading>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-24"
            >
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div 
                  key={`award-${item}`}
                  variants={fadeInUp}
                  className={`bg-slate rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${
                    item === 1 || item === 4 ? "md:row-span-2 md:col-span-2 aspect-video md:aspect-auto" : "aspect-square"
                  }`}
                >
                  <div className="w-full h-full min-h-[200px] flex items-center justify-center text-gray-400 font-roboto text-sm bg-gray-100">
                    Certificate Image {item}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <SectionHeading className="mb-16!">Network with Law Enforcement & Safety Groups</SectionHeading>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto"
            >
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.div 
                  key={`badge-${i}`}
                  variants={fadeInUp}
                  className="w-20 h-20 md:w-24 md:h-24 bg-slate rounded-full shadow-inner border border-gray-200 flex items-center justify-center hover:-translate-y-1 transition-transform cursor-pointer group"
                >
                  <span className="text-[10px] text-gray-400 text-center px-2 group-hover:text-navy transition-colors">Badge {i + 1}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}