"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Fast, high-converting websites built to engage your audience.",
    image: "/images/service_website_v5.png",
    href: "/website-development-goa",
  },
  {
    title: "App Development",
    description: "Scalable mobile and web apps with seamless experiences.",
    image: "/images/service_app_v5.png",
    href: "/app-development-goa",
  },
  {
    title: "AI Automation",
    description: "Streamline operations and save time with smart automation.",
    image: "/images/service_automation_v5.png",
    href: "/app-development-goa",
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that attract and convert customers.",
    image: "/images/service_marketing_v5.png",
    href: "/app-development-goa",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden w-full border-t border-[#1D3D9E]/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
            NAVIGATING IDEAS. DELIVERING IMPACT.
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
            A partner for your digital journey.
          </h2>
          <p className="text-[#0F2C59]/70 text-sm sm:text-base leading-relaxed">
            Navi Route is a digital growth studio that helps startups and businesses build, automate, and scale with confidence.
          </p>
        </div>

        {/* Services Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border border-[#1D3D9E]/10 rounded-2xl bg-white p-8 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between group"
              >
                <div className="space-y-6 flex flex-col items-center w-full">
                  {/* Custom Hand-drawn White-Ink Style Illustration (Mix-blend-multiply to merge transparent outlines) */}
                  <div className="relative w-56 h-56 select-none">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="224px"
                      className="object-contain mix-blend-multiply"
                    />
                  </div>

                  <div className="space-y-3 w-full">
                    <h3 className="font-serif text-lg font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0F2C59]/70 leading-relaxed max-w-[220px] mx-auto">
                      {svc.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6 w-full flex justify-center">
                  <Link 
                    href={svc.href} 
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00] uppercase tracking-wider group/link"
                  >
                    Learn more
                    <span className="group-hover/link:translate-x-1 transition-transform duration-200">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}