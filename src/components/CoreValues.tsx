"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Compass, Map, LineChart } from "lucide-react";

const benefits = [
  {
    title: "Strategic Direction",
    description: "We align technology and marketing with your business goals.",
    icon: Compass,
  },
  {
    title: "Transparent Process",
    description: "Clear communication, realistic timelines, and honest updates.",
    icon: Map,
  },
  {
    title: "Results That Matter",
    description: "We focus on outcomes that fuel sustainable, long-term growth.",
    icon: LineChart,
  },
];

export default function CoreValues() {
  return (
    <section id="why-partner" className="py-24 bg-white relative overflow-hidden w-full border-t border-[#1D3D9E]/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Typography and List */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                WHY NAVI ROUTE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1D3D9E] leading-tight">
                Clarity. Strategy. <br />
                Measurable Growth.
              </h2>
            </div>

            {/* List of benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-4 items-start group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 flex-shrink-0">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-serif text-base font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0F2C59]/70 leading-relaxed max-w-md">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Sketched Compass Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-square">
              <Image
                src="/images/hand_holding_compass_v4.png"
                alt="Hand Holding Compass Sketch"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
