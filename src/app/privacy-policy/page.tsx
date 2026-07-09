import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Clock, Mail, ShieldCheck, Lock, Eye } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Navi Route Studio",
  description: "Learn about how Navi Route Studio collects, protects, and manages your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="bg-slate-50 border-y border-slate-100 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1D3D9E]/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#1D3D9E] border border-[#1D3D9E]/10">
              <Shield className="w-3.5 h-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1D3D9E] leading-tight">
              Privacy Policy
            </h1>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0F2C59]/50">
              <Clock className="w-3.5 h-3.5" />
              <span>Last updated: July 2026</span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
          <div className="space-y-12 text-[#0F2C59]/80 leading-relaxed text-sm sm:text-base">
            
            {/* Introduction */}
            <div className="space-y-4">
              <p>
                At <strong>Navi Route Studio</strong>, we are committed to protecting the privacy and security of your personal data. This Privacy Policy describes how we collect, use, and share information when you visit or make use of our website and services.
              </p>
              <p>
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with any terms of this policy, please do not access or use our website or services.
              </p>
            </div>

            <hr className="border-[#1D3D9E]/5" />

            {/* 1. Information We Collect */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  1. Information We Collect
                </h2>
              </div>
              <p>
                We collect personal information that you provide to us voluntarily, as well as automatic data collected via browser analytics:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#0F2C59]/70">
                <li>
                  <strong>Personal Identifiers:</strong> Name, email address, phone number, company name, and project requirements provided via contact forms.
                </li>
                <li>
                  <strong>Usage Data:</strong> IP address, geographical location, browser type, operating system, referral source, duration of visit, page views, and website navigation paths.
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies to store user sessions, track visitor preferences, and optimize site response speed.
                </li>
              </ul>
            </div>

            {/* 2. How We Use Your Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  2. How We Use Your Information
                </h2>
              </div>
              <p>
                We use the information we collect to maintain, protect, and deliver high-quality growth solutions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#0F2C59]/70">
                <li>To respond to your inquiries and offer matching project quotes.</li>
                <li>To personalize your experience and deliver optimized website performance.</li>
                <li>To analyze aggregated traffic patterns and improve website usability.</li>
                <li>To send periodic newsletters, updates, or marketing alerts (you can opt-out at any time).</li>
              </ul>
            </div>

            {/* 3. Data Storage & Security */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  3. Data Storage & Security
                </h2>
              </div>
              <p>
                We implement robust physical, technical, and administrative security measures to secure your personal identifiers. Your data is stored on secure servers with encrypted databases.
              </p>
              <p>
                However, please note that no method of transmission over the internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* 4. Sharing Your Data */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  4. Sharing Your Data
                </h2>
              </div>
              <p>
                We do not sell, trade, or rent your personal identification information to third parties. We may share information with trusted third-party service providers (such as hosting networks, email services, or CRM analytics) solely to help us operate our business and provide services to you.
              </p>
            </div>

            {/* 5. Contact Us */}
            <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF6B00] shadow-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">
                  Questions or Concerns?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0F2C59]/70">
                If you have any questions about this Privacy Policy or how your personal identifiers are handled, please contact us at:
              </p>
              <div className="mt-3 text-xs sm:text-sm font-semibold text-[#1D3D9E]">
                <p>Email: <a href="mailto:hello@naviroute.studio" className="text-[#FF6B00] hover:underline">hello@naviroute.studio</a></p>
                <p>Phone: +91 99863 89444</p>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
