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
  Phone,
  BarChart3,
  TrendingUp,
  Search,
  Layers,
  Send,
  HelpCircle,
  Clock,
  Briefcase,
  Award,
  Users,
  Smartphone,
  Shield,
  Laptop,
  Monitor,
  Heart,
  ShoppingCart,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Home
} from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.29 1.97 13.82 1.05 12.008 1.05c-5.442 0-9.87 4.372-9.874 9.802-.002 1.778.486 3.514 1.411 5.097l-.924 3.376 3.471-.912-.03-.009zm11.367-7.854c-.3-.15-1.77-.875-2.046-.975-.276-.102-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.485-.892-.793-1.493-1.773-1.668-2.073-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.676-1.624-.925-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.374-.01-.574-.01-.2 0-.526.075-.801.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.224 5.116 4.524.715.31 1.273.496 1.71.635.717.227 1.37.195 1.885.118.574-.086 1.77-.724 2.02-1.385.25-.66.25-1.225.175-1.385-.075-.16-.275-.26-.575-.41z" />
    </svg>
  );
}

// Brand icons
function GoogleAdsBrandIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998z" fill="#34A853"/>
      <path d="M23.4641 16.9287L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644z" fill="#FBBC05"/>
      <path d="M7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z" fill="#4285F4"/>
    </svg>
  );
}

function FacebookBrandIcon() {
  return (
    <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function LinkedInBrandIcon() {
  return (
    <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function YouTubeBrandIcon() {
  return (
    <svg className="w-4 h-4 fill-[#FF0000]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.022 0 12 0 12s0 3.978.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.858.508 9.388.508 9.388.508s7.53 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.978 24 12 24 12s0-3.978-.502-5.837z"/>
      <polygon fill="#FFFFFF" points="9.545 15.568 15.818 12 9.545 8.432"/>
    </svg>
  );
}

function InstagramBrandIcon() {
  return (
    <svg className="w-4 h-4 fill-[#E1306C]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

const testimonials = [
  {
    quote: "Working with their paid ads team scaled our qualified lead volume by 140% in just two months. The reporting is completely transparent.",
    author: "Pradeep Nair",
    role: "Marketing Head",
    rating: 5,
    avatar: "PN"
  },
  {
    quote: "Our local SEO optimization increased foot traffic to our outlets by 45%. We finally rank on the map pack for our target keywords.",
    author: "Siddharth Das",
    role: "Owner, Das Jewelers",
    rating: 5,
    avatar: "SD"
  },
  {
    quote: "Their meta ads strategy turned our e-commerce brand profitable. The attribution and tracking setup gave us full visibility on every rupee spent.",
    author: "Neha Sharma",
    role: "D2C Brand Founder",
    rating: 5,
    avatar: "NS"
  }
];

export type DashboardStat = {
  label: string;
  value: string;
  change: string;
  isIncrease: boolean;
};

export type LineChartData = {
  leadsLabel?: string;
  conversionsLabel?: string;
  leadsPath: string;
  conversionsPath: string;
  dates: string[];
};

export type DonutSlice = {
  name: string;
  percentage: number;
  colorClass: string;
  strokeColor: string;
};

export type DashboardData = {
  leadsGenerated: DashboardStat;
  conversions: DashboardStat;
  revenue: DashboardStat;
  costPerLead: DashboardStat;
  lineChart: LineChartData;
  activePlatforms: string[];
  trafficGrowth?: {
    value: string;
    change: string;
    isIncrease: boolean;
  };
  channelMix?: {
    slices: DonutSlice[];
    primarySource: string;
  };
  whyChooseMetrics?: {
    leadsMiniPath?: string;
    conversionsMiniPath?: string;
    cplMiniPath?: string;
    revenueBars?: number[];
  };
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

interface DigitalMarketingServiceLayoutProps {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceName: string;
  services: ServiceItem[];
  whyChoose: string[];
  faqs: FAQItem[];
  dashboard?: DashboardData;
  whyChooseTitle?: string;
  whyChooseSubtitle?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  search: Search,
  layers: Layers,
  rocket: Send,
  barchart3: BarChart3,
  trendingup: TrendingUp,
  phone: Phone,
  home: Home,
  heart: Heart,
  graduationcap: GraduationCap,
  shoppingcart: ShoppingCart,
  briefcase: Briefcase
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

const brandIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  google: GoogleAdsBrandIcon,
  facebook: FacebookBrandIcon,
  linkedin: LinkedInBrandIcon,
  youtube: YouTubeBrandIcon,
  instagram: InstagramBrandIcon
};

export default function DigitalMarketingServiceLayout({
  eyebrow,
  heroTitle,
  heroSubtitle,
  serviceName,
  services,
  whyChoose,
  faqs,
  dashboard,
  whyChooseTitle,
  whyChooseSubtitle
}: DigitalMarketingServiceLayoutProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const DEFAULT_DASHBOARD: DashboardData = {
    leadsGenerated: {
      label: "Leads Generated",
      value: "2,548",
      change: "↑ 28.6%",
      isIncrease: true
    },
    conversions: {
      label: "Conversions",
      value: "4.32K",
      change: "↑ 31.2%",
      isIncrease: true
    },
    revenue: {
      label: "Revenue Generated",
      value: "₹23.5L",
      change: "↑ 34.8%",
      isIncrease: true
    },
    costPerLead: {
      label: "Cost per Lead",
      value: "₹135",
      change: "↓ 18.7%",
      isIncrease: false
    },
    lineChart: {
      leadsLabel: "Leads",
      conversionsLabel: "Conversions",
      leadsPath: "M0 90 Q 50 85, 80 70 T 160 50 T 240 65 T 320 35 T 400 20",
      conversionsPath: "M0 105 Q 50 100, 80 90 T 160 70 T 240 80 T 320 50 T 400 30",
      dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
    },
    activePlatforms: ["google", "facebook", "linkedin", "youtube"],
    trafficGrowth: {
      value: "+64.2%",
      change: "↑ 12.4% vs last week",
      isIncrease: true
    },
    channelMix: {
      slices: [
        { name: "Google Ads", percentage: 40, colorClass: "bg-[#1D3D9E]", strokeColor: "#1D3D9E" },
        { name: "Meta Ads", percentage: 28, colorClass: "bg-[#FF6B00]", strokeColor: "#FF6B00" },
        { name: "Organic Search", percentage: 18, colorClass: "bg-emerald-500", strokeColor: "#10B981" },
        { name: "Social Media", percentage: 14, colorClass: "bg-amber-500", strokeColor: "#F59E0B" }
      ],
      primarySource: "Google Search"
    },
    whyChooseMetrics: {
      leadsMiniPath: "M0 25 Q15 20,30 22 T60 12 T100 5",
      conversionsMiniPath: "M0 28 Q20 22,40 18 T80 8 T100 3",
      cplMiniPath: "M0 8 Q20 10,40 15 T80 22 T100 25",
      revenueBars: [28, 35, 22, 40, 32, 48, 38, 55, 45, 60, 52, 65]
    }
  };

  const activeDashboard = dashboard || DEFAULT_DASHBOARD;
  const activeTrafficGrowth = activeDashboard.trafficGrowth || DEFAULT_DASHBOARD.trafficGrowth!;
  const activeChannelMix = activeDashboard.channelMix || DEFAULT_DASHBOARD.channelMix!;

  const growthFunnelSteps = [
    { step: "01", title: "Understand", desc: "We analyse your business, audience & goals.", icon: "search" },
    { step: "02", title: "Strategize", desc: "We craft a data-driven marketing strategy.", icon: "layers" },
    { step: "03", title: "Execute", desc: "We launch & optimize high-performing campaigns.", icon: "rocket" },
    { step: "04", title: "Measure", desc: "We track, analyse & report real-time results.", icon: "barchart3" },
    { step: "05", title: "Scale", desc: "We scale what works and maximize growth.", icon: "trendingup" }
  ];

  const heroBullets = [
    { title: "Performance Focused", desc: "Every campaign is built for measurable ROI.", icon: "target" },
    { title: "Data-Driven Strategy", desc: "Smarter decisions backed by real insights.", icon: "barchart3" },
    { title: "Transparent Reporting", desc: "Clear dashboards & real-time updates.", icon: "monitor" },
    { title: "Growth Guaranteed", desc: "We're committed to your long-term growth.", icon: "trendingup" }
  ];

  const industries = [
    { title: "Real Estate", icon: "home" },
    { title: "Healthcare", icon: "heart" },
    { title: "Education", icon: "graduationcap" },
    { title: "E-commerce", icon: "shoppingcart" },
    { title: "Service Business", icon: "briefcase" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION */}
        <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden flex flex-col justify-center min-h-[85vh]">
          {/* DESKTOP BACKGROUND WATERMARK */}
          <div className="absolute right-0 bottom-0 top-12 w-[45%] pointer-events-none select-none z-0 opacity-35 hidden lg:block">
            <Image
              src="/images/service_marketing_v5.png"
              alt="Digital Marketing Background (Desktop)"
              fill
              className="object-contain object-right-bottom"
              priority
            />
          </div>

          {/* MOBILE BACKGROUND WATERMARK */}
          <div className="absolute inset-x-0 bottom-0 top-40 z-0 select-none pointer-events-none lg:hidden opacity-20">
            <Image
              src="/images/service_marketing_v5.png"
              alt="Digital Marketing Background (Mobile)"
              fill
              sizes="100vw"
              className="object-contain object-center"
              priority
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-8 text-left pt-4">
              <div className="space-y-4">
                <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                  {eyebrow}
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#1D3D9E] leading-[1.12] max-w-xl">
                  {heroTitle}
                </h1>
                <p className="text-[#0F2C59]/85 text-base sm:text-lg leading-relaxed max-w-md">
                  {heroSubtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(serviceName)}`}
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Project
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

            {/* Right Column: High-Fidelity Performance Dashboard Sidebar Grid */}
            <div className="lg:col-span-7 w-full flex flex-col justify-center z-10">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                
                {/* Main Overview Card */}
                <div className="sm:col-span-7 lg:col-span-7 xl:col-span-8 bg-white border border-[#1D3D9E]/10 rounded-[28px] p-6 shadow-xl font-sans flex flex-col justify-between text-left">
                  <div>
                    {/* Header */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1D3D9E]/5 text-[#1D3D9E]">
                          <BarChart3 size={18} className="stroke-[2]" />
                        </div>
                        <span className="text-sm font-bold text-[#1D3D9E] tracking-tight">Campaign Analytics</span>
                      </div>

                      {/* Legend */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                          <span>{activeDashboard.lineChart.leadsLabel || "Leads"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-[#1D3D9E]" />
                          <span>{activeDashboard.lineChart.conversionsLabel || "Conversions"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats Rows */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                      <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/5 rounded-xl p-2.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">{activeDashboard.leadsGenerated.label}</span>
                        <span className="text-base font-black text-[#1D3D9E] block leading-none mt-1">{activeDashboard.leadsGenerated.value}</span>
                        <span className="text-[9px] font-bold text-green-500 mt-1 block">{activeDashboard.leadsGenerated.change}</span>
                      </div>
                      <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/5 rounded-xl p-2.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">{activeDashboard.conversions.label}</span>
                        <span className="text-base font-black text-[#1D3D9E] block leading-none mt-1">{activeDashboard.conversions.value}</span>
                        <span className="text-[9px] font-bold text-green-500 mt-1 block">{activeDashboard.conversions.change}</span>
                      </div>
                      <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/5 rounded-xl p-2.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">{activeDashboard.revenue.label}</span>
                        <span className="text-base font-black text-[#1D3D9E] block leading-none mt-1">{activeDashboard.revenue.value}</span>
                        <span className="text-[9px] font-bold text-green-500 mt-1 block">{activeDashboard.revenue.change}</span>
                      </div>
                      <div className="bg-[#FAF5EE]/60 border border-[#1D3D9E]/5 rounded-xl p-2.5">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">{activeDashboard.costPerLead.label}</span>
                        <span className="text-base font-black text-[#1D3D9E] block leading-none mt-1">{activeDashboard.costPerLead.value}</span>
                        <span className="text-[9px] font-bold text-green-500 mt-1 block">{activeDashboard.costPerLead.change}</span>
                      </div>
                    </div>

                    {/* Chart */}
                    <div className="relative h-[115px] w-full">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 400 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0" y1="15" x2="400" y2="15" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="50" x2="400" y2="50" stroke="#f1f5f9" strokeWidth="1" />
                        <line x1="0" y1="85" x2="400" y2="85" stroke="#f1f5f9" strokeWidth="1" />
                        <path d={activeDashboard.lineChart.leadsPath} stroke="#FF6B00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                        <path d={activeDashboard.lineChart.conversionsPath} stroke="#1D3D9E" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="6 4" />
                        {activeDashboard.lineChart.dates.map((date, idx) => {
                          const xCoords = [12, 100, 195, 290, 388];
                          const anchors = ["start", "middle", "middle", "middle", "end"] as const;
                          return (
                            <text key={idx} x={xCoords[idx]} y="108" fill="#94a3b8" fontSize="8" fontWeight="600" textAnchor={anchors[idx]}>
                              {date}
                            </text>
                          );
                        })}
                      </svg>
                    </div>
                  </div>

                  {/* Active Platforms */}
                  <div className="mt-4 pt-4 border-t border-slate-100/60 flex items-center justify-between">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Active Platforms</span>
                    <div className="flex items-center gap-1.5">
                      {activeDashboard.activePlatforms.map((plat) => {
                        const IconComponent = brandIconMap[plat.toLowerCase()];
                        if (!IconComponent) return null;
                        return (
                          <div key={plat} className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 border border-slate-100 shadow-sm">
                            <IconComponent />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right sidebar column cards */}
                <div className="sm:col-span-5 lg:col-span-5 xl:col-span-4 flex flex-col gap-4 text-left">
                  
                  {/* Traffic Growth Card */}
                  <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-md flex flex-col justify-between h-[120px]">
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Traffic Growth</span>
                      <span className="text-2xl font-black text-[#FF6B00] block mt-1.5">{activeTrafficGrowth.value}</span>
                    </div>
                    <span className="text-[8px] font-bold text-slate-400/80 block mt-2">
                      <span className="text-green-500 font-extrabold">{activeTrafficGrowth.change.split(" vs ")[0]}</span>
                      {" vs " + activeTrafficGrowth.change.split(" vs ")[1]}
                    </span>
                  </div>

                  {/* Channel Mix Card */}
                  <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-md flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block mb-2">Channel Mix</span>
                      
                      {/* Donut chart */}
                      <div className="flex flex-col items-center gap-4 justify-center py-1">
                        <div className="w-16 h-16 shrink-0 relative">
                          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                            <circle cx="18" cy="18" r="14" fill="none" stroke="#f1f5f9" strokeWidth="5" />
                            {(() => {
                              let accumulatedPercent = 0;
                              return activeChannelMix.slices.map((slice, i) => {
                                const dashoffset = -accumulatedPercent;
                                accumulatedPercent += slice.percentage;
                                return (
                                  <circle
                                    key={i}
                                    cx="18"
                                    cy="18"
                                    r="14"
                                    fill="none"
                                    stroke={slice.strokeColor}
                                    strokeWidth="5"
                                    pathLength={100}
                                    strokeDasharray={`${slice.percentage} ${100 - slice.percentage}`}
                                    strokeDashoffset={dashoffset}
                                    strokeLinecap="round"
                                  />
                                );
                              });
                            })()}
                          </svg>
                        </div>
                        
                        <div className="flex flex-col gap-1 text-[9px] font-bold text-slate-500 w-fit mx-auto">
                          {activeChannelMix.slices.map((slice, i) => (
                            <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                              <span className={`w-2 h-2 rounded-full shrink-0 ${slice.colorClass}`} />
                              <span>{slice.name} {slice.percentage}%</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          {/* HERO BOTTOM BULLETS */}
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

        {/* 2. SERVICES GRID */}
        <section id="services-grid" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              MARKETING SOLUTIONS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              Our {serviceName} Services
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              Ongoing campaign management, ROI optimization, keyword strategies, and advanced analytics setups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="border border-[#1D3D9E]/10 rounded-3xl bg-white p-8 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between items-start text-left group cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                    <TrendingUp className="w-5 h-5" />
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
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. GROWTH FUNNEL */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                THE METHODOLOGY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Campaign Growth Funnel
              </h2>
            </div>

            <div className="relative w-full">
              <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-[#1D3D9E]/15 hidden lg:block z-0 pointer-events-none" />
              <div className="absolute top-12 bottom-36 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 lg:hidden z-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                {growthFunnelSteps.map((step, idx) => {
                  const processImages = [
                    "/images/process_discover_v5.png",
                    "/images/process_plan_v5.png",
                    "/images/process_build_v5.png",
                    "/images/process_launch_v5.png",
                    "/images/process_grow_v5.png"
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

        {/* 4. WHY CHOOSE PARTNERSHIP (WITH 4-CARD METRICS DASHBOARD) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left text */}
              <div className="lg:col-span-5 space-y-8 text-left">
                <div className="space-y-4">
                  <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                    {whyChooseSubtitle || "WHY PARTNER WITH US"}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
                    {whyChooseTitle || "Results Over Reports, Always"}
                  </h2>
                  <p className="text-[#0F2C59]/80 text-xs sm:text-sm max-w-xl">
                    We track real conversions, form fills, calls, and sales. No fluff metrics, just return on ad spend.
                  </p>
                </div>

                <div className="flex flex-col gap-4 font-sans">
                  {whyChoose.slice(0, 5).map((point, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 shadow-sm mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <span className="text-xs sm:text-sm text-[#0F2C59]/90 font-medium leading-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: 4-Card Metrics Dashboard from Clever Crow */}
              <div className="lg:col-span-7 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                  
                  {/* Leads Card */}
                  <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-4.5 shadow-sm font-sans flex flex-col justify-between h-[150px]">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{activeDashboard.leadsGenerated.label}</span>
                      <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1.5">{activeDashboard.leadsGenerated.value}</span>
                      <span className="text-[9px] font-bold text-green-500 block mt-1.5 font-mono">
                        {activeDashboard.leadsGenerated.change} <span className="text-slate-400">vs last 30 days</span>
                      </span>
                    </div>
                    <div className="w-full h-8 mt-2">
                      <svg className="w-full h-full text-emerald-500" viewBox="0 0 100 30" fill="none">
                        <defs>
                          <linearGradient id="lg-emerald" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d={activeDashboard.whyChooseMetrics?.leadsMiniPath || "M0 25 Q15 20,30 22 T60 12 T100 5"} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <path d={`${activeDashboard.whyChooseMetrics?.leadsMiniPath || "M0 25 Q15 20,30 22 T60 12 T100 5"} L100 30 L0 30Z`} fill="url(#lg-emerald)"/>
                      </svg>
                    </div>
                  </div>

                  {/* Conversions Card */}
                  <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-4.5 shadow-sm font-sans flex flex-col justify-between h-[150px]">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{activeDashboard.conversions.label}</span>
                      <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1.5">{activeDashboard.conversions.value}</span>
                      <span className="text-[9px] font-bold text-[#4285F4] block mt-1.5 font-mono">
                        {activeDashboard.conversions.change} <span className="text-slate-400">vs last 30 days</span>
                      </span>
                    </div>
                    <div className="w-full h-8 mt-2">
                      <svg className="w-full h-full text-[#4285F4]" viewBox="0 0 100 30" fill="none">
                        <defs>
                          <linearGradient id="lg-blue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d={activeDashboard.whyChooseMetrics?.conversionsMiniPath || "M0 28 Q20 22,40 18 T80 8 T100 3"} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <path d={`${activeDashboard.whyChooseMetrics?.conversionsMiniPath || "M0 28 Q20 22,40 18 T80 8 T100 3"} L100 30 L0 30Z`} fill="url(#lg-blue)"/>
                      </svg>
                    </div>
                  </div>

                  {/* Cost Per Lead Card */}
                  <div className="bg-white border border-[#1D3D9E]/10 rounded-2xl p-4.5 shadow-sm font-sans flex flex-col justify-between h-[150px]">
                    <div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">{activeDashboard.costPerLead.label}</span>
                      <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1.5">{activeDashboard.costPerLead.value}</span>
                      <span className="text-[9px] font-bold text-[#FF6B00] block mt-1.5 font-mono">
                        {activeDashboard.costPerLead.change} <span className="text-slate-400">vs last 30 days</span>
                      </span>
                    </div>
                    <div className="w-full h-8 mt-2">
                      <svg className="w-full h-full text-orange-500" viewBox="0 0 100 30" fill="none">
                        <defs>
                          <linearGradient id="lg-orange" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2"/>
                            <stop offset="100%" stopColor="currentColor" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                        <path d={activeDashboard.whyChooseMetrics?.cplMiniPath || "M0 8 Q20 10,40 15 T80 22 T100 25"} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <path d={`${activeDashboard.whyChooseMetrics?.cplMiniPath || "M0 8 Q20 10,40 15 T80 22 T100 25"} L100 30 L0 30Z`} fill="url(#lg-orange)"/>
                      </svg>
                    </div>
                  </div>

                  {/* Revenue / Ad Spend Card (spanning all 3 columns) */}
                  <div className="sm:col-span-3 bg-white border border-[#1D3D9E]/10 rounded-2xl p-5 shadow-sm font-sans flex flex-col sm:flex-row justify-between items-start sm:items-center min-h-[105px] gap-4">
                    <div className="text-left">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block">
                        {activeDashboard.revenue.label}
                      </span>
                      <span className="text-xl font-black text-[#1D3D9E] block leading-none mt-1.5">
                        {activeDashboard.revenue.value === "₹3.8L" ? "₹3,80,600" : activeDashboard.revenue.value}
                      </span>
                      <span className="text-[9px] font-bold text-green-500 block mt-1.5 font-mono">
                        {activeDashboard.revenue.change} <span className="text-slate-400">vs last 30 days</span>
                      </span>
                    </div>
                    {/* Animated vertical revenue/spend bars */}
                    <div className="flex items-end gap-1.5 h-12 w-full sm:w-auto mt-2 sm:mt-0 justify-start sm:justify-end">
                      {(activeDashboard.whyChooseMetrics?.revenueBars || [30, 45, 38, 52, 40, 48, 55, 62, 58, 68, 64, 72]).map((val, i) => (
                        <div
                          key={i}
                          style={{ height: `${val}%` }}
                          className="w-2 sm:w-2.5 bg-[#FF6B00] rounded-t-sm"
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. SECTOR-SPECIFIC ADVANTAGE */}
        <section className="py-24 bg-sand-100 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                MARKET PENETRATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                Vertical Market Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {industries.map((ind, idx) => {
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
                    <span className="text-sm font-bold text-[#1D3D9E] block">
                      {ind.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS & FAQ */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Testimonials */}
            <div className="lg:col-span-6 flex flex-col justify-between relative z-10 space-y-6">
              
              <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 shadow-sm relative flex flex-col justify-between flex-grow min-h-[300px]">
                
                <button 
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all z-30 cursor-pointer text-slate-500"
                >
                  <ChevronLeft size={16} className="stroke-[2.5]" />
                </button>

                <button 
                  type="button"
                  onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-md hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all z-30 cursor-pointer text-slate-500"
                >
                  <ChevronRight size={16} className="stroke-[2.5]" />
                </button>

                <div className="min-h-[160px] flex-grow flex flex-col justify-between overflow-hidden text-left">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTestimonial}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className="flex flex-col justify-between flex-grow"
                    >
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF6B00] mb-3 block">
                          CLIENT SUCCESS STORY
                        </span>
                        <h3 className="font-serif text-lg font-extrabold text-[#1D3D9E] leading-tight">
                          Lower Acquisition Cost, Consistent Scalability.
                        </h3>

                        <div className="mt-6 relative">
                          <span className="text-4xl font-serif text-[#FF6B00]/10 absolute -top-4 -left-1 select-none">“</span>
                          <p className="text-xs sm:text-sm text-[#0F2C59]/80 leading-relaxed pl-6 relative z-10 min-h-[50px] italic">
                            {testimonials[activeTestimonial].quote}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-[#1D3D9E]/5 pt-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center font-black text-xs shrink-0 shadow-sm border border-[#FF6B00]/5">
                            {testimonials[activeTestimonial].avatar}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-[#1D3D9E] block leading-tight">
                              {testimonials[activeTestimonial].author}
                            </span>
                            <span className="text-[10px] font-semibold text-slate-400 block mt-1 leading-none">
                              {testimonials[activeTestimonial].role}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-0.5 text-[#FF6B00] text-sm select-none">
                          {"★".repeat(testimonials[activeTestimonial].rating)}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="flex justify-center gap-1.5 mt-5">
                  {testimonials.map((_, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${activeTestimonial === idx ? "w-6 bg-[#FF6B00]" : "w-1.5 bg-slate-200 hover:bg-slate-300"}`}
                    />
                  ))}
                </div>

              </div>

              {/* Blue CTA Banner */}
              <div className="bg-[#1D3D9E] rounded-[32px] p-6 text-white shadow-md relative overflow-hidden flex items-center justify-between gap-6 min-h-[140px] text-left">
                <div className="absolute right-0 bottom-0 w-[50%] h-[100%] pointer-events-none select-none z-0">
                  <Image
                    src="/images/service_marketing_v5.png"
                    alt="Lookout Telescope Background"
                    fill
                    className="object-contain object-right-bottom opacity-20"
                  />
                </div>

                <div className="relative z-10">
                  <h4 className="font-serif text-lg font-extrabold leading-tight text-white">
                    Need Growth Blueprint?
                  </h4>
                  <p className="text-xs text-white/80 leading-snug mt-1">
                    Let's map out a customized marketing strategy for your business.
                  </p>
                </div>

                <Link
                  href={`/contact?service=${encodeURIComponent(serviceName)}`}
                  className="relative z-10 flex items-center justify-center gap-1.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white hover:scale-[1.01] active:scale-95 transition-all px-6 py-3.5 rounded-xl font-bold text-xs shrink-0 shadow-md cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight size={12} className="stroke-[3.5]" />
                </Link>
              </div>

            </div>

            {/* Right Column: FAQs */}
            <div className="lg:col-span-6 flex flex-col justify-start text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block mb-3">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-serif text-2xl sm:text-[28px] font-extrabold text-[#1D3D9E] tracking-tight mb-8">
                Got Questions? We've Got Answers.
              </h2>

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
