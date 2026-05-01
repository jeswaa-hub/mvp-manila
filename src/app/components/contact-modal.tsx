"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Phone, Smartphone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! A security expert will contact you shortly.");
    setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
    onClose();
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-md z-[100]"
          />
          
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="bg-white rounded-[20px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] w-full max-w-[500px] overflow-hidden relative flex flex-col max-h-[90vh]">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-gray-400 hover:text-navy hover:bg-gray-100 rounded-full p-2 transition-all z-10"
                aria-label="Close modal"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              {/* Header */}
              <div className="bg-white px-8 pt-10 pb-6 text-center border-b border-gray-100 shrink-0">
                <h2 className="font-montserrat text-2xl sm:text-3xl font-extrabold text-navy mb-3 tracking-tight">
                  Send us a Message
                </h2>
                <p className="font-roboto text-gray-500 text-[15px] max-w-[90%] mx-auto leading-relaxed">
                  Provide your details and a security expert will contact you within 24 hours.
                </p>
              </div>

              {/* Scrollable Content Area */}
              <div className="overflow-y-auto overflow-x-hidden grow custom-scrollbar">
                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  <div>
                    <label htmlFor="fullName" className="block font-roboto text-[13px] font-bold text-navy mb-1.5 uppercase tracking-wide">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-roboto text-navy text-[15px] focus:bg-white focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block font-roboto text-[13px] font-bold text-navy mb-1.5 uppercase tracking-wide">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-roboto text-navy text-[15px] focus:bg-white focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phoneNumber" className="block font-roboto text-[13px] font-bold text-navy mb-1.5 uppercase tracking-wide">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-roboto text-navy text-[15px] focus:bg-white focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                        placeholder="+63 900 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-roboto text-[13px] font-bold text-navy mb-1.5 uppercase tracking-wide">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-roboto text-navy text-[15px] focus:bg-white focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all resize-none"
                      placeholder="Briefly describe your security needs or inquiries..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-[#F5CE00] text-navy font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,215,0,0.3)] font-montserrat text-[15px]"
                    >
                      Request Consultation
                    </button>
                    
                    {/* Trust Footer */}
                    <div className="flex items-center justify-center gap-2 mt-4 text-gray-400">
                      <Lock size={12} />
                      <span className="font-roboto text-[12px]">Your information is handled with 100% confidentiality.</span>
                    </div>
                  </div>
                </form>

                {/* Direct Contact Section */}
                <div className="px-8 pb-8">
                  <div className="pt-6 border-t border-gray-100">
                    <p className="font-roboto text-[13px] font-bold text-gray-400 mb-4 uppercase tracking-wider text-center">
                      Direct Lines
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <a 
                        href="tel:83537353" 
                        className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-gray-100 bg-white hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <Phone size={16} className="text-gray-400 group-hover:text-gold transition-colors" />
                        <span className="font-roboto font-medium text-navy text-sm">8353-7353</span>
                      </a>
                      <a 
                        href="tel:83736860" 
                        className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-gray-100 bg-white hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <Phone size={16} className="text-gray-400 group-hover:text-gold transition-colors" />
                        <span className="font-roboto font-medium text-navy text-sm">8373-6860</span>
                      </a>
                      <a 
                        href="tel:09258771953" 
                        className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-gray-100 bg-white hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <Smartphone size={16} className="text-gray-400 group-hover:text-gold transition-colors" />
                        <span className="font-roboto font-medium text-navy text-sm">0925-8771953</span>
                      </a>
                      <a 
                        href="tel:09165890318" 
                        className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-gray-100 bg-white hover:border-gold hover:bg-gold/5 transition-all group"
                      >
                        <Smartphone size={16} className="text-gray-400 group-hover:text-gold transition-colors" />
                        <span className="font-roboto font-medium text-navy text-sm">0916-5890318</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}