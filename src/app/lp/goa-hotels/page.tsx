"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Search, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Check, 
  Star, 
  Compass,
  ArrowRight,
  Info,
  PhoneCall,
  Loader2
} from "lucide-react";
import { hotelsData, Hotel } from "./hotelsData";

// Gold/Orange diamond icon matching the website theme
function BrandDiamond() {
  return (
    <svg className="w-3.5 h-3.5 text-orange-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );
}

// WhatsApp icon helper
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.29 1.97 13.82 1.05 12.008 1.05c-5.442 0-9.87 4.372-9.874 9.802-.002 1.778.486 3.514 1.411 5.097l-.924 3.376 3.471-.912-.03-.009zm11.367-7.854c-.3-.15-1.77-.875-2.046-.975-.276-.102-.476-.15-.676.15-.2.3-.775.975-.95 1.174-.175.2-.35.226-.65.076-.3-.15-1.267-.467-2.413-1.485-.892-.793-1.493-1.773-1.668-2.073-.175-.3-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.676-1.624-.925-2.225-.244-.589-.493-.51-.676-.519-.174-.009-.374-.01-.574-.01-.2 0-.526.075-.801.374-.275.3-1.05 1.024-1.05 2.5 0 1.475 1.075 2.9 1.225 3.1.15.2 2.11 3.224 5.116 4.524.715.31 1.273.496 1.71.635.717.227 1.37.195 1.885.118.574-.086 1.77-.724 2.02-1.385.25-.66.25-1.225.175-1.385-.075-.16-.275-.26-.575-.41z" />
    </svg>
  );
}

// Helper to determine score and text
const getHotelRating = (hotel: Hotel) => {
  if (hotel.brand === "Taj (IHCL)" || hotel.brand === "Brij Hotels" || hotel.type === "Private Villa") {
    return { score: "4.9", text: "VVIP Choice" };
  }
  if (hotel.brand === "SeleQtions") {
    return { score: "4.8", text: "Premier Boutique" };
  }
  if (hotel.brand === "Ginger") {
    return { score: "4.5", text: "Lean Luxe Favourite" };
  }
  return { score: "4.6", text: "Highly Rated" };
};

// Redesigned Hotel Card Component (Fully themed, with compass watermark and hand-drawn styling)
function HotelCard({ 
  hotel, 
  onBook 
}: { 
  hotel: Hotel; 
  onBook: (hotel: Hotel) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0
    }).format(price);
  };

  const rating = getHotelRating(hotel);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="watercolor-card rounded-2xl overflow-hidden border border-[#1D3D9E]/10 hover:border-orange-brand/30 hover:shadow-[0_16px_40px_rgba(15,44,89,0.08)] hover:-translate-y-0.5 transition-all duration-500 relative min-h-[360px]"
    >
      
      {/* Subtle Compass Rose watermark inside card background */}
      <div className="absolute right-4 bottom-4 w-48 h-48 opacity-[0.012] pointer-events-none select-none -z-10 rotate-12">
        <Image
          src="/images/stat_compass_rose.png"
          alt="Watermark Compass"
          fill
          className="object-contain"
        />
      </div>

      <AnimatePresence mode="wait">
        {!showSummary ? (
          <motion.div
            key="overview"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 w-full h-full"
          >
            {/* Left Gallery / Image Slider */}
            <div className="col-span-12 lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-slate-100 overflow-hidden">
              <Image
                src={hotel.images[currentImageIndex]}
                alt={hotel.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              
              {/* Brand Theme Styled Badge */}
              <div className="absolute top-4 left-4 z-10 bg-navy-900/90 text-white text-[9px] uppercase font-bold tracking-widest px-3.5 py-1.5 rounded-full shadow-xs border border-white/10">
                {hotel.type}
              </div>

              {/* Gallery Controls (Always visible, styled in brand style) */}
              {hotel.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-900/60 hover:bg-orange-brand text-white flex items-center justify-center transition-all z-10 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy-900/60 hover:bg-orange-brand text-white flex items-center justify-center transition-all z-10 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-navy-900/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
                    {hotel.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
                        className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                          idx === currentImageIndex ? "bg-orange-brand scale-125" : "bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right Content Details */}
            <div className="col-span-12 lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between z-10">
              <div>
                {/* Header row: Tag and Rating Badge */}
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <span className="font-script text-2xl text-orange-brand">
                    {hotel.tag}
                  </span>
                  <div className="flex items-center gap-1 bg-orange-brand/10 text-orange-brand text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-orange-brand/20">
                    <Star className="w-2.5 h-2.5 fill-orange-brand shrink-0" />
                    <span>{rating.score} • {rating.text}</span>
                  </div>
                </div>

                {/* Title and Pricing */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl lg:text-2xl font-bold text-navy-800 tracking-wide uppercase leading-tight group-hover:text-[#FF6B00] transition-colors duration-300">
                      {hotel.name}
                    </h3>
                    <div className="flex items-start gap-1.5 text-xs text-navy-800/60 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-brand shrink-0 mt-0.5" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                  
                  {/* Price section */}
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-[9px] text-navy-800/45 font-bold uppercase tracking-wider block">
                      Starting Rate/Night
                    </span>
                    <span className="text-xl sm:text-2xl lg:text-3xl font-serif font-black text-navy-800 block mt-0.5">
                      ₹ {formatPrice(hotel.startingRate)}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-navy-800/70 leading-relaxed mt-4 mb-4">
                  {hotel.description}
                </p>

                {/* Contact Details */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-800/80 mb-6 bg-sand-100/55 p-3.5 rounded-xl border border-[#1D3D9E]/5">
                  <a href={`tel:${hotel.phone}`} className="flex items-center gap-2 hover:text-orange-brand transition-colors">
                    <Phone className="w-3.5 h-3.5 text-orange-brand" />
                    <span>{hotel.phone}</span>
                  </a>
                  <a href={`mailto:${hotel.email}`} className="flex items-center gap-2 hover:text-orange-brand transition-colors">
                    <Mail className="w-3.5 h-3.5 text-orange-brand" />
                    <span>{hotel.email}</span>
                  </a>
                </div>

                {/* Highlights grid */}
                <div className="border-t border-[#1D3D9E]/10 pt-4 mb-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                    {hotel.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-navy-800/85">
                        <BrandDiamond />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1D3D9E]/10 mt-auto">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSummary(true);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00] tracking-wider uppercase group/link cursor-pointer"
                >
                  <span>{hotel.type === "Private Villa" ? "View Villa Details" : "View Hotel Details"}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onBook(hotel)}
                  className="bg-orange-brand hover:bg-[#E05E00] text-white text-xs lg:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="summary"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 w-full h-full"
          >
            {/* Left Side: Stay Summary details (text details) */}
            <div className="col-span-12 lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between z-10 w-full text-left order-2 lg:order-1">
              <div>
                {/* Top bar with Breadcrumbs & Share */}
                <div className="flex justify-between items-center w-full mb-4 gap-4 flex-wrap">
                  <span className="text-[9px] text-navy-800/40 tracking-wider uppercase font-bold">
                    Home / Hotels / {hotel.name.replace(", Goa", "")}
                  </span>
                  <span 
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: hotel.name,
                          text: hotel.description,
                          url: window.location.href
                        }).catch(err => console.log(err));
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                    className="text-[9px] text-navy-800/50 hover:text-[#FF6B00] tracking-wider uppercase font-bold cursor-pointer flex items-center gap-1 transition-colors"
                  >
                    SHARE
                  </span>
                </div>

                {/* Tagline / Type prefixed with dash */}
                <span className="font-serif text-lg sm:text-xl lg:text-2xl font-medium text-navy-800 tracking-wide uppercase block mb-4 leading-tight">
                  &mdash; {hotel.tag.toUpperCase()}
                </span>

                {/* Description */}
                <p className="text-sm text-navy-800/75 leading-relaxed font-sans">
                  {hotel.description}
                </p>
                
                {/* Detailed Metadata Box */}
                <div className="mt-4 border-t border-[#1D3D9E]/10 pt-4 space-y-3">
                  <p className="text-xs text-navy-800/70 leading-relaxed">
                    Overlooking the prime beachfront stretch of <strong className="text-navy-900">{hotel.subRegion}</strong> in {hotel.region}, Goa.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {hotel.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-navy-800/80">
                        <span className="text-orange-brand">♦</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[#1D3D9E]/10 mt-6 sm:mt-8">
                <div>
                  <span className="text-[9px] text-navy-800/45 font-bold uppercase tracking-wider block">
                    Starting Rate/Night
                  </span>
                  <span className="text-xl sm:text-2xl font-serif font-black text-navy-800 block mt-0.5">
                    ₹ {formatPrice(hotel.startingRate)}
                  </span>
                </div>

                <div className="flex gap-3">
                  <button 
                    onClick={() => setShowSummary(false)}
                    className="border border-[#1D3D9E]/25 hover:border-[#1D3D9E]/50 text-navy-800 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all cursor-pointer bg-white"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => onBook(hotel)}
                    className="bg-orange-brand hover:bg-[#E05E00] text-white text-xs lg:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Large landscape image of the hotel (order-1 on mobile, order-2 on desktop) */}
            <div className="col-span-12 lg:col-span-6 relative h-64 lg:h-auto min-h-[350px] bg-slate-50 overflow-hidden order-1 lg:order-2">
              <Image
                src={hotel.images[1] || hotel.images[0]}
                alt={`${hotel.name} view`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-102"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// Booking Enquiry Modal Component
function BookingModal({ 
  hotel, 
  isOpen, 
  onClose 
}: { 
  hotel: Hotel | null; 
  isOpen: boolean; 
  onClose: () => void 
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("2");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!isOpen) {
      setName("");
      setEmail("");
      setPhone("");
      setCheckIn("");
      setCheckOut("");
      setRooms("1");
      setGuests("2");
      setIsSuccess(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen || !hotel) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!phone.trim()) newErrors.phone = "Phone number is required";
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!checkIn) newErrors.checkIn = "Check-in date is required";
    if (!checkOut) newErrors.checkOut = "Check-out date is required";
    
    if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
      newErrors.checkOut = "Check-out must be after check-in";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Construct the WhatsApp URL with booking details
    const message = `Hi! I would like to book a stay at ${hotel.name}.

Here are my travel details:
- Check-in (Start Date): ${checkIn}
- Check-out (End Date): ${checkOut}
- Rooms: ${rooms}
- Guests: ${guests}

My Contact Details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Please let me know about availability and exclusive partner rates. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919986389444?text=${encodedMessage}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, "_blank");

      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#FF6B00", "#1B4965", "#0F2C59", "#ffffff"]
        });
      } catch (err) {
        console.error("Confetti failed to fire", err);
      }
    }, 1000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A1E3B]/75 backdrop-blur-xs"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative bg-[#FDFBF8] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#1D3D9E]/10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-navy-800 transition-colors z-20 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200/50"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Left Panel: Selected Hotel Overview */}
          <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-navy-800 to-navy-950 text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 opacity-[0.03] select-none pointer-events-none">
              <Compass className="w-full h-full text-white" />
            </div>

            <div className="relative z-10 space-y-6">
              <span className="text-orange-brand uppercase text-[10px] font-bold tracking-widest block">
                Selected Destination
              </span>
              <h4 className="font-serif text-2xl font-black uppercase tracking-wide leading-tight">
                {hotel.name}
              </h4>
              
              <div className="flex items-start gap-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-orange-brand shrink-0 mt-0.5" />
                <span>{hotel.location}</span>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Starting rate</span>
                <span className="text-2xl font-serif font-light text-white block mt-1">
                  ₹ {new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(hotel.startingRate)}
                </span>
                <span className="text-[10px] text-slate-400 italic block mt-0.5">*Subject to seasonality and room type selection</span>
              </div>

              <div className="border-t border-white/10 pt-4 space-y-2">
                {hotel.highlights.slice(0, 3).map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="text-orange-brand">♦</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 text-xs text-slate-400 space-y-2">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-orange-brand shrink-0 mt-0.5" />
                <p>
                  Promoted by <strong className="text-orange-brand">Navi Route</strong>. Bookings processed directly secure exclusive complimentary upgrades and airport transfers.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Form / Success state */}
          <div className="col-span-12 md:col-span-7 p-6 md:p-8 bg-white flex flex-col justify-center">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-navy-800">
                    Request Booking Enquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below. Confirming will redirect you to WhatsApp to complete your stay enquiry.
                  </p>
                </div>

                {/* Name */}
                <div className="space-y-1 text-left">
                  <label htmlFor="fullName" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className={`w-full text-sm border px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors ${
                      errors.name ? "border-red-500" : "border-slate-200"
                    }`}
                  />
                  {errors.name && <span className="text-[10px] text-red-500 block">{errors.name}</span>}
                </div>

                {/* Contact grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="phoneNumber" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      className={`w-full text-sm border px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors ${
                        errors.phone ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 block">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="emailAddr" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="emailAddr"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className={`w-full text-sm border px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors ${
                        errors.email ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Check In */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="checkInDate" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Check-In Date (Start)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkInDate"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className={`w-full text-sm border px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors bg-white ${
                          errors.checkIn ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.checkIn && <span className="text-[10px] text-red-500 block">{errors.checkIn}</span>}
                  </div>

                  {/* Check Out */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="checkOutDate" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Check-Out Date (End)
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="checkOutDate"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className={`w-full text-sm border px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors bg-white ${
                          errors.checkOut ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                    {errors.checkOut && <span className="text-[10px] text-red-500 block">{errors.checkOut}</span>}
                  </div>
                </div>

                {/* Rooms and Guest Count Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Rooms Count */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="roomsCount" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Number of Rooms
                    </label>
                    <select
                      id="roomsCount"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      className="w-full text-sm border border-slate-200 px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors bg-white"
                    >
                      <option value="1">1 Room</option>
                      <option value="2">2 Rooms</option>
                      <option value="3">3 Rooms</option>
                      <option value="4+">4+ Rooms (Requires multiple rooms)</option>
                    </select>
                  </div>

                  {/* Guest Count */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="guestCount" className="block text-xs font-bold text-navy-800 uppercase tracking-wider">
                      Number of Guests
                    </label>
                    <select
                      id="guestCount"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full text-sm border border-slate-200 px-3.5 py-2.5 rounded-xl outline-hidden focus:border-orange-brand transition-colors bg-white"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#0F2C59] hover:bg-[#1D3D9E] text-white font-bold text-xs uppercase tracking-widest py-4 transition-colors disabled:bg-slate-400 flex items-center justify-center gap-2 mt-6 rounded-xl shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 text-white" />
                      <span>Confirming...</span>
                    </>
                  ) : (
                    <span>Confirm</span>
                  )}
                </button>
              </form>
            ) : (
              // SUCCESS STATE
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-6"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 text-[#25D366] rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-black text-navy-800 uppercase tracking-wide">
                    Enquiry Registered
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-navy-800">{name}</strong>. Your enquiry details for <strong>{hotel.name}</strong> have been opened in WhatsApp.
                  </p>
                </div>

                <div className="bg-slate-50 p-4 border border-slate-100 rounded-xl text-left text-xs text-slate-600 space-y-2.5 max-w-md mx-auto">
                  <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                    <span className="font-bold text-navy-800">Check-in:</span>
                    <span>{checkIn}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                    <span className="font-bold text-navy-800">Check-out:</span>
                    <span>{checkOut}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/50 pb-1.5">
                    <span className="font-bold text-navy-800">Rooms:</span>
                    <span>{rooms} {rooms === "1" ? "Room" : "Rooms"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-navy-800">Guests:</span>
                    <span>{guests} {guests === "1" ? "Guest" : "Guests"}</span>
                  </div>
                </div>

                <div className="text-xs text-orange-brand bg-orange-brand/5 border border-orange-brand/10 rounded-xl p-4 max-w-md mx-auto flex items-start gap-3">
                  <Info className="w-5 h-5 shrink-0 mt-0.5 text-orange-brand" />
                  <p className="text-left leading-relaxed">
                    <strong>Exclusive Partner Benefit</strong>: If the WhatsApp tab did not open automatically, please click the button below to retry sending your travel details.
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    onClick={() => {
                      const message = `Hi! I would like to book a stay at ${hotel.name}.

Here are my travel details:
- Check-in (Start Date): ${checkIn}
- Check-out (End Date): ${checkOut}
- Rooms: ${rooms}
- Guests: ${guests}

My Contact Details:
- Name: ${name}
- Phone: ${phone}
- Email: ${email}

Please let me know about availability and exclusive partner rates. Thank you!`;
                      window.open(`https://wa.me/919986389444?text=${encodeURIComponent(message)}`, "_blank");
                    }}
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors rounded-xl shadow-sm flex items-center gap-1.5"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white" />
                    <span>Retry WhatsApp</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-navy-800 hover:bg-navy-900 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 transition-colors rounded-xl shadow-sm"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// Gallery modal removed - replaced with inline card transitions

// MAIN PAGE COMPONENT
export default function GoaHotelsLandingPage() {
  // Booking Modal States
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  // Pagination count state
  const [visibleCount, setVisibleCount] = useState(10);
  const [isPreloading, setIsPreloading] = useState(false);

  // Filtered Hotels list (no filters, display full list)
  const filteredHotels = hotelsData;

  // Displayed hotels sliced based on pagination visibleCount
  const displayedHotels = useMemo(() => {
    return filteredHotels.slice(0, visibleCount);
  }, [filteredHotels, visibleCount]);

  // Preload the next 10 hotels' images for smooth pagination transitions
  useEffect(() => {
    const nextSlice = filteredHotels.slice(visibleCount, visibleCount + 10);
    if (nextSlice.length === 0) return;

    setIsPreloading(true);
    let loadedCount = 0;
    const totalImages = nextSlice.reduce((sum, h) => sum + h.images.length, 0);

    if (totalImages === 0) {
      setIsPreloading(false);
      return;
    }

    nextSlice.forEach((hotel) => {
      hotel.images.forEach((imgUrl) => {
        const img = new window.Image();
        img.src = imgUrl;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsPreloading(false);
          }
        };
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setIsPreloading(false);
          }
        };
      });
    });
  }, [visibleCount, filteredHotels]);

  // Open booking modal
  const handleOpenBooking = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  // See More Handler
  const handleSeeMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div 
      className="flex flex-col min-h-screen bg-sand-100 select-none relative"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none"
      }}
    >
      
      {/* BRAND THEMED LANDING PAGE HEADER */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#1D3D9E]/8 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center select-none">
            <div className="relative w-[140px] h-[45px]">
              {/* Logo temporarily removed - waiting for client new logo */}
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919986389444"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-navy-800 hover:text-orange-brand transition-colors border-r border-[#1D3D9E]/10 pr-4"
            >
              <PhoneCall className="w-4 h-4 text-orange-brand" />
              <span>Call Desk: +91 99863 89444</span>
            </a>
            <a
              href="https://wa.me/919986389444?text=Hi%2C%20I'm%20interested%20in%20exclusive%20Goa%20hotel%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebd59] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        
        {/* 1. HERO SECTION - Coastal Themed with Custom Watercolor Illustration */}
        <section className="relative py-16 sm:py-24 overflow-hidden bg-[#FAF5EE] border-b border-[#1D3D9E]/5">
          
          {/* Sailboat waves sketch watermark absolute on left */}
          <div className="absolute left-[-40px] bottom-[-20px] w-96 h-96 opacity-20 select-none pointer-events-none z-0 rotate-12">
            <Image
              src="/images/sailboat_waves_sketch.png"
              alt="Nautical Sailboat Wave Sketch"
              fill
              className="object-contain"
            />
          </div>

          {/* Ship wheel sketch watermark absolute on right */}
          <div className="absolute right-[5%] top-[10%] w-72 h-72 opacity-[0.04] select-none pointer-events-none z-0 -rotate-12">
            <Image
              src="/images/ship_wheel_sketch.png"
              alt="Nautical Ship Wheel Sketch"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Typography Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#FF6B00] uppercase tracking-wider text-xs font-bold block">
                Direct Booking Promotion — Exclusive Partner Rates
              </span>
              
              <span className="font-script text-3xl text-orange-brand block mb-[-12px]">
                Curated Luxury Stays
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 leading-tight">
                GOA HOTELS <br />
                &amp; RESORTS
              </h1>
              
              <p className="text-navy-800/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Explore 38 handpicked beachfront retreats, colonial estates, and modern villas. Place an enquiry to secure direct agency pricing, complimentary breakfasts, and premium airport shuttles.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20I'd%20like%20to%20enquire%20about%20exclusive%20Goa%20hotel%20villas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-200"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>Enquire via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    const element = document.getElementById("directory-listing");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex justify-center items-center bg-navy-800 hover:bg-navy-950 text-white text-xs sm:text-sm font-bold px-8 py-4 rounded-xl shadow-sm transition-all duration-200"
                >
                  Browse Stays ({hotelsData.length})
                </button>
              </div>
            </div>

            {/* Right Column: Friendly-sized Custom Nautical Illustration */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center w-full">
              <div className="relative w-full max-w-md h-[260px] sm:h-[300px] rounded-2xl overflow-hidden shadow-md border border-[#1D3D9E]/10 bg-white group hover:scale-[1.01] transition-transform duration-300">
                <Image
                  src="/images/goa_beach_hero.png"
                  alt="Nautical Goa Beach Cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <span className="text-[9px] text-navy-800/40 uppercase tracking-widest mt-2.5 block font-bold">
                *Featured Illustration: Sailing off the Goan Coastline
              </span>
            </div>

          </div>
        </section>

        {/* 2. DIRECTORY TITLE SECTION */}
        <section id="directory-listing" className="max-w-7xl mx-auto px-6 mt-16 scroll-mt-24">
          <div className="border-b border-[#1D3D9E]/10 pb-6 text-left">
            <span className="text-[#FF6B00] uppercase tracking-wider text-[10px] font-bold block mb-1">
              Bespoke Hospitality Catalog
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-navy-800 tracking-wide uppercase">
              Our Goa Hotel Directory ({hotelsData.length} Selected Stays)
            </h2>
            <p className="text-xs sm:text-sm text-navy-800/60 mt-1 max-w-2xl leading-relaxed">
              Browse through our handpicked collection of luxury resorts, heritage boutique manors, and private beach villas in North, South, and Central Goa.
            </p>
          </div>
        </section>

        {/* 3. HOTEL DIRECTORY CARD GRID */}
        <section className="max-w-7xl mx-auto px-6 mt-10">
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {displayedHotels.length > 0 ? (
                displayedHotels.map((hotel) => (
                  <HotelCard 
                    key={hotel.id} 
                    hotel={hotel} 
                    onBook={handleOpenBooking} 
                  />
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 bg-[#FDFBF8]/95 border border-[#1D3D9E]/10 rounded-2xl shadow-[0_4px_24px_rgba(15,44,89,0.02)]"
                >
                  <div className="max-w-xs mx-auto space-y-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-400">
                      <Star className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy-800 uppercase">
                      No Hotels Available
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our hotel collection is currently offline. Please check back later.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. PAGINATION "SEE MORE STAYS" with Image preloading state indicator */}
          {visibleCount < filteredHotels.length && (
            <div className="text-center mt-12">
              <button
                onClick={handleSeeMore}
                className="inline-flex justify-center items-center gap-2 bg-white hover:bg-sand-50 border border-[#1D3D9E]/10 hover:border-[#1D3D9E]/30 text-navy-800 text-xs sm:text-sm font-bold uppercase tracking-widest px-10 py-4.5 rounded-xl shadow-xs transition-all duration-300 group"
              >
                {isPreloading ? (
                  <>
                    <Loader2 className="animate-spin w-4 h-4 text-orange-brand" />
                    <span>Buffering Next Stays...</span>
                  </>
                ) : (
                  <>
                    <span>See More Stays</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-90" />
                  </>
                )}
              </button>
              <div className="text-[10px] text-navy-800/40 mt-2.5 uppercase tracking-widest">
                Showing {displayedHotels.length} of {filteredHotels.length} luxury stays
              </div>
            </div>
          )}
        </section>

        {/* 5. MOCK TRUST & CTA STRIP */}
        <section className="max-w-7xl mx-auto px-6 mt-16 text-center">
          <div className="bg-navy-900 text-white border border-navy-950 rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.02] select-none pointer-events-none translate-x-20 -translate-y-20">
              <Compass className="w-full h-full text-white" />
            </div>
            
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="text-orange-brand uppercase text-[10px] font-bold tracking-widest block">
                Exclusive Travel Desk Partner
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide leading-tight">
                Plan a Bespoke Goan Experience
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Need multiple rooms, event setups, destination weddings or corporate retreat deals at these hotels? Our marketing and events desks negotiate volume discounts directly with IHCL Taj and Brij Hotels.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:+919986389444"
                  className="bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors w-full sm:w-auto shadow-sm"
                >
                  Call +91 99863 89444
                </a>
                <a
                  href="https://wa.me/919986389444?text=Hi%2C%20we're%20planning%20a%20group%20booking%20in%20Goa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>WhatsApp Group Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMALIST LANDING PAGE FOOTER */}
      <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-900 text-xs">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <Link href="/" className="inline-block select-none mx-auto">
            <div className="relative w-[140px] h-[45px] mx-auto">
              {/* Logo temporarily removed */}
            </div>
          </Link>
          <div className="max-w-md mx-auto text-slate-400/80 leading-relaxed">
            Navigating ideas. Delivering impact. Curated hospitality listings are promoted by Navi Route Digital Growth Partners.
          </div>
          <div className="flex justify-center gap-6 pt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
          <div className="text-[10px] text-slate-500 pt-4">
            &copy; {new Date().getFullYear()} Navi Route. Developed for hospitality campaigns. All hotel rates subject to season availability.
          </div>
        </div>
      </footer>

      {/* Booking Enquiry Modal Dialog */}
      <BookingModal 
        hotel={selectedHotel} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />


    </div>
  );
}
