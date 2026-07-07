import AiAutomationServiceLayout from "@/components/AiAutomationServiceLayout";

const faqs = [
  { question: "What is CRM automation?", answer: "CRM automation uses workflows to automatically update lead stages, send reminders, assign tasks, generate reports, and manage sales pipeline activities." },
  { question: "Which CRMs do you work with?", answer: "We work with custom-built CRMs as well as popular platforms. We can also build a custom CRM specifically for your business." },
  { question: "Can CRM automation reduce manual work?", answer: "Yes. CRM automation eliminates repetitive tasks like data entry, status updates, and follow-up scheduling, saving hours of manual work daily." },
  { question: "How long does CRM automation setup take?", answer: "Basic CRM automation can be set up in 1–2 weeks. Complex multi-channel workflows may take 3–4 weeks." },
];

const services = [
  { icon: "database", title: "Pipeline Automation", description: "Automatically move leads through sales stages based on actions, time, and engagement." },
  { icon: "target", title: "Task Assignment", description: "Auto-assign tasks, follow-ups, and reminders to team members based on lead activity." },
  { icon: "monitor", title: "Automated Reporting", description: "Generate daily, weekly, and monthly reports automatically with key sales metrics." },
  { icon: "smartphone", title: "Notification Workflows", description: "WhatsApp, email, and in-app notifications for lead updates, deadlines, and activities." },
  { icon: "users", title: "Team Performance Tracking", description: "Track team activity, response times, and conversion rates with automated dashboards." },
  { icon: "rocket", title: "Multi-Channel Sync", description: "Sync CRM data with ads, forms, WhatsApp, email, and other lead sources automatically." },
];

export const metadata = {
  title: "CRM Automation Services | Navi Route",
  description: "Automate CRM updates, lead stages, reminders, task assignments and reporting so your sales team never misses a follow-up.",
  keywords: "CRM automation services, CRM workflow automation, sales CRM automation, automated CRM, CRM task automation",
};

const crmFlowchart = {
  title: "CRM WORKFLOW AUTOMATION",
  icon: "database",
  steps: [
    {
      title: "New Lead Logged",
      desc: "Lead gets automatically created in the CRM database.",
      icon: "database",
      colorClass: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Stage Auto-Promotion",
      desc: "Pipeline stage updates automatically based on activity.",
      icon: "trendingup",
      colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20"
    },
    {
      title: "Task Assignment",
      desc: "Follow-up tasks and calendar events assigned to reps.",
      icon: "calendar",
      colorClass: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      title: "Auto Document Send",
      desc: "Sends brochures or proposals automatically to the lead.",
      icon: "rocket",
      colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ]
};

export default function CrmAutomationServicesPage() {
  return (
    <AiAutomationServiceLayout
      eyebrow="CRM Automation"
      heroTitle="CRM Automation Services for Sales Teams"
      heroSubtitle="Automate CRM updates, lead stages, reminders, task assignments and reporting so your sales team never misses a follow-up."
      serviceName="CRM Automation"
      services={services}
      whyChoose={[
        "Automated pipeline management that moves leads through stages without manual updates.",
        "Smart task assignment and follow-up reminders to keep your sales team on track.",
        "Automated reporting with daily and weekly summaries of key sales metrics.",
        "Multi-channel sync that connects your CRM with ads, forms, and WhatsApp.",
        "Team performance tracking with response time and conversion rate dashboards.",
      ]}
      faqs={faqs}
      flowchart={crmFlowchart}
    />
  );
}
