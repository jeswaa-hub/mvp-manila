"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import Image from "next/image";
import LegalModal from "./legal-modal";

interface FooterProps {
  showScrollTop?: boolean;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function Footer({ showScrollTop = false }: FooterProps) {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: "privacy" | "terms" }>({ isOpen: false, type: "privacy" });

  const openLegalModal = (type: "privacy" | "terms") => setLegalModal({ isOpen: true, type });
  const closeLegalModal = () => setLegalModal({ isOpen: false, type: "privacy" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className="bg-[#0A192F] text-white pt-20 pb-8 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:text-left lg:gap-16 mb-16">
          {/* Column 1: Brand Authority */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Image
              src="/images/logo1.jpg"
              alt="MVPManila Logo"
              width={100}
              height={100}
              className="rounded-md mb-6"
            />
            <h3 className="font-montserrat font-bold text-2xl text-white tracking-tight mb-4">
              MVPManila
            </h3>
            <p className="font-roboto text-sm text-slate-400 leading-relaxed mb-6">
              Securing people, facilities, and assets with reliability and integrity since 2013.
            </p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                href="mailto:mvpmanila2013@yahoo.com"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                aria-label="Email"
              >
                <Mail size={18} className="text-slate-400 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="tel:83537353"
                className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors group"
                aria-label="Call"
              >
                <Phone size={18} className="text-slate-400 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Office Locations */}
          <div>
            <h4 className="font-montserrat font-bold text-sm text-white tracking-wider mb-6 uppercase">
              Office Locations
            </h4>
            <div className="space-y-6">
              <div>
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-montserrat font-semibold text-sm text-white mb-1">
                      Main Office (Manila)
                    </p>
                    <p className="font-roboto text-sm text-slate-400 leading-relaxed">
                      1269 Estrada Street<br />
                      Brgy. 749, Sta. Ana<br />
                      Manila 1009, Philippines
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="font-montserrat font-semibold text-sm text-white mb-1">
                      Satellite Office (Legazpi)
                    </p>
                    <p className="font-roboto text-sm text-slate-400 leading-relaxed">
                      272 Purok 2, Brgy. 40<br />
                      Washington Drive, Cruzada<br />
                      Legazpi City 4500, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Professional Contact */}
          <div>
            <h4 className="font-montserrat font-bold text-sm text-white tracking-wider mb-3 uppercase">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-3">
                  <Phone size={14} className="text-gold shrink-0" />
                  <div>
                    <p className="font-roboto text-xs text-slate-500 mb-0.5">Landline</p>
                    <a href="tel:83537353" className="font-roboto text-sm text-white hover:text-gold transition-colors">
                      8353-7353
                    </a>
                    <span className="font-roboto text-xs text-slate-500 mx-1">/</span>
                    <a href="tel:83736860" className="font-roboto text-sm text-white hover:text-gold transition-colors">
                      8373-6860
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-3">
                  <Phone size={14} className="text-gold shrink-0" />
                  <div>
                    <p className="font-roboto text-xs text-slate-500 mb-0.5">Mobile</p>
                    <a href="tel:09258771953" className="font-roboto text-sm text-white hover:text-gold transition-colors">
                      0925-8771953
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-roboto text-xs text-slate-500">
              &copy; {new Date().getFullYear()} MVPManila Security Agency Inc. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => openLegalModal("privacy")}
                className="font-roboto text-xs text-slate-500 hover:text-gold transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openLegalModal("terms")}
                className="font-roboto text-xs text-slate-500 hover:text-gold transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gold text-white rounded-full shadow-lg hover:shadow-xl hover:bg-emerald-700 transition-all z-50 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.footer>

      <LegalModal
        isOpen={legalModal.isOpen}
        onClose={closeLegalModal}
        type={legalModal.type}
      />
    </>
  );
}
