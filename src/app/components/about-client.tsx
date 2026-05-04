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
  Award
} from "lucide-react";
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

export default function AboutClient() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logistics = [
    { icon: <Radio className="w-6 h-6" />, title: "Communications", desc: "State-of-the-art radio & dispatch systems." },
    { icon: <Truck className="w-6 h-6" />, title: "Response Vehicles", desc: "Rapid deployment and emergency transport." },
    { icon: <Siren className="w-6 h-6" />, title: "Fire Safety", desc: "Advanced fire suppression and monitoring." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Weapons Asset", desc: "Licensed and strictly regulated armory." },
  ];

  const coreValues = [
    "God-fearing", "Humble", "Loyal", "Integrity", "Reliability", "Service Excellence-driven"
  ];

  const industries = [
    { icon: <Building2 className="w-8 h-8" />, title: "Commercial & High-Rise Buildings" },
    { icon: <GraduationCap className="w-8 h-8" />, title: "Educational Institutions (Schools & Campuses)" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Multinational Corporations & BPOs" },
    { icon: <HeartPulse className="w-8 h-8" />, title: "Healthcare Facilities & Hospitals" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, title: "Hospitality (Hotels & Restaurants)" },
    { icon: <Store className="w-8 h-8" />, title: "Retail Centers & Malls" },
    { icon: <Factory className="w-8 h-8" />, title: "Industrial, Manufacturing & Logistics" },
    { icon: <Home className="w-8 h-8" />, title: "Residential Subdivisions & Condominiums" }
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
    "Security Consultancy"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header 
        isScrolled={isScrolled} 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      <main className="grow pt-20">
      <section 
        className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-navy"
        aria-label="About MVPManila Security Agency"
      >
        <motion.div 
          className="absolute inset-0 z-0 w-full h-[120%]"
          style={{ y: isMounted ? scrollY * 0.4 : 0 }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2670&auto=format&fit=crop"
            alt="Professional security guards standing in line"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        
        <div className="absolute inset-0 z-10 bg-navy/70 mix-blend-multiply" aria-hidden="true" />
        <div className="absolute inset-0 z-10 bg-linear-to-t from-navy/90 via-navy/40 to-transparent" aria-hidden="true" />

        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6"
            >
              ABOUT US
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="font-roboto text-xl md:text-2xl text-gold font-medium tracking-wide max-w-3xl mx-auto"
            >
              We deliver professional security services founded on integrity, expertise, and commitment.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-8 uppercase tracking-wide"
            >
              WELCOME TO MVPMANILA SECURITY AGENCY INC.
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-gold mx-auto mb-10 rounded-full"
            />
            <motion.p 
              variants={fadeInUp}
              className="font-roboto text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
            >
              MVPManila Security Agency Inc. (MVPMSAI) offers Total Security Solutions designed to cope with current security trends. We take pride in having gained the confidence of hundreds of clients nationwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white p-10 md:p-12 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-8 text-navy">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-navy mb-4">Our Vision</h3>
              <p className="font-roboto text-[15px] leading-[1.8] text-gray-600 grow">
                Be the leader in providing competent, functional & resilient security and manpower services with an end result of being one of the finest services provider in the country.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-[#0A192F] p-10 md:p-12 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_rgba(10,25,47,0.3)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
              
              <div className="w-14 h-14 bg-[#1a2b45] rounded-xl flex items-center justify-center mb-8 text-gold relative z-10">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-white mb-4 relative z-10">Our Mission</h3>
              <p className="font-roboto text-[15px] leading-[1.8] text-gray-300 grow relative z-10">
                To effectively provide SECURITY & MANPOWER SOLUTIONS for every business establishment, multinational corporations, schools, universities, and events nationwide, servicing fellow Filipinos to create more jobs helping this industry to grow further.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white p-10 md:p-12 rounded-[16px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full md:col-span-2 relative overflow-hidden"
            >
              <div className="absolute -bottom-10 -right-10 text-gray-50 opacity-50 pointer-events-none rotate-12">
                <Star className="w-64 h-64" />
              </div>

              <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start relative z-10 h-full">
                <div className="shrink-0 w-full md:w-1/3">
                  <div className="w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center text-gold mb-6">
                    <Star className="w-7 h-7" />
                  </div>
                  <h3 className="font-montserrat text-3xl font-bold text-navy leading-tight">
                    Our Core <br className="hidden md:block" />
                    <span className="text-gold">Values</span>
                  </h3>
                  <div className="w-12 h-1 bg-gray-200 mt-6 rounded-full" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 w-full mt-2 md:mt-0">
                  {coreValues.map((value, idx) => (
                    <div 
                      key={idx} 
                      className="group flex items-start gap-4"
                    >
                      <div className="mt-1 font-montserrat text-xs font-bold text-gray-300 group-hover:text-gold transition-colors duration-300 w-6">
                        0{idx + 1}.
                      </div>
                      <div>
                        <h4 className="font-montserrat text-lg font-bold text-navy group-hover:text-gold transition-colors duration-300 mb-1">
                          {value}
                        </h4>
                        <div className="h-[2px] w-0 bg-gold group-hover:w-8 transition-all duration-500 ease-out" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6"
            >
              Industries We Protect
            </motion.h2>
            <motion.div 
              variants={fadeInUp}
              className="w-24 h-1 bg-gold mx-auto rounded-full" 
            />
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group bg-white border border-[#E2E8F0] rounded-[16px] overflow-hidden hover:shadow-[0_12px_32px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Placeholder - 4:3 Aspect Ratio */}
                <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] aspect-video flex items-center justify-center border-b border-[#E2E8F0]">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <div className="text-sm font-roboto text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Industry Image
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="font-mono text-xs font-semibold text-gray-400 group-hover:text-gold transition-colors duration-300 tracking-widest uppercase">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <h4 className="font-montserrat font-bold text-navy group-hover:text-gold transition-colors duration-300 text-base md:text-lg leading-snug mt-4">
                    {industry.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                alt="Security personnel in a professional briefing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-navy/60 to-transparent"></div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                variants={fadeInUp}
                className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-10"
              >
                Competencies
              </motion.h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {competencies.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                    <span className="font-roboto text-gray-700 font-medium leading-tight">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4"
            >
              The Management
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group flex flex-col items-center"
              >
                <div className="w-48 h-48 bg-slate rounded-full mb-6 overflow-hidden border-4 border-white shadow-lg group-hover:border-gold transition-colors duration-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-roboto text-sm">
                    Photo Placeholder
                  </div>
                </div>
                <h4 className="font-montserrat font-bold text-xl text-navy mb-1">Executive Name</h4>
                <p className="font-roboto text-gold font-medium text-sm mb-3 uppercase tracking-wider">Board Director</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6">
                Logistics & Support
              </h2>
              <p className="font-roboto text-lg text-gray-600 mb-8 leading-relaxed">
                Behind every secure operation is our commitment to dependable logistics and support. We equip our detachments with the highest grade of operational assets.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {logistics.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-navy mb-3">{item.icon}</div>
                    <h4 className="font-montserrat font-bold text-navy text-sm mb-2">{item.title}</h4>
                    <p className="font-roboto text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=2080&auto=format&fit=crop"
                alt="Security logistics and tactical equipment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-navy/20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6">
              Permits, Licenses & Membership
            </h2>
            <p className="font-roboto text-lg text-gray-600 leading-relaxed mb-12 max-w-4xl mx-auto">
              Like any other businesses, MVPMANILA SECURITY AGENCY INC (MVPMSAI) strictly complies with all government mandated business permits, licenses, registrations, certifications and memberships such as:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
              {[
                'SEC Registration', 
                'License to Operate (valid until September 2029)', 
                'Business / Mayor’s Permit', 
                'BIR Certificate of Registration',
                'BIR Tax Clearance Certificate',
                'Firearms Licenses (Authentic, Validated)',
                'Firearms & Explosive Office (FEO) PNP, CAMP CRAME, QC - 2024 - 2028',
                'SSS CERTIFICATE OF REGISTRATION 2025 (security)',
                'Security Agency DOLE 174-17 2024 Certificate of Registration 2024-2026',
                'DOLE Non-Pending Case Certificate for CY 2024-2025',
                'NLRC Non-Pending Case Certificate for CY 2024-2025',
                'Telecommunication & Radio Licenses, NTC License Certification'
              ].map((cert, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate border border-gray-100 hover:border-gold hover:shadow-md transition-all duration-300 group">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-roboto text-sm font-medium text-navy leading-snug">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      </main>

      <Footer showScrollTop={showScrollTop} />
    </div>
  );
}