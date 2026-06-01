"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, Phone, Smartphone } from "lucide-react";
import Script from "next/script";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      render: (container: string | HTMLElement, options: Record<string, unknown>) => number;
      getResponse: (widgetId: number) => string;
      reset: (widgetId: number) => void;
    };
  }
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "rate-limited">("idle");
  const [submitCount, setSubmitCount] = useState(0);
  const [captchaError, setCaptchaError] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const MAX_SUBMISSIONS = 5;

  useEffect(() => {
    if (!isOpen || !captchaLoaded || !recaptchaRef.current || widgetIdRef.current !== null) return;
    window.grecaptcha.ready(() => {
      if (!recaptchaRef.current || widgetIdRef.current !== null) return;
      widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
        theme: "light",
        callback: () => {
          setCaptchaVerified(true);
          setCaptchaError(false);
        },
        "expired-callback": () => {
          setCaptchaVerified(false);
        },
        "error-callback": () => {
          setCaptchaVerified(false);
        },
      });
    });
  }, [isOpen, captchaLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitCount >= MAX_SUBMISSIONS) {
      setSubmitStatus("rate-limited");
      return;
    }

    const token = widgetIdRef.current !== null ? window.grecaptcha.getResponse(widgetIdRef.current) : "";
    if (!token) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitCount((prev) => prev + 1);
        setCaptchaVerified(false);
        setFormData({ fullName: "", phoneNumber: "", email: "", message: "" });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
        if (widgetIdRef.current !== null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
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
    <>
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
                        maxLength={11}
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          const digits = e.target.value.replace(/\D/g, "").slice(0, 11);
                          setFormData({ ...formData, phoneNumber: digits });
                        }}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl font-roboto text-navy text-[15px] focus:bg-white focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all"
                        placeholder="00000000000"
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
                    <div ref={recaptchaRef} className="mb-3" />
                    {captchaError && (
                      <p className="text-red-500 text-[13px] mb-3 text-center font-roboto">Please verify that you are not a robot.</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting || submitCount >= MAX_SUBMISSIONS || !captchaVerified}
                      className="w-full bg-gold hover:bg-[#F5CE00] text-navy font-bold py-4 px-6 rounded-xl transition-all transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,215,0,0.3)] font-montserrat text-[15px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        "Request Consultation"
                      )}
                    </button>
                    
                    {submitStatus === "success" && (
                      <div className="flex items-center justify-center gap-2 mt-4 text-emerald-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-roboto text-[13px] font-medium">Message sent successfully!</span>
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="flex items-center justify-center gap-2 mt-4 text-red-500">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="font-roboto text-[13px] font-medium">Failed to send. Please try again.</span>
                      </div>
                    )}
                    {submitStatus === "rate-limited" && (
                      <div className="flex items-center justify-center gap-2 mt-4 text-amber-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="font-roboto text-[13px] font-medium">Maximum submissions reached. Please try again later.</span>
                      </div>
                    )}
                    
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
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        onLoad={() => setCaptchaLoaded(true)}
      />
    </>
  );
}