"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Users, 
  Calendar,
  Wrench,
  Search,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  Smartphone,
  Database,
  Monitor,
  ShoppingCart,
  Headphones,
  Home,
  Target
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

// Map string identifiers to Lucide Icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smartphone: Smartphone,
  monitor: Monitor,
  database: Database,
  target: Target,
  calendar: Calendar,
  shield: Shield,
  users: Users,
  shoppingcart: ShoppingCart,
  headphones: Headphones,
  home: Home,
  code2: Code2,
  layout: Layout,
  wrench: Wrench,
  rocket: Rocket,
  search: Search,
  checkcircle2: CheckCircle2
};

const technologies = [
  {
    name: "React Native",
    svg: (
      <svg className="w-5 h-5 text-[#61DAFB]" viewBox="-11.5 -10.23 23 20.463" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    name: "Flutter",
    svg: (
      <svg className="w-5 h-5 text-[#02569B]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
      </svg>
    )
  },
  {
    name: "Kotlin",
    svg: (
      <svg className="w-5 h-5 text-[#7F52FF]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 24H0V0h24L12 12z"/>
      </svg>
    )
  },
  {
    name: "Swift",
    svg: (
      <svg className="w-5 h-5 text-[#F05138]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.18 15.4c-.1 0-.2-.1-.2-.1-2.1-2.2-4.6-3.4-7.4-3.4-3.5 0-6.9 2-8.5 5.2-.6 1.2-.9 2.5-1 3.8 0 .1-.1.2-.2.2h-.1c-1.8-1.3-3.2-3-4-5.1-.9-2.3-.9-4.8-.1-7.1.1-.2.3-.3.5-.2.2.1.3.3.2.5-.7 2.1-.7 4.3.1 6.3.7 1.8 1.9 3.3 3.5 4.4.1.1.2.1.2-.1.1-1.3.4-2.6.9-3.7 1.6-3.4 5.2-5.6 9-5.6 2.7 0 5.2 1.1 7.2 3.1.1.1.2.1.2-.1v-.1c-.1-1.7-.6-3.3-1.6-4.7C19.7 5 17 3.5 14 3.5c-4.5 0-8.5 3.5-9.5 8-.1.4-.2.9-.2 1.3V13c0 2.5 1 4.8 2.8 6.5.1.1.1.2 0 .3l-5.6 5.6c-.1.1-.1.3 0 .4.1.1.3.1.4 0l5.6-5.6c.1-.1.2-.1.3 0 1.7 1.8 4 2.8 6.5 2.8 4.5 0 8.5-3.5 9.5-8 .1-.4.2-.9.2-1.3v-.2c0-1.5-.4-2.9-1.2-4.2z" />
      </svg>
    )
  },
  {
    name: "Node.js",
    svg: (
      <svg className="w-5 h-5 text-[#339933]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.08c.585-.203.703-.25 1.328-.604c.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242l-8.791-5.072c-.081-.047-.189-.047-.271 0L3.075 6.68c-.085.049-.139.145-.139.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745c-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.945-.922-1.604V6.921c0-.659.353-1.275.922-1.603l8.795-5.082c0.557-.315 1.296-.315 1.848 0l8.794 5.082c0.57 0.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.281.163-.6.247-.924.247z" />
      </svg>
    )
  },
  {
    name: "Next.js",
    svg: (
      <svg className="w-5 h-5 text-[#1D3D9E]" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="currentColor"/>
        <path d="M149.508 157.52L69.142 54H54v72h13.5v-47.51l67.234 86.816a90.4 90.4 0 0014.774-17.786z" fill="white"/>
        <path d="M115.5 54h13.5v72h-13.5z" fill="white"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    svg: (
      <svg className="w-5 h-5 text-[#336791]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788-1.0423.7381-1.9213 1.8336-2.5312 3.1257A10.147 10.147 0 0 0 1.25 10c0 1.6393.3887 3.1873 1.0772 4.5621.5794 1.157 1.4086 2.1643 2.4338 2.9463.3857.294 1.8493 1.1578 3.5132 1.4883 1.1444.2272 2.3923.3463 3.6598.3477 1.464-.0027 2.8715-.178 4.095-.5032.551-.1465.889-.226 1.026.0461.168.334.341.666.52 1.002.398.749 1.129 1.109 2.012 1.109.539 0 1.02-.132 1.393-.382a2.054 2.054 0 0 0 .741-.954c.321-.836.56-1.716.719-2.61.139-.773.347-2.646.126-3.8745z" />
      </svg>
    )
  },
  {
    name: "Firebase",
    svg: (
      <svg className="w-5 h-5 text-[#FFCA28]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.89 15.672L6.255 1.012a.562.562 0 011.026-.263l2.802 5.253L3.89 15.672zm16.22 0l-2.023-3.84-2.73-5.187-5.068 9.53a.56.56 0 00-.038.384L12 23.364l8.11-7.692zm-8.23-9.288L9.088 1.13a.562.562 0 00-1.004.093L3.364 16.48 12 6.384z" />
      </svg>
    )
  },
  {
    name: "AWS",
    svg: (
      <svg className="w-5 h-5 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.004 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375c-.24.32-.52.56-.839.72-.32.16-.703.24-1.142.24-.654 0-1.158-.176-1.509-.527-.35-.352-.527-.855-.527-1.509 0-.671.183-1.186.551-1.542.367-.355.918-.535 1.653-.535h1.214V8.44c0-.432-.072-.736-.216-.911-.144-.176-.415-.264-.814-.264-.32 0-.6.048-.839.144-.24.096-.495.256-.767.48a.335.335 0 0 1-.215.088c-.08 0-.152-.032-.216-.096l-.375-.383a.296.296 0 0 1-.08-.2c0-.072.024-.136.08-.2.336-.319.703-.559 1.102-.72.399-.16.863-.24 1.39-.24.783 0 1.374.192 1.773.575.4.384.6 1.007.6 1.869v3.064zm-1.07 1.054V9.66h-1.022c-.383 0-.663.088-.839.264-.175.176-.263.456-.263.838 0 .344.072.592.215.743.144.152.376.228.695.228.463 0 .867-.216 1.214-.643zm4.512-4.113c.096 0 .176.032.24.096l.335.367c.048.056.072.12.072.192 0 .072-.024.136-.08.192-.208.208-.439.467-.695.775-.256.307-.535.675-.839 1.102l-.775 1.134 1.374 2.396c.048.08.072.144.072.192 0 .096-.048.168-.144.216l-.503.264c-.08.04-.152.056-.216.056-.08 0-.152-.032-.215-.096l-1.334-2.396-1.278 2.396c-.056.096-.128.144-.216.144a.276.276 0 0 1-.215-.096l-.496-.32a.264.264 0 0 1-.095-.192c0-.072.024-.136.071-.192l1.646-2.652-1.502-2.588a.296.296 0 0 1-.08-.184c0-.08.032-.152.096-.215l.399-.272c.072-.048.144-.072.216-.072.08 0 .152.032.215.112l1.07 1.95 1.127-1.95a.43.43 0 0 1 .28-.184zm6.056.76c.079.08.12.152.12.215 0 .056-.033.12-.096.192-.352.416-.767.927-1.246 1.533a39.11 39.11 0 0 0-1.182 1.581V13.82c0 .096-.032.168-.096.216l-.44.264c-.08.04-.152.056-.215.056s-.144-.024-.216-.072l-.375-.24a.296.296 0 0 1-.08-.2v-6.07c0-.072.024-.136.08-.2l.447-.28c.072-.04.144-.056.215-.056s.152.024.216.072l.998.679 1.142-1.517c.056-.08.128-.12.216-.12s.16.032.215.096zm-9.011 8.788c-1.39.951-3.235 1.503-5.017 1.503a6.837 6.837 0 0 1-5.185-2.22c-.176-.192-.016-.496.208-.4.99.424 2.093.632 3.196.632 1.637 0 3.323-.464 4.545-1.304a.267.267 0 0 1 .376.08c.112.184.048.456-.128.568v.141zm1.262-.767a.383.383 0 0 1-.487.112c-.224-.112-.344-.376-.24-.623.367-.855.559-1.765.559-2.684a6.386 6.386 0 0 0-.559-2.684.398.398 0 0 1 .24-.511c.224-.096.48.024.568.248a7.172 7.172 0 0 1 .639 2.947c0 1.031-.216 2.03-.63 2.947v.248z" />
      </svg>
    )
  }
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

const testimonials = [
  {
    quote: "Nauti Route built a custom booking system for our resort. It has simplified our operations and improved customer experience significantly.",
    author: "Rohit Shetty",
    role: "Resort Owner",
    rating: 5,
    avatar: "RS"
  },
  {
    quote: "The custom CRM and dashboard built by Nauti Route has transformed how our sales team manages leads. Our conversion rate increased by 22% in the first quarter.",
    author: "Sneha Iyer",
    role: "Sales Director",
    rating: 5,
    avatar: "SI"
  },
  {
    quote: "Our SaaS MVP was delivered ahead of schedule and with clean, scalable code. Their team's technical expertise and business-first approach was outstanding.",
    author: "David Miller",
    role: "Tech Co-founder",
    rating: 5,
    avatar: "DM"
  }
];

interface AppDevServiceLayoutProps {
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  serviceName: string;
  services: {
    icon: string;
    title: string;
    description: string;
  }[];
  whyChoosePoints: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function AppDevServiceLayout({
  eyebrow,
  heroTitle,
  heroSubtitle,
  serviceName,
  services,
  whyChoosePoints,
  faqs
}: AppDevServiceLayoutProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const heroBullets = [
    { label: "Business-Focused Solutions", icon: "shield" },
    { label: "Scalable & Secure Architecture", icon: "database" },
    { label: "On-Time Delivery", icon: "calendar" },
    { label: "Ongoing Support You Can Trust", icon: "wrench" }
  ];

  const whyChooseDetailed = [
    { title: "Business-First Approach", desc: "We focus on solving real operational bottleneck problems.", icon: "shield" },
    { title: "Scalable & Future-Ready", desc: "Built with modern architecture that grows with your business.", icon: "database" },
    { title: "Secure & Reliable", desc: "Best practices for security, data isolation and performance.", icon: "shield" },
    { title: "User Experience-Driven", desc: "Intuitive interfaces that enhance user satisfaction.", icon: "layout" },
    { title: "End-to-End Support", desc: "From strategy to post-launch maintenance, we're with you.", icon: "rocket" },
    { title: "Transparent Communication", desc: "Clear updates, staging sites, and collaborative check-ins.", icon: "users" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow">
        
        {/* 1. HERO SECTION (WITH LAPTOP & PHONE MOCKUPS) */}
        <section className="relative bg-white pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden flex items-center min-h-[85vh]">
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
          <div className="absolute inset-x-0 bottom-0 top-40 z-0 select-none pointer-events-none lg:hidden opacity-20">
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
                {eyebrow}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D3D9E] leading-tight max-w-3xl">
                {heroTitle}
              </h1>
              <p className="text-[#0F2C59]/80 text-base sm:text-lg leading-relaxed max-w-xl">
                {heroSubtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link
                  href={`/contact?service=${encodeURIComponent(serviceName)}`}
                  className="inline-flex justify-center items-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Discuss Your Project
                </Link>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20your%20App%20Development%20services."
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

        {/* 2. WHAT WE BUILD (SERVICES GRID) */}
        <section id="what-we-build" className="py-24 max-w-7xl mx-auto px-6 border-t border-[#1D3D9E]/5">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
              WHAT WE BUILD
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
              {serviceName} Services
            </h2>
            <p className="text-[#0F2C59]/70 text-xs sm:text-sm max-w-md mx-auto">
              We design and develop native systems, dashboards, custom SaaS, and business applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {services.map((svc, idx) => {
              const ServiceIcon = iconMap[svc.icon.toLowerCase()] || Smartphone;
              return (
                <div
                  key={idx}
                  className="border border-[#1D3D9E]/10 rounded-3xl bg-white p-6 hover:shadow-lg hover:border-[#FF6B00]/30 transition-all duration-300 flex flex-col justify-between items-start text-left group cursor-default"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1D3D9E]/5 flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300">
                      <ServiceIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-sm font-bold text-[#1D3D9E] leading-tight group-hover:text-[#FF6B00] transition-colors duration-300">
                      {svc.title}
                    </h3>
                    <p className="text-[11px] text-[#0F2C59]/70 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link
                      href={`/contact?service=${encodeURIComponent(serviceName)}`}
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors uppercase tracking-wider"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. TIMELINE PROCESS SECTION */}
        <section className="py-24 bg-[#1D3D9E]/5 border-t border-b border-[#1D3D9E]/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                OUR PROCESS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E]">
                From Idea to Impact
              </h2>
            </div>

            <div className="relative w-full">
              {/* Desktop Connecting Line */}
              <div className="absolute top-[38px] left-[7%] right-[7%] h-[2px] bg-[#1D3D9E]/15 hidden lg:block z-0 pointer-events-none" />

              {/* Mobile connecting line */}
              <div className="absolute top-12 bottom-36 left-1/2 -translate-x-1/2 w-0.5 border-l-2 border-dashed border-[#1D3D9E]/20 lg:hidden z-0 pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center space-y-4 group">
                    <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white border border-[#1D3D9E]/10 shadow-sm group-hover:border-[#FF6B00] transition-colors duration-300">
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex h-5 w-5 items-center justify-center rounded-full bg-white border border-[#FF6B00] text-[9px] font-black text-[#FF6B00] shadow-sm">
                        {step.step}
                      </div>
                      <div className="relative w-10 h-10 select-none pointer-events-none">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-serif text-sm font-bold text-[#1D3D9E]">{step.title}</h4>
                      <p className="text-[11px] text-[#0F2C59]/70 leading-relaxed max-w-[130px] mx-auto">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE SECTION (MOCK PHONE ON LEFT, DETAILED CHECKLIST ON RIGHT) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Phone Mockup (Left) */}
              <div className="lg:col-span-4 flex justify-center z-10">
                <div className="relative w-[210px] aspect-[9/18.5] bg-[#0F2C59] border-[6px] border-[#0F2C59] rounded-[2.2rem] shadow-2xl overflow-hidden shrink-0">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-2.5 bg-slate-950 rounded-full z-20" />
                  
                  <div className="w-full h-full bg-[#18182b] flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-between items-center text-[7px] font-bold opacity-60">
                      <span>9:41</span>
                      <span className="w-1.5 h-1 bg-white rounded-xs" />
                    </div>

                    <div className="flex-1 flex flex-col justify-start mt-6 gap-3">
                      <span className="text-[8px] font-black tracking-wider opacity-60 uppercase">Monthly Platform Volume</span>
                      <span className="text-lg font-black text-white">₹ 45,78,000</span>
                      
                      {/* Orange bar chart inside phone mockup */}
                      <div className="h-24 flex items-end gap-1.5 pt-4 relative">
                        <div className="absolute inset-x-0 bottom-4 h-[1px] bg-white/10" />
                        <div className="w-full bg-[#FF6B00]/20 h-8 rounded-xs" />
                        <div className="w-full bg-[#FF6B00]/40 h-12 rounded-xs" />
                        <div className="w-full bg-[#FF6B00] h-20 rounded-xs" />
                        <div className="w-full bg-[#FF6B00]/50 h-10 rounded-xs" />
                        <div className="w-full bg-[#FF6B00]/70 h-14 rounded-xs" />
                      </div>

                      <div className="flex flex-col gap-1.5 mt-2 bg-slate-950/40 border border-slate-800/40 rounded-lg p-2.5">
                        <div className="flex justify-between items-center text-[7px] text-slate-400 font-bold">
                          <span>Active Nodes</span>
                          <span>Logs</span>
                        </div>
                        <div className="w-full h-[1px] bg-slate-800/40" />
                        <div className="flex justify-between items-center text-[7px] text-white font-black">
                          <span>Console Hub</span>
                          <span className="text-[#FF6B00]">100% Ok</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title Block & Checklist (Right) */}
              <div className="lg:col-span-8 space-y-8 text-left">
                <div className="space-y-4">
                  <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                    WHY PARTNER WITH US
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#1D3D9E] leading-tight">
                    We Build Apps That Drive Real Results
                  </h2>
                  <p className="text-[#0F2C59]/80 text-xs sm:text-sm max-w-xl">
                    We design systems to solve physical bottlenecks, handle massive concurrent users, and run with continuous support.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyChooseDetailed.map((point, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[#FF6B00] text-white shrink-0 shadow-sm">
                        <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#1D3D9E] leading-tight">
                          {point.title}
                        </h4>
                        <p className="text-xs text-[#0F2C59]/75 leading-relaxed">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. TECHNOLOGIES WE WORK WITH */}
        <section className="py-12 bg-sand-100 border-t border-b border-[#1D3D9E]/10">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0F2C59]/50 block leading-none">
              TECHNOLOGIES WE WORK WITH
            </span>
            
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#1D3D9E]/10 shadow-sm shrink-0 hover:border-[#FF6B00]/40 transition-colors"
                >
                  <div className="flex items-center justify-center shrink-0">
                    {tech.svg}
                  </div>
                  <span className="text-[10px] font-bold text-[#1D3D9E] uppercase tracking-wider">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS & FAQ (PIXEL-PERFECT TWO-COLUMN GRID) */}
        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column (Testimonial Card + Banner CTA Stack) */}
            <div className="lg:col-span-6 flex flex-col justify-between relative z-10 space-y-6">
              
              {/* Testimonial Card */}
              <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] p-8 shadow-sm relative flex flex-col justify-between flex-grow min-h-[300px]">
                
                {/* Navigation Arrows */}
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
                          CLIENT TESTIMONIAL
                        </span>
                        <h3 className="font-serif text-lg font-extrabold text-[#1D3D9E] leading-tight">
                          Helping businesses automate, simplify and scale.
                        </h3>

                        <div className="mt-6 relative">
                          <span className="text-4xl font-serif text-[#FF6B00]/10 absolute -top-4 -left-1 select-none">“</span>
                          <p className="text-xs sm:text-sm text-[#0F2C59]/80 leading-relaxed pl-6 relative z-10 min-h-[50px] italic">
                            {testimonials[activeTestimonial].quote}
                          </p>
                        </div>
                      </div>

                      {/* Author & Star Rating Footer */}
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

                {/* Progress dots */}
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

              {/* Solid Royal Blue Banner CTA */}
              <div className="bg-[#1D3D9E] rounded-[32px] p-6 text-white shadow-md relative overflow-hidden flex items-center justify-between gap-6 min-h-[140px] text-left">
                {/* background overlay */}
                <div className="absolute right-0 bottom-0 w-[50%] h-[100%] pointer-events-none select-none z-0">
                  <Image
                    src="/images/ship_wheel_sketch.png"
                    alt="Steering Wheel Background"
                    fill
                    className="object-contain object-right-bottom opacity-20"
                  />
                </div>

                <div className="relative z-10">
                  <h4 className="font-serif text-lg font-extrabold leading-tight text-white">
                    Have an App Idea?
                  </h4>
                  <p className="text-xs text-white/80 leading-snug mt-1">
                    Let's build something amazing together.
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

            {/* Right Column (FAQ Card Rows) */}
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
