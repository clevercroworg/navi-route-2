"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Check, 
  Star, 
  Compass,
  Info,
  PhoneCall,
  Loader2
} from "lucide-react";
import confetti from "canvas-confetti";
import { Hotel } from "../hotelsData";

// Gold/Orange diamond icon matching the website theme
function BrandDiamond() {
  return (
    <svg className="w-3.5 h-3.5 text-orange-brand shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 12l10 10 10-10L12 2z" />
    </svg>
  );
}

// Rating helper
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

// Booking Enquiry Modal Component
function BookingModal({ 
  hotel, 
  isOpen, 
  onClose 
}: { 
  hotel: Hotel; 
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

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-[#0A1E3B]/75 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Modal Container */}
      <div className="relative bg-[#FDFBF8] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden z-10 border border-[#1D3D9E]/10 grid grid-cols-1 md:grid-cols-12 max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible transition-all duration-300 transform scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-navy-800 transition-colors z-20 w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200/50 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Panel: Selected Hotel Overview */}
        <div className="col-span-12 md:col-span-5 bg-gradient-to-br from-navy-800 to-navy-950 text-white p-6 md:p-8 flex flex-col justify-between relative overflow-hidden text-left">
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
              <div className="space-y-1 text-left">
                <h3 className="font-serif text-xl font-bold text-navy-800">
                  Request Booking Enquiry
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  Fill out the form below. Confirming will register your details directly with our travel desk.
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
            <div className="text-center space-y-6 py-6">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// CLIENT COMPONENT MAIN EXPORT
export default function HotelDetailClient({ hotel }: { hotel: Hotel }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const rating = getHotelRating(hotel);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="flex flex-col min-h-screen bg-sand-100 select-none relative text-left overflow-x-hidden"
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
          <Link href="/" className="flex items-center select-none">
            <div className="relative w-[140px] h-[45px]">
              {/* Logo temporarily removed - waiting for client new logo */}
            </div>
          </Link>

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

      <main className="flex-grow pb-24 max-w-7xl mx-auto px-6 mt-8 w-full z-10">
        
        {/* Navigation Breadcrumbs & Back button */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4 border-b border-[#1D3D9E]/10 pb-4 w-full">
          <div className="text-[10px] text-navy-800/40 tracking-wider uppercase font-bold break-words max-w-full">
            Home / Hotels / {hotel.name.replace(", Goa", "")}
          </div>
          <Link
            href="/lp/goa-hotels"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00] tracking-wider uppercase"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Catalog</span>
          </Link>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Images and highlights (7 columns) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Gallery Image slider */}
            <div className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-md border border-[#1D3D9E]/10 bg-slate-100">
              <Image
                src={hotel.images[currentImageIndex]}
                alt={hotel.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />

              {/* Gallery Controls */}
              {hotel.images.length > 1 && (
                <>
                  <button 
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/60 hover:bg-orange-brand text-white flex items-center justify-center transition-all z-10 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/60 hover:bg-orange-brand text-white flex items-center justify-center transition-all z-10 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-navy-900/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
                    {hotel.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                          idx === currentImageIndex ? "bg-orange-brand scale-125" : "bg-white/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* highlights/bullet points */}
            <div className="watercolor-card bg-white p-6 sm:p-8 rounded-2xl border border-[#1D3D9E]/10 space-y-6">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-800 tracking-wide uppercase">
                Amenities &amp; Stays Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {hotel.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-navy-800/85">
                    <BrandDiamond />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Stay Summary details (5 columns) */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div className="watercolor-card bg-white p-6 sm:p-8 rounded-2xl border border-[#1D3D9E]/10 space-y-6">
              
              <div>
                <span className="font-script text-2xl text-orange-brand block mb-1">
                  {hotel.tag}
                </span>
                
                <h1 className="font-serif text-2xl sm:text-3xl font-black text-navy-800 uppercase tracking-wide leading-tight">
                  {hotel.name}
                </h1>
                
                <div className="flex items-start gap-2 text-xs text-navy-800/60 mt-3">
                  <MapPin className="w-4 h-4 text-orange-brand shrink-0 mt-0.5" />
                  <span>{hotel.location}</span>
                </div>
              </div>

              {/* Rating block */}
              <div className="flex items-center gap-2.5 bg-orange-brand/5 text-orange-brand text-xs uppercase font-bold tracking-wider px-3.5 py-2.5 rounded-xl border border-orange-brand/10 w-fit">
                <Star className="w-3.5 h-3.5 fill-orange-brand shrink-0" />
                <span>{rating.score} • {rating.text}</span>
              </div>

              {/* Description */}
              <div className="text-sm text-navy-800/80 leading-relaxed font-sans border-t border-[#1D3D9E]/10 pt-6">
                <span className="font-serif font-medium text-navy-800 uppercase tracking-wider block mb-3">
                  &mdash; Stay Overview
                </span>
                <p className="leading-relaxed">
                  {hotel.description} Overlooking the prime beachfront stretch of <strong className="text-navy-900">{hotel.subRegion}</strong> in {hotel.region}, Goa.
                </p>
              </div>

              {/* Price Details */}
              <div className="border-t border-[#1D3D9E]/10 pt-6 flex justify-between items-end">
                <div>
                  <span className="text-[10px] text-navy-800/45 font-bold uppercase tracking-wider block">
                    Starting Rate / Night
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-navy-800 block mt-1">
                    ₹ {formatPrice(hotel.startingRate)}
                  </span>
                </div>
                <div className="text-[10px] text-navy-800/40 italic text-right">
                  *Complimentary transfers included
                </div>
              </div>

              {/* Booking Actions */}
              <div className="pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-orange-brand hover:bg-[#E05E00] text-white text-xs lg:text-sm font-bold uppercase tracking-widest py-4.5 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer text-center"
                >
                  Book Now
                </button>
              </div>
            </div>
            
            {/* Trusted partner card */}
            <div className="bg-navy-900 text-white p-6 sm:p-8 rounded-2xl border border-navy-950 relative overflow-hidden shadow-md text-left">
              <div className="absolute top-0 right-0 w-36 h-36 opacity-[0.02] select-none pointer-events-none translate-x-12 -translate-y-12">
                <Compass className="w-full h-full text-white" />
              </div>
              <span className="text-orange-brand uppercase text-[9px] font-bold tracking-widest block mb-2">
                Exclusive Travel Desk Partner
              </span>
              <h4 className="font-serif text-lg font-bold uppercase tracking-wide leading-tight mb-2">
                Volume Discounts Available
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Planning a group event, wedding, or corporate retreat? Get custom quotes directly from IHCL Taj and Brij Hotels.
              </p>
              <a
                href="tel:+919986389444"
                className="inline-flex justify-center items-center bg-orange-brand hover:bg-[#E05E00] text-white text-[10px] uppercase font-bold tracking-widest px-6 py-3 rounded-lg transition-colors shadow-sm"
              >
                Call desk: +91 99863 89444
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* MINIMALIST LANDING PAGE FOOTER */}
      <footer className="bg-navy-950 text-slate-400 py-12 border-t border-navy-900 text-xs text-center">
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

      {/* Booking Enquiry Modal */}
      <BookingModal 
        hotel={hotel} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
