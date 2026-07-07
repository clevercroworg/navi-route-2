import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { question: "What are Meta Ads?", answer: "Meta Ads are paid advertisements on Facebook and Instagram. They help businesses reach targeted audiences based on demographics, interests, and behaviors." },
  { question: "How much budget do I need for Meta Ads?", answer: "The budget depends on your goals and industry. We work with budgets of all sizes and focus on maximizing lead quality within your budget." },
  { question: "Do you create the ad creatives?", answer: "Yes. We handle ad creative design, copywriting, and video production as part of our Meta Ads management service." },
  { question: "How do you track leads from Meta Ads?", answer: "We set up Meta Pixel, conversion API, and lead tracking to measure form submissions, calls, and other conversion events accurately." },
];

const services = [
  { icon: "megaphone", title: "Facebook Ads", description: "Targeted Facebook ad campaigns for lead generation, brand awareness, and conversions." },
  { icon: "pencil", title: "Instagram Ads", description: "Visually engaging Instagram ads with stories, reels, and feed placements." },
  { icon: "target", title: "Lead Generation Ads", description: "Meta lead form ads and landing page campaigns optimized for quality enquiries." },
  { icon: "layout", title: "Creative Design", description: "Scroll-stopping ad creatives, carousels, videos, and copy designed for performance." },
  { icon: "monitor", title: "Pixel & Tracking Setup", description: "Meta Pixel, Conversion API, and event tracking for accurate campaign measurement." },
  { icon: "rocket", title: "Campaign Optimization", description: "A/B testing, audience refinement, and bid optimization for better cost per lead." },
];

export const metadata = {
  title: "Meta Ads Management Services | Navi Route",
  description: "Generate leads and enquiries through Facebook and Instagram ads with strong creatives, targeting, testing and campaign optimization.",
  keywords: "Meta Ads management services, Facebook Ads agency, Instagram Ads management, social media advertising, Meta lead generation",
};

const metaAdsDashboard = {
  leadsGenerated: {
    label: "Leads Generated",
    value: "3,120",
    change: "↑ 32.4%",
    isIncrease: true
  },
  conversions: {
    label: "Meta Conversions",
    value: "5.43K",
    change: "↑ 38.6%",
    isIncrease: true
  },
  revenue: {
    label: "Ad Spend",
    value: "₹3.8L",
    change: "↑ 20.1%",
    isIncrease: true
  },
  costPerLead: {
    label: "Cost per Lead",
    value: "₹122",
    change: "↓ 22.4%",
    isIncrease: false
  },
  lineChart: {
    leadsLabel: "Impressions",
    conversionsLabel: "Conversions",
    leadsPath: "M0 110 Q 50 90, 80 80 T 160 40 T 240 60 T 320 30 T 400 15",
    conversionsPath: "M0 120 Q 50 115, 80 100 T 160 80 T 240 90 T 320 60 T 400 35",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["facebook", "instagram"]
};

export default function MetaAdsManagementServicesPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Meta Ads Management"
      heroTitle="Meta Ads Management Services for Lead Generation"
      heroSubtitle="Generate leads and enquiries through Facebook and Instagram ads with strong creatives, targeting, testing and campaign optimization."
      serviceName="Meta Ads Management"
      services={services}
      whyChoose={[
        "Performance-focused campaigns designed to generate quality leads from Facebook and Instagram.",
        "Professional ad creatives and copy that stop the scroll and drive action.",
        "Advanced audience targeting based on demographics, interests, and behavior data.",
        "Complete Meta Pixel and Conversion API setup for accurate lead tracking.",
        "Continuous A/B testing and optimization for improving cost per lead over time.",
      ]}
      faqs={faqs}
      dashboard={metaAdsDashboard}
    />
  );
}
