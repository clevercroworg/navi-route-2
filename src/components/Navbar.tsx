"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Laptop, Smartphone, Cpu, Megaphone } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services-dropdown" },
  { name: "Work", href: "/#work" },
  { name: "About", href: "/#about" },
  { name: "Insights", href: "/#insights" },
  { name: "Contact", href: "/contact" },
];

const megaMenuData = [
  {
    category: "Website Development",
    icon: Laptop,
    iconColor: "text-[#1D3D9E] bg-[#1D3D9E]/5",
    items: [
      { name: "Business Website Development", href: "/services/business-website-development", active: true },
      { name: "React / Next.js Website Development", href: "/services/react-nextjs-website-development", active: true },
      { name: "Ecommerce Website Development", href: "/services/ecommerce-website-development", active: true },
      { name: "Landing Page Development", href: "/services/landing-page-development", active: true },
      { name: "Website Redesign", href: "/services/website-redesign-services", active: true },
      { name: "Website Maintenance", href: "/services/website-maintenance-services", active: true },
    ]
  },
  {
    category: "App Development",
    icon: Smartphone,
    iconColor: "text-purple-600 bg-purple-50",
    items: [
      { name: "Mobile App Development", href: "/services/mobile-app-development", active: true },
      { name: "Web App Development", href: "/services/web-app-development", active: true },
      { name: "SaaS Product Development", href: "/services/saas-product-development", active: true },
      { name: "CRM & Dashboard Development", href: "/services/crm-dashboard-development", active: true },
      { name: "Booking System Development", href: "/services/booking-system-development", active: true },
      { name: "Admin Panel Development", href: "/services/admin-panel-development", active: true },
      { name: "Customer Portal Development", href: "/services/customer-portal-development", active: true },
    ]
  },
  {
    category: "AI Automation",
    icon: Cpu,
    iconColor: "text-emerald-600 bg-emerald-50",
    items: [
      { name: "AI Chatbot Development", href: "/services/ai-chatbot-development", active: true },
      { name: "WhatsApp Automation", href: "/services/whatsapp-automation", active: true },
      { name: "Lead Management Automation", href: "/services/lead-management-automation", active: true },
      { name: "CRM Automation", href: "/services/crm-automation", active: true },
      { name: "Sales Follow-Up Automation", href: "/services/sales-follow-up-automation", active: true },
      { name: "Workflow Automation", href: "/services/workflow-automation", active: true },
      { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation", active: true },
    ]
  },
  {
    category: "Digital Marketing",
    icon: Megaphone,
    iconColor: "text-amber-600 bg-amber-50",
    items: [
      { name: "Google Ads Management", href: "/services/google-ads-management", active: true },
      { name: "Meta Ads Management", href: "/services/meta-ads-management", active: true },
      { name: "SEO Services", href: "/services/seo-services", active: true },
      { name: "Social Media Management", href: "/services/social-media-management", active: true },
      { name: "Lead Generation Campaigns", href: "/services/lead-generation-campaigns", active: true },
      { name: "Performance Marketing", href: "/services/performance-marketing", active: true },
      { name: "Analytics & Tracking Setup", href: "/services/analytics-tracking-setup", active: true },
    ]
  }
];

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
              className="flex items-center justify-center select-none transition-all duration-300"
              style={{
                width: isScrolled ? '56px' : '100px',
                height: isScrolled ? '56px' : '100px'
              }}
            >
              <img
                src={isScrolled ? "/images/light logo.png" : "/images/dark logo.png"}
                alt="Navi Route Logo"
                className="object-contain w-full h-full"
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

                  {/* Mega Menu Dropdown */}
                  {link.name === "Services" && (
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-[#FCF9F3] border-t-4 border-t-[#FF6B00] border-x border-b border-[#1D3D9E]/10 shadow-2xl shadow-[#1D3D9E]/15 rounded-b-3xl rounded-t-lg p-8 w-[920px] grid grid-cols-4 gap-6 text-left"
                        >
                          {megaMenuData.map((col) => {
                            const Icon = col.icon;
                            return (
                              <div key={col.category} className="space-y-4">
                                <div className="flex items-center gap-2 border-b border-[#1D3D9E]/10 pb-2.5">
                                  <div className={`p-1.5 rounded-lg ${col.iconColor}`}>
                                    <Icon className="w-4 h-4" />
                                  </div>
                                  <span className="text-[11px] font-black uppercase tracking-wider text-[#1D3D9E]">
                                    {col.category}
                                  </span>
                                </div>
                                <ul className="space-y-2.5">
                                  {col.items.map((item) => (
                                    <li key={item.name}>
                                      <Link
                                        href={item.href}
                                        className={`text-xs font-semibold hover:text-[#FF6B00] transition-colors block leading-relaxed relative ${
                                          ('active' in item && item.active) 
                                            ? "text-[#FF6B00] pl-3 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-[#FF6B00]" 
                                            : "text-[#0F2C59]/75"
                                        }`}
                                      >
                                        {item.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
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
                  width: (isScrolled || isOpen) ? '50px' : '100px',
                  height: (isScrolled || isOpen) ? '50px' : '100px'
                }}
              >
                <img
                  src={(isScrolled || isOpen) ? "/images/light logo.png" : "/images/dark logo.png"}
                  alt="Navi Route Logo"
                  className="object-contain w-full h-full"
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#1D3D9E] border-b border-[#FF6B00]/10 overflow-hidden text-left"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/10 pb-2">
                  {link.name === "Services" ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex justify-between items-center py-2 text-sm font-bold text-white/90 w-full"
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 mt-1 space-y-3 overflow-hidden"
                          >
                            {megaMenuData.map((cat) => (
                              <div key={cat.category} className="space-y-1">
                                <button
                                  onClick={() => setActiveMobileCat(activeMobileCat === cat.category ? null : cat.category)}
                                  className="flex justify-between items-center w-full py-1 text-xs font-bold text-white/70"
                                >
                                  <span>{cat.category}</span>
                                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMobileCat === cat.category ? "rotate-180" : ""}`} />
                                </button>
                                
                                <AnimatePresence>
                                  {activeMobileCat === cat.category && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="pl-3 py-1 space-y-2 border-l border-white/10"
                                    >
                                      {cat.items.map((item) => (
                                        <li key={item.name}>
                                          <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-xs block py-1 hover:text-orange-brand transition-colors ${
                                              ('active' in item && item.active) ? "text-[#FF6B00] font-bold" : "text-white/80"
                                            }`}
                                          >
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center py-2">
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-sm font-bold text-white/90 hover:text-orange-brand"
                      >
                        {link.name}
                      </Link>
                    </div>
                  )}
                </div>
              ))}

              <Link
                href="https://wa.me/919986389444"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-4 flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold py-3 rounded-full w-full"
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
