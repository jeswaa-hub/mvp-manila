"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface FooterProps {
  showScrollTop?: boolean;
}

export default function Footer({ showScrollTop = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy text-white pt-16 pb-8 border-t-4 border-gold relative">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        <div>
          <div className="font-montserrat font-bold text-2xl text-white tracking-tight mb-6">
            MVP MANILA
          </div>
          <p className="font-roboto text-gray-300 leading-relaxed mb-6">
            Securing people, facilities, and assets with reliability, integrity, and service excellence.
          </p>
          <div className="space-y-2 font-roboto text-gray-300">
            <p>Email: <a href="mailto:info@mvpmanila.com" className="text-gold hover:underline">info@mvpmanila.com</a></p>
            <p>Phone: +63 (2) 1234 5678</p>
          </div>
        </div>

        <div>
          <h4 className="font-montserrat font-bold text-lg text-gold mb-6">Main Office (Manila)</h4>
          <address className="not-italic font-roboto text-gray-300 leading-relaxed">
            1269 Estrada Street<br />
            Brgy. 749 Zone 81, Sta. Ana<br />
            Manila 1009, Philippines
          </address>
        </div>

        <div>
          <h4 className="font-montserrat font-bold text-lg text-gold mb-6">Satellite Office (Legazpi)</h4>
          <address className="not-italic font-roboto text-gray-300 leading-relaxed">
            272 Purok 2, Brgy. 40<br />
            Washington Drive, Cruzada<br />
            Legazpi City 4500, Philippines
          </address>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-sm font-roboto text-gray-400">
        <p>&copy; {new Date().getFullYear()} MVP Manila Security Agency Inc. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-gold text-navy rounded-full shadow-lg hover:bg-yellow-400 transition-colors z-50 md:bottom-10 md:right-10"
            aria-label="Scroll to top"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}