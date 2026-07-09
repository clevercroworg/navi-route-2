import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { question: "What is performance marketing?", answer: "Performance marketing is a data-driven approach to digital advertising where every rupee spent is tracked and optimized for measurable results like leads and sales." },
  { question: "How is it different from regular advertising?", answer: "Performance marketing focuses on measurable outcomes (leads, sales, ROI) rather than just impressions or reach. Every campaign is optimized based on real data." },
  { question: "Which channels do you use?", answer: "We use Google Ads, Meta Ads (Facebook & Instagram), landing pages, and retargeting across display and social networks." },
  { question: "Do you provide regular reports?", answer: "Yes. We provide transparent reports with clear metrics on leads, cost per lead, conversion rates, and return on ad spend." },
];

const services = [
  { icon: "search", title: "Paid Search Campaigns", description: "Google Ads search campaigns optimized for high-intent traffic and lead conversion." },
  { icon: "megaphone", title: "Paid Social Campaigns", description: "Meta Ads campaigns on Facebook and Instagram for targeted lead generation." },
  { icon: "target", title: "Conversion Optimization", description: "A/B testing, landing page optimization, and funnel improvements for better ROI." },
  { icon: "monitor", title: "Retargeting Campaigns", description: "Re-engage website visitors and warm leads with targeted retargeting ads." },
  { icon: "layout", title: "Creative Testing", description: "Systematic ad creative testing to find the best-performing visuals and copy." },
  { icon: "database", title: "Attribution & Analytics", description: "Multi-touch attribution and analytics setup for accurate campaign measurement." },
];

export const metadata = {
  title: "Performance Marketing Agency | Navi Route",
  description: "Scale paid campaigns with data-led strategy, creative testing, conversion tracking and continuous optimization for better ROI.",
  keywords: "performance marketing agency, performance advertising, data-driven marketing, paid media optimization, ROI-focused marketing",
};

const performanceDashboard = {
  leadsGenerated: {
    label: "Leads Generated",
    value: "4,850",
    change: "↑ 44.6%",
    isIncrease: true
  },
  conversions: {
    label: "Sales / Signups",
    value: "7.2K",
    change: "↑ 49.8%",
    isIncrease: true
  },
  revenue: {
    label: "Client Revenue",
    value: "₹48.2L",
    change: "↑ 52.4%",
    isIncrease: true
  },
  costPerLead: {
    label: "Blended CPL",
    value: "₹160",
    change: "↓ 24.1%",
    isIncrease: false
  },
  lineChart: {
    leadsLabel: "Paid Leads",
    conversionsLabel: "Paid Sales",
    leadsPath: "M0 100 Q 50 85, 80 65 T 160 40 T 240 55 T 320 20 T 400 5",
    conversionsPath: "M0 115 Q 50 105, 80 90 T 160 70 T 240 80 T 320 45 T 400 20",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["google", "facebook", "linkedin", "youtube", "instagram"]
};

export default function PerformanceMarketingAgencyPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Performance Marketing"
      heroTitle="Performance Marketing Agency for Measurable Growth"
      heroSubtitle="Scale paid campaigns with data-led strategy, creative testing, conversion tracking and continuous optimization for better ROI."
      serviceName="Performance Marketing"
      services={services}
      whyChoose={[
        "Data-led strategy where every campaign decision is backed by performance data.",
        "Systematic creative testing to identify the best-performing ads and messaging.",
        "Full-funnel tracking with proper attribution for accurate ROI measurement.",
        "Continuous optimization for improving cost per lead and return on ad spend.",
        "Transparent reporting with clear, actionable insights delivered regularly.",
      ]}
      faqs={faqs}
      dashboard={performanceDashboard}
    />
  );
}
