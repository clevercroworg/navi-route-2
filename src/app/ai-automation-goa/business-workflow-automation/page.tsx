import AiAutomationServiceLayout from "@/components/AiAutomationServiceLayout";

const faqs = [
  { question: "What is workflow automation?", answer: "Workflow automation uses technology to automate repetitive business processes like approvals, notifications, lead routing, reporting, and daily operations." },
  { question: "Which business processes can be automated?", answer: "Common processes include lead assignment, approval workflows, invoice generation, report scheduling, task routing, and customer notifications." },
  { question: "Do I need coding skills?", answer: "No. We build the automation for you and create simple interfaces that your team can use without technical knowledge." },
  { question: "Can it integrate with my existing tools?", answer: "Yes. We integrate workflow automation with your CRM, email, WhatsApp, project management tools, and other business software." },
];

const services = [
  { icon: "wrench", title: "Process Automation", description: "Automate repetitive business processes like approvals, routing, and notifications." },
  { icon: "target", title: "Lead Routing", description: "Automatically route leads to the right team members based on custom business rules." },
  { icon: "monitor", title: "Report Automation", description: "Schedule and generate business reports automatically with real-time data." },
  { icon: "smartphone", title: "Notification Workflows", description: "Automated alerts via email, WhatsApp, and SMS for important business events." },
  { icon: "database", title: "Data Sync & Integration", description: "Sync data across multiple platforms and tools for unified business operations." },
  { icon: "shield", title: "Approval Workflows", description: "Digital approval chains for documents, expenses, leave requests, and business decisions." },
];

export const metadata = {
  title: "Workflow Automation Services | Navi Route",
  description: "Reduce repetitive work by automating approvals, lead routing, notifications, reports and daily business processes.",
  keywords: "workflow automation services, business process automation, automated workflows, process optimization, task automation",
};

const workflowFlowchart = {
  title: "OPERATIONAL WORKFLOW FLOW",
  icon: "workflow",
  steps: [
    {
      title: "Process Triggered",
      desc: "Employee submits request or system event occurs.",
      icon: "smartphone",
      colorClass: "bg-[#1D3D9E]/10 text-[#1D3D9E] border-[#1D3D9E]/20"
    },
    {
      title: "Smart Approval Routing",
      desc: "Approval request routed to manager via Slack/WhatsApp.",
      icon: "network",
      colorClass: "bg-purple-500/10 text-purple-600 border-purple-500/20"
    },
    {
      title: "Automatic Notification",
      desc: "Team is notified of approval and task status.",
      icon: "shield",
      colorClass: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20"
    },
    {
      title: "Automated Completion",
      desc: "System executes action and updates reports.",
      icon: "checkcircle2",
      colorClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    }
  ]
};

export default function WorkflowAutomationServicesPage() {
  return (
    <AiAutomationServiceLayout
      eyebrow="Workflow Automation"
      heroTitle="Workflow Automation Services for Operations"
      heroSubtitle="Reduce repetitive work by automating approvals, lead routing, notifications, reports and daily business processes."
      serviceName="Workflow Automation"
      services={services}
      whyChoose={[
        "Eliminate repetitive manual tasks that waste your team's time every day.",
        "Smart routing and assignment rules that ensure work reaches the right people.",
        "Automated reporting that delivers insights without manual data collection.",
        "Multi-platform integration connecting all your business tools in one workflow.",
        "Scalable automation that grows with your team and business complexity.",
      ]}
      faqs={faqs}
      flowchart={workflowFlowchart}
    />
  );
}
