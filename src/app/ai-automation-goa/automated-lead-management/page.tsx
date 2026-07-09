import AiAutomationServiceLayout from "@/components/AiAutomationServiceLayout";

const faqs = [
  { question: "What is lead management automation?", answer: "Lead management automation captures, assigns, tracks, and follows up with leads automatically using CRM workflows, WhatsApp alerts, and email sequences." },
  { question: "Can it integrate with my existing CRM?", answer: "Yes. We integrate lead automation with popular CRMs as well as custom-built CRM systems." },
  { question: "Will it work with my Google Ads and Meta Ads leads?", answer: "Yes. We set up automatic lead capture from Google Ads, Meta Ads, website forms, and WhatsApp into your automation system." },
  { question: "How does lead assignment work?", answer: "Leads are automatically assigned to team members based on rules like location, service type, lead source, or round-robin distribution." },
];

const services = [
  { icon: "target", title: "Lead Capture Automation", description: "Automatically capture leads from ads, forms, WhatsApp, and website into your CRM." },
  { icon: "users", title: "Lead Assignment", description: "Auto-assign leads to team members based on custom rules and round-robin distribution." },
  { icon: "rocket", title: "Follow-Up Sequences", description: "Automated follow-up sequences via WhatsApp, email, and SMS to nurture leads." },
  { icon: "database", title: "Pipeline Tracking", description: "Visual lead pipeline with stage tracking, status updates, and conversion analytics." },
  { icon: "smartphone", title: "WhatsApp Alerts", description: "Instant WhatsApp notifications for new leads, status changes, and follow-up reminders." },
  { icon: "monitor", title: "Lead Analytics", description: "Track lead sources, conversion rates, response times, and team performance." },
];

export const metadata = {
  title: "Lead Management Automation Services | Navi Route",
  description: "Capture, assign, track and follow up with leads automatically using CRM workflows, WhatsApp alerts and sales pipeline automation.",
  keywords: "lead management automation, lead capture automation, automated lead follow-up, sales pipeline automation, CRM lead management",
};

const leadFlowchart = {
  title: "LEAD CAPTURE & PIPELINE FLOW",
  icon: "target",
  steps: [
    {
      title: "Multi-Source Capture",
      desc: "Leads captured from Facebook Ads, web forms, & WhatsApp.",
      icon: "users",
      colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20"
    },
    {
      title: "Instant Lead Scoring",
      desc: "AI scores and categorizes leads by purchase intent.",
      icon: "target",
      colorClass: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20"
    },
    {
      title: "Auto Team Assignment",
      desc: "Smart rules assign leads to sales reps instantly.",
      icon: "network",
      colorClass: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Instant WhatsApp Alert",
      desc: "Assigned rep receives WhatsApp alert with lead info.",
      icon: "smartphone",
      colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ]
};

export default function LeadManagementAutomationPage() {
  return (
    <AiAutomationServiceLayout
      eyebrow="Lead Management Automation"
      heroTitle="Lead Management Automation Solutions"
      heroSubtitle="Capture, assign, track and follow up with leads automatically using CRM workflows, WhatsApp alerts and sales pipeline automation."
      serviceName="Lead Management Automation"
      services={services}
      whyChoose={[
        "Automatic lead capture from all channels — ads, forms, WhatsApp, and website.",
        "Smart lead assignment rules that route leads to the right team member instantly.",
        "Automated follow-up sequences that nurture leads without manual effort.",
        "Visual pipeline tracking with real-time status updates and conversion data.",
        "WhatsApp and email alerts that ensure no lead is ever missed or forgotten.",
      ]}
      faqs={faqs}
      flowchart={leadFlowchart}
    />
  );
}
