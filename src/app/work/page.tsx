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
  summary: string;
}

const portsOfCall: PortOfCall[] = [
  {
    "name": "The Northern Group",
    "image": "/images/thenortherngroup.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Search",
    "highlight": "+400% Leads",
    "deliveredServices": [
      "Real Estate",
      "Search",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+400% Leads",
        "trend": "ROI 12x"
      },
      {
        "label": "Duration",
        "value": "Full Project",
        "trend": "Location: NZ"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://thenortherngroup.co.nz",
    "summary": "High-converting digital storefront for a top NZ portal."
  },
  {
    "name": "Acquire Buyers Agency",
    "image": "/images/acquirebuyersagency.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Bidding",
    "highlight": "82% Conversions",
    "deliveredServices": [
      "Real Estate",
      "Bidding",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "82% Conversions",
        "trend": "CPL -30%"
      },
      {
        "label": "Duration",
        "value": "Scale-up",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://acquirebuyersagency.com.au/",
    "summary": "Strategic web presence for an Australian buyers agency."
  },
  {
    "name": "Green City",
    "image": "/images/greencity.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Sales",
    "highlight": "\u20b92.4 Cr Rev",
    "deliveredServices": [
      "Real Estate",
      "Sales",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b92.4 Cr Rev",
        "trend": "Leads +210%"
      },
      {
        "label": "Duration",
        "value": "Phase 1",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.futurearthgroup.com/green-city",
    "summary": "Digital launch for a premium residential layout project."
  },
  {
    "name": "Nivriti Farms",
    "image": "/images/nivritifarms.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Luxury",
    "highlight": "+150% Enquiries",
    "deliveredServices": [
      "Real Estate",
      "Luxury",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+150% Enquiries",
        "trend": "Conversion 18%"
      },
      {
        "label": "Duration",
        "value": "3 Months",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.nivritifarms.com",
    "summary": "Luxury farm project landing experience and lead capture."
  },
  {
    "name": "SHB Developers",
    "image": "/images/shbdeveloperss.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Build",
    "highlight": "\u20b91.2 Cr Revenue",
    "deliveredServices": [
      "Real Estate",
      "Build",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b91.2 Cr Revenue",
        "trend": "ROI 8.5x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://shbdeveloperss.com",
    "summary": "Full-scale corporate identity and lead generation site."
  },
  {
    "name": "Iqon West",
    "image": "/images/iqonwest.webp",
    "sector": "Real Estate",
    "category": "Real Estate \u2022 Real Estate, Launch",
    "highlight": "+310% Enquiries",
    "deliveredServices": [
      "Real Estate",
      "Launch",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310% Enquiries",
        "trend": "CPL Drop 40%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://ankurahomes.in/iqonwest/index.html",
    "summary": "Focused project landing page for high-intent investors."
  },
  {
    "name": "Ad Critter",
    "image": "/images/adcritter.webp",
    "sector": "Education",
    "category": "Education \u2022 MarTech, UX",
    "highlight": "82% Conversion",
    "deliveredServices": [
      "MarTech",
      "UX",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "82% Conversion",
        "trend": "Growth +150%"
      },
      {
        "label": "Duration",
        "value": "MVP",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://adcritter.ai/",
    "summary": "Education-tech platform interface for US advertisers."
  },
  {
    "name": "Carver Aviation",
    "image": "/images/carveraviation.webp",
    "sector": "Education",
    "category": "Education \u2022 Aviation, Leads",
    "highlight": "+320 Leads",
    "deliveredServices": [
      "Aviation",
      "Leads",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+320 Leads",
        "trend": "CPL -45%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://carveraviation.com/",
    "summary": "Digital presence for India's premier flight training academy."
  },
  {
    "name": "Intryc",
    "image": "/images/intryc.webp",
    "sector": "Education",
    "category": "Education \u2022 FinTech, Trust",
    "highlight": "ROI 4.2x",
    "deliveredServices": [
      "FinTech",
      "Trust",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 4.2x",
        "trend": "CTR +65%"
      },
      {
        "label": "Duration",
        "value": "Full Life",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.intryc.com",
    "summary": "Global education and finance trust management interface."
  },
  {
    "name": "People Manager",
    "image": "/images/peoplemanager.webp",
    "sector": "Education",
    "category": "Education \u2022 HR, Platform",
    "highlight": "ROI 3.4x",
    "deliveredServices": [
      "HR",
      "Platform",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 3.4x",
        "trend": "Growth +245%"
      },
      {
        "label": "Duration",
        "value": "3 Months",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://peoplemanager.co/",
    "summary": "Australian education and hiring platform interface."
  },
  {
    "name": "Rollins",
    "image": "/images/rollins.webp",
    "sector": "Education",
    "category": "Education \u2022 University, Global",
    "highlight": "+245% Traffic",
    "deliveredServices": [
      "University",
      "Global",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+245% Traffic",
        "trend": "Conversions +80%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.rollins.edu",
    "summary": "US-based college portal extension and optimization."
  },
  {
    "name": "WGU",
    "image": "/images/wgu.webp",
    "sector": "Education",
    "category": "Education \u2022 EdTech, LMS",
    "highlight": "1M+ Visitors",
    "deliveredServices": [
      "EdTech",
      "LMS",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "1M+ Visitors",
        "trend": "CPL -50%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.wgu.edu",
    "summary": "Conversion-optimized pages for global online university."
  },
  {
    "name": "Alchemist Pharmarx",
    "image": "/images/alchemistpharmarx.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Pharma, Ecom",
    "highlight": "82% Conv Lift",
    "deliveredServices": [
      "Pharma",
      "Ecom",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "82% Conv Lift",
        "trend": "Orders +150%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://alchemistpharmarx.com/",
    "summary": "US-based prescription and pharmacy portal revamp."
  },
  {
    "name": "Better Tomorrow",
    "image": "/images/bettertomorrowtc.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Selfcare, Care",
    "highlight": "ROI 5.2x",
    "deliveredServices": [
      "Selfcare",
      "Care",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 5.2x",
        "trend": "Leads +310%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://bettertomorrowtc.com/",
    "summary": "Patient-centered digital strategy and lead flow."
  },
  {
    "name": "DDC Smiles",
    "image": "/images/ddcsmiles.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Healthcare, Dental",
    "highlight": "\u20b931L Revenue",
    "deliveredServices": [
      "Healthcare",
      "Dental",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b931L Revenue",
        "trend": "ROI 5x"
      },
      {
        "label": "Duration",
        "value": "30 Days",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://ddcsmiles.in/",
    "summary": "Strategic patient acquisition for a dental chain."
  },
  {
    "name": "Gateway Foundation",
    "image": "/images/gatewayfoundation.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Wellness, Charity",
    "highlight": "ROI 3.4x",
    "deliveredServices": [
      "Wellness",
      "Charity",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 3.4x",
        "trend": "Growth +210%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.gatewayfoundation.org",
    "summary": "Impact-driven web presence for healthcare foundation."
  },
  {
    "name": "Lakeview Health",
    "image": "/images/lakeviewhealth.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Medical, US",
    "highlight": "+310% Enquiries",
    "deliveredServices": [
      "Medical",
      "US",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310% Enquiries",
        "trend": "CPL -40%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.lakeviewhealth.com",
    "summary": "Primary capture portal for luxury US medical facility."
  },
  {
    "name": "SL Compounding",
    "image": "/images/slcompounding.webp",
    "sector": "Healthcare",
    "category": "Healthcare \u2022 Pharma, Custom",
    "highlight": "\u20b950 L Sales",
    "deliveredServices": [
      "Pharma",
      "Custom",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b950 L Sales",
        "trend": "ROI 6x"
      },
      {
        "label": "Duration",
        "value": "MVP",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://slcompounding.com",
    "summary": "Pharmacy compounding order system and interface."
  },
  {
    "name": "B2Bind",
    "image": "/images/b2bind.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 B2B, International",
    "highlight": "\u20b985L Orders",
    "deliveredServices": [
      "B2B",
      "International",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b985L Orders",
        "trend": "+210% Deals"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.b2bind.com/",
    "summary": "Robust B2B industrial portal for global supply."
  },
  {
    "name": "Interior Buildouts",
    "image": "/images/interiorbuildouts.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 Construction, Fitout",
    "highlight": "+300% Leads",
    "deliveredServices": [
      "Construction",
      "Fitout",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+300% Leads",
        "trend": "CPL -42%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://interiorbuildouts.com/",
    "summary": "Construction fit-out demand capture in the US."
  },
  {
    "name": "PCL",
    "image": "/images/pcl.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 Construction, Global",
    "highlight": "ROI 4.2x",
    "deliveredServices": [
      "Construction",
      "Global",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 4.2x",
        "trend": "CTR +90%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.pcl.com/",
    "summary": "High-performance construction group digital assets."
  },
  {
    "name": "RUD",
    "image": "/images/rud.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 Mining, Heavy",
    "highlight": "+175% Quotes",
    "deliveredServices": [
      "Mining",
      "Heavy",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+175% Quotes",
        "trend": "Rev +50%"
      },
      {
        "label": "Duration",
        "value": "3 Months",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.rud.com.au/",
    "summary": "Lifting and mining equipment industrial solution."
  },
  {
    "name": "Sten House Lifting",
    "image": "/images/stenhouselifting.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 Maintenance, Safety",
    "highlight": "ROI 6.5x",
    "deliveredServices": [
      "Maintenance",
      "Safety",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 6.5x",
        "trend": "Orders +210%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.stenhouselifting.com.au/",
    "summary": "Safety-first industrial equipment service portal."
  },
  {
    "name": "Triveni Group",
    "image": "/images/trivenigroup.webp",
    "sector": "Industrial",
    "category": "Industrial \u2022 Energy, Mfg",
    "highlight": "+320 Leads",
    "deliveredServices": [
      "Energy",
      "Mfg",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+320 Leads",
        "trend": "Spend 25K"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.trivenigroup.com/",
    "summary": "Global energy solutions manufacturing presence."
  },
  {
    "name": "Anatomy Fitness",
    "image": "/images/anatomyfitness.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Fitness, App",
    "highlight": "\u20b935 L Rev",
    "deliveredServices": [
      "Fitness",
      "App",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b935 L Rev",
        "trend": "+175% Sales"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://anatomyfitness.co/",
    "summary": "Direct-to-consumer fitness apparel and app site."
  },
  {
    "name": "Artebella",
    "image": "/images/artebella.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Art, Decor",
    "highlight": "\u20b918 L Orders",
    "deliveredServices": [
      "Art",
      "Decor",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b918 L Orders",
        "trend": "ROI 15x"
      },
      {
        "label": "Duration",
        "value": "Full Cycle",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://artebella.in/",
    "summary": "Premium art and home decor boutique storefront."
  },
  {
    "name": "Baatu",
    "image": "/images/baatu.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Tech, Lifestyle",
    "highlight": "100K Downloads",
    "deliveredServices": [
      "Tech",
      "Lifestyle",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "100K Downloads",
        "trend": "ROI 5x"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.baatu.in/",
    "summary": "Tech-lifestyle brand e-commerce and app hub."
  },
  {
    "name": "Bella Lash",
    "image": "/images/bellalash.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Beauty, Global",
    "highlight": "2.5M Views",
    "deliveredServices": [
      "Beauty",
      "Global",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "2.5M Views",
        "trend": "+300% Rev"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://bellalash.com/",
    "summary": "Lash artist supply and global training platform."
  },
  {
    "name": "British Darts",
    "image": "/images/britishdarts.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Sports, Equip",
    "highlight": "ROI 8.5x",
    "deliveredServices": [
      "Sports",
      "Equip",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 8.5x",
        "trend": "Orders +210%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://britishdarts.com/",
    "summary": "Heritage sports equipment e-commerce storefront."
  },
  {
    "name": "Gatodates",
    "image": "/images/gatodates.webp",
    "sector": "E-commerce",
    "category": "E-commerce \u2022 Food, Healthy",
    "highlight": "+150% Orders",
    "deliveredServices": [
      "Food",
      "Healthy",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+150% Orders",
        "trend": "CTR +95%"
      },
      {
        "label": "Duration",
        "value": "Full Launch",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://gatodates.com/",
    "summary": "Direct sales platform for premium healthy dates."
  },
  {
    "name": "Betterworld Technology",
    "image": "/images/betterworldtechnology.webp",
    "sector": "IT",
    "category": "IT \u2022 SaaS, Network",
    "highlight": "+245% Traffic",
    "deliveredServices": [
      "SaaS",
      "Network",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+245% Traffic",
        "trend": "ROI 3.4x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.betterworldtechnology.com/",
    "summary": "Sustainable IT and network solution management."
  },
  {
    "name": "Exotel",
    "image": "/images/exotel.webp",
    "sector": "IT",
    "category": "IT \u2022 Cloud, Telecom",
    "highlight": "ROI 12x",
    "deliveredServices": [
      "Cloud",
      "Telecom",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 12x",
        "trend": "Conv 25%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://exotel.com/",
    "summary": "Conversion flow optimization for telecom leader."
  },
  {
    "name": "Intergy",
    "image": "/images/intergy.webp",
    "sector": "IT",
    "category": "IT \u2022 Software, B2B",
    "highlight": "ROI 5.2x",
    "deliveredServices": [
      "Software",
      "B2B",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 5.2x",
        "trend": "Leads +210%"
      },
      {
        "label": "Duration",
        "value": "Full Project",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.intergy.com.au/",
    "summary": "Custom software solutions and B2B digital hub."
  },
  {
    "name": "Uinno",
    "image": "/images/lionwood.webp",
    "sector": "IT",
    "category": "IT \u2022 UI/UX, Product",
    "highlight": "ROI 6.5x",
    "deliveredServices": [
      "UI/UX",
      "Product",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 6.5x",
        "trend": "Growth 245%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://uinno.io/",
    "summary": "Digital transformation and product engineering."
  },
  {
    "name": "Pubmatic",
    "image": "/images/pubmatic.webp",
    "sector": "IT",
    "category": "IT \u2022 AdTech, Platform",
    "highlight": "3M+ Views",
    "deliveredServices": [
      "AdTech",
      "Platform",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "3M+ Views",
        "trend": "+350% Reach"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://pubmatic.com/",
    "summary": "Global ad infrastructure and publisher network."
  },
  {
    "name": "Xenai Digital",
    "image": "/images/xenaidigital.webp",
    "sector": "IT",
    "category": "IT \u2022 Digital, Search",
    "highlight": "ROI 4.2x",
    "deliveredServices": [
      "Digital",
      "Search",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 4.2x",
        "trend": "Growth +175%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://xenaidigital.com.au/",
    "summary": "Australian strategic digital and search agency."
  },
  {
    "name": "Ahilya By The Sea",
    "image": "/images/ahilyabythesea.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Luxury, Goa",
    "highlight": "+310% Bookings",
    "deliveredServices": [
      "Luxury",
      "Goa",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310% Bookings",
        "trend": "CPL -40%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: Goa"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://ahilyabythesea.com/",
    "summary": "Luxury boutique hotel experience and booking flow."
  },
  {
    "name": "Ananta Hotels",
    "image": "/images/anantahotels.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Resort, Nation",
    "highlight": "\u20b935 L Rev",
    "deliveredServices": [
      "Resort",
      "Nation",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b935 L Rev",
        "trend": "ROI 12x"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.anantahotels.com/",
    "summary": "Digital revamp of luxury hotel chain web assets."
  },
  {
    "name": "Stay Boutique",
    "image": "/images/boutique.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Curated, Hub",
    "highlight": "ROI 5.2x",
    "deliveredServices": [
      "Curated",
      "Hub",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 5.2x",
        "trend": "Conv +210%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://stay-boutique.com/",
    "summary": "Strategic boutique hotel curator and booking site."
  },
  {
    "name": "Jumeirah",
    "image": "/images/jumeirah.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Luxury, Global",
    "highlight": "10M+ Revenue",
    "deliveredServices": [
      "Luxury",
      "Global",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "10M+ Revenue",
        "trend": "ROI 15x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.jumeirah.com/en",
    "summary": "Premier luxury group direct booking optimization."
  },
  {
    "name": "Postcard Resorts",
    "image": "/images/postcardresorts.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Experience, India",
    "highlight": "+250% Direct",
    "deliveredServices": [
      "Experience",
      "India",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+250% Direct",
        "trend": "ROI 8x"
      },
      {
        "label": "Duration",
        "value": "Full Revamp",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.postcardresorts.com/",
    "summary": "Boutique experience portal for niche resorts."
  },
  {
    "name": "Raas Hotels",
    "image": "/images/raashotels.webp",
    "sector": "Hospitality",
    "category": "Hospitality \u2022 Heritage, Luxury",
    "highlight": "+310% Leads",
    "deliveredServices": [
      "Heritage",
      "Luxury",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310% Leads",
        "trend": "CPL -30%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.raashotels.com/",
    "summary": "Heritage luxury property booking and leads hub."
  },
  {
    "name": "Asset Class",
    "image": "/images/assetclass.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Finance, Scale",
    "highlight": "ROI 12x",
    "deliveredServices": [
      "Finance",
      "Scale",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 12x",
        "trend": "Traffic +245%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.assetclass.com/",
    "summary": "Multi-national asset management digital platform."
  },
  {
    "name": "Corporate Professionals",
    "image": "/images/corporateprofessionals.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Legal, Advisory",
    "highlight": "+310 Leads",
    "deliveredServices": [
      "Legal",
      "Advisory",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310 Leads",
        "trend": "Conv +40%"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.corporatewebsite.com.au/",
    "summary": "Strategic advisory and legal corporate presence."
  },
  {
    "name": "Graham Partners",
    "image": "/images/grahampartners.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Equity, US",
    "highlight": "\u20b950 L Sales",
    "deliveredServices": [
      "Equity",
      "US",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "\u20b950 L Sales",
        "trend": "ROI 6x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.grahampartners.net/",
    "summary": "Investment equity and firm management portal."
  },
  {
    "name": "Jabil",
    "image": "/images/jabil.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Manufacturing, IT",
    "highlight": "ROI 5.2x",
    "deliveredServices": [
      "Manufacturing",
      "IT",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 5.2x",
        "trend": "Growth +175%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: Global"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.jabil.com/",
    "summary": "Global manufacturing services corporate asset."
  },
  {
    "name": "Kochhar",
    "image": "/images/kochhar.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Legal, India",
    "highlight": "+320 Leads",
    "deliveredServices": [
      "Legal",
      "India",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+320 Leads",
        "trend": "CPL -35%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: India"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://kochhar.com/",
    "summary": "Leading law firm digital service and lead hub."
  },
  {
    "name": "LPL",
    "image": "/images/lpl.webp",
    "sector": "Corporate",
    "category": "Corporate \u2022 Insurance, Global",
    "highlight": "3M+ Views",
    "deliveredServices": [
      "Insurance",
      "Global",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "3M+ Views",
        "trend": "ROI 4.2x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.lpl.com/",
    "summary": "Financial services and insurance group presence."
  },
  {
    "name": "Little Palm Island",
    "image": "/images/littlepalmisland.webp",
    "sector": "Wellness",
    "category": "Wellness \u2022 Spa, Private",
    "highlight": "+310% Bookings",
    "deliveredServices": [
      "Spa",
      "Private",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+310% Bookings",
        "trend": "ROI 12x"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.littlepalmisland.com/",
    "summary": "Exclusive private island wellness resort portal."
  },
  {
    "name": "Lon Retreat",
    "image": "/images/lonretreat.webp",
    "sector": "Wellness",
    "category": "Wellness \u2022 Organic, Retreat",
    "highlight": "ROI 5.2x",
    "deliveredServices": [
      "Organic",
      "Retreat",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 5.2x",
        "trend": "Leads +210%"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://lonretreat.com.au/",
    "summary": "Sustainable retreat and wellness experience site."
  },
  {
    "name": "Niramaya",
    "image": "/images/niramaya.webp",
    "sector": "Wellness",
    "category": "Wellness \u2022 Holistic, Villas",
    "highlight": "100K Views",
    "deliveredServices": [
      "Holistic",
      "Villas",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "100K Views",
        "trend": "ROI 8x"
      },
      {
        "label": "Duration",
        "value": "Scale",
        "trend": "Location: AU"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.niramaya.com.au/",
    "summary": "Tropical wellness villas and spa booking hub."
  },
  {
    "name": "Terranea",
    "image": "/images/terranea-2.webp",
    "sector": "Wellness",
    "category": "Wellness \u2022 Oceanfront, Lux",
    "highlight": "+320% Leads",
    "deliveredServices": [
      "Oceanfront",
      "Lux",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "+320% Leads",
        "trend": "ROI 15x"
      },
      {
        "label": "Duration",
        "value": "Ongoing",
        "trend": "Location: USA"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.terranea.com/",
    "summary": "Oceanfront luxury wellness resort digital assets."
  },
  {
    "name": "The Dolphin Bay",
    "image": "/images/thedolphinbay.webp",
    "sector": "Wellness",
    "category": "Wellness \u2022 Beach, Yoga",
    "highlight": "ROI 4.2x",
    "deliveredServices": [
      "Beach",
      "Yoga",
      "Web Development"
    ],
    "metrics": [
      {
        "label": "Primary Outcome",
        "value": "ROI 4.2x",
        "trend": "Conv +175%"
      },
      {
        "label": "Duration",
        "value": "Sprint",
        "trend": "Location: Thailand"
      },
      {
        "label": "Platform Focus",
        "value": "WEB",
        "trend": "Conversion Optimized"
      }
    ],
    "chartLabel": "Performance Lift Growth Log",
    "chartData": [
      {
        "label": "Phase 1",
        "value": 12
      },
      {
        "label": "Phase 2",
        "value": 24
      },
      {
        "label": "Phase 3",
        "value": 38
      },
      {
        "label": "Phase 4",
        "value": 32
      },
      {
        "label": "Phase 5",
        "value": 48
      },
      {
        "label": "Launch",
        "value": 65
      }
    ],
    "url": "https://www.thedolphinbay.com",
    "summary": "Beachfront yoga and wellness retreat experience."
  }
];


// Grouping by Sector as requested by the user
const sectorFilters = [
  { label: "All Sectors", value: "all" },
  { label: "Real Estate", value: "Real Estate" },
  { label: "Education", value: "Education" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Industrial", value: "Industrial" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "IT", value: "IT" },
  { label: "Hospitality", value: "Hospitality" },
  { label: "Corporate", value: "Corporate" },
  { label: "Wellness", value: "Wellness" }
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
                      
                      {port.instagram && (
                        <a
                          href={port.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                          title="Instagram Feed"
                        >
                          <InstagramIcon className="w-3.5 h-3.5 stroke-white" />
                        </a>
                      )}
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
                        {port.summary}
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
