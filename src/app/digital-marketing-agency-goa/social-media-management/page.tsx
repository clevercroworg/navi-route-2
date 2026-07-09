import DigitalMarketingServiceLayout from "@/components/DigitalMarketingServiceLayout";

const faqs = [
  { question: "What does social media management include?", answer: "It includes content planning, post design, caption writing, publishing, community management, and monthly performance reporting." },
  { question: "Which platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, and Twitter/X accounts. We can also support YouTube and Pinterest based on your needs." },
  { question: "Do you create the content?", answer: "Yes. We handle content planning, graphic design, video production, caption writing, and hashtag research." },
  { question: "How often do you post?", answer: "Posting frequency depends on your plan and goals. Most businesses benefit from 3–5 posts per week across platforms." },
];

const services = [
  { icon: "pencil", title: "Content Planning", description: "Monthly content calendars with themes, topics, and post schedules aligned with your brand." },
  { icon: "layout", title: "Post Design", description: "Professional graphic design for feed posts, stories, carousels, and cover images." },
  { icon: "smartphone", title: "Reels & Video Content", description: "Short-form video content for Instagram Reels, Facebook, and YouTube Shorts." },
  { icon: "megaphone", title: "Community Management", description: "Engage with your audience through comments, DMs, and community interactions." },
  { icon: "target", title: "Hashtag Strategy", description: "Research and implementation of targeted hashtags to increase post reach and discovery." },
  { icon: "monitor", title: "Monthly Reporting", description: "Performance reports with engagement metrics, growth data, and content insights." },
];

export const metadata = {
  title: "Social Media Management Agency | Navi Route",
  description: "Build a consistent social media presence with content planning, post design, reels, captions, publishing and monthly reporting.",
  keywords: "social media management agency, social media marketing, Instagram management, Facebook management, content planning, social media services",
};

const smmDashboard = {
  leadsGenerated: {
    label: "Total Reach",
    value: "45.2K",
    change: "↑ 58.4%",
    isIncrease: true
  },
  conversions: {
    label: "Engagement Rate",
    value: "4.8%",
    change: "↑ 18.2%",
    isIncrease: true
  },
  revenue: {
    label: "Content Shares",
    value: "180+",
    change: "↑ 15.0%",
    isIncrease: true
  },
  costPerLead: {
    label: "Profile Visits",
    value: "8.6K",
    change: "↑ 32.1%",
    isIncrease: true
  },
  lineChart: {
    leadsLabel: "Organic Impressions",
    conversionsLabel: "Social Referrals",
    leadsPath: "M0 100 Q 50 85, 80 65 T 160 45 T 240 55 T 320 25 T 400 5",
    conversionsPath: "M0 115 Q 50 105, 80 90 T 160 75 T 240 85 T 320 50 T 400 20",
    dates: ["Apr 7", "Apr 14", "Apr 21", "Apr 28", "May 5"]
  },
  activePlatforms: ["instagram", "facebook", "linkedin", "youtube"]
};

export default function SocialMediaManagementServicesPage() {
  return (
    <DigitalMarketingServiceLayout
      eyebrow="Social Media Management"
      heroTitle="Social Media Management for Growing Brands"
      heroSubtitle="Build a consistent social media presence with content planning, post design, reels, captions, publishing and monthly reporting."
      serviceName="Social Media Management"
      services={services}
      whyChoose={[
        "Strategic content planning aligned with your brand voice and business goals.",
        "Professional graphic design and video content that elevates your brand presence.",
        "Consistent publishing schedule to maintain audience engagement and growth.",
        "Active community management to build relationships with your audience.",
        "Monthly performance reports with actionable insights for continuous improvement.",
      ]}
      faqs={faqs}
      dashboard={smmDashboard}
    />
  );
}
