import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { question: "How soon can I start getting leads from Google Ads?", answer: "Most Google Ads campaigns start generating leads within 7–14 days after proper setup, keyword research, and conversion tracking." },
  { question: "Do you manage Google Ads campaigns across all of India?", answer: "Yes. We manage PAN India Google Ads campaigns with city, state, and location-based targeting." },
  { question: "Is Google Ads suitable for small businesses?", answer: "Absolutely. Google Ads works well for small and medium-sized businesses when campaigns are structured with clear goals and budget control." },
  { question: "Do you set up conversion tracking?", answer: "Yes. We set up GA4, Google Tag Manager, and Google Ads conversion tracking to measure real leads, not just clicks." },
];

const services = [
  { icon: "search", title: "Search Campaigns", description: "High-intent search ads that capture customers actively looking for your services." },
  { icon: "megaphone", title: "Performance Max", description: "AI-powered campaigns across Search, Display, YouTube, and Discover for maximum reach." },
  { icon: "target", title: "Lead Generation Ads", description: "Campaigns focused on generating quality leads with optimized cost per acquisition." },
  { icon: "layout", title: "Landing Page Design", description: "High-converting landing pages designed specifically for Google Ads traffic." },
  { icon: "monitor", title: "Conversion Tracking", description: "GA4, GTM, and Google Ads conversion tracking setup for accurate lead measurement." },
  { icon: "rocket", title: "Campaign Optimization", description: "Ongoing bid, keyword, and ad copy optimization for better ROI month over month." },
];

export const metadata = {
  title: "Google Ads Management Services | Navi Route",
  description: "Run Google Search, lead generation and conversion-focused ad campaigns with keyword planning, tracking and ongoing optimization.",
  keywords: "Google Ads management services, Google Ads agency, PPC management, Google search ads, Google Ads optimization",
};

const googleAdsDashboard = {
  leadsGenerated: {
    label: "Leads Generated",
    value: "1,840",
    change: "↑ 24.5%",
    isIncrease: true
  },
  conversions: {
    label: "Form Fills / Calls",
    value: "2.12K",
    change: "↑ 28.2%",
    isIncrease: true
  },
  revenue: {
    label: "Ad Spend",
    value: "₹4.4L",
    change: "↑ 15.6%",
    isIncrease: true
  },
  costPerLead: {
    label: "Cost per Conversion",
    value: "₹208",
    change: "↓ 12.4%",
    isIncrease: false
  },
  lineChart: {
    leadsLabel: "Clicks",
    conversionsLabel: "Conversions",
    leadsPath: "M0 100 Q 50 80, 80 60 T 160 30 T 240 50 T 320 25 T 400 10",
    conversionsPath: "M0 115 Q 50 110, 80 95 T 160 65 T 240 85 T 320 45 T 400 25",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["google", "youtube"]
};

export default function GoogleAdsManagementServicesPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Google Ads Management"
      heroTitle="Google Ads Management Services for Quality Leads"
      heroSubtitle="Run Google Search, lead generation and conversion-focused ad campaigns with keyword planning, tracking and ongoing optimization."
      serviceName="Google Ads Management"
      services={services}
      whyChoose={[
        "Lead-focused campaign strategy designed to generate quality enquiries, not just clicks.",
        "Complete GA4, GTM, and conversion tracking setup for accurate performance measurement.",
        "Ongoing keyword, bid, and ad copy optimization for continuously improving ROI.",
        "High-converting landing page design optimized for Google Ads Quality Score.",
        "Transparent reporting with clear metrics on leads, cost per lead, and campaign ROI.",
      ]}
      faqs={faqs}
      dashboard={googleAdsDashboard}
    />
  );
}
