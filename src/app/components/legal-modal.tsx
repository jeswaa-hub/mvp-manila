"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const privacyContent = {
  title: "Privacy Policy",
  sections: [
    { title: "Information We Collect", body: "We collect information you provide directly, such as your name, email address, phone number, and message when you fill out our contact form." },
    { title: "How We Use Your Information", body: "We use your information to respond to your inquiries, provide our security services, and improve our website experience." },
    { title: "Data Protection", body: "We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction." },
    { title: "Contact Us", body: "If you have questions about this Privacy Policy, please contact us at mvpmanila2013@yahoo.com or call 8353-7353." },
  ]
};

const termsContent = {
  title: "Terms of Service",
  sections: [
    { title: "Acceptance of Terms", body: "By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services." },
    { title: "Services", body: "MVPManila Security Agency Inc. provides security and manpower services. Specific terms for each service will be detailed in individual service agreements." },
    { title: "Intellectual Property", body: "All content on this website, including text, graphics, logos, and images, is the property of MVPManila Security Agency Inc. and is protected by applicable laws." },
    { title: "Limitation of Liability", body: "MVPManila Security Agency Inc. shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website." },
  ]
};

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "privacy" | "terms";
}

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  const content = type === "privacy" ? privacyContent : termsContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-white rounded-[20px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-[600px] overflow-hidden relative flex flex-col max-h-[90vh]">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-full p-2 transition-all z-10"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              <div className="bg-white px-8 pt-10 pb-6 text-center border-b border-gray-100 shrink-0">
                <h2 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-navy mb-3 tracking-tight">
                  {content.title}
                </h2>
              </div>

              <div className="overflow-y-auto overflow-x-hidden grow p-8">
                <div className="font-roboto text-gray-600 space-y-6 leading-relaxed">
                  {content.sections.map((section, i) => (
                    <div key={i}>
                      <h3 className="font-montserrat text-lg font-bold text-navy mb-2">{section.title}</h3>
                      <p>{section.body}</p>
                    </div>
                  ))}
                  <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">Last updated: June 2026</p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
