"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Cpu,
  Phone,
  MessageCircle,
  Database,
  Send,
  Network,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Users,
  Smartphone,
  Bot,
  User,
  Workflow,
  Shield,
  Clock,
  TrendingUp,
  GraduationCap,
  HeartPulse,
  Luggage,
  Home,
  MessageSquare,
  Target
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.29 1.97 13.82 1.05 12.008 1.05c-5.442 0-9.87 4.372-9.874 9.802-.002 1.778.486 3.514 1.411 5.097l-.924 3.376 3.471-.912-.03-.009zm11.367-7.854c-.3-.15-1.77-.875-2.046-.975-.276-.102-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.485-.892-.793-1.493-1.773-1.668-2.073-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.676-1.624-.925-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.374-.01-.574-.01-.2 0-.526.075-.801.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.224 5.116 4.524.715.31 1.273.496 1.71.635.717.227 1.37.195 1.885.118.574-.086 1.77-.724 2.02-1.385.25-.66.25-1.225.175-1.385-.075-.16-.275-.26-.575-.41z" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  smartphone: Smartphone,
  cpu: Cpu,
  target: Target,
  database: Database,
  rocket: Send,
  wrench: Workflow,
  check: Check,
  messagecircle: MessageCircle,
  checkcircle2: CheckCircle2,
  bot: Bot,
  user: User,
  workflow: Workflow,
  users: Users,
  home: Home,
  heartpulse: HeartPulse,
  luggage: Luggage,
  graduationcap: GraduationCap,
  clock: Clock,
  trendingup: TrendingUp
};

const industryImageMap: Record<string, string> = {
  "real estate": "/images/industry_real_estate.png",
  "healthcare": "/images/industry_healthcare.png",
  "hospitality": "/images/industry_hospitality.png",
  "education": "/images/industry_education.png",
  "service businesses": "/images/industry_service.png",
  "service business": "/images/industry_service.png",
  "e-commerce": "/images/industry_ecommerce.png"
};

const defaultColorClasses = [
  "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20",
  "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20",
  "bg-amber-500/10 text-amber-600 border-amber-500/20"
];

const getStepTheme = (colorClass: string) => {
  const c = colorClass.toLowerCase();
  if (c.includes("emerald") || c.includes("green")) return { color: "#10b981", shadow: "hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]", border: "hover:border-emerald-500/40" };
  if (c.includes("1d3d9e") || c.includes("blue")) return { color: "#1D3D9E", shadow: "hover:shadow-[0_0_15px_rgba(29,61,158,0.1)]", border: "hover:border-[#1D3D9E]/40" };
  if (c.includes("ff6b00") || c.includes("orange")) return { color: "#FF6B00", shadow: "hover:shadow-[0_0_15px_rgba(255,107,0,0.1)]", border: "hover:border-[#FF6B00]/40" };
  return { color: "#f59e0b", shadow: "hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]", border: "hover:border-amber-500/40" };
};

const testimonials = [
  {
    quote: "Implementing the AI Lead Qualification Bot cut down our response time from hours to under 30 seconds. Outbound conversion rates jumped 18%.",
    author: "Karan Johar",
    role: "Operations Director",
    rating: 5,
    avatar: "KJ"
  },
  {
    quote: "Our automated WhatsApp CRM follow-ups work round the clock. We are capturing leads at midnight that convert into sales by morning.",
    author: "Aditi Rao",
    role: "Marketing Manager",
    rating: 5,
    avatar: "AR"
  },
  {
    quote: "Workflow automation eliminated hours of manual data entry for our team. The integration between our booking forms and CRM is seamless.",
    author: "Vikram Sen",
    role: "CEO, StayGlobal",
    rating: 5,
    avatar: "VS"
  }
];

type FlowchartStep = {
  title: string;
  desc: string;
  colorClass?: string;
  icon: string;
};

type FlowchartData = {
  title: string;
  icon: string;
  steps: FlowchartStep[];
};

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

interface AiAutomationServiceLayoutProps {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceName: string;
  services: ServiceItem[];
  whyChoose: string[];
  faqs: FAQItem[];
  flowchart?: FlowchartData;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
  faqTitle?: string;
  metrics?: {
    leadsVal?: string;
    leadsChange?: string;
    leadsPath?: string;
    responseVal?: string;
    responseChange?: string;
    responsePath?: string;
    resolutionVal?: string;
    resolutionChange?: string;
    resolutionPath?: string;
  };
}

export default function AiAutomationServiceLayout({
  eyebrow,
  heroTitle,
  heroSubtitle,
  serviceName,
  services,
  whyChoose,
  faqs,
  flowchart,
  whyChooseTitle,
  whyChooseSubtitle,
  faqTitle,
  metrics
}: AiAutomationServiceLayoutProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const defaultMetrics = {
    leadsVal: "2,548",
    leadsChange: "+32.6% this month",
    leadsPath: "M0 35 Q 20 20, 40 25 T 80 10 T 100 5",
    responseVal: "< 20s avg",
    responseChange: "Instant resolution",
    responsePath: "M0 35 Q 20 30, 40 28 T 80 12 T 100 5",
    resolutionVal: "88% rate",
    resolutionChange: "Automated support",
    resolutionPath: "M0 35 Q 20 32, 40 25 T 80 15 T 100 5"
  };

  const activeMetrics = {
    leadsVal: metrics?.leadsVal ?? defaultMetrics.leadsVal,
    leadsChange: metrics?.leadsChange ?? defaultMetrics.leadsChange,
    leadsPath: metrics?.leadsPath ?? defaultMetrics.leadsPath,
    responseVal: metrics?.responseVal ?? defaultMetrics.responseVal,
    responseChange: metrics?.responseChange ?? defaultMetrics.responseChange,
    responsePath: metrics?.responsePath ?? defaultMetrics.responsePath,
    resolutionVal: metrics?.resolutionVal ?? defaultMetrics.resolutionVal,
    resolutionChange: metrics?.resolutionChange ?? defaultMetrics.resolutionChange,
    resolutionPath: metrics?.resolutionPath ?? defaultMetrics.resolutionPath,
  };

  const defaultFlowchart: FlowchartData = {
    title: "CUSTOMER ACQUISITION FLOW",
    icon: "users",
    steps: [
      {
        title: "Lead Enquiry",
        desc: "New leads come in via website, ads or forms.",
        colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20",
        icon: "users"
      },
      {
        title: "Instant WhatsApp Reply",
        desc: "AI instantly replies, engages and qualifies the lead.",
        colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        icon: "messagecircle"
      },
      {
        title: "CRM Update",
        desc: "Lead details are captured and updated in CRM.",
        colorClass: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20",
        icon: "database"
      },
      {
        title: "Follow-Up",
        desc: "Auto follow-ups nurture leads until they convert.",
        colorClass: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        icon: "check"
      }
    ]
  };

  const activeFlowchart = flowchart || defaultFlowchart;
  const FlowchartHeaderIcon = iconMap[activeFlowchart.icon.toLowerCase()] || Cpu;

  const heroBullets = [
    { title: "Faster Response", desc: "Instant replies and automated follow-ups.", icon: "cpu" },
    { title: "Less Manual Work", desc: "Automate repetitive tasks and save hours daily.", icon: "clock" },
    { title: "Better Lead Tracking", desc: "Capture, score and track every lead in one place.", icon: "target" },
    { title: "Scalable Workflows", desc: "Automation that grows with your business.", icon: "trendingup" }
  ];

  const howItWorksSteps = [
    { step: "01", title: "Enquiry Received", desc: "Leads come in from website, ads, WhatsApp or forms.", icon: "messagecircle" },
    { step: "02", title: "AI Qualification", desc: "AI asks key questions and qualifies the lead.", icon: "cpu" },
    { step: "03", title: "CRM Capture", desc: "Lead data is saved in CRM and assigned to the team.", icon: "database" },
    { step: "04", title: "Follow-Up & Reporting", desc: "Automated follow-ups and performance tracking.", icon: "checkcircle2" }
  ];

  const industryHelps = [
    { title: "Real Estate", desc: "Capture leads, schedule visits and close faster.", icon: "home" },
    { title: "Healthcare", desc: "Manage appointments, reminders and patient queries.", icon: "heartpulse" },
    { title: "Hospitality", desc: "Handle bookings, inquiries and guest communication.", icon: "luggage" },
    { title: "Education", desc: "Nurture enquiries and improve admissions.", icon: "graduationcap" },
    { title: "Service Businesses", desc: "Automate follow-ups and delight your customers.", icon: "users" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION (WITH WATERMARK & FLOWCHART DISPLAY) */}
        <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden flex flex-col justify-center min-h-[85vh]">
          {/* DESKTOP BACKGROUND WATERMARK */}
          <div className="absolute right-0 bottom-0 top-12 w-[45%] pointer-events-none select-none z-0 opacity-35 hidden lg:block">
            <Image
              src="/images/service_automation_v5.png"
              alt="AI Automation Background (Desktop)"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          {/* MOBILE BACKGROUND WATERMARK */}
          <div className="absolute inset-x-0 bottom-0 top-40 z-0 select-none pointer-events-none lg:hidden opacity-20">
            <Image
              src="/images/service_automation_v5.png"
              alt="AI Automation Background (Mobile)"
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  {eyebrow}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1D3D9E] leading-[1.12] max-w-2xl">
                  {heroTitle}
                </h1>
                <p className="text-[#0F2C59]/85 text-base sm:text-lg leading-relaxed max-w-xl">
                  {heroSubtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(serviceName)}`}
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Request a Callback
                </Link>
                <a
                  href={`https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(serviceName)}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#0F2C59] text-xs sm:text-sm font-bold px-8 py-4.5 rounded-xl shadow-sm transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: High-Fidelity Flowchart in Navi Route Aesthetic */}
            <div className="lg:col-span-6 w-full flex flex-col justify-center z-10">
              <div className="relative bg-white border border-[#1D3D9E]/10 rounded-[32px] p-6 sm:p-8 shadow-xl max-w-lg mx-auto w-full text-left overflow-hidden">
                
                {/* Header Icon & Title */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-3">
                    <div className="absolute inset-[-4px] rounded-2xl border border-[#FF6B00]/20 animate-pulse" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-[#1D3D9E]/5 text-[#1D3D9E] border border-[#1D3D9E]/10 shadow-sm">
                      <FlowchartHeaderIcon size={22} className="stroke-[1.5]" />
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F2C59]/60 leading-none font-mono">
                    {activeFlowchart.title}
                  </span>
                </div>

                <div className="flex flex-col gap-4 relative">
                  {activeFlowchart.steps.map((step, idx) => {
                    const colorClass = step.colorClass || defaultColorClasses[idx % defaultColorClasses.length];
                    const StepIcon = iconMap[step.icon.toLowerCase()] || Cpu;
                    const theme = getStepTheme(colorClass);
                    return (
                      <div key={idx} className="relative flex items-stretch gap-4 group">
                        
                        {/* Connecting Line */}
                        {idx < activeFlowchart.steps.length - 1 && (
                          <div className="absolute left-[23px] top-12 bottom-[-16px] w-[2px] bg-slate-100 overflow-hidden rounded-full">
                            <motion.div
                              className="absolute w-full h-10 rounded-full left-0"
                              style={{
                                background: `linear-gradient(to bottom, transparent, ${theme.color}, transparent)`,
                              }}
                              animate={{ top: ["-40px", "100%"] }}
                              transition={{
                                duration: 2.5,
                                ease: "linear",
                                repeat: Infinity
                              }}
                            />
                          </div>
                        )}

                        {/* Step Icon */}
                        <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl shrink-0 border shadow-sm z-10 transition-all duration-300 group-hover:scale-105 ${colorClass}`}>
                          <StepIcon size={18} className="stroke-[2] z-10" />
                          <span 
                            className="absolute inset-0 rounded-2xl opacity-10 animate-ping"
                            style={{ backgroundColor: theme.color, animationDuration: "3s" }} 
                          />
                        </div>

                        {/* Step Content */}
                        <div className={`flex flex-col justify-center bg-[#FAF5EE]/60 border border-[#1D3D9E]/5 rounded-2xl px-5 py-3.5 flex-grow transition-all duration-300 hover:bg-white hover:border-[#FF6B00]/30 hover:shadow-md ${theme.shadow} ${theme.border} relative overflow-hidden`}>
                          <div className="flex items-center justify-between gap-4 mb-1">
                            <span className="text-sm font-bold text-[#1D3D9E] tracking-tight">
                              {step.title}
                            </span>
                            <span className="text-[9px] font-bold text-slate-400 tracking-wider font-mono select-none">
                              NODE_0{idx + 1}
                            </span>
                          </div>
                          <p className="text-xs text-[#0F2C59]/80 leading-relaxed font-medium">
                            {step.desc}
                          </p>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>

          {/* HERO BOTTOM BULLETS (COMPACT ICON & TITLE) */}
          <div className="max-w-7xl mx-auto px-6 w-full mt-12 pt-8 border-t border-[#1D3D9E]/5 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {heroBullets.map((bullet, idx) => {
                const BulletIcon = iconMap[bullet.icon.toLowerCase()] || Clock;
                return (
                  <div key={idx} className="flex gap-4 items-center bg-slate-50 border border-slate-100 rounded-2xl p-4.5 hover:border-[#FF6B00]/20 transition-all duration-200">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1D3D9E]/5 text-[#1D3D9E] shrink-0">
                      <BulletIcon size={18} className="stroke-[2]" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xs font-bold text-[#1D3D9E] tracking-tight leading-tight">
                        {bullet.title}
                      </h3>
                      <p className="text-[10px] font-medium text-[#0F2C59]/60 mt-1 leading-snug">
                        {bullet.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 2. SERVICES GRID SECTION */}
        <section id="services-grid" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              AUTOMATION SERVICES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              {serviceName} Solutions
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              We design and implement custom triggers, autoresponders, databases, and qualifiers to optimize workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const ServiceIcon = iconMap[svc.icon.toLowerCase()] || Cpu;
              return (
                <div
                  key={idx}
                  className="border border-[#1D3D9E]/10 rounded-3xl bg-white p-8 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between items-start text-left group cursor-default"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                      <ServiceIcon className="w-5 h-5" />
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
                      href={`/contact?service=${encodeURIComponent(serviceName)}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors"
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

        {/* 3. HOW IT WORKS TIMELINE */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                HOW IT WORKS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Operational Setup Blueprint
              </h2>
            </div>

             <div className="relative w-full">
              <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-[#1D3D9E]/15 hidden lg:block z-0 pointer-events-none" />
              <div className="absolute top-12 bottom-36 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 lg:hidden z-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                {howItWorksSteps.map((step, idx) => {
                  const processImages = [
                    "/images/process_discover_v5.png",
                    "/images/process_plan_v5.png",
                    "/images/process_build_v5.png",
                    "/images/process_launch_v5.png"
                  ];
                  return (
                    <div key={idx} className="flex flex-col items-center text-center space-y-4 group/step">
                      <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#1D3D9E]/10 shadow-sm group-hover/step:border-[#FF6B00] transition-colors duration-300">
                        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#FF6B00] text-[9px] font-black text-[#FF6B00] shadow-sm">
                          {step.step}
                        </div>
                        <div className="w-10 h-10 relative select-none pointer-events-none">
                          <Image
                            src={processImages[idx]}
                            alt={`${step.title} Process Icon`}
                            fill
                            className="object-contain group-hover/step:scale-110 transition-transform duration-300"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-bold text-[#1D3D9E] group-hover/step:text-[#FF6B00] transition-colors duration-300">{step.title}</h4>
                        <p className="text-[11px] text-[#0F2C59]/70 leading-relaxed max-w-[170px] mx-auto">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>



        {/* 5. INDUSTRY BENEFITS SECTION */}
        <section className="py-24 bg-sand-100 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                INDUSTRIES SERVED
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Where Automation Helps
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {industryHelps.map((ind, idx) => {
                const imgPath = industryImageMap[ind.title.toLowerCase()] || "/images/industry_service.png";
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-[#FF6B00]/40 hover:shadow-md transition-all duration-300 gap-4 group/ind cursor-default"
                  >
                    <div className="w-16 h-16 flex items-center justify-center relative select-none pointer-events-none">
                      <Image
                        src={imgPath}
                        alt={`${ind.title} Icon`}
                        fill
                        className="object-contain group-hover/ind:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-sm font-bold text-[#1D3D9E] block">
                        {ind.title}
                      </span>
                      <span className="text-[11px] text-[#0F2C59]/70 leading-relaxed block">
                        {ind.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. UNIFIED WHY CHOOSE, FAQ & CTA SECTION (CLEVER CROW STYLE) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Column 1: Why Choose (Checklist) */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  {whyChooseSubtitle || "WHY PARTNER WITH US"}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
                  {whyChooseTitle || "Smart Workflows, Absolute Control"}
                </h2>
                <p className="text-[#0F2C59]/80 text-xs sm:text-sm max-w-xl">
                  We eliminate manual friction, reduce human error and guarantee consistent response times.
                </p>
              </div>

              <div className="flex flex-col gap-4 font-sans">
                {whyChoose.map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[#FF6B00] text-white shrink-0 shadow-sm mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#0F2C59]/90 font-medium leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: FAQs */}
            <div className="lg:col-span-4 flex flex-col justify-start text-left">
              <div className="space-y-4 mb-8">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <h2 className="font-serif text-2xl sm:text-[28px] font-extrabold text-[#1D3D9E] tracking-tight">
                  {faqTitle || "Got Questions?"}
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                {faqs.map((faq, i) => (
                  <div 
                    key={i} 
                    className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-[0_2px_15px_rgba(0,0,0,0.01)] transition-colors hover:border-[#FF6B00]/40"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="flex w-full items-center justify-between text-left font-bold text-[#1D3D9E] text-xs sm:text-sm hover:text-[#FF6B00] transition-colors"
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
                          className="overflow-hidden"
                        >
                          <div className="pb-1 pt-4 text-xs font-medium text-[#0F2C59]/75 leading-relaxed border-t border-[#1D3D9E]/5 mt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Premium Bot Consultation Card */}
            <div className="lg:col-span-3 bg-gradient-to-b from-[#FFFDF9] to-[#FFF9EE] border border-[#FF6B00]/10 rounded-[32px] p-6 text-center shadow-sm flex flex-col items-center justify-between min-h-[380px] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#FF6B00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-full space-y-4">
                <div className="relative w-36 h-36 mx-auto select-none pointer-events-none">
                  <Image
                    src="/images/nautical_bot_sketch.png"
                    alt="AI Assistant Robot Illustration"
                    fill
                    className="object-contain filter drop-shadow-sm"
                  />
                </div>
                
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#1D3D9E] leading-tight px-2">
                  Ready to Automate Your Business?
                </h3>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(serviceName)}`}
                className="w-full mt-6 flex items-center justify-center gap-1.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white hover:scale-[1.01] active:scale-95 transition-all px-6 py-4 rounded-2xl font-bold text-xs shrink-0 shadow-md cursor-pointer tracking-wider uppercase"
              >
                <span>Book Consultation</span>
                <ArrowRight size={12} className="stroke-[3.5]" />
              </Link>
            </div>

          </div>

          {/* Bottom row: 3 metrics cards side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 text-left">
            
            {/* Card 1: Leads Captured */}
            <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-sm font-sans flex items-center justify-between min-h-[105px]">
              <div>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Live Performance</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1.5">Leads Captured</span>
                <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1">{activeMetrics.leadsVal}</span>
                <span className="text-[9px] font-bold text-green-500 block mt-1 font-mono">
                  {activeMetrics.leadsChange}
                </span>
              </div>
              <div className="w-24 h-10 relative flex items-end">
                <svg className="w-full h-full text-emerald-500 overflow-visible" viewBox="0 0 100 30" fill="none">
                  <defs>
                    <linearGradient id="g-leads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={activeMetrics.leadsPath} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d={`${activeMetrics.leadsPath} L100 30 L0 30Z`} fill="url(#g-leads)"/>
                </svg>
              </div>
            </div>

            {/* Card 2: Response Time */}
            <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-sm font-sans flex items-center justify-between min-h-[105px]">
              <div>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Response Efficiency</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1.5">Response Time</span>
                <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1">{activeMetrics.responseVal}</span>
                <span className="text-[9px] font-bold text-orange-500 block mt-1 font-mono">
                  {activeMetrics.responseChange}
                </span>
              </div>
              <div className="w-24 h-10 relative flex items-end">
                <svg className="w-full h-full text-orange-500 overflow-visible" viewBox="0 0 100 30" fill="none">
                  <defs>
                    <linearGradient id="g-response" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={activeMetrics.responsePath} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d={`${activeMetrics.responsePath} L100 30 L0 30Z`} fill="url(#g-response)"/>
                </svg>
              </div>
            </div>

            {/* Card 3: AI Resolution Rate */}
            <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-sm font-sans flex items-center justify-between min-h-[105px]">
              <div>
                <span className="flex items-center gap-1.5">
                  <span className="flex h-1.5 w-1.5 relative">
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">Automation Rate</span>
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1.5">AI Resolution</span>
                <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1">{activeMetrics.resolutionVal}</span>
                <span className="text-[9px] font-bold text-blue-500 block mt-1 font-mono">
                  {activeMetrics.resolutionChange}
                </span>
              </div>
              <div className="w-24 h-10 relative flex items-end">
                <svg className="w-full h-full text-[#4285F4] overflow-visible" viewBox="0 0 100 30" fill="none">
                  <defs>
                    <linearGradient id="g-resolution" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <path d={activeMetrics.resolutionPath} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  <path d={`${activeMetrics.resolutionPath} L100 30 L0 30Z`} fill="url(#g-resolution)"/>
                </svg>
              </div>
            </div>

          </div>
        </section>

        {/* 7. STATS STRIP */}
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
