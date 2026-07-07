"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[85vh] bg-transparent pt-32 pb-0 overflow-hidden flex flex-col justify-start lg:justify-between">
      
      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10 w-full flex-grow">
        
        {/* Left Side: Typography (Takes 6 columns on desktop, relative z-10 to stay above background) */}
        <div className="lg:col-span-6 space-y-6 text-left relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block"
          >
            DIGITAL GROWTH STUDIO
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2C59] leading-tight"
          >
            Navigate Your Brand <br className="hidden sm:inline" />
            Toward Smarter Growth.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-lg"
          >
            We build digital products, automate workflows, and drive growth through data-driven marketing and thoughtful design.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <Link
              href="#services"
              className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
            >
              Start Your Journey
            </Link>
            
            <Link
              href="#work"
              className="inline-flex justify-center items-center gap-2 text-[#0F2C59] hover:text-[#FF6B00] text-sm font-bold py-4 px-2 group transition-all duration-200"
            >
              View Our Work
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Helper Column */}
        <div className="hidden lg:block lg:col-span-6 h-full" />
      </div>

      {/* DESKTOP FULL HEIGHT ABSOLUTE ARTWORK - Positioned in the right-bottom corner, with increased width to span 75vw/80vw */}
      <div className="absolute right-0 bottom-0 top-0 h-full w-[75vw] xl:w-[80vw] z-0 select-none pointer-events-none hidden lg:block overflow-hidden video-fade-mask">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-full"
        >
          <video
            src="/images/Vintage Coastal Lighthouse Panorama.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain object-right-bottom"
          />
        </motion.div>
      </div>

      {/* MOBILE ARTWORK - Positioned at the bottom of the section */}
      <div className="lg:hidden w-full relative h-[280px] sm:h-[380px] -mt-10 select-none z-0 px-4">
        <video
          src="/images/Vintage Coastal Lighthouse Panorama.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain object-bottom"
        />
      </div>

    </section>
  );
}
