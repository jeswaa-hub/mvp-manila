"use client";

import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const isHome = pathname === "/";
  const isManpower = pathname.startsWith("/manpower");
  const isManpowerHome = pathname === "/manpower";
  const isTransparent = (isHome || isManpowerHome) && !isScrolled;

  const brands = [
    { 
      name: "Security Agency", 
      subtitle: "Security Agency Inc.", 
      logo: "/images/logo1.jpg", 
      href: "/",
      active: !isManpower 
    },
    { 
      name: "Manpower", 
      subtitle: "Manpower Services", 
      logo: "/images/logo2.jpg", 
      href: "/manpower",
      active: isManpower 
    },
  ];

  const navLinks = isManpower 
    ? [
        { name: "Home", href: "/manpower" },
        { name: "About Us", href: "/manpower/about" },
        { name: "Services & Welfare", href: "/manpower/services" },
        { name: "Careers", href: "/manpower/careers" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Services", href: "/services" },
        { name: "Clients", href: "/clients" },
        { name: "Job Opportunities", href: "/job-opportunities" },
      ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsBrandDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="relative flex items-center gap-2" ref={dropdownRef}>
            <Link href={isManpower ? "/manpower" : "/"} className="flex items-center gap-3 lg:gap-4">
              <Image
                src={isManpower ? "/images/logo2.jpg" : "/images/logo1.jpg"}
                alt={isManpower ? "MVPManila Manpower Logo" : "MVPManila Security Logo"}
                width={40}
                height={40}
                className="rounded-lg lg:w-12 lg:h-12"
                priority
              />
              <div className="font-montserrat">
                <div className={`font-bold text-lg lg:text-2xl tracking-tight transition-colors ${isTransparent ? "text-white" : "text-[#0A192F]"}`}>
                  MVPManila
                </div>
                <div className={`text-[10px] lg:text-xs tracking-wide transition-colors ${isTransparent ? "text-gray-300" : "text-gray-500"}`}>
                  {isManpower ? "Manpower Services" : "Security Agency Inc."}
                </div>
              </div>
            </Link>
            
            {/* Brand Dropdown Toggle - Inline Right of Name */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsBrandDropdownOpen(!isBrandDropdownOpen);
              }}
              className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200 border ${
                isBrandDropdownOpen
                  ? "bg-[#047857] text-white border-[#047857]"
                  : isTransparent
                    ? "bg-white/20 text-white border-white/30 hover:bg-white/30"
                    : "bg-[#047857]/10 text-[#047857] border-[#047857]/30 hover:bg-[#047857]/20"
              }`}
              aria-label="Switch brand"
            >
              <ChevronDown size={14} className={`transition-transform duration-200 ${isBrandDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Brand Dropdown Menu */}
            {isBrandDropdownOpen && (
              <div className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100/50 py-2 z-50 overflow-hidden">
                {brands.map((brand) => (
                  <button
                    key={brand.name}
                    className={`w-full px-4 py-3.5 text-left transition-all duration-200 ${
                      brand.active 
                        ? "bg-gradient-to-r from-[#047857]/10 to-transparent" 
                        : "hover:bg-gray-50/80"
                    }`}
                    onClick={() => {
                      router.push(brand.href);
                      setIsBrandDropdownOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all ${
                        brand.active 
                          ? "shadow-lg shadow-[#047857]/20 ring-2 ring-[#047857]/20" 
                          : "ring-1 ring-gray-200"
                      }`}>
                        <Image
                          src={brand.logo}
                          alt={`MVPManila ${brand.name} Logo`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`font-montserrat font-semibold text-[13px] ${
                          brand.active ? "text-[#047857]" : "text-[#0A192F]"
                        }`}>
                          MVPManila {brand.name}
                        </div>
                        <div className="text-[11px] text-gray-400">{brand.subtitle}</div>
                      </div>
                      {brand.active && (
                        <div className="w-2 h-2 rounded-full bg-[#047857] shadow-lg shadow-[#047857]/30" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          
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
            isMobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4">
            {/* Mobile Brand Selector */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <div className="space-y-2">
                {brands.map((brand) => (
                  <button
                    key={brand.name}
                    className={`w-full px-4 py-3.5 text-left rounded-xl transition-all duration-200 ${
                      brand.active 
                        ? "bg-gradient-to-r from-[#047857]/10 to-transparent border border-[#047857]/20" 
                        : "bg-gray-50 border border-transparent hover:border-gray-200"
                    }`}
                    onClick={() => {
                      router.push(brand.href);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden transition-all ${
                        brand.active 
                          ? "shadow-lg shadow-[#047857]/20 ring-2 ring-[#047857]/20" 
                          : "ring-1 ring-gray-200"
                      }`}>
                        <Image
                          src={brand.logo}
                          alt={`MVPManila ${brand.name} Logo`}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className={`font-montserrat font-semibold text-[13px] ${
                          brand.active ? "text-[#047857]" : "text-[#0A192F]"
                        }`}>
                          MVPManila {brand.name}
                        </div>
                        <div className="text-[11px] text-gray-400">{brand.subtitle}</div>
                      </div>
                      {brand.active && (
                        <div className="w-2 h-2 rounded-full bg-[#047857] shadow-lg shadow-[#047857]/30" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>

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
