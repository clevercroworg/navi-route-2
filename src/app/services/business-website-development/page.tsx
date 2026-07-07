"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Laptop, 
  Code2, 
  ShoppingCart, 
  Layout, 
  RefreshCw, 
  Wrench, 
  Check, 
  ArrowRight,
  Monitor,
  Users,
  Award,
  Network
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.29 1.97 13.82 1.05 12.008 1.05c-5.442 0-9.87 4.372-9.874 9.802-.002 1.778.486 3.514 1.411 5.097l-.924 3.376 3.471-.912-.03-.009zm11.367-7.854c-.3-.15-1.77-.875-2.046-.975-.276-.102-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.485-.892-.793-1.493-1.773-1.668-2.073-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.676-1.624-.925-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.374-.01-.574-.01-.2 0-.526.075-.801.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.224 5.116 4.524.715.31 1.273.496 1.71.635.717.227 1.37.195 1.885.118.574-.086 1.77-.724 2.02-1.385.25-.66.25-1.225.175-1.385-.075-.16-.275-.26-.575-.41z" />
    </svg>
  );
}

const businessServices = [
  {
    icon: Laptop,
    title: "Business Website Development",
    description: "Professional corporate and brand websites that establish instant trust and authority online.",
  },
  {
    icon: Code2,
    title: "React / Next.js Development",
    description: "Bespoke high-performance web applications built using cutting-edge React and Next.js frameworks.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Website Development",
    description: "Scalable digital shops designed with AWS database features, smooth product management, and secure payment flows.",
  },
  {
    icon: Layout,
    title: "Landing Page Development",
    description: "Conversion-optimized landing pages designed for PPC, Google Ads, and Meta Ads campaign traffic.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description: "Modern updates for legacy websites to improve load speed, visual appeal, and sales conversions.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Ongoing updates, hosting management, technical support, and backup configurations.",
  }
];

const whyChoosePoints = [
  "Conversion-focused layouts engineered to turn website visitors into active leads.",
  "Clean, SEO-optimized structure and code that ranks higher on organic search results.",
  "Blazing-fast loading speeds under 1.5s for maximum user retention and better search signals.",
  "Responsive, mobile-first design that renders flawlessly on every smartphone and tablet.",
  "Integrated tracking analytics, contact forms, CRM sync, and marketing tools.",
  "Reliable post-launch maintenance, secure backups, and direct tech support."
];

const faqs = [
  {
    question: "How many pages will my website have?",
    answer: "It depends on your requirement. Most business websites range from 5 to 15 pages.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. All our websites are fully responsive and optimized for mobile devices.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. We can redesign and improve your current website to boost load speed and conversions.",
  },
  {
    question: "Do you provide hosting?",
    answer: "We can guide you or help set up hosting based on your needs, including domain linking and SSL setups.",
  },
];

export default function BusinessWebsiteDevelopmentPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-orange-brand/10 selection:text-orange-brand relative">
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-sand-100 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center min-h-[70vh]">
          {/* Transparent navy Goa seaside church & design tools watermark */}
          <div className="absolute right-0 bottom-0 top-12 w-[60%] lg:w-[45%] pointer-events-none select-none z-0 opacity-20 lg:opacity-35">
            <Image
              src="/images/seaside_port_design_sketch.png"
              alt="Seaside Port Design Background"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                BUSINESS WEBSITE DEVELOPMENT
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight max-w-3xl">
                High-Performance Websites That Build Trust &amp; Drive Growth
              </h1>
              <p className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                We design and develop professional business websites that are fast, secure, SEO-friendly, and built to convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact?service=Business%20Website%20Development"
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Business%20Website%20Development%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#0F2C59] text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-sm transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. SERVICES GRID SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              OUR WEB SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              Bespoke Digital Solutions
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              Custom design and development packages tailored to establish your authority and generate online leads.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="border border-[#1D3D9E]/10 rounded-2xl bg-white p-8 hover:shadow-lg hover:border-[#1D3D9E]/20 transition-all duration-300 flex flex-col justify-between items-start text-left group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0F2C59]/70 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href="/contact?service=Business%20Website%20Development"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3D9E] hover:text-[#FF6B00] transition-colors"
                    >
                      <span>Get a Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. WHY CHOOSE SECTION */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left side: Checklist */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  WHY PARTNER WITH US
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                  Engineered for Performance &amp; Conversion
                </h2>
                <p className="text-[#0F2C59]/80 text-xs sm:text-sm leading-relaxed max-w-xl">
                  We don't just build code; we layout websites meant to attract, educate, and convert your ideal business clientele.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChoosePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#FF6B00] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#0F2C59]/90 font-medium leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Floating illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 h-72 select-none pointer-events-none"
              >
                <Image
                  src="/images/ship_wheel_sketch.png"
                  alt="Ship Wheel Illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

          </div>
        </section>

        {/* 4. FAQ & CTA GRID SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left FAQ card */}
            <div className="lg:col-span-6 flex flex-col justify-start bg-white border border-[#1D3D9E]/10 rounded-[32px] p-6 sm:p-10 shadow-sm text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1D3D9E] mb-8">
                Frequently Asked Questions
              </h2>

              <div className="w-full flex flex-col">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-[#1D3D9E]/10 py-3 last:border-0"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="flex w-full items-center justify-between text-left font-bold text-[#1D3D9E] text-xs sm:text-sm hover:text-[#FF6B00] transition-colors py-2"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#1D3D9E]/40 shrink-0 text-sm font-bold ml-4">
                        {activeFaq === i ? "−" : "+"}
                      </span>
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                        >
                          <div className="pb-3 pt-0.5 text-xs text-[#0F2C59]/75 leading-relaxed font-medium">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CTA card */}
            <div className="lg:col-span-6 bg-[#1D3D9E] rounded-[32px] text-white p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[360px] shadow-md">
              {/* Seaside town sketch overlay */}
              <div className="absolute right-0 bottom-0 w-[85%] h-[55%] pointer-events-none select-none z-0">
                <Image
                  src="/images/telescope_lookout_sketch.png"
                  alt="Telescope Lookout Background"
                  fill
                  className="object-contain object-right-bottom opacity-90"
                />
              </div>

              <div className="space-y-4 relative z-10 text-left max-w-md">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-tight">
                  Ready to Build or Redesign Your Website?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Let's design a website that reflects your brand identity, loads fast, and converts traffic.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-8 relative z-10 w-full sm:max-w-md">
                <Link
                  href="/contact?service=Business%20Website%20Development"
                  className="inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 text-center flex-grow"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Business%20Website%20Development%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-[#0F2C59] text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-sm transition-all duration-200 text-center flex-grow"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. STATS STRIP SECTION */}
        <section className="bg-sand-100 border-t border-[#1D3D9E]/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center shadow-sm">
              
              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/service/1.png"
                    alt="Websites Delivered Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">90+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Websites Delivered</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/service/Happy Clients - Handshake.png"
                    alt="Happy Clients Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">50+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Happy Clients</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/service/Years of Experience - Award Badge.png"
                    alt="Years Experience Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">5+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Years Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/service/Industries Served - Sitemap.png"
                    alt="Industries Served Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">10+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Industries Served</span>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
