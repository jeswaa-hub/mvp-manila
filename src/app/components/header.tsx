"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./contact-modal";

interface HeaderProps {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const pathname = usePathname();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Job Opportunities", href: "/job-opportunities" },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : isTransparent 
            ? "bg-transparent py-5" 
            : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 lg:gap-4">
          <Image
            src="/images/logo1.jpg"
            alt="MVPManila Logo"
            width={40}
            height={40}
            className="rounded-lg lg:w-12 lg:h-12"
          />
          <div className="font-montserrat">
            <div className={`font-bold text-lg lg:text-2xl tracking-tight transition-colors ${isTransparent ? "text-white" : "text-navy"}`}>MVPManila</div>
            <div className={`text-[10px] lg:text-xs tracking-wide transition-colors ${isTransparent ? "text-gray-300" : "text-gray-600"}`}>Security Agency Inc.</div>
          </div>
        </div>
        
        {/* Mobile/Tablet Menu Toggle */}
        <button 
          className={`lg:hidden p-2 relative z-50 transition-colors ${isTransparent && !isMobileMenuOpen ? "text-white" : "text-navy"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation - Only on lg screens */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link 
                    href={link.href}
                    className={`block font-roboto text-sm font-medium transition-colors py-1 ${
                      isActive 
                        ? (isTransparent ? "text-gold font-bold" : "text-gold font-bold") 
                        : (isTransparent ? "text-gray-200 hover:text-white" : "text-gray-600 hover:text-navy")
                    }`}
                  >
                    {link.name}
                  </Link>
                  <div 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Contact Button - Only on lg screens */}
        <button 
          onClick={() => setIsContactModalOpen(true)}
          className={`hidden lg:block bg-gold text-navy font-bold py-2.5 px-6 rounded-sm font-montserrat transition-all duration-300 hover:bg-yellow-400 hover:shadow-md ${isTransparent ? "shadow-[0_0_15px_rgba(255,215,0,0.3)]" : ""}`}
        >
          Contact Us
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <nav className={`
        lg:hidden absolute top-full left-0 w-full 
        bg-white shadow-md border-t border-gray-100
        transition-all duration-300 ease-in-out origin-top
        ${isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}
      `}>
        <ul className="flex flex-col px-4 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative">
                <Link 
                  href={link.href}
                  className={`block font-roboto text-base font-medium transition-colors py-2 ${
                    isActive ? "text-gold font-bold" : "text-gray-600 hover:text-navy"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-gold rounded-r-md" />
                )}
              </li>
            );
          })}
          <li className="pt-2">
            <button 
              onClick={() => {
                setIsContactModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gold text-navy font-bold py-3 rounded-sm font-montserrat"
            >
              Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
