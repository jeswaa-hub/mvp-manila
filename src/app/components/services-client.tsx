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
    setIsMounted(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsScrolled(window.scrollY > 20);
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
          className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-navy"
          aria-label="MVP Manila Security Agency Services"
        >
          <motion.div 
            className="absolute inset-0 z-0 w-full h-[120%]"
            style={{ y: isMounted ? scrollY * 0.4 : 0 }}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1621252179027-9d226a27e74d?q=80&w=2670&auto=format&fit=crop"
              alt="Diverse team of security personnel in an active professional stance"
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
                SERVICES
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="font-roboto text-xl md:text-2xl text-gold font-medium tracking-wide max-w-3xl mx-auto"
              >
                Security and Safety solution tailored to client&apos;s needs.
              </motion.p>
            </motion.div>
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
                className="w-24 h-24 mx-auto mb-10 bg-gray-100 rounded-full flex items-center justify-center border-4 border-gray-50 shadow-sm"
              >
                <span className="text-xs text-gray-400">Logo</span>
              </motion.div>
              
              <motion.p 
                variants={fadeInUp}
                className="font-roboto text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
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
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
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
                  <p className="font-roboto text-gray-600 text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Campuses & Building Protection Services. We have stationed our security officers wherever additional security is required. Our officers are available to work in a corporate environment as well. First thing in the morning to last thing at night, welcoming your visitors, providing cover, patrolling your premises, securing vulnerabilities and helping you as well.
                  </p>
                  <div className="bg-white p-6 rounded-xl border-l-4 border-gold shadow-sm mt-4">
                    <p className="font-roboto text-gray-800 text-[15px] font-medium leading-[1.7]">
                      <span className="text-gold font-bold mr-2">Key Highlight:</span>
                      MVPMSAI is compliant with PNP-SOSIA Directives as mandated by RA-11917. But no matter what our security officers are wearing, rest assured that we will deploy our highly-trained security professionals on your place. MVPMSAI is proud of its service and every security personnel carries our badge with pride.
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
                  <p className="font-roboto text-gray-600 text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Campuses, Buildings and Event Security Management. With our highly-trained security officers we have been able to diffuse any situation that may have had potential to grow. Our team is fully wired for quick response and assistance from one officer to another. Our goal is to keep the environment peaceful and to make certain that the whole safety and security of the activities and the event is truly a success without any unnecessary incidents nor accidents.
                  </p>
                  <div className="bg-slate p-6 rounded-xl border-l-4 border-gold shadow-sm mt-4">
                    <p className="font-roboto text-gray-800 text-[15px] font-medium leading-[1.7]">
                      <span className="text-gold font-bold mr-2">Key Highlight:</span>
                      Whether you prefer formal attire or tactical-type officer&apos;s clothing, MVPMSAI will accommodate to satisfy your requirements.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
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
                    src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=2056&auto=format&fit=crop"
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
                  <p className="font-roboto text-gray-600 text-[15px] md:text-base leading-[1.8]">
                    MVPMSAI offers Closed Circuit Television (CCTV) Systems design and installation. Our Central Technical team will do a detailed site analysis and evaluation to create a highly efficient and reliable electronic surveillance system&apos;s solution.
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
                  <p className="font-roboto text-gray-600 text-[15px] md:text-base leading-[1.8] mb-6">
                    MVPMSAI offers Security Risk Analysis and Planning. We understand that you have invested heavily in your business and you need to ensure it remains safe, secure and viable. Being better prepared reassures your customers and suppliers that you take security seriously. It is good for you, your business and reputation.
                  </p>
                  <p className="font-roboto text-gray-500 text-[14px] leading-[1.7] italic bg-slate p-6 rounded-xl border-l-2 border-gray-300">
                    Our aim is to make you aware of the threats your business may be vulnerable to, from both outside and within your operations. In reality, your business is more likely to suffer from the effects of theft, burglary, fraud, fire, etc. However, these unfriendly elements are always looking for ways to exploit the vulnerabilities of those they wish to damage. By remaining vigilant, being security minded and having an in-placed security measures, We can help to protect your business against this group of people and individuals.
                  </p>
                </motion.div>

                <motion.div variants={fadeInUp} className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
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