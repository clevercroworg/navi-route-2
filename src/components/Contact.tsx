"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

const projectTypes = [
  "Website Development",
  "App Development",
  "AI Automation",
  "Digital Marketing",
  "Consulting",
];

const branches = [
  {
    id: "udupi",
    name: "Udupi",
    label: "India",
    address: "2nd Floor, Business Bay Centre, Udupi–Manipal Highway, Kunjibettu, Udupi, Karnataka 576102, India",
    phone: "+91 99863 89444",
    hours: "Monday - Saturday: 9:30 AM - 6:30 PM (IST)",
    comingSoon: false,
  },
  {
    id: "singapore",
    name: "Singapore",
    label: "Singapore",
    address: "7 Temasek Boulevard, #12-07, Suntec Tower 1, Singapore 038987",
    phone: "+65 6460 4000",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM (SGT)",
    comingSoon: false,
  },
  {
    id: "goa",
    name: "Goa",
    label: "Goa",
    address: "Details coming soon...",
    phone: "",
    hours: "",
    comingSoon: true,
  }
];

export default function Contact() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string>("Website Development");
  const [activeBranch, setActiveBranch] = useState("udupi");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          service: selectedType,
          source: "Nauti Route Contact Form",
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Our team has been notified and we will fix it shortly. Please try again or contact us directly via phone/WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-page" className="max-w-7xl mx-auto px-6 w-full relative">
      
      {/* 1. Header Intro Block */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
          GET IN TOUCH
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-[#1D3D9E] leading-tight">
          Let's Chart a New Course.
        </h1>
        <p className="text-[#0F2C59]/80 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
          Tell us where you want to go. We'll help you navigate the strategy, build the technology, and scale your brand to reach new horizons.
        </p>
      </div>

      {/* 2. Branch Office Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
        {branches.map((b) => {
          const isActive = activeBranch === b.id;
          return (
            <div
              key={b.id}
              onClick={() => !b.comingSoon && setActiveBranch(b.id)}
              className={`p-6 rounded-3xl border text-left transition-all duration-300 flex flex-col justify-between h-full w-full ${
                isActive
                  ? "bg-white border-[#FF6B00] shadow-md ring-2 ring-[#FF6B00]/10"
                  : b.comingSoon
                  ? "bg-[#1D3D9E]/2 border-[#1D3D9E]/5 opacity-65"
                  : "bg-[#1D3D9E]/5 border-[#1D3D9E]/10 hover:bg-[#1D3D9E]/8 hover:border-[#1D3D9E]/20 cursor-pointer"
              }`}
            >
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between border-b border-[#1D3D9E]/10 pb-3">
                  <h3 className="font-serif text-lg font-bold text-[#1D3D9E]">{b.name}</h3>
                  <span
                    className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                      b.comingSoon
                        ? "bg-[#FF6B00]/10 text-[#FF6B00]"
                        : "bg-[#1D3D9E]/10 text-[#1D3D9E]"
                    }`}
                  >
                    {b.comingSoon ? "Coming Soon" : b.label}
                  </span>
                </div>

                {b.comingSoon ? (
                  <div className="flex flex-col items-center justify-center py-4 text-center space-y-2">
                    <div className="w-9 h-9 rounded-full bg-[#FF6B00]/10 flex items-center justify-center text-[#FF6B00]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <p className="text-[11px] text-[#0F2C59]/60 px-4">
                      Address and contact details coming soon. Stay tuned!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {/* Office Location */}
                    <div className="flex gap-3 items-start">
                      <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1D3D9E] shadow-sm shrink-0 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 stroke-[2]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[8px] font-bold uppercase tracking-wider text-[#0F2C59]/50 leading-none">
                          Office Location
                        </p>
                        <p className="font-semibold text-xs text-[#1D3D9E] leading-relaxed">
                          {b.address}
                        </p>
                      </div>
                    </div>

                    {/* Direct Line */}
                    {b.phone && (
                      <div className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1D3D9E] shadow-sm shrink-0 mt-0.5">
                          <Phone className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[8px] font-bold uppercase tracking-wider text-[#0F2C59]/50 leading-none">
                            Direct Line
                          </p>
                          <a
                            href={`tel:${b.phone.replace(/[^+\d]/g, "")}`}
                            onClick={(e) => e.stopPropagation()}
                            className="font-semibold text-xs text-[#1D3D9E] hover:text-[#FF6B00] transition-colors leading-relaxed block"
                          >
                            {b.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Working Hours */}
                    {b.hours && (
                      <div className="flex gap-3 items-start">
                        <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-[#1D3D9E] shadow-sm shrink-0 mt-0.5">
                          <Clock className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                        <div className="space-y-0.5">
                          <p className="text-[8px] font-bold uppercase tracking-wider text-[#0F2C59]/50 leading-none">
                            Working Hours
                          </p>
                          <p className="font-semibold text-xs text-[#1D3D9E] leading-relaxed">
                            {b.hours}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {!b.comingSoon && (
                <div className="w-full mt-4 pt-3 border-t border-[#1D3D9E]/5 flex justify-end items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isActive ? "bg-[#FF6B00] animate-pulse" : "bg-[#1D3D9E]/30"
                    }`}
                  />
                  <span
                    className={`text-[9px] font-bold uppercase tracking-wider ${
                      isActive ? "text-[#FF6B00]" : "text-[#1D3D9E]/50"
                    }`}
                  >
                    {isActive ? "Active on Map" : "Show on Map"}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Main Form & Secondary Contact Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch relative z-10 w-full">
        {/* Left Side: Interactive Card Form */}
        <div className="lg:col-span-7 w-full order-1 lg:order-1">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#1D3D9E]/10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden w-full flex flex-col">
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#1D3D9E]/5 flex items-center justify-center text-[#FF6B00]">
                  <CheckCircle className="w-10 h-10 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#1D3D9E]">Message Received!</h3>
                <p className="text-sm text-[#0F2C59]/70 max-w-sm">
                  Thank you for reaching out. We have received your message and will chart our course back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#1D3D9E] hover:text-[#FF6B00] transition-colors border-b border-[#1D3D9E]/20 hover:border-[#FF6B00]/40 pb-1"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Project Type Selector Grid */}
                <div className="space-y-3">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]/50 block text-left">
                    What can we help you build?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSelectedType(type)}
                        className={`text-xs font-semibold px-3 py-3 rounded-xl transition-all duration-200 border text-center ${
                          selectedType === type
                            ? "bg-[#FF6B00] text-white border-transparent shadow-sm shadow-[#FF6B00]/10"
                            : "bg-[#1D3D9E]/5 text-[#1D3D9E] border-[#1D3D9E]/10 hover:bg-[#1D3D9E]/10"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Interactive Input Fields */}
                <div className="space-y-4">
                  
                  {/* Name field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]/50">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1D3D9E]/5 border border-[#1D3D9E]/10 rounded-xl px-4 py-3.5 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 placeholder-[#0F2C59]/30"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  {/* Email & Phone fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]/50">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-[#1D3D9E]/5 border border-[#1D3D9E]/10 rounded-xl px-4 py-3.5 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 placeholder-[#0F2C59]/30"
                        placeholder="e.g. john@company.com"
                      />
                    </div>

                    {/* Phone field */}
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]/50">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#1D3D9E]/5 border border-[#1D3D9E]/10 rounded-xl px-4 py-3.5 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 placeholder-[#0F2C59]/30"
                        placeholder="e.g. +91 99863 89444"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#0F2C59]/50">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#1D3D9E]/5 border border-[#1D3D9E]/10 rounded-xl px-4 py-3.5 text-sm sm:text-base text-[#0F2C59] focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition-all duration-200 placeholder-[#0F2C59]/30 resize-none"
                      placeholder="Describe what you want to build, target timeline, etc..."
                    />
                  </div>
                </div>

                {/* 3. Submit button */}
                <div className="pt-2 flex justify-start w-full">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center items-center gap-2 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}
            
          </div>
        </div>

        {/* Right Side: General Email & Phone Contact Details */}
        <div className="lg:col-span-5 flex flex-col justify-start space-y-4 order-2 lg:order-2">
          {/* Email Card */}
          <a 
            href="mailto:hello@naviroute.studio" 
            className="flex items-center gap-4 p-5 rounded-2xl border border-[#1D3D9E]/10 bg-[#1D3D9E]/5 hover:bg-[#1D3D9E]/10 hover:border-[#FF6B00]/30 transition-all duration-300 group text-left w-full"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F2C59]/50">Email Us</p>
              <p className="font-semibold text-xs sm:text-sm text-[#1D3D9E]">hello@naviroute.studio</p>
              <p className="text-[11px] text-[#0F2C59]/60">Typical response time: &lt; 24h</p>
            </div>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+919986389444" 
            className="flex items-center gap-4 p-5 rounded-2xl border border-[#1D3D9E]/10 bg-[#1D3D9E]/5 hover:bg-[#1D3D9E]/10 hover:border-[#FF6B00]/30 transition-all duration-300 group text-left w-full"
          >
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-[#1D3D9E] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-300 shadow-sm flex-shrink-0">
              <Phone className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#0F2C59]/50">Call Us</p>
              <p className="font-semibold text-xs sm:text-sm text-[#1D3D9E]">+91 99863 89444</p>
              <p className="text-[11px] text-[#0F2C59]/60">Mon - Sat, 9:30am - 6:30pm IST</p>
            </div>
          </a>
        </div>
      </div>

      {/* Dynamic Google Map & Illustration Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12 w-full">
        {/* Left Side: Large Floating Message Bottle */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-72 h-72 sm:w-[420px] sm:h-[420px] select-none pointer-events-none"
          >
            <Image
              src="/images/floating_message_bottle_v4.png"
              alt="Floating Message Bottle Sketch"
              fill
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Right Side: Map */}
        <div className="lg:col-span-7 w-full h-80 sm:h-[360px] rounded-3xl overflow-hidden border border-[#1D3D9E]/10 shadow-lg relative">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              activeBranch === "goa" ? "Goa, India" : branches.find((b) => b.id === activeBranch)?.address || ""
            )}&t=&z=${activeBranch === "goa" ? 11 : 15}&ie=UTF8&iwloc=&output=embed`}
            className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </section>
  );
}
