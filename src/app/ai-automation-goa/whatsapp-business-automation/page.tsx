import AiAutomationServiceLayout from "@/components/AiAutomationServiceLayout";

const faqs = [
  { question: "What is WhatsApp automation?", answer: "WhatsApp automation uses chatbots and workflows to automatically reply to messages, qualify leads, send reminders, and manage customer conversations on WhatsApp Business." },
  { question: "Is WhatsApp automation allowed by WhatsApp?", answer: "Yes. We use the official WhatsApp Business API which allows automated messaging, chatbots, and workflow automation within WhatsApp's policies." },
  { question: "Can it send automated follow-ups?", answer: "Yes. You can set up automated follow-up sequences based on customer responses, time delays, and lead status." },
  { question: "Does it work with my CRM?", answer: "Yes. WhatsApp automation can be integrated with your CRM to log conversations, update lead stages, and trigger follow-up workflows." },
];

const services = [
  { icon: "smartphone", title: "Auto-Reply Setup", description: "Instant automated replies for common questions, business hours, and initial enquiries." },
  { icon: "target", title: "Lead Qualification", description: "Automated lead qualification flows that ask the right questions before passing leads to your team." },
  { icon: "cpu", title: "AI-Powered Chat", description: "AI chatbots on WhatsApp that understand context and provide intelligent, relevant responses." },
  { icon: "calendar", title: "Appointment Reminders", description: "Automated booking confirmations, appointment reminders, and follow-up messages." },
  { icon: "database", title: "CRM Integration", description: "Sync WhatsApp conversations with your CRM for unified lead tracking and management." },
  { icon: "rocket", title: "Broadcast Campaigns", description: "Send targeted promotional messages, updates, and offers to segmented customer lists." },
];

export const metadata = {
  title: "WhatsApp Automation Services | Navi Route",
  description: "Automate WhatsApp replies, lead qualification, follow-ups, reminders and customer communication with practical business workflows.",
  keywords: "WhatsApp automation services, WhatsApp chatbot, WhatsApp Business automation, WhatsApp lead management, WhatsApp marketing",
};

const whatsappFlowchart = {
  title: "WHATSAPP CHAT AUTOMATION FLOW",
  icon: "smartphone",
  steps: [
    {
      title: "Customer Messages",
      desc: "Lead messages your business WhatsApp number.",
      icon: "messagecircle",
      colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    },
    {
      title: "Instant AI Qualification",
      desc: "AI qualifies lead and gathers requirement details.",
      icon: "cpu",
      colorClass: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      title: "Auto Calendar Booking",
      desc: "AI sends calendar links for booking an appointment.",
      icon: "calendar",
      colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20"
    },
    {
      title: "CRM Log & Notify",
      desc: "Details are synced to CRM and team gets notified.",
      icon: "database",
      colorClass: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20"
    }
  ]
};

export default function WhatsappAutomationServicesPage() {
  return (
    <AiAutomationServiceLayout
      eyebrow="WhatsApp Automation"
      heroTitle="WhatsApp Automation Services for Businesses"
      heroSubtitle="Automate WhatsApp replies, lead qualification, follow-ups, reminders and customer communication with practical business workflows."
      serviceName="WhatsApp Automation"
      services={services}
      whyChoose={[
        "Official WhatsApp Business API integration for reliable, policy-compliant automation.",
        "Instant automated replies that improve response time and customer satisfaction.",
        "Lead qualification flows that filter and prioritize high-quality enquiries.",
        "CRM integration for unified lead tracking across WhatsApp and your sales pipeline.",
        "Broadcast campaigns for targeted promotions, updates, and customer engagement.",
      ]}
      faqs={faqs}
      flowchart={whatsappFlowchart}
    />
  );
}
