import AiAutomationServiceLayout from "@/components/AiAutomationServiceLayout";

const faqs = [
  { question: "What can an AI chatbot do for my business?", answer: "An AI chatbot can answer common customer questions, capture leads, qualify enquiries, provide instant support, and reduce manual follow-up work." },
  { question: "Can the chatbot work on WhatsApp?", answer: "Yes. We build AI chatbots that work on your website, WhatsApp Business, and other messaging platforms." },
  { question: "Does it replace human support?", answer: "No. AI chatbots handle routine queries and capture leads, while complex issues are escalated to your human support team." },
  { question: "How quickly can an AI chatbot be set up?", answer: "A basic AI chatbot can be set up in 1–2 weeks. More complex chatbots with custom integrations may take 3–4 weeks." },
];

const services = [
  { icon: "cpu", title: "Website Chatbots", description: "AI chatbots for your website that answer questions, capture leads, and guide visitors." },
  { icon: "smartphone", title: "WhatsApp Chatbots", description: "Automated WhatsApp chatbots for lead capture, customer support, and follow-ups." },
  { icon: "target", title: "Lead Qualification Bots", description: "AI-powered bots that qualify leads by asking the right questions before passing them to your team." },
  { icon: "headphones", title: "Customer Support Bots", description: "Automated support bots that handle FAQs, status queries, and common customer requests." },
  { icon: "database", title: "CRM-Integrated Chatbots", description: "Chatbots that sync with your CRM to log conversations, update lead status, and trigger workflows." },
  { icon: "rocket", title: "Multi-Channel Bots", description: "Deploy chatbots across website, WhatsApp, Instagram, and Facebook from a single platform." },
];

export const metadata = {
  title: "AI Chatbot Development Company | Navi Route",
  description: "Build AI chatbots for websites, WhatsApp and support workflows to answer queries, capture leads and reduce manual follow-up.",
  keywords: "AI chatbot development company, chatbot development, WhatsApp chatbot, AI customer support chatbot, lead capture chatbot",
};

const chatbotFlowchart = {
  title: "AI CHATBOT ENGAGEMENT FLOW",
  icon: "bot",
  steps: [
    {
      title: "Visitor Greeting",
      desc: "User visits website or sends a message to initiate chat.",
      icon: "user",
      colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20"
    },
    {
      title: "AI Intent Matching",
      desc: "AI instantly parses the query and matches intent.",
      icon: "cpu",
      colorClass: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      title: "Data Collection",
      desc: "AI collects user name, email, and enquiry details.",
      icon: "database",
      colorClass: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20"
    },
    {
      title: "Live Chat Handover",
      desc: "If needed, AI hands over to a human agent seamlessly.",
      icon: "checkcircle2",
      colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ]
};

export default function AiChatbotDevelopmentPage() {
  return (
    <AiAutomationServiceLayout
      eyebrow="AI Chatbot Development"
      heroTitle="AI Chatbot Development for Websites & Support"
      heroSubtitle="Build AI chatbots for websites, WhatsApp and support workflows to answer queries, capture leads and reduce manual follow-up."
      serviceName="AI Chatbot Development"
      services={services}
      whyChoose={[
        "AI chatbots trained on your business data for accurate, relevant responses.",
        "Multi-channel deployment across website, WhatsApp, and social media.",
        "Lead capture and qualification to ensure your sales team talks to the right people.",
        "Seamless CRM integration for automatic lead logging and workflow triggers.",
        "24/7 availability that never misses a customer query or business opportunity.",
      ]}
      faqs={faqs}
      flowchart={chatbotFlowchart}
    />
  );
}
