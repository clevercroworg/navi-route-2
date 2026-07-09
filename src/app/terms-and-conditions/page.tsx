import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Clock, Mail, Shield, CheckCircle, Scale } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Navi Route Studio",
  description: "Read the Terms and Conditions of service for Navi Route Studio.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#FF6B00]/10 selection:text-[#FF6B00] relative">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        {/* Hero Section */}
        <section className="bg-slate-50 border-y border-slate-100 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1D3D9E]/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#1D3D9E] border border-[#1D3D9E]/10">
              <FileText className="w-3.5 h-3.5" />
              <span>Agreement</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1D3D9E] leading-tight">
              Terms & Conditions
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
                Welcome to <strong>Navi Route Studio</strong>. These Terms and Conditions govern your use of our website, materials, and services. By accessing or using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please discontinue use immediately.
              </p>
            </div>

            <hr className="border-[#1D3D9E]/5" />

            {/* 1. Services Provided */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  1. Services Provided
                </h2>
              </div>
              <p>
                Navi Route Studio provides design, software development, AI automation, branding, and digital marketing consulting services. All projects, scope items, timelines, pricing, and project milestones are officially governed by individual signed proposals, Statements of Work (SOW), or Service Level Agreements (SLA) executed between us and the client.
              </p>
            </div>

            {/* 2. Intellectual Property Rights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  2. Intellectual Property Rights
                </h2>
              </div>
              <p>
                Unless stated otherwise in a custom agreement:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#0F2C59]/70">
                <li>All template styles, website layout blueprints, illustrations, logos, and custom code templates created for clients are copyrighted assets.</li>
                <li>Upon full and final payment of all project fees, ownership of custom deliverables (e.g. your custom codebase, design assets, and graphics) is fully transferred to the client.</li>
                <li>Navi Route Studio retains the right to display the completed designs and project case studies in our public portfolio for promotion and marketing.</li>
              </ul>
            </div>

            {/* 3. Payments & Refund Policies */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  3. Payments & Refund Policies
                </h2>
              </div>
              <p>
                Standard projects require an upfront milestone deposit before development initiation. Payment terms are detailed in the project quote/invoice. 
              </p>
              <p>
                All milestone payments are final and non-refundable. Project delays resulting from a lack of client reviews, responses, or necessary content access after 30 business days may lead to project suspension and restart fees.
              </p>
            </div>

            {/* 4. Limitation of Liability */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  4. Limitation of Liability
                </h2>
              </div>
              <p>
                Navi Route Studio, its directors, and employees will not be held liable for any indirect, incidental, special, or consequential damages (including loss of business profits, data corruption, web hosting outages, or search rankings) arising out of the use or inability to use the custom software, websites, or marketing campaigns delivered.
              </p>
            </div>

            {/* 5. Governing Law */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00] shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#1D3D9E]">
                  5. Governing Law
                </h2>
              </div>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or your project contracts shall be subject to the exclusive jurisdiction of the courts located in Udupi, Karnataka, India.
              </p>
            </div>

            {/* Contact Info Card */}
            <div className="space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#FF6B00] shadow-sm shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">
                  Have Questions?
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#0F2C59]/70">
                If you have any questions regarding these Terms & Conditions, please contact us:
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
