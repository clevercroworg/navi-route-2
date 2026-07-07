"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We learn about your business, goals, and audience.",
    image: "/images/process_discover_v5.png",
  },
  {
    step: "02",
    title: "Plan",
    description: "We map the strategy, features, and roadmap.",
    image: "/images/process_plan_v5.png",
  },
  {
    step: "03",
    title: "Build",
    description: "We design, develop, and test with care and precision.",
    image: "/images/process_build_v5.png",
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy, optimize, and prepare for growth.",
    image: "/images/process_launch_v5.png",
  },
  {
    step: "05",
    title: "Grow",
    description: "We analyze, iterate, and scale what works.",
    image: "/images/process_grow_v5.png",
  },
];

const testimonials = [
  {
    quote: "Navi Route built a website that not only looks amazing but also doubled our inbound leads.",
    author: "Alex Morgan",
    role: "CEO, Coastline Co.",
    avatar: "/images/avatar_alex_v3.png",
  },
  {
    quote: "Their automation solution saved us dozens of hours every week. Truly a game changer.",
    author: "Priya Shah",
    role: "Operations Lead, BrightPath",
    avatar: "/images/avatar_priya_v3.png",
  },
  {
    quote: "The marketing campaigns they run are sharp, creative, and deliver real ROI.",
    author: "Daniel Lee",
    role: "Founder, Urban Weekends",
    avatar: "/images/avatar_daniel_v3.png",
  },
];

export default function WhyPartner() {
  return (
    <div className="bg-white w-full">
      
      {/* 1. OUR PROCESS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
            OUR PROCESS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
            A clear route from idea to impact.
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="relative w-full">
          {/* Dotted wavy path background on desktop - custom Y-axis alignment */}
          <div className="absolute top-1/2 left-0 right-0 h-24 -translate-y-24 hidden md:block z-0 pointer-events-none text-[#1D3D9E]/15">
            <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none" fill="none">
              <path
                d="M 50 65 Q 100 5, 150 65 T 250 65 T 350 65 T 450 65 T 550 65 T 650 65 T 750 65 T 850 65 T 950 65"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Vertical dotted line on mobile to connect steps vertically */}
          <div className="absolute top-14 bottom-32 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 md:hidden z-0 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {processSteps.map((step, idx) => {
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-4"
                >
                  {/* Custom Hand-drawn PNG Illustration - sized and positioned on the wavy path */}
                  <div className="relative w-28 h-28 select-none">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="112px"
                      className="object-contain mix-blend-multiply"
                    />
                    <span className="absolute -top-1 -right-1 bg-[#FF6B00] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                      {step.step}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0F2C59]/70 leading-relaxed max-w-[200px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative">
          <div className="space-y-3 text-left relative pr-20">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              WHAT OUR CLIENTS SAY
            </span>
            <div className="flex items-center gap-3 relative">
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Real stories from great partners.
              </h2>
              {/* Hand-drawn orange sun sketch overlay positioned right of the title text */}
              <svg viewBox="0 0 100 100" className="w-14 h-14 absolute -top-8 left-[350px] lg:left-[410px] text-[#FF6B00] hidden md:block" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 65 A 25 25 0 0 1 75 65" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="50" y1="35" x2="50" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="33" y1="42" x2="20" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="67" y1="42" x2="80" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="22" y1="58" x2="5" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="78" y1="58" x2="95" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Testimonials Grid (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.author}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="border border-dashed border-[#1D3D9E]/20 rounded-3xl p-8 bg-transparent flex flex-col justify-between items-start text-left relative"
            >
              <div className="w-full">
                {/* Centered Circular Avatar at the Top */}
                <div className="flex justify-center w-full mb-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border border-[#1D3D9E]/10 select-none">
                    <Image
                      src={test.avatar}
                      alt={test.author}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Orange Quotation Mark */}
                <span className="text-[#FF6B00] text-3xl font-serif block mb-2 leading-none">“</span>
                
                {/* Testimonial Quote */}
                <p className="text-[#0F2C59]/80 text-sm sm:text-base leading-relaxed mb-6">
                  {test.quote}
                </p>
              </div>

              {/* Left-Aligned Author Details at the Bottom */}
              <div className="w-full border-t border-[#1D3D9E]/5 pt-4">
                <h4 className="font-serif text-sm font-bold text-[#1D3D9E]">{test.author}</h4>
                <p className="text-[11px] text-[#1D3D9E]/60">{test.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. FINAL CALL-TO-ACTION (CTA) SECTION */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="bg-[#1D3D9E] rounded-3xl pt-8 pb-32 px-8 sm:pt-12 sm:pb-36 sm:px-12 lg:p-16 text-white relative overflow-hidden flex items-center justify-start min-h-[320px] sm:min-h-[340px] lg:min-h-[260px]">
          
          {/* Desktop version (Visible on lg and larger) - spans full height from absolute top to bottom */}
          <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[55%] pointer-events-none select-none z-0">
            <Image
              src="/images/cta_town_desktop_final.png"
              alt="Seaside Coastal Town & Sailboat Sketch (Desktop)"
              fill
              sizes="50vw"
              className="object-contain object-right-bottom opacity-95"
              priority
            />
          </div>

          {/* Mobile version (Visible on <lg) - absolutely positioned in the bottom-right corner of the card */}
          <div className="absolute right-0 bottom-0 left-0 w-full h-[130px] sm:h-[160px] pointer-events-none select-none z-0 lg:hidden">
            <Image
              src="/images/cta_town_mobile_final.png"
              alt="Seaside Coastal Town & Sailboat Sketch (Mobile)"
              fill
              sizes="100vw"
              className="object-cover object-bottom opacity-95"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
            
            {/* Left Side: Typography & CTA Action stacked */}
            <div className="space-y-6 lg:col-span-6 xl:col-span-5 text-left w-full relative z-10">
              <div className="space-y-2">
                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">
                  Ready to set sail toward growth?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm">
                  Let's build something remarkable together.
                </p>
              </div>
              <div>
                <Link
                  href="#contact"
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
