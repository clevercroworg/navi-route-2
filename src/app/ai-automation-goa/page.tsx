"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Laptop, 
  Code2, 
  ShoppingCart, 
  Layout, 
  RefreshCw, 
  Wrench, 
  Smartphone, 
  Globe, 
  Layers, 
  BarChart3, 
  Calendar, 
  Settings, 
  Users, 
  Cpu, 
  MessageSquare, 
  Database, 
  GitFork, 
  Mail, 
  Zap, 
  Headphones, 
  Megaphone, 
  Target, 
  TrendingUp, 
  Search, 
  Compass, 
  LineChart,
  ArrowRight,
  ShieldCheck,
  Award
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

const iconMap: Record<string, any> = {
  laptop: Laptop,
  code2: Code2,
  shoppingcart: ShoppingCart,
  layout: Layout,
  refreshcw: RefreshCw,
  wrench: Wrench,
  smartphone: Smartphone,
  globe: Globe,
  layers: Layers,
  barchart3: BarChart3,
  calendar: Calendar,
  settings: Settings,
  users: Users,
  cpu: Cpu,
  messagesquare: MessageSquare,
  database: Database,
  gitfork: GitFork,
  mail: Mail,
  zap: Zap,
  headphones: Headphones,
  megaphone: Megaphone,
  target: Target,
  trendingup: TrendingUp,
  search: Search,
  compass: Compass,
  linechart: LineChart
};

export default function OverviewPage() {
  const services = [
  {
    "title": "AI Chatbots",
    "desc": "Intelligent support chat agents answering customer queries.",
    "href": "/ai-automation-goa/ai-chatbots",
    "icon": "Cpu"
  },
  {
    "title": "WhatsApp Business Automation",
    "desc": "Automated WhatsApp chats, alerts, and lead nurturing.",
    "href": "/ai-automation-goa/whatsapp-business-automation",
    "icon": "MessageSquare"
  },
  {
    "title": "Automated Lead Management",
    "desc": "Instant lead qualification and automated routing to CRM.",
    "href": "/ai-automation-goa/automated-lead-management",
    "icon": "Database"
  },
  {
    "title": "CRM Workflow Automation",
    "desc": "Sync client data, automate notifications, and eliminate tasks.",
    "href": "/ai-automation-goa/crm-workflow-automation",
    "icon": "GitFork"
  },
  {
    "title": "Automated Sales Followup",
    "desc": "Nurture unconverted leads automatically via email and WhatsApp.",
    "href": "/ai-automation-goa/automated-sales-followup",
    "icon": "Mail"
  },
  {
    "title": "Business Workflow Automation",
    "desc": "Connect apps, trigger alerts, and run automatic pipelines.",
    "href": "/ai-automation-goa/business-workflow-automation",
    "icon": "Zap"
  },
  {
    "title": "AI Customer Support",
    "desc": "AI agents answering support tickets and scheduling calls.",
    "href": "/ai-automation-goa/ai-customer-support",
    "icon": "Headphones"
  }
];
  const title = "AI & Workflow Automation Goa";
  const eyebrow = "AI & Workflow Automation Goa";
  const description = "Streamline business operations and save hours of manual labor with custom AI integrations.";
  const iconImg = "/images/service_automation_v5.png";

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow">
        {/* 1. HERO SECTION */}
        <section className="relative pt-32 pb-20 bg-slate-50 border-b border-[#1D3D9E]/5 overflow-hidden">
          {/* Decorative watermark background */}
          <div className="absolute top-[10%] right-[-100px] w-[500px] h-[500px] select-none pointer-events-none opacity-[0.03]">
            <Image
              src={iconImg}
              alt="Category Artwork"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-6 text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                AI & Workflow Automation Goa
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight max-w-3xl">
                AI & Workflow Automation Goa
              </h1>
              <p className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                Streamline business operations and save hours of manual labor with custom AI integrations.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20services."
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

        {/* 2. SERVICES LIST */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              CHOOSE A DESTINATION
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              Specialized Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, idx) => {
              const ServiceIcon = iconMap[svc.icon.toLowerCase()] || Laptop;
              return (
                <Link
                  key={idx}
                  href={svc.href}
                  className="border border-[#1D3D9E]/10 rounded-3xl bg-white p-8 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between items-start text-left group"
                >
                  <div className="space-y-4 w-full">
                    <div className="w-12 h-12 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                      <ServiceIcon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-[#1D3D9E] leading-tight group-hover:text-[#FF6B00] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-[#0F2C59]/70 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="pt-6 w-full flex justify-end">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors uppercase tracking-wider">
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 3. STATS STRIP SECTION */}
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
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">40+</span>
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
                  <span className="text-2xl sm:text-3xl font-serif font-black text-[#1D3D9E] tracking-tight block leading-none">12+</span>
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wider mt-1 block">Sectors Navigated</span>
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
