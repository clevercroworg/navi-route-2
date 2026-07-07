"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, ExternalLink, Compass, Anchor, ShieldCheck, X, TrendingUp, Calendar, ChevronRight } from "lucide-react";

// Inline Instagram Icon to avoid lucide version mismatches
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

interface ChartPoint {
  label: string;
  value: number;
}

interface PortOfCall {
  name: string;
  image: string;
  sector: string; // The sector filter
  category: string; // The sub-label
  highlight: string;
  deliveredServices: string[];
  metrics: { label: string; value: string; trend: string }[];
  chartData: ChartPoint[];
  chartLabel: string;
  url: string;
  instagram?: string;
}

const portsOfCall: PortOfCall[] = [
  {
    name: "Beco",
    image: "/images/portfolio/Beco.jpg",
    sector: "D2C & FMCG",
    category: "Eco-Friendly Home Care",
    highlight: "+145% Direct Revenue",
    deliveredServices: ["Performance Marketing", "WhatsApp Automation", "Meta Ads Management", "Creative Strategy"],
    metrics: [
      { label: "Revenue Growth", value: "2.4x", trend: "+145% increase" },
      { label: "Weekly Conversions", value: "3,800+", trend: "+82% YoY" },
      { label: "Ad ROAS", value: "5.8x", trend: "High conversion efficiency" }
    ],
    chartLabel: "Direct Revenue Monthly (Lakhs)",
    chartData: [
      { label: "Nov", value: 12.0 },
      { label: "Dec", value: 18.5 },
      { label: "Jan", value: 24.8 },
      { label: "Feb", value: 22.0 },
      { label: "Mar", value: 29.5 },
      { label: "Apr", value: 34.0 }
    ],
    url: "https://thebeco.com/"
  },
  {
    name: "Zluri",
    image: "/images/portfolio/Zluri.jpg",
    sector: "SaaS & B2B Tech",
    category: "SaaS Operations Management",
    highlight: "18.5k Demo Signups",
    deliveredServices: ["Google PPC Search", "B2B LinkedIn Campaigns", "Custom Landing Pages", "Analytics Setup"],
    metrics: [
      { label: "Demo Bookings", value: "18,500+", trend: "+112% volume growth" },
      { label: "Cost Per Acquisition", value: "$32", trend: "-38% reduction" },
      { label: "Search Visibility", value: "+140%", trend: "Top B2B rankings" }
    ],
    chartLabel: "Demo Requests Monthly Log",
    chartData: [
      { label: "Nov", value: 1200 },
      { label: "Dec", value: 1650 },
      { label: "Jan", value: 2100 },
      { label: "Feb", value: 1950 },
      { label: "Mar", value: 2500 },
      { label: "Apr", value: 2850 }
    ],
    url: "https://www.zluri.com/"
  },
  {
    name: "Gunsberg",
    image: "/images/portfolio/Gunsberg.jpg",
    sector: "D2C & FMCG",
    category: "Premium Craft Beverages",
    highlight: "5.4x Retargeting ROI",
    deliveredServices: ["Meta Ad Management", "Dynamic Product Retargeting", "E-commerce UX Updates"],
    metrics: [
      { label: "Retargeting ROAS", value: "5.4x", trend: "High intent flows" },
      { label: "Abandoned Carts Saved", value: "32%", trend: "+12% recovery" },
      { label: "AOV Growth", value: "+28%", trend: "Via automated bundle upsells" }
    ],
    chartLabel: "Monthly Conversions Track",
    chartData: [
      { label: "Nov", value: 850 },
      { label: "Dec", value: 1100 },
      { label: "Jan", value: 1600 },
      { label: "Feb", value: 1450 },
      { label: "Mar", value: 1850 },
      { label: "Apr", value: 2200 }
    ],
    url: "https://gunsberg.in/"
  },
  {
    name: "Topmate",
    image: "/images/portfolio/Topmate.jpg",
    sector: "SaaS & B2B Tech",
    category: "Creator Monetization SaaS",
    highlight: "+190% Creator Signups",
    deliveredServices: ["Growth Hacking Ads", "Influencer Ad Placements", "Conversion Optimization"],
    metrics: [
      { label: "New Creators", value: "+190%", trend: "Rapid onboarding" },
      { label: "User Acquisition Cost", value: "₹45", trend: "-28% reduction" },
      { label: "Conversion Rate", value: "6.2%", trend: "Next.js landing focus" }
    ],
    chartLabel: "Weekly Signups Average",
    chartData: [
      { label: "Nov", value: 340 },
      { label: "Dec", value: 480 },
      { label: "Jan", value: 650 },
      { label: "Feb", value: 580 },
      { label: "Mar", value: 720 },
      { label: "Apr", value: 986 }
    ],
    url: "https://topmate.io/"
  },
  {
    name: "Amaha",
    image: "/images/portfolio/Amaha.jpg",
    sector: "Health & Wellness",
    category: "Mental Health Platform",
    highlight: "6.2x Campaign ROAS",
    deliveredServices: ["Social Media Ads", "Interactive Booking Funnels", "Local Clinic Ads"],
    metrics: [
      { label: "Campaign ROAS", value: "6.2x", trend: "Therapy bookings boost" },
      { label: "Lead Response Time", value: "<1 min", trend: "Automatic CRM Triggered" },
      { label: "Appointment Rate", value: "4.8%", trend: "Highly targeted reach" }
    ],
    chartLabel: "Monthly Confirmed Bookings",
    chartData: [
      { label: "Nov", value: 150 },
      { label: "Dec", value: 210 },
      { label: "Jan", value: 290 },
      { label: "Feb", value: 270 },
      { label: "Mar", value: 340 },
      { label: "Apr", value: 420 }
    ],
    url: "https://www.amahamindcare.com/"
  },
  {
    name: "Nirvasa",
    image: "/images/portfolio/Nirvasa.jpg",
    sector: "Health & Wellness",
    category: "Digital Healthcare Provider",
    highlight: "+160% Patient Registrations",
    deliveredServices: ["Google Search PPC", "Interactive Patient Qualification", "Meta Ads"],
    metrics: [
      { label: "Patient Growth", value: "+160%", trend: "Telehealth focus" },
      { label: "Prescription Leads", value: "2,200+", trend: "+145% volume growth" },
      { label: "Cost Per Registrations", value: "₹135", trend: "-22% reduction" }
    ],
    chartLabel: "Daily Consultations Month Avg",
    chartData: [
      { label: "Nov", value: 45 },
      { label: "Dec", value: 68 },
      { label: "Jan", value: 92 },
      { label: "Feb", value: 85 },
      { label: "Mar", value: 110 },
      { label: "Apr", value: 135 }
    ],
    url: "https://www.nirvasa.com/"
  },
  {
    name: "Housr",
    image: "/images/portfolio/Housr.jpg",
    sector: "Real Estate & Co-living",
    category: "Premium Co-living Spaces",
    highlight: "98% Occupancy Rate",
    deliveredServices: ["Local Lead Generation", "Instagram Video Ads", "WhatsApp Booking Integration"],
    metrics: [
      { label: "Leads Qualified", value: "1,850+", trend: "Direct site visits" },
      { label: "Total Bookings", value: "+130%", trend: "Reduced vacancy times" },
      { label: "Weekly Clicks", value: "12,000+", trend: "Highly targeted reach" }
    ],
    chartLabel: "Direct Bookings Monthly average",
    chartData: [
      { label: "Nov", value: 90 },
      { label: "Dec", value: 140 },
      { label: "Jan", value: 195 },
      { label: "Feb", value: 180 },
      { label: "Mar", value: 230 },
      { label: "Apr", value: 280 }
    ],
    url: "https://housr.in/"
  },
  {
    name: "Settl.",
    image: "/images/portfolio/Settl.jpg",
    sector: "Real Estate & Co-living",
    category: "Modern Smart Co-living",
    highlight: "+120% Web Bookings",
    deliveredServices: ["Meta Lead Generation", "Speed Optimized React Webpages", "WhatsApp Auto Qualify"],
    metrics: [
      { label: "Web Bookings", value: "+120%", trend: "Via tailored landing forms" },
      { label: "Qualified leads", value: "980+", trend: "95% accuracy rate" },
      { label: "OTA share reduction", value: "28%", trend: "Direct channel boost" }
    ],
    chartLabel: "Web Direct Booking Count",
    chartData: [
      { label: "Nov", value: 30 },
      { label: "Dec", value: 55 },
      { label: "Jan", value: 85 },
      { label: "Feb", value: 78 },
      { label: "Mar", value: 98 },
      { label: "Apr", value: 120 }
    ],
    url: "https://thesettl.com/"
  },
  {
    name: "Bitespeed",
    image: "/images/portfolio/Bitespeed.jpg",
    sector: "SaaS & B2B Tech",
    category: "Conversational Marketing SaaS",
    highlight: "5.8x Campaign ROAS",
    deliveredServices: ["B2B Search Ads", "SaaS Retargeting Flow", "Landing Page Audit & Speedup"],
    metrics: [
      { label: "Growth Campaign ROAS", value: "5.8x", trend: "High conversion intent target" },
      { label: "Lead Response Rate", value: "98%", trend: "Automated triggers" },
      { label: "Mobile Bounce Rate", value: "-22%", trend: "Page speed optimized" }
    ],
    chartLabel: "Revenue Track (Lakhs)",
    chartData: [
      { label: "Nov", value: 4.5 },
      { label: "Dec", value: 7.2 },
      { label: "Jan", value: 10.8 },
      { label: "Feb", value: 9.5 },
      { label: "Mar", value: 13.2 },
      { label: "Apr", value: 16.8 }
    ],
    url: "https://www.bitespeed.co/"
  },
  {
    name: "Dovetail",
    image: "/images/portfolio/Dovetail.jpg",
    sector: "SaaS & B2B Tech",
    category: "Product Research Platform",
    highlight: "+112% Organic Traffic",
    deliveredServices: ["B2B Content Strategy", "Google Search Optimization", "Lead Scoring Engine"],
    metrics: [
      { label: "Organic Search", value: "+112%", trend: "High intent research terms" },
      { label: "User Acquisition Cost", value: "₹72", trend: "-40% reduction" },
      { label: "Click-through Rate", value: "3.5%", trend: "Above industry standard" }
    ],
    chartLabel: "Organic Monthly Visitors (k)",
    chartData: [
      { label: "Nov", value: 8.5 },
      { label: "Dec", value: 10.2 },
      { label: "Jan", value: 12.8 },
      { label: "Feb", value: 14.5 },
      { label: "Mar", value: 17.2 },
      { label: "Apr", value: 19.8 }
    ],
    url: "https://dovetailapp.com/"
  },
  {
    name: "Crio.Do",
    image: "/images/portfolio/Crio_Do.jpg",
    sector: "EdTech & Education",
    category: "Developer Education Platform",
    highlight: "+200% Booking Enquiries",
    deliveredServices: ["EdTech Lead Generation", "Instagram Brand Campaigns", "Email Funnel Flows"],
    metrics: [
      { label: "Student Enquiries", value: "2,400+", trend: "+200% YoY increase" },
      { label: "Ad Click-through Rate", value: "3.4%", trend: "High interest creatives" },
      { label: "Cost Per Qualified lead", value: "₹92", trend: "-28% reduction" }
    ],
    chartLabel: "Weekly Enquiries Monthly Average",
    chartData: [
      { label: "Nov", value: 120 },
      { label: "Dec", value: 180 },
      { label: "Jan", value: 260 },
      { label: "Feb", value: 240 },
      { label: "Mar", value: 310 },
      { label: "Apr", value: 386 }
    ],
    url: "https://crio.do/"
  },
  {
    name: "Blox",
    image: "/images/portfolio/Blox.jpg",
    sector: "Real Estate & Co-living",
    category: "Home Buying Platform",
    highlight: "+150% Leads Growth",
    deliveredServices: ["Lead Gen Campaigns", "Google PPC Ads", "Landing Page Audit"],
    metrics: [
      { label: "Qualified leads", value: "1,200+", trend: "+150% volume growth" },
      { label: "Conversion rate", value: "4.2%", trend: "Optimized user paths" },
      { label: "Cost Per Acquisition", value: "₹180", trend: "-22% reduction" }
    ],
    chartLabel: "Monthly Home Buying Enquiries",
    chartData: [
      { label: "Nov", value: 450 },
      { label: "Dec", value: 680 },
      { label: "Jan", value: 920 },
      { label: "Feb", value: 850 },
      { label: "Mar", value: 1100 },
      { label: "Apr", value: 1350 }
    ],
    url: "https://blox.xyz/"
  },
  {
    name: "Fernish",
    image: "/images/portfolio/Fernish.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "Furniture Rental Subscription",
    highlight: "5.2x Subscription ROI",
    deliveredServices: ["Meta Acquisition Ads", "Dynamic Product Catalog Ads", "User Retention Campaigns"],
    metrics: [
      { label: "Subscription ROAS", value: "5.2x", trend: "High LTV segments" },
      { label: "Active Subscribers", value: "4,500+", trend: "+45% YoY increase" },
      { label: "Churn Rate", value: "-12%", trend: "Via automated follow-ups" }
    ],
    chartLabel: "Monthly Active Subscribers",
    chartData: [
      { label: "Nov", value: 2200 },
      { label: "Dec", value: 2800 },
      { label: "Jan", value: 3400 },
      { label: "Feb", value: 3200 },
      { label: "Mar", value: 3900 },
      { label: "Apr", value: 4500 }
    ],
    url: "https://fernish.com/"
  },
  {
    name: "Malaki",
    image: "/images/portfolio/Malaki.jpg",
    sector: "D2C & FMCG",
    category: "Luxury Craft Soda",
    highlight: "6.8x Total Campaign ROAS",
    deliveredServices: ["Luxury Branding Ads", "Influencer Media Placements", "Shopify Funnel Tuning"],
    metrics: [
      { label: "Campaign ROAS", value: "6.8x", trend: "Premium lifestyle focus" },
      { label: "Direct Shopify Sales", value: "₹24L", trend: "+130% increase" },
      { label: "Email signups", value: "+300%", trend: "Loyal buyer list" }
    ],
    chartLabel: "Shopify Sales Track (Lakhs)",
    chartData: [
      { label: "Nov", value: 8.2 },
      { label: "Dec", value: 12.5 },
      { label: "Jan", value: 18.8 },
      { label: "Feb", value: 16.0 },
      { label: "Mar", value: 21.5 },
      { label: "Apr", value: 24.0 }
    ],
    url: "https://malakispice.com/"
  },
  {
    name: "Oorjaa",
    image: "/images/portfolio/Oorjaa.jpg",
    sector: "D2C & FMCG",
    category: "Artisanal Organic Teas",
    highlight: "+210% Search Clicks",
    deliveredServices: ["Organic SEO", "Product Description Copywriting", "Social Meta Campaigns"],
    metrics: [
      { label: "Organic Search", value: "+210%", trend: "High conversion terms" },
      { label: "Direct Inquiries", value: "980+", trend: "+145% YoY increase" },
      { label: "OTA share reduction", value: "35%", trend: "Increased Direct" }
    ],
    chartLabel: "Organic Monthly Clicks (k)",
    chartData: [
      { label: "Nov", value: 3.5 },
      { label: "Dec", value: 5.2 },
      { label: "Jan", value: 7.8 },
      { label: "Feb", value: 7.0 },
      { label: "Mar", value: 9.5 },
      { label: "Apr", value: 12.0 }
    ],
    url: "https://oorjaa.org/"
  },
  {
    name: "Pilot",
    image: "/images/portfolio/Pilot.jpg",
    sector: "SaaS & B2B Tech",
    category: "B2B Payroll & Compliance",
    highlight: "+122% Lead Generation",
    deliveredServices: ["B2B Search Funnels", "Meta Lead Gen Forms", "CRM Auto-Sync"],
    metrics: [
      { label: "Qualified leads", value: "3,400+", trend: "+122% volume growth" },
      { label: "Cost Per Qualified lead", value: "$45", trend: "-28% reduction" },
      { label: "Form completion rate", value: "12.5%", trend: "Optimized UX flow" }
    ],
    chartLabel: "Monthly Qualified Leads",
    chartData: [
      { label: "Nov", value: 1800 },
      { label: "Dec", value: 2400 },
      { label: "Jan", value: 3100 },
      { label: "Feb", value: 2900 },
      { label: "Mar", value: 3800 },
      { label: "Apr", value: 4500 }
    ],
    url: "https://pilot.co/"
  },
  {
    name: "Sanzo",
    image: "/images/portfolio/Sanzo.jpg",
    sector: "D2C & FMCG",
    category: "Sparkling Water Craft",
    highlight: "+160% Online Orders",
    deliveredServices: ["Meta Dynamic Ads", "Direct Subscription Retargeting", "A/B Creatives Tuning"],
    metrics: [
      { label: "Direct Orders", value: "+160%", trend: "D2C subscriber focus" },
      { label: "Cost Per Booking", value: "$8.5", trend: "-45% drop" },
      { label: "Ad Click-through Rate", value: "3.2%", trend: "Above industry avg" }
    ],
    chartLabel: "Monthly Confirmed Subscriptions",
    chartData: [
      { label: "Nov", value: 450 },
      { label: "Dec", value: 680 },
      { label: "Jan", value: 920 },
      { label: "Feb", value: 850 },
      { label: "Mar", value: 1100 },
      { label: "Apr", value: 1350 }
    ],
    url: "https://drinksanzo.com/"
  },
  {
    name: "Synthesis",
    image: "/images/portfolio/Synthesis.jpg",
    sector: "SaaS & B2B Tech",
    category: "SaaS Business Planning",
    highlight: "+140% Weekly Installs",
    deliveredServices: ["Google PPC", "B2B LinkedIn Campaigns", "Landing Page Audit"],
    metrics: [
      { label: "Weekly Installs", value: "850+", trend: "+140% volume growth" },
      { label: "Direct Traffic", value: "+85%", trend: "Increase in organic search" },
      { label: "Page load speed", value: "0.6s", trend: "React speed optimized" }
    ],
    chartLabel: "Weekly Installs Average",
    chartData: [
      { label: "Nov", value: 300 },
      { label: "Dec", value: 450 },
      { label: "Jan", value: 620 },
      { label: "Feb", value: 550 },
      { label: "Mar", value: 700 },
      { label: "Apr", value: 850 }
    ],
    url: "https://www.synthesis.is/"
  },
  {
    name: "Tend",
    image: "/images/portfolio/Tend.jpg",
    sector: "Health & Wellness",
    category: "Modern Dental Care",
    highlight: "₹45L Ad Spend Revenue",
    deliveredServices: ["Local Lead Generation", "High-End Video Ads", "WhatsApp Booking Automation"],
    metrics: [
      { label: "Ad Revenue", value: "₹45L", trend: "Generated in 90 days" },
      { label: "Direct Bookings", value: "+150%", trend: "Chikmagalur region focus" },
      { label: "OTA share reduction", value: "28%", trend: "Increased Direct" }
    ],
    chartLabel: "Tracked Revenue (Lakhs)",
    chartData: [
      { label: "Nov", value: 15.0 },
      { label: "Dec", value: 24.5 },
      { label: "Jan", value: 35.8 },
      { label: "Feb", value: 30.0 },
      { label: "Mar", value: 38.5 },
      { label: "Apr", value: 45.0 }
    ],
    url: "https://www.hellotend.com/"
  },
  {
    name: "Wisp",
    image: "/images/portfolio/Wisp.jpg",
    sector: "Health & Wellness",
    category: "D2C Telehealth Platform",
    highlight: "+190% Patients Growth",
    deliveredServices: ["Meta Patient Acquisition", "Interactive Forms", "Direct Email Marketing"],
    metrics: [
      { label: "Patients Reached", value: "4,500+", trend: "+190% volume growth" },
      { label: "Cost Per Registrations", value: "$18.5", trend: "-35% decrease" },
      { label: "Form completion rate", value: "14.5%", trend: "Fully optimized UX" }
    ],
    chartLabel: "Daily Consultations Average",
    chartData: [
      { label: "Nov", value: 110 },
      { label: "Dec", value: 145 },
      { label: "Jan", value: 195 },
      { label: "Feb", value: 180 },
      { label: "Mar", value: 240 },
      { label: "Apr", value: 272 }
    ],
    url: "https://hellowisp.com/"
  },
  {
    name: "AI Studio",
    image: "/images/portfolio/AI.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "AI Design & Creator Hub",
    highlight: "6.2x Campaign ROAS",
    deliveredServices: ["Creative Dynamic Campaigns", "Google PPC Ads", "Analytics Setup"],
    metrics: [
      { label: "Campaign ROAS", value: "6.2x", trend: "High conversion efficiency" },
      { label: "Direct Orders", value: "2,200+", trend: "+145% volume growth" },
      { label: "Organic Search", value: "+112%", trend: "Top rankings search pack" }
    ],
    chartLabel: "Monthly Confirmed Subscriptions",
    chartData: [
      { label: "Nov", value: 350 },
      { label: "Dec", value: 520 },
      { label: "Jan", value: 780 },
      { label: "Feb", value: 700 },
      { label: "Mar", value: 950 },
      { label: "Apr", value: 1180 }
    ],
    url: "https://www.aistudio.com/"
  },
  {
    name: "Design Living",
    image: "/images/portfolio/Design.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "Luxury Furniture E-commerce",
    highlight: "+160% Direct Bookings",
    deliveredServices: ["E-commerce Catalog Ads", "Meta Acquisition Retargeting", "UX Audit"],
    metrics: [
      { label: "Direct Bookings", value: "+160%", trend: "Reduced vacancy times" },
      { label: "Weekly Clicks", value: "8,500+", trend: "+122% click growth" },
      { label: "Ad Click-through Rate", value: "3.2%", trend: "Above industry avg" }
    ],
    chartLabel: "Monthly Booking Count",
    chartData: [
      { label: "Nov", value: 40 },
      { label: "Dec", value: 65 },
      { label: "Jan", value: 85 },
      { label: "Feb", value: 78 },
      { label: "Mar", value: 98 },
      { label: "Apr", value: 120 }
    ],
    url: "https://www.designliving.com/"
  },
  {
    name: "Forest Life",
    image: "/images/portfolio/Forest.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "Sustainable Lifestyle Products",
    highlight: "+200% Booking Enquiries",
    deliveredServices: ["Lifestyle Ecotourism Themes", "Meta Lead Forms", "WhatsApp Auto Replies"],
    metrics: [
      { label: "Weekly Enquiries", value: "450+", trend: "+200% YoY increase" },
      { label: "Form completion rate", value: "12.5%", trend: "High conversion UX" },
      { label: "Cost Per Qualified lead", value: "₹72", trend: "-40% reduction" }
    ],
    chartLabel: "Weekly Enquiries Average",
    chartData: [
      { label: "Nov", value: 120 },
      { label: "Dec", value: 180 },
      { label: "Jan", value: 260 },
      { label: "Feb", value: 240 },
      { label: "Mar", value: 310 },
      { label: "Apr", value: 386 }
    ],
    url: "https://www.forestlife.com/"
  },
  {
    name: "Living Space",
    image: "/images/portfolio/Living.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "Premium Interior Decor",
    highlight: "₹38L Monthly Revenue",
    deliveredServices: ["Heritage Destination Ads", "Google Ads Search", "Booking Engine Sync"],
    metrics: [
      { label: "Direct Revenue", value: "₹38L", trend: "Generated in 90 days" },
      { label: "OTA share reduction", value: "28%", trend: "Direct channel boost" },
      { label: "Keyword Rankings", value: "Top 3", trend: "Jaipur old city search terms" }
    ],
    chartLabel: "Direct Revenue Monthly (Lakhs)",
    chartData: [
      { label: "Nov", value: 14.5 },
      { label: "Dec", value: 22.0 },
      { label: "Jan", value: 30.5 },
      { label: "Feb", value: 28.0 },
      { label: "Mar", value: 33.5 },
      { label: "Apr", value: 38.0 }
    ],
    url: "https://www.livingspace.com/"
  },
  {
    name: "Pop Shop",
    image: "/images/portfolio/Pop.jpg",
    sector: "Consumer Tech & E-commerce",
    category: "Smart Accessories E-store",
    highlight: "+140% Direct Bookings",
    deliveredServices: ["Social Ads Acquisition", "Meta Product Retargeting", "Conversion Optimization"],
    metrics: [
      { label: "Direct Bookings", value: "+140%", trend: "Via tailored landing forms" },
      { label: "Qualified leads", value: "980+", trend: "95% accuracy rate" },
      { label: "Mobile Bounce Rate", value: "-22%", trend: "Page speed optimized" }
    ],
    chartLabel: "Web Direct Booking Count",
    chartData: [
      { label: "Nov", value: 30 },
      { label: "Dec", value: 45 },
      { label: "Jan", value: 62 },
      { label: "Feb", value: 55 },
      { label: "Mar", value: 70 },
      { label: "Apr", value: 85 }
    ],
    url: "https://www.popshop.com/"
  },
  {
    name: "Wellness Zone",
    image: "/images/portfolio/Wellness.jpg",
    sector: "Health & Wellness",
    category: "Corporate Wellness Platform",
    highlight: "+180% Leads Growth",
    deliveredServices: ["B2B Wellness Campaigns", "Interactive Patient Qualification", "Google Ads Search"],
    metrics: [
      { label: "Weekly Enquiries", value: "2,400+", trend: "+180% volume increase" },
      { label: "Lead Response Rate", value: "98%", trend: "Automatic CRM Triggers" },
      { label: "Appointment Rate", value: "5.1%", trend: "Industry High" }
    ],
    chartLabel: "Daily Consultations Month Avg",
    chartData: [
      { label: "Nov", value: 180 },
      { label: "Dec", value: 280 },
      { label: "Jan", value: 390 },
      { label: "Feb", value: 350 },
      { label: "Mar", value: 480 },
      { label: "Apr", value: 590 }
    ],
    url: "https://www.wellnesszone.com/"
  }
];

// Grouping by Sector as requested by the user
const sectorFilters = [
  { label: "All Sectors", value: "all" },
  { label: "SaaS & B2B Tech", value: "SaaS & B2B Tech" },
  { label: "D2C & FMCG", value: "D2C & FMCG" },
  { label: "Real Estate & Co-living", value: "Real Estate & Co-living" },
  { label: "Health & Wellness", value: "Health & Wellness" },
  { label: "EdTech & Education", value: "EdTech & Education" },
  { label: "Consumer Tech & E-commerce", value: "Consumer Tech & E-commerce" }
];

export default function WorkPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");
  const [selectedPort, setSelectedPort] = useState<PortOfCall | null>(null);

  const filteredPorts = useMemo(() => {
    return portsOfCall.filter((port) => {
      const matchesSearch =
        port.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        port.sector.toLowerCase().includes(searchQuery.toLowerCase()) ||
        port.category.toLowerCase().includes(searchQuery.toLowerCase());

      if (selectedSector === "all") return matchesSearch;
      return matchesSearch && port.sector === selectedSector;
    });
  }, [searchQuery, selectedSector]);

  // Compute SVG Line coordinates deteministically based on chart data
  const chartCoordinates = useMemo(() => {
    if (!selectedPort) return { line: "", fill: "", points: [] };
    const points = selectedPort.chartData;
    const width = 450;
    const height = 120;
    const paddingX = 30;
    const paddingY = 15;
    
    const xRange = width - paddingX * 2;
    const yRange = height - paddingY * 2;
    
    const values = points.map((p) => p.value);
    const maxVal = Math.max(...values);
    const minVal = Math.min(...values);
    const valRange = maxVal - minVal || 1;

    const coords = points.map((p, i) => {
      const x = paddingX + (i / (points.length - 1)) * xRange;
      const y = height - paddingY - ((p.value - minVal) / valRange) * yRange;
      return { x, y, label: p.label, value: p.value };
    });

    const linePath = coords.reduce((acc, c, i) => {
      return i === 0 ? `M ${c.x} ${c.y}` : `${acc} L ${c.x} ${c.y}`;
    }, "");

    const fillPath = `${linePath} L ${coords[coords.length - 1].x} ${height} L ${coords[0].x} ${height} Z`;

    return { line: linePath, fill: fillPath, points: coords };
  }, [selectedPort]);

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      {/* Floating background sketch overlay */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-[0.03] z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-100px] w-[500px] h-[500px]">
          <Image
            src="/images/service_website_v5.png"
            alt="Sailboat Background Ornament"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[20%] right-[-100px] w-[600px] h-[600px]">
          <Image
            src="/images/service_marketing_v5.png"
            alt="Telescope Background Ornament"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <main className="flex-grow pt-32 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* 1. HERO SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="flex justify-center items-center gap-2 text-[#FF6B00] uppercase tracking-widest text-xs font-black">
              <Compass className="w-4 h-4 animate-spin-slow text-[#FF6B00]" />
              <span>Destinations Charted</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-[#1D3D9E] leading-tight">
              Ports of Call
            </h1>
            <p className="text-sm sm:text-base text-[#0F2C59]/75 max-w-xl mx-auto leading-relaxed">
              Navigating digital presence, branding, and conversion architecture for fast-growing startup brands, direct-to-consumer businesses, and premium travel expeditions.
            </p>
            <div className="text-[10px] font-mono text-[#0F2C59]/40 tracking-wider">
              N 24° 51&apos; 56&quot; &bull; E 67° 0&apos; 36&quot; &bull; CHARTED VOYAGES: {portsOfCall.length}
            </div>
          </div>

          {/* 2. SEARCH & FILTER CONTROLS */}
          <div className="bg-white border border-[#1D3D9E]/10 rounded-3xl p-6 shadow-sm mb-12 space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
              
              {/* Search Field */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#0F2C59]/40" />
                <input
                  type="text"
                  placeholder="Search ports, brands, or sectors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-[#1D3D9E]/10 rounded-2xl text-sm font-semibold text-[#0F2C59] placeholder-[#0F2C59]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                />
              </div>

              {/* Counter status */}
              <span className="text-xs font-bold text-[#1D3D9E]/60 bg-[#1D3D9E]/5 px-4 py-2 rounded-full font-mono">
                SHOWING: {filteredPorts.length} OF {portsOfCall.length} VOYAGES
              </span>
            </div>

            {/* Filter Buttons */}
            <div className="flex overflow-x-auto md:flex-wrap gap-2 pt-2 border-t border-[#1D3D9E]/5 pb-1 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {sectorFilters.map((filter) => {
                const isActive = selectedSector === filter.value;
                return (
                  <button
                    key={filter.value}
                    onClick={() => setSelectedSector(filter.value)}
                    className={`shrink-0 px-4 py-2 text-xs font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#1D3D9E] text-white shadow-sm scale-102 border-transparent"
                        : "bg-slate-50 text-[#0F2C59]/80 border border-[#1D3D9E]/10 hover:border-[#FF6B00]/40 hover:text-[#1D3D9E]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. PORTFOLIO GRID */}
          {filteredPorts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPorts.map((port, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedPort(port)}
                  className="bg-white border border-[#1D3D9E]/10 rounded-3xl overflow-hidden flex flex-col justify-between items-start hover:border-[#FF6B00]/40 hover:shadow-lg transition-all duration-300 group relative text-left cursor-pointer"
                >
                  {/* Card Image Cover with Floating Action Links */}
                  <div className="relative w-full h-52 bg-[#1D3D9E]/5 overflow-hidden select-none">
                    <Image
                      src={port.image}
                      alt={`${port.name} Showcase Image`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Floating Links at Top Right */}
                    <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
                      <a
                        href={port.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/90 backdrop-blur-sm border border-[#1D3D9E]/10 px-3 py-1.5 rounded-full text-[10px] font-black text-[#1D3D9E] hover:text-[#FF6B00] transition-colors flex items-center gap-1 shadow-sm cursor-pointer"
                        title={`Visit ${port.name} Website`}
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      
                      <a
                        href={port.instagram || `https://www.instagram.com/${port.name.toLowerCase().replace(/[^a-z0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                        title="Instagram Feed"
                      >
                        <InstagramIcon className="w-3.5 h-3.5 stroke-white" />
                      </a>
                    </div>
                  </div>

                  <div className="w-full p-6 space-y-4 flex-grow flex flex-col justify-between">
                    <div className="space-y-4">
                      {/* Top status bar inside card */}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider font-mono flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                          {port.sector}
                        </span>
                        <span className="text-[9px] font-black tracking-widest text-[#1D3D9E]/40 font-mono">
                          LOG #{100 + idx}
                        </span>
                      </div>

                      {/* Brand Name */}
                      <div className="space-y-1">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E] group-hover:text-[#FF6B00] transition-colors duration-300 leading-tight">
                          {port.name}
                        </h3>
                        <span className="inline-block text-[11px] font-bold text-[#0F2C59]/50 tracking-wide uppercase">
                          {port.category}
                        </span>
                      </div>

                      {/* Result Description */}
                      <p className="text-xs sm:text-sm text-[#0F2C59]/75 leading-relaxed pt-2 border-t border-[#1D3D9E]/5">
                        Delivered custom conversion funnels, tailored ad designs, and high-performance acquisition campaigns.
                      </p>
                    </div>

                    <div className="space-y-4 pt-4">
                      {port.highlight && (
                        <div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 border border-emerald-500/10 px-2.5 py-1 rounded-lg w-fit">
                          <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                          <span className="text-[10px] font-bold tracking-wide uppercase font-mono">{port.highlight}</span>
                        </div>
                      )}

                      {/* Outward Buttons Container */}
                      <div className="w-full pt-4 border-t border-[#1D3D9E]/5">
                        <button
                          type="button"
                          className="w-full flex items-center justify-center gap-2 bg-[#1D3D9E]/5 text-[#1D3D9E] group-hover:bg-[#1D3D9E] group-hover:text-white border border-transparent text-xs font-bold py-2.5 px-4 rounded-xl transition-all duration-300"
                        >
                          <span>View Growth Logs</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No search results view */
            <div className="bg-white border border-[#1D3D9E]/10 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4">
              <Compass className="w-12 h-12 text-[#FF6B00] mx-auto animate-pulse" />
              <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">Port Not Plotted</h3>
              <p className="text-xs text-[#0F2C59]/70 leading-relaxed">
                We haven&apos;t mapped any destination matching &quot;{searchQuery}&quot;. Try adjusting your search query or choosing another sector filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSector("all");
                }}
                className="bg-[#1D3D9E] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer hover:bg-[#FF6B00] transition-colors"
              >
                Reset Navigation
              </button>
            </div>
          )}

          {/* 4. BOTTOM CTAs */}
          <div className="mt-24 bg-[#1D3D9E] rounded-[32px] p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-lg border border-[#FF6B00]/10">
            {/* Themed Background line graphic */}
            <div className="absolute inset-0 select-none pointer-events-none opacity-[0.05]">
              <Image
                src="/images/service_website_v5.png"
                alt="Sailboat Background Ornament"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-[#FF6B00] uppercase tracking-widest text-xs font-black block">
                Voyage Planning
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold leading-tight">
                Ready to Chart Your Course?
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-lg mx-auto">
                Join our fleet of startup brands and industry leaders. Let&apos;s co-create your next digital destination and scale your customer acquisition.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-8 py-3 rounded-full shadow-md transition-all duration-200"
                >
                  Consult Our Captains
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* 5. INTERACTIVE PERFORMANCE LOG MODAL */}
      {selectedPort && (
        <div className="fixed inset-0 z-50 bg-[#0F2C59]/40 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-[#1D3D9E]/10 rounded-[32px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-y-auto max-h-[90vh] text-left space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            
            {/* Header / Close button */}
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider font-mono flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#FF6B00] animate-spin-slow" />
                  {selectedPort.sector}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1D3D9E]">
                  {selectedPort.name}
                </h2>
                <span className="inline-block text-xs font-bold text-[#0F2C59]/50 uppercase tracking-wide">
                  {selectedPort.category}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPort(null)}
                className="p-1.5 rounded-full hover:bg-[#1D3D9E]/5 text-[#0F2C59]/60 hover:text-[#1D3D9E] transition-all cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Performance Statistics Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-[#1D3D9E]/10 py-5">
              {selectedPort.metrics.map((metric, i) => (
                <div key={i} className="bg-slate-50 border border-[#1D3D9E]/5 rounded-2xl p-4 space-y-1 text-center">
                  <span className="text-[10px] font-bold text-[#0F2C59]/50 uppercase tracking-wide block">
                    {metric.label}
                  </span>
                  <span className="font-serif text-2xl font-black text-[#1D3D9E] block">
                    {metric.value}
                  </span>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-500/10 px-2 py-0.5 rounded-full inline-block font-mono">
                    {metric.trend}
                  </span>
                </div>
              ))}
            </div>

            {/* Services Delivered */}
            <div className="space-y-3">
              <h4 className="font-serif text-sm font-bold text-[#1D3D9E] uppercase tracking-wide">
                Services Charted &amp; Delivered
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedPort.deliveredServices.map((service, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-bold text-[#1D3D9E] bg-[#1D3D9E]/5 border border-[#1D3D9E]/10 px-3 py-1.5 rounded-xl flex items-center gap-1.5"
                  >
                    <Anchor className="w-3 h-3 text-[#FF6B00]" />
                    {service}
                  </span>
                ))}
              </div>
            </div>

            {/* Dynamic Interactive SVG Chart */}
            <div className="bg-slate-50 border border-[#1D3D9E]/10 rounded-[24px] p-5 space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-serif text-xs font-bold text-[#1D3D9E] uppercase tracking-wide flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-[#FF6B00]" />
                  {selectedPort.chartLabel}
                </span>
                <span className="text-[10px] font-mono text-[#0F2C59]/40 tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  6-MONTH RUNNING LOG
                </span>
              </div>

              {/* Chart SVG wrapper */}
              <div className="relative w-full overflow-hidden">
                <svg viewBox="0 0 450 120" className="w-full h-auto overflow-visible select-none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid guide lines */}
                  <line x1="30" y1="15" x2="420" y2="15" stroke="#1D3D9E" strokeOpacity="0.05" strokeDasharray="3 3" />
                  <line x1="30" y1="52.5" x2="420" y2="52.5" stroke="#1D3D9E" strokeOpacity="0.05" strokeDasharray="3 3" />
                  <line x1="30" y1="90" x2="420" y2="90" stroke="#1D3D9E" strokeOpacity="0.05" strokeDasharray="3 3" />

                  {/* Gradient Area Fill */}
                  <path d={chartCoordinates.fill} fill="url(#chartGradient)" />

                  {/* Main Line */}
                  <path
                    d={chartCoordinates.line}
                    fill="none"
                    stroke="#FF6B00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Interactive node dots & values */}
                  {chartCoordinates.points.map((pt, idx) => (
                    <g key={idx} className="group/dot cursor-pointer">
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="4.5"
                        fill="#white"
                        stroke="#FF6B00"
                        strokeWidth="2"
                        className="transition-all duration-200 group-hover/dot:r-6 group-hover/dot:fill-[#FF6B00]"
                      />
                      {/* Floating value tag */}
                      <text
                        x={pt.x}
                        y={pt.y - 10}
                        textAnchor="middle"
                        fill="#1D3D9E"
                        className="text-[9px] font-mono font-bold opacity-75 pointer-events-none"
                      >
                        {pt.value}
                      </text>
                      {/* X Axis Month Label */}
                      <text
                        x={pt.x}
                        y="115"
                        textAnchor="middle"
                        fill="#0F2C59"
                        className="text-[8px] font-bold opacity-45 pointer-events-none"
                      >
                        {pt.label}
                      </text>
                    </g>
                  ))}
                </svg>
              </div>
            </div>

            {/* Outward links inside modal */}
            <div className="flex items-center gap-3 w-full pt-4">
              <Link
                href={selectedPort.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow flex items-center justify-center gap-2 bg-[#1D3D9E] text-white hover:bg-[#FF6B00] text-xs font-bold py-3 px-4 rounded-xl transition-all duration-300 shadow-sm"
              >
                <span>Launch Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
