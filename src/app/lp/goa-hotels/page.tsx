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
import { hotelsData, Hotel } from "./hotelsData"; // Force Next.js HMR reload

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
  if (hotel.googleRating) {
    const scoreNum = parseFloat(hotel.googleRating);
    let text = "Highly Rated";
    if (scoreNum >= 4.8) text = "Premier Boutique";
    else if (scoreNum <= 4.2) text = "Value Choice";
    return { score: hotel.googleRating, text };
  }
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
  onBook,
  onImageClick
}: { 
  hotel: Hotel; 
  onBook: (hotel: Hotel) => void;
  onImageClick: (hotel: Hotel, index: number) => void;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [dragStartX, setDragStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const dragEndX = e.changedTouches[0].clientX;
    const diff = dragStartX - dragEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage(e as any);
      } else {
        prevImage(e as any);
      }
    } else if (Math.abs(diff) < 5) {
      onImageClick(hotel, currentImageIndex);
    }
    setDragStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextImage(e);
      } else {
        prevImage(e);
      }
    } else if (Math.abs(diff) < 5) {
      onImageClick(hotel, currentImageIndex);
    }
    setDragStartX(null);
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-12 w-full h-full">
        {/* Left Gallery / Image Slider */}
        <div 
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="col-span-12 lg:col-span-5 relative h-64 lg:h-auto min-h-[300px] bg-slate-100 overflow-hidden select-none cursor-pointer"
        >
          <Image
            src={hotel.images[currentImageIndex]}
            alt={hotel.name}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
            draggable={false}
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
              <div className="flex items-center gap-2 bg-white text-navy-800 text-xs font-bold px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.16l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>{rating.score}</span>
                <div className="flex items-center gap-0.5 ml-1.5 border-l border-slate-200 pl-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starValue = i + 1;
                    const scoreVal = parseFloat(rating.score);
                    let fillPercent = 0;
                    if (scoreVal >= starValue) {
                      fillPercent = 100;
                    } else if (scoreVal > starValue - 1) {
                      fillPercent = Math.round((scoreVal - (starValue - 1)) * 100);
                    }
                    const gradientId = `star-grad-card-${hotel.id}-${starValue}`;
                    return (
                      <svg key={i} className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset={`${fillPercent}%`} stopColor="#FF6B00" />
                            <stop offset={`${fillPercent}%`} stopColor="#E2E8F0" />
                          </linearGradient>
                        </defs>
                        <path 
                          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
                          fill={`url(#${gradientId})`}
                        />
                      </svg>
                    );
                  })}
                </div>
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
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[#1D3D9E]/10 mt-auto">
            <Link 
              href={`/lp/goa-hotels/${hotel.id}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00] tracking-wider uppercase group/link"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
            </Link>

            <button
              onClick={() => onBook(hotel)}
              className="bg-orange-brand hover:bg-[#E05E00] text-white text-xs lg:text-sm font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
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
                <div className="w-16 h-16 bg-orange-brand/10 text-orange-brand rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-black text-navy-800 uppercase tracking-wide">
                    Enquiry Registered
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-navy-800">{name}</strong>. Your enquiry details for <strong>{hotel.name}</strong> have been registered. Our partner travel desk will contact you shortly.
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

                <div className="flex justify-center pt-2">
                  <button
                    onClick={onClose}
                    className="bg-navy-800 hover:bg-navy-900 text-white font-bold text-xs uppercase tracking-widest px-10 py-4.5 transition-colors rounded-xl shadow-md cursor-pointer"
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

  // Filter States
  const [selectedType, setSelectedType] = useState<"Premium" | "Luxury" | "Standard">("Premium");

  // Lightbox States
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxHotelName, setLightboxHotelName] = useState("");
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Pagination count state
  const [visibleCount, setVisibleCount] = useState(10);
  const [isPreloading, setIsPreloading] = useState(false);

  // Filtered Hotels list based on selected stay type
  const filteredHotels = useMemo(() => {
    if (selectedType === "Luxury") {
      return hotelsData.filter(h => ["Luxury Resort", "Heritage & Boutique", "Private Villa"].includes(h.type));
    }
    return hotelsData.filter(h => h.type === selectedType);
  }, [selectedType]);

  // Reset pagination when type filter changes
  useEffect(() => {
    setVisibleCount(10);
  }, [selectedType]);

  // Handle open lightbox
  const handleOpenLightbox = (hotel: Hotel, initialIndex: number) => {
    const imagesToUse = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : hotel.images;
    setLightboxImages(imagesToUse);
    setLightboxHotelName(hotel.name);
    setLightboxIndex(initialIndex);
    setIsLightboxOpen(true);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") setIsLightboxOpen(false);
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxImages]);

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
      className="flex flex-col min-h-screen bg-sand-100 select-none relative overflow-x-hidden"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none"
      }}
    >
      
      {/* BRAND THEMED LANDING PAGE HEADER */}
      <header className="relative z-40 bg-navy-800 border-b border-navy-950/20 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center select-none">
            <div className="relative w-[140px] h-[45px]">
              <Image
                src="/images/elite stays/logo_light.svg"
                alt="Elite Stays Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919986389444"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-white hover:text-orange-brand transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-orange-brand" />
              <span>Call Desk: +91 99863 89444</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-grow pb-24">
        
        {/* 1. HERO SECTION - Coastal Themed with Custom Watercolor Illustration Background */}
        <section className="relative py-16 sm:py-20 overflow-hidden border-b border-[#1D3D9E]/5 flex items-center justify-center min-h-[300px]">
          
          {/* Background Image of the entire Hero section */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <Image
              src="/images/goa_beach_hero_v3.png"
              alt="Nautical Goa Beach Cover"
              fill
              className="object-cover opacity-85"
              priority
            />
            {/* Soft wash overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF5EE]/50 via-[#FAF5EE]/75 to-[#FAF5EE]/90" />
          </div>

          {/* Sailboat waves sketch watermark absolute on left */}
          <div className="absolute left-[-40px] bottom-[-20px] w-96 h-96 opacity-15 select-none pointer-events-none z-0 rotate-12">
            <Image
              src="/images/sailboat_waves_sketch.png"
              alt="Nautical Sailboat Wave Sketch"
              fill
              className="object-contain"
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 w-full text-center space-y-6">
            
            <span className="font-script text-3xl text-orange-brand block mb-[-12px]">
              Curated Luxury Stays
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 leading-tight">
              GOA HOTELS &amp; RESORTS
            </h1>
            
            <p className="text-navy-800/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore handpicked beachfront retreats, colonial estates, and modern villas. Place an enquiry to secure direct agency pricing, complimentary breakfasts, and premium airport shuttles.
            </p>

            <div className="flex justify-center gap-4 pt-2">
              <button
                onClick={() => {
                  const element = document.getElementById("directory-listing");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex justify-center items-center bg-navy-800 hover:bg-navy-950 text-white text-xs sm:text-sm font-bold px-10 py-4 rounded-xl shadow-sm transition-all duration-200 cursor-pointer"
              >
                Browse Stays
              </button>
            </div>
          </div>
        </section>

        {/* 2. DIRECTORY TITLE SECTION & FILTER BAR */}
        <section id="directory-listing" className="max-w-7xl mx-auto px-6 mt-16 scroll-mt-24">
          <div className="border-b border-[#1D3D9E]/10 pb-6 text-left flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="text-[#FF6B00] uppercase tracking-wider text-[10px] font-bold block mb-1">
                Bespoke Hospitality Catalog
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-black text-navy-800 tracking-wide uppercase">
                Our Goa Hotel Directory
              </h2>
              <p className="text-xs sm:text-sm text-navy-800/60 mt-1 max-w-2xl leading-relaxed">
                Browse through our handpicked collection of luxury resorts, heritage boutique manors, and private beach villas in North, South, and Central Goa.
              </p>
            </div>

            {/* Stay Type Filters */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {[
                { id: "Premium", label: "Premium" },
                { id: "Luxury", label: "Luxury" },
                { id: "Standard", label: "Standard" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedType(tab.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    selectedType === tab.id
                      ? "bg-[#FF6B00] text-white shadow-md shadow-orange-brand/20 scale-105"
                      : "bg-white hover:bg-sand-50 text-navy-800 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
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
                    onImageClick={handleOpenLightbox}
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
              
              <div className="pt-4 flex justify-center">
                <a
                  href="tel:+919986389444"
                  className="bg-orange-brand hover:bg-orange-brand-hover text-white font-bold text-xs uppercase tracking-widest px-10 py-4.5 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  Call +91 99863 89444
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* MINIMALIST LANDING PAGE FOOTER */}
      <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-900 text-xs">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          <div className="inline-block select-none mx-auto">
            <div className="relative w-[140px] h-[45px] mx-auto">
              <Image
                src="/images/elite stays/logo_light.svg"
                alt="Elite Stays Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
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

      {/* Lightbox Modal for Main Catalog */}
      <AnimatePresence>
        {isLightboxOpen && lightboxImages.length > 0 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-xs p-4 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="absolute inset-0 cursor-zoom-out"
            />
            
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 cursor-pointer"
              aria-label="Close gallery viewer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Controls */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-brand hover:text-white text-white/80 flex items-center justify-center transition-all z-10 cursor-pointer border border-white/10"
              aria-label="Previous gallery image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-brand hover:text-white text-white/80 flex items-center justify-center transition-all z-10 cursor-pointer border border-white/10"
              aria-label="Next gallery image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Main Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center z-10 pointer-events-none"
            >
              <div className="relative w-full h-full">
                <Image
                  src={lightboxImages[lightboxIndex]}
                  alt={`${lightboxHotelName} Full View ${lightboxIndex + 1}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Image Indicator / Caption */}
              <div className="text-white/60 text-xs mt-4 tracking-wider uppercase font-bold pointer-events-auto">
                {lightboxHotelName} &mdash; Image {lightboxIndex + 1} of {lightboxImages.length}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
