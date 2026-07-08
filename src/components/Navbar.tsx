"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, ChevronRight, Laptop, Smartphone, Cpu, Megaphone, Anchor } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services-dropdown" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/#about" },
  { name: "Case Study", href: "/#insights" },
  { name: "Contact", href: "/contact" },
];

const megaMenuData = [
  {
    category: "Website Development",
    icon: Laptop,
    iconColor: "text-[#1D3D9E] bg-[#1D3D9E]/8",
    items: [
      { name: "Business Website", href: "/services/business-website-development", active: true },
      { name: "React / Next.js Website", href: "/services/react-nextjs-website-development", active: true },
      { name: "Ecommerce Website", href: "/services/ecommerce-website-development", active: true },
      { name: "Landing Page", href: "/services/landing-page-development", active: true },
      { name: "Website Redesign", href: "/services/website-redesign-services", active: true },
      { name: "Website Maintenance", href: "/services/website-maintenance-services", active: true },
    ]
  },
  {
    category: "App Development",
    icon: Smartphone,
    iconColor: "text-purple-600 bg-purple-600/8",
    items: [
      { name: "Mobile App", href: "/services/mobile-app-development", active: true },
      { name: "Web App", href: "/services/web-app-development", active: true },
      { name: "SaaS Product", href: "/services/saas-product-development", active: true },
      { name: "CRM & Dashboard", href: "/services/crm-dashboard-development", active: true },
      { name: "Booking System", href: "/services/booking-system-development", active: true },
      { name: "Admin Panel", href: "/services/admin-panel-development", active: true },
      { name: "Customer Portal", href: "/services/customer-portal-development", active: true },
    ]
  },
  {
    category: "AI Automation",
    icon: Cpu,
    iconColor: "text-emerald-600 bg-emerald-600/8",
    items: [
      { name: "AI Chatbot", href: "/services/ai-chatbot-development", active: true },
      { name: "WhatsApp Automation", href: "/services/whatsapp-automation", active: true },
      { name: "Lead Management", href: "/services/lead-management-automation", active: true },
      { name: "CRM Automation", href: "/services/crm-automation", active: true },
      { name: "Sales Follow-Up", href: "/services/sales-follow-up-automation", active: true },
      { name: "Workflow Automation", href: "/services/workflow-automation", active: true },
      { name: "AI Customer Support", href: "/services/ai-customer-support-automation", active: true },
    ]
  },
  {
    category: "Digital Marketing",
    icon: Megaphone,
    iconColor: "text-amber-600 bg-amber-600/8",
    items: [
      { name: "Social Media Management", href: "/services/social-media-management", active: true },
      { name: "Social Media Marketing", href: "/services/social-media-marketing", active: true },
      { name: "Lead Generation", href: "/services/lead-generation-campaigns", active: true },
      { name: "SEO Services", href: "/services/seo-services", active: true },
      { name: "Performance Marketing", href: "/services/performance-marketing", active: true },
      { name: "Analytics & Tracking", href: "/services/analytics-tracking-setup", active: true },
    ]
  }
];

/* Inline SVG wave for the top of the mega menu */
function WaveDivider() {
  return (
    <svg
      className="w-full h-3 block"
      viewBox="0 0 960 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 0h960v2c-80 5-160 10-240 10S560 2 480 2s-160 10-240 10S80 7 0 2V0z"
        fill="#FF6B00"
      />
    </svg>
  );
}

/* Subtle compass rose watermark */
function CompassWatermark() {
  return (
    <svg
      className="absolute -bottom-4 -right-4 w-44 h-44 opacity-[0.025] pointer-events-none select-none"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" stroke="#0F2C59" strokeWidth="1" />
      <circle cx="50" cy="50" r="40" stroke="#0F2C59" strokeWidth="0.5" />
      <circle cx="50" cy="50" r="3" fill="#0F2C59" />
      {/* N-S needle */}
      <polygon points="50,8 46,48 50,44 54,48" fill="#0F2C59" />
      <polygon points="50,92 46,52 50,56 54,52" fill="#0F2C59" opacity="0.5" />
      {/* E-W needle */}
      <polygon points="92,50 52,46 56,50 52,54" fill="#0F2C59" opacity="0.5" />
      <polygon points="8,50 48,46 44,50 48,54" fill="#0F2C59" />
      {/* Tick marks */}
      <line x1="50" y1="2" x2="50" y2="10" stroke="#0F2C59" strokeWidth="1.5" />
      <line x1="50" y1="90" x2="50" y2="98" stroke="#0F2C59" strokeWidth="1.5" />
      <line x1="2" y1="50" x2="10" y2="50" stroke="#0F2C59" strokeWidth="1.5" />
      <line x1="90" y1="50" x2="98" y2="50" stroke="#0F2C59" strokeWidth="1.5" />
      {/* Diagonal ticks */}
      <line x1="15" y1="15" x2="20" y2="20" stroke="#0F2C59" strokeWidth="0.8" />
      <line x1="85" y1="15" x2="80" y2="20" stroke="#0F2C59" strokeWidth="0.8" />
      <line x1="15" y1="85" x2="20" y2="80" stroke="#0F2C59" strokeWidth="0.8" />
      <line x1="85" y1="85" x2="80" y2="80" stroke="#0F2C59" strokeWidth="0.8" />
    </svg>
  );
}

/* Mobile wave divider (smaller, subtle) */
function MobileWave() {
  return (
    <svg
      className="w-full h-2 block opacity-20"
      viewBox="0 0 400 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0 4c50-4 100 4 150 0s100-4 150 0 50 4 100 0"
        stroke="white"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeMobileCat, setActiveMobileCat] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
      (isScrolled || isOpen) 
        ? "bg-[#1D3D9E] border-b border-[#FF6B00]/10 lg:border-[#1D3D9E]/5 shadow-sm py-3" 
        : "bg-transparent border-b border-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-300 ${
          isScrolled ? "h-14" : "h-20"
        } flex items-center w-full`}>
          
          {/* Desktop Version (lg+) */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center justify-start select-none transition-all duration-300"
              style={{
                width: isScrolled ? '48px' : '180px',
                height: isScrolled ? '48px' : '56px'
              }}
            >
              <img
                src={isScrolled ? "/images/logo-icon.png" : "/images/logo-1.png"}
                alt="Navi Route Logo"
                className={`object-contain w-full h-full ${isScrolled ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop Nav Links */}
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative py-4"
                  onMouseEnter={() => {
                    if (link.name === "Services") setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (link.name === "Services") setIsServicesOpen(false);
                  }}
                >
                  {link.name === "Services" ? (
                    <button
                      className={`text-sm font-medium transition-colors py-2 flex items-center gap-1 cursor-pointer focus:outline-none ${
                        isScrolled ? 'text-white/90 hover:text-orange-brand' : 'text-[#0F2C59]/85 hover:text-[#1D3D9E]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-medium transition-colors py-2 ${
                        isScrolled ? 'text-white/90 hover:text-orange-brand' : 'text-[#0F2C59]/85 hover:text-[#1D3D9E]'
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}

                  {/* ── Nautical-Themed Desktop Mega Menu ── */}
                  {link.name === "Services" && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 12, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: "easeOut" }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[960px] rounded-2xl overflow-hidden shadow-2xl shadow-[#0F2C59]/12"
                        >
                          {/* Wave-shaped orange accent top */}
                          <WaveDivider />

                          {/* Parchment-textured body */}
                          <div className="relative bg-[#FDFBF8] border border-t-0 border-[#C8B9A6]/25 rounded-b-2xl p-8 overflow-hidden">
                            {/* Paper grain texture overlay */}
                            <div 
                              className="absolute inset-0 opacity-[0.012] pointer-events-none"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
                              }}
                            />

                            {/* Compass rose watermark */}
                            <CompassWatermark />

                            <div className="relative grid grid-cols-4 gap-8">
                              {megaMenuData.map((col, colIdx) => {
                                const Icon = col.icon;
                                return (
                                  <motion.div 
                                    key={col.category} 
                                    className="space-y-4"
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25, delay: colIdx * 0.06 }}
                                  >
                                    {/* Category header with rope-style separator */}
                                    <div className="pb-3 border-b-2 border-dashed border-[#C8B9A6]/40">
                                      <div className="flex items-center gap-2.5">
                                        <div className={`p-2 rounded-xl ${col.iconColor}`}>
                                          <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-[11px] font-black uppercase tracking-wider text-[#0F2C59]">
                                          {col.category}
                                        </span>
                                      </div>
                                    </div>

                                    {/* Service links */}
                                    <ul className="space-y-0.5">
                                      {col.items.map((item) => (
                                        <li key={item.name}>
                                          <Link
                                            href={item.href}
                                            className="group flex items-center gap-1.5 text-[13px] font-medium text-[#0F2C59]/65 hover:text-[#FF6B00] transition-all duration-200 py-2 px-2.5 -mx-2.5 rounded-lg hover:bg-[#FF6B00]/[0.04]"
                                          >
                                            {/* Anchor dot that appears on hover */}
                                            <span className="w-1 h-1 rounded-full bg-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
                                            <span className="flex-1">{item.name}</span>
                                            <ChevronRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-200" />
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                );
                              })}
                            </div>

                            {/* Bottom wave accent */}
                            <div className="mt-6 pt-4 border-t-2 border-dashed border-[#C8B9A6]/25 flex items-center justify-between">
                              <div className="flex items-center gap-2 text-[#0F2C59]/30">
                                <Anchor className="w-3.5 h-3.5" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Navigate · Build · Grow</span>
                              </div>
                              <Link
                                href="/contact"
                                className="text-[11px] font-bold text-[#FF6B00] hover:text-[#E05E00] transition-colors uppercase tracking-wider"
                              >
                                View All Services →
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Let's Talk button */}
            <div className="flex items-center">
              <Link
                href="https://wa.me/919986389444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-200"
              >
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Mobile Version (<lg) */}
          <div className="grid grid-cols-3 items-center w-full lg:hidden">
            {/* Left Edge: Menu trigger */}
            <div className="flex justify-start">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`transition-colors p-2 ${isScrolled || isOpen ? 'text-white/90' : 'text-[#0F2C59]'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link 
                href="/" 
                className="flex items-center justify-center select-none transition-all duration-300"
                style={{
                  width: (isScrolled || isOpen) ? '40px' : '140px',
                  height: '40px'
                }}
              >
                <img
                  src={(isScrolled || isOpen) ? "/images/logo-icon.png" : "/images/logo-1.png"}
                  alt="Navi Route Logo"
                  className={`object-contain w-full h-full ${(isScrolled || isOpen) ? "brightness-0 invert" : ""}`}
                />
              </Link>
            </div>

            {/* Right Edge: Call / Phone trigger */}
            <div className="flex justify-end">
              <a
                href="tel:+919986389444"
                className={`transition-colors p-2 ${isScrolled || isOpen ? 'text-white/90' : 'text-[#0F2C59]'}`}
                aria-label="Call us"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* ── Nautical-Themed Mobile Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#1D3D9E] overflow-hidden text-left"
          >
            {/* Subtle wave separator */}
            <MobileWave />

            <div className="px-5 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.name === "Services" ? (
                    <div className="flex flex-col">
                      {/* Services toggle */}
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex justify-between items-center py-3.5 text-[15px] font-bold text-white/90 w-full border-b border-dashed border-white/10"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 text-[#FF6B00] transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-2 pb-1 space-y-1">
                              {megaMenuData.map((cat, catIdx) => {
                                const Icon = cat.icon;
                                const isExpanded = activeMobileCat === cat.category;

                                return (
                                  <motion.div 
                                    key={cat.category}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2, delay: catIdx * 0.04 }}
                                  >
                                    {/* Category row */}
                                    <button
                                      onClick={() => setActiveMobileCat(isExpanded ? null : cat.category)}
                                      className={`flex items-center gap-3 w-full py-3 px-3 rounded-xl transition-all duration-200 ${
                                        isExpanded ? "bg-white/10" : "hover:bg-white/5"
                                      }`}
                                    >
                                      <div className={`p-1.5 rounded-lg ${cat.iconColor}`}>
                                        <Icon className="w-3.5 h-3.5" />
                                      </div>
                                      <span className="text-[13px] font-bold text-white/85 flex-1 text-left">
                                        {cat.category}
                                      </span>
                                      <span className="text-[10px] font-bold text-white/30 bg-white/8 px-2 py-0.5 rounded-full mr-1">
                                        {cat.items.length}
                                      </span>
                                      <ChevronDown className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                                    </button>

                                    {/* Expanded sub-items */}
                                    <AnimatePresence>
                                      {isExpanded && (
                                        <motion.ul
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="ml-5 pl-4 py-2 space-y-0.5 border-l-2 border-dashed border-[#FF6B00]/30">
                                            {cat.items.map((item, itemIdx) => (
                                              <motion.li
                                                key={item.name}
                                                initial={{ opacity: 0, x: -6 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.15, delay: itemIdx * 0.03 }}
                                              >
                                                <Link
                                                  href={item.href}
                                                  onClick={() => setIsOpen(false)}
                                                  className="text-[13px] font-medium block py-2 px-3 rounded-lg text-white/70 hover:text-[#FF6B00] hover:bg-white/5 transition-all duration-200"
                                                >
                                                  {item.name}
                                                </Link>
                                              </motion.li>
                                            ))}
                                          </div>
                                        </motion.ul>
                                      )}
                                    </AnimatePresence>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center py-3.5 text-[15px] font-bold text-white/90 hover:text-[#FF6B00] transition-colors border-b border-dashed border-white/10"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* Bottom nautical flourish + CTA */}
              <div className="pt-3">
                <div className="flex items-center justify-center gap-2 text-white/20 mb-4">
                  <span className="w-8 h-px bg-white/15" />
                  <Anchor className="w-3 h-3" />
                  <span className="w-8 h-px bg-white/15" />
                </div>
                <Link
                  href="https://wa.me/919986389444"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold py-3.5 rounded-full w-full transition-colors"
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
