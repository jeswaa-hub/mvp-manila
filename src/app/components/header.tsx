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
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
  ];

  return (
    <>
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/90 backdrop-blur-md py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src="/images/logo1.jpg"
            alt="MVPManila Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
          <div className="font-montserrat">
            <div className="font-bold text-2xl text-navy tracking-tight">MVPManila</div>
            <div className="text-xs text-gray-600 tracking-wide">Security Agency Inc.</div>
          </div>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-navy p-2 relative z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Unified Navigation (Desktop & Mobile) */}
        <nav className={`
          absolute md:static top-full left-0 w-full md:w-auto 
          bg-white md:bg-transparent shadow-md md:shadow-none 
          border-t border-gray-100 md:border-none
          transition-all duration-300 ease-in-out origin-top
          ${isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0 md:scale-y-100 md:opacity-100"}
          md:flex items-center gap-8
        `}>
          <ul className="flex flex-col md:flex-row px-4 py-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name} className="relative group">
                  <Link 
                    href={link.href}
                    className={`block font-roboto text-base md:text-sm font-medium transition-colors py-1 ${
                      isActive ? "text-navy font-bold" : "text-gray-600 hover:text-navy"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {/* Desktop Active/Hover Indicator */}
                  <div 
                    className={`hidden md:block absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ease-out ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {/* Mobile Active Indicator */}
                  <div 
                    className={`md:hidden absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-full bg-gold rounded-r-md transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </li>
              );
            })}
            <li className="pt-2 md:pt-0 md:hidden">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="w-full bg-gold text-navy font-bold py-3 rounded-sm font-montserrat"
              >
                Contact Us
              </button>
            </li>
          </ul>
          <button 
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:block bg-gold hover:bg-yellow-400 text-navy font-bold py-2.5 px-6 rounded-sm transition-all transform hover:scale-105 font-montserrat text-sm"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}