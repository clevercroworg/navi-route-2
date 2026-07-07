"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    // Initialize status
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
      isScrolled 
        ? "bg-sand-100/95 backdrop-blur-md border-b border-[#0F2C59]/5 shadow-sm py-3" 
        : "bg-transparent border-b border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "h-14" : "h-20"
        }`}>
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center select-none transition-all duration-300 ${
              isScrolled 
                ? "w-28 h-10 md:w-36 md:h-12" 
                : "w-28 h-10 md:w-44 md:h-16"
            }`}
          >
            <img
              src="/images/logo_v2.jpeg"
              alt="Navi Route Logo"
              className="object-contain mix-blend-multiply w-full h-full"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative">
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#0F2C59]/80 hover:text-orange-brand transition-colors py-2"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Let's Talk button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-orange-brand hover:bg-orange-brand-hover text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-800 hover:text-orange-brand transition-colors p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-sand-50 border-b border-sand-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-sand-200/50 pb-2">
                  <div className="flex justify-between items-center py-2">
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-bold text-[#0F2C59]"
                    >
                      {link.name}
                    </Link>
                  </div>
                </div>
              ))}

              <Link
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center items-center bg-orange-brand hover:bg-orange-brand-hover text-white text-sm font-bold py-3 rounded-full w-full"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
