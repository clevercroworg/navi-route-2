"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Compass, ArrowRight, Anchor } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 flex items-center justify-center relative overflow-hidden">
        {/* Floating background watermarks */}
        <div className="absolute inset-0 select-none pointer-events-none opacity-[0.02] z-0">
          <div className="absolute top-[20%] left-[-100px] w-[500px] h-[500px]">
            <Image
              src="/images/service_website_v5.png"
              alt="Background Ornament"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="max-w-md w-full px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 sm:p-12 shadow-xl flex flex-col items-center space-y-6"
          >
            {/* Animated Checkmark Circle */}
            <div className="w-20 h-20 rounded-full bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shadow-sm">
              <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
            </div>

            <div className="space-y-3">
              <div className="flex justify-center items-center gap-1.5 text-[#FF6B00] uppercase tracking-widest text-[10px] font-black">
                <Compass className="w-3.5 h-3.5 animate-spin-slow" />
                <span>Voyage Logged</span>
              </div>
              <h1 className="font-serif text-3xl font-extrabold text-[#1D3D9E]">
                Thank You!
              </h1>
              <p className="text-sm text-[#0F2C59]/75 leading-relaxed">
                We have received your message. Our growth engineers are mapping your request and will get back to you within 24 hours.
              </p>
            </div>

            <div className="w-full pt-4 border-t border-[#1D3D9E]/5 flex flex-col gap-3">
              <Link
                href="/"
                className="w-full inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-xl shadow-md transition-colors"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/work"
                className="w-full inline-flex justify-center items-center gap-1 text-[11px] font-bold text-[#1D3D9E] hover:text-[#FF6B00] transition-colors uppercase tracking-wider py-2"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>

            {/* Nautical flourish */}
            <div className="pt-2 flex items-center justify-center gap-2 text-[#0F2C59]/20 w-full">
              <span className="w-10 h-px bg-[#1D3D9E]/10" />
              <Anchor className="w-3.5 h-3.5" />
              <span className="w-10 h-px bg-[#1D3D9E]/10" />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
