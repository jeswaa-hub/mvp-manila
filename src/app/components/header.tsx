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
      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-white shadow-md py-3" 
            : isTransparent 
              ? "bg-transparent py-4" 
              : "bg-white/90 backdrop-blur-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 lg:gap-4">
            <Image
              src="/images/logo1.jpg"
              alt="MVPManila Logo"
              width={40}
              height={40}
              className="rounded-lg lg:w-12 lg:h-12"
              priority
            />
            <div className="font-montserrat">
              <div className={`font-bold text-lg lg:text-2xl tracking-tight transition-colors ${isTransparent ? "text-white" : "text-[#0A192F]"}`}>MVPManila</div>
              <div className={`text-[10px] lg:text-xs tracking-wide transition-colors ${isTransparent ? "text-gray-300" : "text-gray-500"}`}>Security Agency Inc.</div>
            </div>
          </Link>
          
          {/* Mobile/Tablet Menu Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isMobileMenuOpen 
                ? isScrolled || !isHome
                  ? "text-[#0A192F] hover:bg-gray-100" 
                  : "text-white hover:bg-white/10" 
                : isTransparent 
                  ? "text-white hover:bg-white/10" 
                  : "text-[#0A192F] hover:bg-gray-100"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
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
                          ? "text-[#047857] font-bold" 
                          : isTransparent 
                            ? "text-gray-200 hover:text-white" 
                            : "text-gray-600 hover:text-[#0A192F]"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <div 
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#047857] transition-all duration-300 ease-out ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Desktop Contact Button */}
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className={`hidden lg:block bg-[#047857] text-white font-bold py-2.5 px-6 rounded-lg font-montserrat text-sm transition-all duration-300 hover:bg-[#15803D] hover:shadow-md cursor-pointer ${
              isTransparent ? "shadow-[0_0_15px_rgba(4,120,87,0.3)]" : ""
            }`}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile/Tablet Menu */}
        <div 
          className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4">
            <ul className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className={`flex items-center font-roboto text-[15px] font-medium transition-all duration-200 py-3 px-4 rounded-lg ${
                        isActive 
                          ? "text-[#047857] font-bold bg-[#047857]/5" 
                          : "text-gray-600 hover:text-[#0A192F] hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#047857] mr-3" />
                      )}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="pt-4 mt-3 border-t border-gray-100">
              <button 
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-[#047857] text-white font-bold py-3.5 rounded-lg font-montserrat text-sm hover:bg-[#15803D] transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </div>
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
