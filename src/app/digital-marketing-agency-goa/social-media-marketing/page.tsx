import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { 
    question: "What is the difference between social media management and social media marketing?", 
    answer: "Social media management focuses on organic content, branding, page aesthetics, and community engagement. Social media marketing focuses on paid advertising campaigns, targeted demographics, custom conversion funnels, and generating measurable leads/sales." 
  },
  { 
    question: "Which social media platforms do you run ads on?", 
    answer: "We run paid advertising campaigns on Instagram, Facebook, LinkedIn, YouTube, and WhatsApp, customized to where your ideal customers are most active and likely to convert." 
  },
  { 
    question: "Do you design the ad graphics and write the copy?", 
    answer: "Yes, we handle the complete creative process, including ad copywriting, visual design, short-form video production, Reels editing, and dynamic variations for A/B testing." 
  },
  { 
    question: "How do you track campaign success?", 
    answer: "We set up tracking pixels (like Meta Pixel and Conversions API) along with custom event tracking to monitor metrics like cost per lead, click-through rates, conversions, and Return on Ad Spend (ROAS)." 
  },
];

const services = [
  { icon: "target", title: "Targeted Paid Ads", description: "Demographic, interest, and behavioral targeting to reach high-value prospects on social networks." },
  { icon: "megaphone", title: "Campaign Strategy", description: "Designing full-funnel ad campaigns to move users from brand awareness to conversion." },
  { icon: "layout", title: "Ad Creative & Copy", description: "High-converting ad designs, copy, and vertical video templates designed to stop the scroll." },
  { icon: "search", title: "A/B Testing", description: "Continuous testing of headings, creatives, and audiences to lower cost-per-acquisition." },
  { icon: "database", title: "Pixel & API Tracking", description: "Meta Pixel, Conversions API, and custom event setups for accurate attribution and tracking." },
  { icon: "trendingup", title: "Retargeting Funnels", description: "Re-engage warm audiences, landing page drop-offs, and existing customers to maximize ROAS." },
];

export const metadata = {
  title: "Social Media Marketing Agency | Navi Route",
  description: "Drive sales, leads, and brand engagement with targeted social media advertising, creative testing, and funnel optimization on Instagram, Facebook, and LinkedIn.",
  keywords: "social media marketing agency, social media advertising, paid social ads, Instagram ads, Facebook ads agency, LinkedIn advertising",
};

const smmPaidDashboard = {
  leadsGenerated: {
    label: "Ad Conversions",
    value: "3,120",
    change: "↑ 41.2%",
    isIncrease: true
  },
  conversions: {
    label: "Click-Through Rate",
    value: "3.84%",
    change: "↑ 22.5%",
    isIncrease: true
  },
  revenue: {
    label: "Return on Ad Spend",
    value: "4.2x ROAS",
    change: "↑ 15.8%",
    isIncrease: true
  },
  costPerLead: {
    label: "Cost Per Action",
    value: "₹185",
    change: "↓ 20.4%",
    isIncrease: false
  },
  lineChart: {
    leadsLabel: "Ad Conversions",
    conversionsLabel: "Link Clicks",
    leadsPath: "M0 110 Q 50 90, 80 75 T 160 50 T 240 60 T 320 30 T 400 10",
    conversionsPath: "M0 120 Q 50 110, 80 95 T 160 80 T 240 90 T 320 55 T 400 25",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["instagram", "facebook", "linkedin", "youtube"]
};

export default function SocialMediaMarketingPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Social Media Marketing"
      heroTitle="Social Media Marketing that Drives Revenue"
      heroSubtitle="Scale your brand and generate qualified leads with full-funnel social media advertising, creative testing, and pixel tracking."
      serviceName="Social Media Marketing"
      services={services}
      whyChoose={[
        "ROAS-focused campaigns designed to deliver actual leads and revenue, not vanity metrics.",
        "High-converting ad copy and visual assets created by in-house design and copywriting teams.",
        "Precision targeting to put your brand in front of ready-to-buy audiences.",
        "Advanced pixel tracking and Conversions API integration to accurately measure performance.",
        "Regular transparent reports detailing cost-per-lead, conversion rates, and campaign insights."
      ]}
      faqs={faqs}
      dashboard={smmPaidDashboard}
    />
  );
}
