import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { question: "What is a lead generation campaign?", answer: "A lead generation campaign is a structured marketing effort using ads, landing pages, and follow-up systems to capture and convert potential customers." },
  { question: "Which platforms do you use for lead generation?", answer: "We run lead generation campaigns on Google Ads, Meta Ads (Facebook & Instagram), landing pages, and WhatsApp." },
  { question: "How do you track leads?", answer: "We set up proper conversion tracking, CRM integration, and lead attribution so you know exactly where each lead came from." },
  { question: "What industries do you work with?", answer: "We work with service businesses, healthcare, education, real estate, ecommerce, and B2B companies across India." },
];

const services = [
  { icon: "target", title: "Google Ads Lead Gen", description: "Search and Performance Max campaigns designed to capture high-intent leads." },
  { icon: "megaphone", title: "Meta Ads Lead Gen", description: "Facebook and Instagram lead form ads with targeted audience segmentation." },
  { icon: "layout", title: "Landing Page Funnels", description: "High-converting landing pages with forms, CTAs, and trust signals." },
  { icon: "smartphone", title: "WhatsApp Lead Capture", description: "WhatsApp-based lead capture with automated qualification and follow-up." },
  { icon: "database", title: "CRM & Follow-Up", description: "Automatic lead capture into CRM with follow-up sequences and alerts." },
  { icon: "monitor", title: "Lead Tracking & Analytics", description: "End-to-end tracking from ad click to lead conversion with attribution data." },
];

export const metadata = {
  title: "Lead Generation Campaigns Agency | Navi Route",
  description: "Plan and run lead generation campaigns across Google, Meta, landing pages and WhatsApp with tracking and follow-up systems.",
  keywords: "lead generation agency, lead generation campaigns, lead capture, Google Ads lead generation, Meta Ads lead generation",
};

const leadGenDashboard = {
  leadsGenerated: {
    label: "Leads Captured",
    value: "3,420",
    change: "↑ 38.2%",
    isIncrease: true
  },
  conversions: {
    label: "Qualified Leads",
    value: "2.14K",
    change: "↑ 41.5%",
    isIncrease: true
  },
  revenue: {
    label: "Campaign Spend",
    value: "₹3.6L",
    change: "↑ 10.0%",
    isIncrease: true
  },
  costPerLead: {
    label: "Avg. Cost per Lead",
    value: "₹105",
    change: "↓ 22.8%",
    isIncrease: false
  },
  lineChart: {
    leadsLabel: "Captured Leads",
    conversionsLabel: "Qualified Leads",
    leadsPath: "M0 110 Q 50 90, 80 75 T 160 45 T 240 55 T 320 25 T 400 10",
    conversionsPath: "M0 120 Q 50 110, 80 95 T 160 70 T 240 80 T 320 50 T 400 25",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["google", "facebook", "linkedin"]
};

export default function LeadGenerationCampaignsPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Lead Generation"
      heroTitle="Lead Generation Campaigns for Business Growth"
      heroSubtitle="Plan and run lead generation campaigns across Google, Meta, landing pages and WhatsApp with tracking and follow-up systems."
      serviceName="Lead Generation Campaigns"
      services={services}
      whyChoose={[
        "Multi-channel lead generation across Google Ads, Meta Ads, and WhatsApp.",
        "High-converting landing page funnels designed for maximum lead capture.",
        "Automated CRM integration with follow-up sequences for lead nurturing.",
        "End-to-end tracking and attribution to measure campaign performance accurately.",
        "Continuous optimization for improving lead quality and reducing cost per lead.",
      ]}
      faqs={faqs}
      dashboard={leadGenDashboard}
    />
  );
}
