"use client";

import AppDevServiceLayout from "@/components/AppDevServiceLayout";

const faqs = [
  {
    question: "What is the difference between a website and a web app?",
    answer: "A website provides information, while a web app allows users to interact, manage data, and perform actions like submitting forms, tracking orders, or managing accounts.",
  },
  {
    question: "Can you build custom dashboards?",
    answer: "Yes. We build custom dashboards tailored to your business needs for tracking leads, sales, operations, and more.",
  },
  {
    question: "Do you develop SaaS platforms?",
    answer: "Yes. We build scalable SaaS applications for startups and businesses with subscription management and multi-tenant architecture.",
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes. We offer ongoing support, updates, security patches, and feature improvements.",
  },
];

const services = [
  {
    icon: "monitor",
    title: "Custom Web Applications",
    description: "Build web apps tailored to your business workflows for operations, sales, and customer management."
  },
  {
    icon: "database",
    title: "SaaS Platforms",
    description: "Scalable SaaS products with subscription management, user dashboards, and API integrations."
  },
  {
    icon: "target",
    title: "CRM Systems",
    description: "Custom CRM solutions to manage leads, sales pipelines, and customer relationships."
  },
  {
    icon: "layout",
    title: "Admin Panels",
    description: "Secure admin panels for managing users, content, orders, and business data."
  },
  {
    icon: "users",
    title: "Customer Portals",
    description: "Self-service portals for customers to manage accounts, view orders, and access support."
  },
  {
    icon: "code2",
    title: "API Integrations",
    description: "Connect your web app with third-party services, payment gateways, and business tools."
  }
];

export default function WebAppDevelopmentPage() {
  return (
    <AppDevServiceLayout
      eyebrow="Web App Development"
      heroTitle="Web App Development for Custom Platforms"
      heroSubtitle="Build custom web applications, dashboards, portals and internal tools that simplify operations and improve customer experience."
      serviceName="Web App Development"
      services={services}
      whyChoosePoints={[
        "Custom-built web apps designed specifically for your business workflows and processes.",
        "Scalable architecture that handles growth without performance degradation.",
        "Secure development with proper authentication, authorization, and data protection.",
        "Modern React/Next.js frontend with clean, responsive UI/UX design.",
        "Ongoing support, maintenance, and feature development after launch."
      ]}
      faqs={faqs}
    />
  );
}
