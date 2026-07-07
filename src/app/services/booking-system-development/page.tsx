"use client";

import AppDevServiceLayout from "@/components/AppDevServiceLayout";

const faqs = [
  {
    question: "What industries need booking systems?",
    answer: "Hotels, resorts, clinics, salons, event venues, coworking spaces, and any service business that manages appointments or reservations.",
  },
  {
    question: "Can the booking system accept payments?",
    answer: "Yes. We integrate payment gateways like Razorpay and Stripe for online booking payments and deposits.",
  },
  {
    question: "Will it send automatic confirmations?",
    answer: "Yes. The system can send automated booking confirmations, reminders, and follow-ups via email and WhatsApp.",
  },
  {
    question: "Can I manage bookings from a dashboard?",
    answer: "Yes. We build a custom admin dashboard where you can view, manage, and update all bookings in one place.",
  },
];

const services = [
  {
    icon: "calendar",
    title: "Appointment Booking",
    description: "Online appointment scheduling with calendar views, time slots, and automatic confirmations."
  },
  {
    icon: "home",
    title: "Hotel & Resort Booking",
    description: "Room booking systems with availability calendars, pricing rules, and guest management."
  },
  {
    icon: "monitor",
    title: "Event Booking",
    description: "Event registration and ticketing systems with capacity management and payment processing."
  },
  {
    icon: "target",
    title: "Payment Integration",
    description: "Secure online payment processing with Razorpay, Stripe, and other payment gateways."
  },
  {
    icon: "smartphone",
    title: "Automated Notifications",
    description: "Automatic booking confirmations, reminders, and follow-ups via email and WhatsApp."
  },
  {
    icon: "database",
    title: "Admin Dashboard",
    description: "Centralized dashboard to manage all bookings, availability, pricing, and customer data."
  }
];

export default function BookingSystemDevelopmentPage() {
  return (
    <AppDevServiceLayout
      eyebrow="Booking System Development"
      heroTitle="Booking System Development for Service Businesses"
      heroSubtitle="Create custom booking systems for hotels, resorts, clinics, events and service businesses with enquiry and payment tracking."
      serviceName="Booking System Development"
      services={services}
      whyChoosePoints={[
        "Custom booking flows designed specifically for your service type and business model.",
        "Real-time availability management with calendar views and automated scheduling.",
        "Secure payment integration for online booking deposits and full payments.",
        "Automated confirmations and reminders via email and WhatsApp.",
        "Admin dashboard for centralized booking management and customer data."
      ]}
      faqs={faqs}
    />
  );
}
