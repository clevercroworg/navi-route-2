"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  Shield, 
  Users, 
  ShoppingCart, 
  Database, 
  Target, 
  Wrench, 
  Phone
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.91-6.997-1.878-1.879-4.361-2.914-7.01-2.915-5.442 0-9.87 4.414-9.874 9.86-.002 1.798.486 3.55 1.414 5.094l-.949 3.469 3.555-.933zm12.39-7.105c-.34-.17-2.01-.99-2.32-1.1-31-.11-.53-.17-.76-.51-.23-.34-.9-.9-1.12-1.32-.22-.42 0-.78-.08-.95-.08-.17-.76-1.84-1.05-2.51-.27-.67-.56-.58-.76-.59-.2-.01-.43-.01-.67-.01-.24 0-.63.09-.96.44-.33.35-1.27 1.24-1.27 3.03s1.3 3.52 1.48 3.76c.18.24 2.55 3.9 6.19 5.47 2.16.93 3.32 1.23 4.54 1.15 1.09-.08 2.01-.84 2.44-1.63.43-.79.43-1.47.3-1.62-.13-.15-.47-.25-.81-.42z"/>
    </svg>
  );
}

const appServices = [
  {
    icon: Shield,
    title: "Content Management",
    description: "Manage website and app content, pages, blog posts, and media from a centralized dashboard.",
  },
  {
    icon: Users,
    title: "User Management",
    description: "Add, edit, and manage users with role-based access control and activity tracking.",
  },
  {
    icon: ShoppingCart,
    title: "Order & Booking Management",
    description: "Track and manage orders, bookings, payments, and customer transactions.",
  },
  {
    icon: Database,
    title: "Reports & Analytics",
    description: "Generate custom reports with data exports, charts, and business intelligence dashboards.",
  },
  {
    icon: Target,
    title: "Lead Management",
    description: "View, assign, and track leads with pipeline views and follow-up reminders.",
  },
  {
    icon: Wrench,
    title: "System Settings",
    description: "Configure business settings, notifications, integrations, and automated workflows.",
  }
];

const whyChoosePoints = [
  "Custom admin panels designed specifically for your business workflows and data structure.",
  "Role-based access control with proper security and activity logging.",
  "Clean, intuitive interfaces that your team can use without technical training.",
  "Real-time data management with search, filters, exports, and bulk actions.",
  "Seamless integration with your existing website, app, and third-party tools."
];

const processSteps = [
  { step: "01", title: "Discover", description: "We understand your business, goals and user needs.", image: "/images/process_discover_v5.png" },
  { step: "02", title: "Plan", description: "We plan features, workflows and technical structure.", image: "/images/process_plan_v5.png" },
  { step: "03", title: "Design", description: "We design intuitive UI/UX that users will love.", image: "/images/process_build_v5.png" },
  { step: "04", title: "Develop", description: "We build clean, scalable and secure applications.", image: "/images/process_launch_v5.png" },
  { step: "05", title: "Test", description: "We test thoroughly for performance, security and usability.", image: "/images/process_grow_v5.png" },
  { step: "06", title: "Launch", description: "We deploy smoothly and make your app live.", image: "/images/process_launch_v5.png" },
  { step: "07", title: "Support", description: "We provide ongoing support and improvements.", image: "/images/process_grow_v5.png" }
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
    name: "Node.js",
    svg: (
      <svg className="w-8 h-8 text-[#339933]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0 l8.795-5.076c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg className="w-8 h-8 text-[#336791]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788"/>
      </svg>
    )
  }
];

const faqs = [
  {
    question: "What is an admin panel?",
    answer: "An admin panel is a secure backend interface where you can manage your website or app content, users, orders, data, and business operations.",
  },
  {
    question: "Can I control user roles and permissions?",
    answer: "Yes. We build role-based access control so different team members have appropriate access levels.",
  },
  {
    question: "Can it integrate with my existing systems?",
    answer: "Yes. We can integrate admin panels with your existing website, app, CRM, payment gateways, and third-party tools.",
  },
  {
    question: "Is the admin panel mobile-friendly?",
    answer: "Yes. All admin panels we build are responsive and work smoothly on tablets and mobile devices.",
  },
];

export default function AdminPanelDevelopmentPage() {
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
              src="/images/service_app_v5.png"
              alt="App Development Background (Desktop)"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          {/* MOBILE BACKGROUND ARTWORK */}
          <div className="absolute inset-x-0 bottom-0 top-40 z-0 select-none pointer-events-none lg:hidden opacity-25">
            <Image
              src="/images/service_app_v5.png"
              alt="App Development Background (Mobile)"
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                Admin Panel Development
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight max-w-3xl">
                Admin Panel Development for Custom Platforms
              </h1>
              <p className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Manage users, content, bookings, orders, leads and reports with a secure custom admin panel built for your business workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact?service=Admin%20Panel%20Development"
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Admin%20Panel%20Development%20service."
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
              OUR ADMIN SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              Bespoke Backend Interfaces
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              We design and develop content management panels, user directories, transaction logs, and analytics views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appServices.map((svc, idx) => {
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
                      href="/contact?service=Admin%20Panel%20Development"
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
              From Idea to Impact
            </h2>
          </div>

          <div className="relative w-full">
            {/* Dotted wavy path background on desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-24 -translate-y-24 hidden lg:block z-0 pointer-events-none text-[#1D3D9E]/15">
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
            <div className="absolute top-18 bottom-36 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 lg:hidden z-0 pointer-events-none" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
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
                    <h3 className="font-serif text-sm font-bold text-[#1D3D9E]">{step.title}</h3>
                    <p className="text-[11px] text-[#0F2C59]/70 leading-relaxed max-w-[130px] mx-auto">{step.description}</p>
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
                Technologies We Work With
              </h2>
              <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
                We leverage modern web technologies to build secure, robust, and lightning-fast web applications.
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

        {/* 5. WHY CHOOSE SECTION */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left side: Checklist */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  WHY PARTNER WITH US
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                  We Build Apps That Drive Real Results
                </h2>
                <p className="text-[#0F2C59]/80 text-xs sm:text-sm leading-relaxed max-w-xl">
                  We build custom administrative panels designed natively around your company’s precise operational structure.
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
                  src="/images/telescope_lookout_sketch.png"
                  alt="Telescope Illustration"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>

          </div>
        </section>

        {/* 6. FAQ & CTA GRID SECTION */}
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
                  src="/images/ship_wheel_sketch.png"
                  alt="Steering Wheel Background"
                  fill
                  className="object-contain object-right-bottom opacity-90"
                />
              </div>

              <div className="space-y-4 relative z-10 text-left max-w-md">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold leading-tight">
                  Need a Secure Custom Admin Panel?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Let's build a secure backend dashboard with role-based access control and real-time content management tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-8 relative z-10 w-full sm:max-w-md">
                <Link
                  href="/contact?service=Admin%20Panel%20Development"
                  className="inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 text-center flex-grow"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20Admin%20Panel%20Development%20service."
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

        {/* 7. STATS STRIP SECTION */}
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
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Apps Delivered</span>
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
