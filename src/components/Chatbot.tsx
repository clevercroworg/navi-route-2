"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Anchor, X, Compass, HelpCircle } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
}

interface ChatOption {
  label: string;
  action: string;
  url?: string;
}

const ShellBottomSvg = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#F4EBE1] stroke-[#0F2C59]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Bottom flat shell hinge and lower contours */}
    <path d="M 50 85 C 20 80, 8 62, 8 42 C 8 36, 12 32, 22 36 C 35 40, 42 42, 50 42 C 58 42, 65 40, 78 36 C 88 32, 92 36, 92 42 C 92 62, 80 80, 50 85 Z" />
    {/* Inner detail ribs */}
    <path d="M 50 85 V 42" strokeWidth="1.5" opacity="0.4" />
    <path d="M 50 85 C 42 70, 32 55, 26 40" strokeWidth="1.5" opacity="0.4" />
    <path d="M 50 85 C 58 70, 68 55, 74 40" strokeWidth="1.5" opacity="0.4" />
    {/* Shading details */}
    <path d="M 45 80 L 48 83 M 43 78 L 46 81 M 55 80 L 52 83 M 57 78 L 54 81" strokeWidth="1.2" opacity="0.4" />
    <path d="M 12 45 C 16 55, 24 65, 35 72 M 88 45 C 84 55, 76 65, 65 72" strokeWidth="1" opacity="0.25" />
    {/* Nested pearl base shadow */}
    <circle cx="50" cy="56" r="6" fill="#000000" opacity="0.08" />
  </svg>
);

const ShellTopSvg = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#FDFBF8] stroke-[#0F2C59]" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    {/* Top shell dome with fan fluting */}
    <path d="M 50 85 C 18 78, 4 58, 4 35 C 4 18, 22 6, 50 6 C 78 6, 96 18, 96 35 C 96 58, 82 78, 50 85 Z" />
    {/* Fan fluting ribs */}
    <path d="M 50 85 V 6" strokeWidth="1.5" />
    <path d="M 50 85 C 42 62, 28 35, 22 15" strokeWidth="1.5" />
    <path d="M 50 85 C 58 62, 72 35, 78 15" strokeWidth="1.5" />
    <path d="M 50 85 C 32 68, 16 48, 10 30" strokeWidth="1.5" />
    <path d="M 50 85 C 68 68, 84 48, 90 30" strokeWidth="1.5" />
    {/* Ink Shading details */}
    <path d="M 47 50 L 49 52 M 46 40 L 48 42 M 45 30 L 47 32" strokeWidth="0.8" opacity="0.5" />
    <path d="M 53 50 L 51 52 M 54 40 L 52 42 M 55 30 L 53 32" strokeWidth="0.8" opacity="0.5" />
    <path d="M 33 60 L 35 62 M 30 50 L 32 52 M 27 40 L 29 42" strokeWidth="0.8" opacity="0.5" />
    <path d="M 18 55 L 20 57 M 15 45 L 17 47" strokeWidth="0.8" opacity="0.5" />
    <path d="M 67 60 L 65 62 M 70 50 L 68 52 M 73 40 L 71 42" strokeWidth="0.8" opacity="0.5" />
    <path d="M 82 55 L 80 57 M 85 45 L 83 47" strokeWidth="0.8" opacity="0.5" />
    {/* growth rings */}
    <path d="M 12 38 C 24 45, 76 45, 88 38" strokeWidth="1" opacity="0.3" />
    <path d="M 20 55 C 32 60, 68 60, 80 55" strokeWidth="1" opacity="0.25" />
    {/* Base clasp hinge details */}
    <path d="M 38 81 C 42 83, 58 83, 62 81" strokeWidth="2.5" />
  </svg>
);

const initialOptions: ChatOption[] = [
  { label: "Website Development", action: "web_dev" },
  { label: "App Development", action: "app_dev" },
  { label: "AI Automation", action: "ai_automation" },
  { label: "Digital Marketing", action: "digital_marketing" },
  { label: "Book a Call", action: "book_call" },
];

const optionResponses: Record<string, { text: string; options: ChatOption[] }> = {
  web_dev: {
    text: "For Website Development, we chart custom, high-converting platforms (Next.js, React, and e-commerce) tailored to hospitality, leisure, and growth-focused brands.\n\nWould you like to build a new business website, redesign an existing one, or manage your monthly maintenance?",
    options: [
      { label: "Book a Discovery Call", action: "book_call" },
      { label: "Chat on WhatsApp", action: "whatsapp" },
      { label: "Go Back to Port", action: "initial" }
    ]
  },
  app_dev: {
    text: "Our App Development crew specializes in engineering mobile apps, SaaS products, dashboards, and custom admin portals.\n\nAre you looking to scale an existing system or launch a new custom product?",
    options: [
      { label: "Book a Discovery Call", action: "book_call" },
      { label: "Chat on WhatsApp", action: "whatsapp" },
      { label: "Go Back to Port", action: "initial" }
    ]
  },
  ai_automation: {
    text: "With AI Automation, we implement intelligent chatbots, custom workflow automations, and WhatsApp booking funnels that eliminate manual follow-up work.\n\nReady to save 10+ hours a week?",
    options: [
      { label: "Book a Discovery Call", action: "book_call" },
      { label: "Chat on WhatsApp", action: "whatsapp" },
      { label: "Go Back to Port", action: "initial" }
    ]
  },
  digital_marketing: {
    text: "We run high-converting social media marketing, lead generation, and performance ads that directly drive bookings and sales.\n\nWant to scale your brand's traffic and conversions?",
    options: [
      { label: "Book a Discovery Call", action: "book_call" },
      { label: "Chat on WhatsApp", action: "whatsapp" },
      { label: "Go Back to Port", action: "initial" }
    ]
  },
  book_call: {
    text: "Excellent choice! Let's get a call scheduled. We'll chart your digital coordinates and find the smartest route for your brand.",
    options: [
      { label: "Chat on WhatsApp", action: "whatsapp" },
      { label: "Go Back to Port", action: "initial" }
    ]
  }
};

export default function Chatbot() {
  const pathname = usePathname();
  if (pathname && pathname.startsWith("/lp/goa-hotels")) {
    return null;
  }
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Ahoy there, traveler! I'm Captain Silas, the automated pilot of Navi Route. What digital waters are you looking to navigate today?",
    },
  ]);
  const [currentOptions, setCurrentOptions] = useState<ChatOption[]>(initialOptions);
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleOptionClick = (option: ChatOption) => {
    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: option.label }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      
      if (option.action === "whatsapp") {
        window.open("https://wa.me/919986389444", "_blank");
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Opening WhatsApp chat to link you with our crew! Let us know if you need to chart any other course.",
          },
        ]);
        setCurrentOptions(initialOptions);
      } else if (option.action === "initial") {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Welcome back to harbor. What else can I help you chart?",
          },
        ]);
        setCurrentOptions(initialOptions);
      } else {
        const response = optionResponses[option.action];
        if (response) {
          setMessages((prev) => [...prev, { sender: "bot", text: response.text }]);
          setCurrentOptions(response.options);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Apologies, it seems we hit rough seas. Let's return to the main options.",
            },
          ]);
          setCurrentOptions(initialOptions);
        }
      }
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* ── Chat Window ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] h-[500px] rounded-2xl border-2 border-dashed border-[#0F2C59]/30 bg-[#FDFBF8] shadow-2xl flex flex-col overflow-hidden mb-4 mr-1 text-left relative"
          >
            {/* Paper Grain Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.012] pointer-events-none z-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
              }}
            />

            {/* Faint Ship Wheel Watermark */}
            <svg
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 opacity-[0.025] pointer-events-none select-none z-0"
              viewBox="0 0 100 100"
              fill="none"
              stroke="#0F2C59"
              strokeWidth="2"
            >
              <circle cx="50" cy="50" r="30" />
              <circle cx="50" cy="50" r="8" />
              {/* Spokes */}
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * Math.PI) / 4;
                const x1 = 50 + 8 * Math.cos(angle);
                const y1 = 50 + 8 * Math.sin(angle);
                const x2 = 50 + 44 * Math.cos(angle);
                const y2 = 50 + 44 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
              })}
            </svg>

            {/* Header */}
            <div className="relative z-10 bg-[#0F2C59] text-[#FDFBF8] p-4 flex items-center justify-between border-b-2 border-dashed border-[#FF6B00]/20">
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#FF6B00]" />
                <div>
                  <h3 className="font-serif text-sm font-bold tracking-wide">Captain's Logbook</h3>
                  <span className="text-[9px] text-[#FDFBF8]/60 uppercase font-black tracking-widest leading-none">Automated Pilot</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#FDFBF8]/75 hover:text-[#FF6B00] transition-colors p-1 rounded-lg hover:bg-white/5"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs leading-relaxed font-serif ${
                      msg.sender === "user"
                        ? "bg-[#0F2C59] text-[#FDFBF8] rounded-br-none shadow-sm"
                        : "bg-[#F4EBE1] text-[#0F2C59] border border-[#0F2C59]/10 rounded-bl-none shadow-sm whitespace-pre-line"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#F4EBE1] text-[#0F2C59]/60 border border-[#0F2C59]/10 rounded-2xl rounded-bl-none px-4 py-3 text-[11px] font-medium flex items-center gap-1.5 shadow-sm italic">
                    <Compass className="w-3.5 h-3.5 animate-spin text-[#FF6B00]" />
                    Writing in logbook...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Actions Footer */}
            <div className="relative z-10 p-4 bg-[#F4EBE1]/40 border-t border-dashed border-[#0F2C59]/10 space-y-2">
              <span className="text-[9px] font-black uppercase text-[#0F2C59]/50 tracking-wider block">Select Navigation Route:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleOptionClick(opt)}
                    className="bg-[#FDFBF8] hover:bg-[#0F2C59] text-[#0F2C59] hover:text-[#FDFBF8] border border-[#0F2C59]/25 text-[11px] font-serif font-bold py-1.5 px-2.5 rounded-lg transition-all duration-200 shadow-sm"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Sea Shell Trigger Button ── */}
      <motion.div
        style={{ perspective: 1000 }}
        className="relative select-none"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-20 h-20 flex items-center justify-center cursor-pointer group focus:outline-none filter drop-shadow-[0_8px_16px_rgba(15,44,89,0.22)] hover:drop-shadow-[0_12px_20px_rgba(15,44,89,0.28)] transition-all duration-200 active:scale-95 select-none"
        >
          {/* Bottom Shell (Base) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ShellBottomSvg />
          </div>

          {/* Pulsing Pearl inside when open */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: 1
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  opacity: { duration: 0.25 }
                }}
                className="absolute w-3.5 h-3.5 rounded-full bg-white border border-[#FF6B00] shadow-[0_0_12px_rgba(255,107,0,0.7)] z-10 -translate-x-1/2 -translate-y-1/2"
                style={{ top: "56%", left: "50%" }}
              />
            )}
          </AnimatePresence>

          {/* Top Shell (Hinged Lid) */}
          <motion.div
            style={{ originX: 0.5, originY: 0.85 }}
            animate={{ 
              rotateX: isOpen ? -115 : 0,
              y: isOpen ? -6 : 0
            }}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <ShellTopSvg />
          </motion.div>
        </button>

        {/* Small floating hint badge when closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-1 -left-1 bg-[#FF6B00] text-white p-1 rounded-full border border-white shadow-md animate-bounce"
            >
              <HelpCircle className="w-3.5 h-3.5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    </div>
  );
}
