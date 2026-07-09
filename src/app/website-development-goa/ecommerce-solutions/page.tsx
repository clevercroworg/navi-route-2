"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  ShoppingCart, 
  Code2, 
  Laptop, 
  Layout, 
  Shield, 
  Monitor 
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
    icon: ShoppingCart,
    title: "Custom Ecommerce Stores",
    description: "Full-featured online stores with product catalogs, filters, and seamless checkout flows.",
  },
  {
    icon: Code2,
    title: "Headless Commerce",
    description: "API-driven ecommerce with React/Next.js frontends for blazing-fast shopping experiences.",
  },
  {
    icon: Laptop,
    title: "WooCommerce Stores",
    description: "WordPress-powered ecommerce with WooCommerce for easy product and order management.",
  },
  {
    icon: Layout,
    title: "Product Landing Pages",
    description: "High-converting product launch pages designed to drive sales and capture leads.",
  },
  {
    icon: Shield,
    title: "Payment Integration",
    description: "Secure payment gateway setup with Razorpay, Stripe, and other popular providers.",
  },
  {
    icon: Monitor,
    title: "Order Management Dashboard",
    description: "Custom admin panels for managing products, orders, inventory, and customer data.",
  }
];

const whyChoosePoints = [
  "Clean, conversion-focused product pages designed to maximize add-to-cart rates.",
  "Secure payment gateway integrations with Razorpay, Stripe, and more.",
  "Fast-loading pages optimized for mobile shopping and Core Web Vitals.",
  "Built-in SEO structure for product pages, categories, and brand visibility.",
  "Custom admin dashboards for easy product, order, and inventory management."
];

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

const technologies = [
  {
    name: "React",
    svg: (
      <svg className="w-8 h-8 text-[#61DAFB]" viewBox="-11.5 -10.23 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: "Next.js",
    svg: (
      <svg className="w-8 h-8 text-[#1D3D9E]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="currentColor"/>
        <path d="M149.508 157.52L69.142 54H54v72h13.5v-47.51l67.234 86.816a90.4 90.4 0 0014.774-17.786z" fill="white"/>
        <path d="M115.5 54h13.5v72h-13.5z" fill="white"/>
      </svg>
    )
  },
  {
    name: "WordPress",
    svg: (
      <svg className="w-8 h-8 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"/>
      </svg>
    )
  },
  {
    name: "WooCommerce",
    svg: (
      <svg className="w-8 h-8 text-[#96588A]" viewBox="0 0 503.81 299.89" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.75,0H456.84a46.94,46.94,0,0,1,47,47V203.5a46.94,46.94,0,0,1-47,47H309.78L330,299.89l-88.78-49.43H47a46.94,46.94,0,0,1-47-47V47A46.77,46.77,0,0,1,46.76,0Z"/>
      </svg>
    )
  },
  {
    name: "HTML5",
    svg: (
      <svg className="w-8 h-8 text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.4 6H7.2l.2 2.3h7.9l-.3 3.6-3 1-3-1-.2-2.1H6.5l.4 4.5 5.1 1.7 5.1-1.7.7-7.3H16.9z"/>
      </svg>
    )
  },
  {
    name: "CSS3",
    svg: (
      <svg className="w-8 h-8 text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.2 6H7.1l.2 2.3h7.9l-.3 3.5-3 1-3-1-.2-2.1H6.4l.4 4.4 5.2 1.7 5.2-1.7.7-7.2H16.7z"/>
      </svg>
    )
  },
  {
    name: "JavaScript",
    svg: (
      <svg className="w-8 h-8 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    svg: (
      <svg className="w-8 h-8 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"/>
      </svg>
    )
  }
];

const businessGoals = [
  { label: "Company Profiles", description: "Establish trust, showcase your brand story, and detail services for potential clients." },
  { label: "Lead Generation", description: "Capture high-quality enquiries via optimized landing pages and seamless forms." },
  { label: "Ecommerce Stores", description: "Sell physical or digital products securely with robust shopping and payment flows." },
  { label: "SaaS Product Sites", description: "Explain software features, show interactive pricing, and guide user sign-ups." },
  { label: "Landing Pages", description: "Convert paid search and social campaign traffic with highly targeted sales funnels." },
  { label: "Booking & Enquiry", description: "Allow clients to schedule appointments, check availability, or submit requests." },
  { label: "Portfolio Showcases", description: "Highlight case studies, creative work, or projects to close bigger deals." },
  { label: "Service Business", description: "Explain custom services, pricing models, and facilitate consultation bookings." }
];

const faqs = [
  {
    question: "Which ecommerce platforms do you work with?",
    answer: "We build custom ecommerce solutions using React, Next.js, WooCommerce, and headless commerce architectures depending on your business needs.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer: "Yes. We integrate Razorpay, Stripe, PayPal, and other payment gateways for smooth and secure checkout experiences.",
  },
  {
    question: "Do you provide product management tools?",
    answer: "Yes. We build admin panels and dashboards for managing products, inventory, orders, and customer data.",
  },
  {
    question: "Will my ecommerce website be mobile-friendly?",
    answer: "Yes. All our ecommerce websites are fully responsive and optimized for mobile shopping experiences.",
  },
];

export default function EcommerceWebsiteDevelopmentPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-orange-brand/10 selection:text-orange-brand relative">
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-white pt-32 pb-28 lg:pt-40 lg:pb-28 overflow-hidden flex items-center min-h-[70vh]">
          {/* DESKTOP BACKGROUND ARTWORK */}
          <div className="absolute right-0 bottom-0 top-12 w-[45%] pointer-events-none select-none z-0 opacity-35 hidden lg:block">
            <Image
              src="/images/service_website_v5.png"
              alt="Website Design Background (Desktop)"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          {/* MOBILE BACKGROUND ARTWORK */}
          <div className="absolute inset-x-0 bottom-0 top-40 z-0 select-none pointer-events-none lg:hidden opacity-25">
            <Image
              src="/images/service_website_v5.png"
              alt="Website Design Background (Mobile)"
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                Ecommerce Website Development
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight max-w-3xl">
                Ecommerce Website Development for Growing Brands
              </h1>
              <p className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Launch an ecommerce website with clean product pages, smooth checkout, tracking setup and performance-focused design.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact?service=Ecommerce%20Website%20Development"
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Ecommerce%20Website%20Development%20service."
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
                      href="/contact?service=Ecommerce%20Website%20Development"
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

        {/* 3. PROCESS SECTION */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              OUR PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
              A clear route from idea to impact.
            </h2>
          </div>

          <div className="relative w-full">
            {/* Dotted wavy path background on desktop */}
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

            {/* Vertical dotted line on mobile */}
            <div className="absolute top-18 bottom-36 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 md:hidden z-0 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-20 h-20 select-none pointer-events-none">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-extrabold text-[#FF6B00] tracking-wider uppercase">Step {step.step}</span>
                    <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">{step.title}</h3>
                    <p className="text-xs text-[#0F2C59]/70 leading-relaxed max-w-[160px] mx-auto">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MODERN TECHNOLOGIES SECTION */}
        <section className="py-24 bg-sand-100 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                TECHNOLOGY STACK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Modern Technologies We Work With
              </h2>
              <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
                We leverage industry-leading frameworks and platforms to build secure, robust, and lightning-fast web solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF6B00]/40 hover:shadow-md transition-all duration-300 gap-4"
                >
                  <div className="w-12 h-12 flex items-center justify-center text-[#1D3D9E]">
                    {tech.svg}
                  </div>
                  <span className="text-sm font-bold text-[#1D3D9E]">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. WEBSITES FOR DIFFERENT BUSINESS GOALS */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              BUSINESS GOALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
              Websites for Different Business Goals
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              Every website we build is mapped to a specific commercial outcome. Tell us your objective, and we will map the route.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessGoals.map((goal, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-8 hover:shadow-md hover:border-[#FF6B00]/30 transition-all duration-300 text-left space-y-3"
              >
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00] font-bold text-sm">
                  {idx + 1}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">
                  {goal.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#0F2C59]/75 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. WHY CHOOSE SECTION */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left side: Checklist */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  WHY PARTNER WITH US
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                  Engineered for Performance &amp; Sales
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
                  src="/images/seaside_port_design_sketch.png"
                  alt="Seaside Port Design Illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

          </div>
        </section>

        {/* 7. FAQ & CTA GRID SECTION */}
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
              {/* background overlay */}
              <div className="absolute right-0 bottom-0 w-[85%] h-[55%] pointer-events-none select-none z-0">
                <Image
                  src="/images/hand_holding_compass_v4.png"
                  alt="Compass Background"
                  fill
                  className="object-contain object-right-bottom opacity-90"
                />
              </div>

              <div className="space-y-4 relative z-10 text-left max-w-md">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-tight">
                  Ready to Launch Your Online Store?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Let's build a secure, fast-loading, and conversion-optimized store to grow your ecommerce sales.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-8 relative z-10 w-full sm:max-w-md">
                <Link
                  href="/contact?service=Ecommerce%20Website%20Development"
                  className="inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 text-center flex-grow"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Ecommerce%20Website%20Development%20service."
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

        {/* 8. STATS STRIP SECTION */}
        <section className="bg-sand-100 border-t border-[#1D3D9E]/5 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 sm:p-12 grid grid-cols-2 lg:grid-cols-4 gap-8 items-center shadow-sm">
              
              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/stat_websites_ink.png"
                    alt="Websites Delivered Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">150+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Websites Delivered</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/stat_clients_ink.png"
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
                    src="/images/stat_experience_ink.png"
                    alt="Years Experience Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">15+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Years Experience</span>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 justify-center lg:justify-start">
                <div className="relative w-16 h-16 shrink-0">
                  <Image
                    src="/images/stat_industries_ink.png"
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
