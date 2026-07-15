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
import { Hotel } from "../hotelsData"; // Force Next.js HMR reload

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
                Bookings processed directly secure exclusive complimentary upgrades and airport transfers.
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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  // Fallback to images if gallery is empty/undefined
  const galleryImages = hotel.gallery && hotel.gallery.length > 0 ? hotel.gallery : hotel.images;

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard listener for Lightbox navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, lightboxIndex, galleryImages]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const [showAllGallery, setShowAllGallery] = useState(false);
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
        nextImage();
      } else {
        prevImage();
      }
    } else if (Math.abs(diff) < 5) {
      const currentSrc = hotel.images[currentImageIndex];
      const idx = galleryImages.indexOf(currentSrc);
      openLightbox(idx >= 0 ? idx : 0);
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
        nextImage();
      } else {
        prevImage();
      }
    } else if (Math.abs(diff) < 5) {
      const currentSrc = hotel.images[currentImageIndex];
      const idx = galleryImages.indexOf(currentSrc);
      openLightbox(idx >= 0 ? idx : 0);
    }
    setDragStartX(null);
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

      <main className="flex-grow pb-24 max-w-7xl mx-auto px-4 sm:px-6 mt-8 w-full max-w-full overflow-x-hidden z-10">
        
        {/* Navigation Breadcrumbs & Back button */}
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4 border-b border-[#1D3D9E]/10 pb-4 w-full">
          <Link
            href="/lp/goa-hotels"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-[#E05E00] tracking-wider uppercase"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Catalog</span>
          </Link>
          <div className="text-[10px] text-navy-800/40 tracking-wider uppercase font-bold break-words max-w-full">
            Home / Hotels / {hotel.name.replace(", Goa", "")}
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start w-full max-w-full overflow-x-hidden">
          
          {/* Left Side: Images and highlights (7 columns) */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            
            {/* Gallery Image slider */}
            <div 
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              className="relative w-full h-[300px] sm:h-[450px] rounded-2xl overflow-hidden shadow-md border border-[#1D3D9E]/10 bg-slate-100 cursor-pointer select-none"
            >
              <Image
                src={hotel.images[currentImageIndex]}
                alt={hotel.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                draggable={false}
              />

              {/* Gallery Controls */}
              {hotel.images.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy-900/60 hover:bg-orange-brand text-white flex items-center justify-center transition-all z-10 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
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
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(idx);
                        }}
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

            {/* Gallery & Room Views Section (Moved to replace highlights) */}
            {hotel.gallery && hotel.gallery.length > 0 && (
              <div className="watercolor-card bg-white p-6 sm:p-8 rounded-2xl border border-[#1D3D9E]/10 space-y-6">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-800 tracking-wide uppercase">
                    Gallery &amp; Room Views
                  </h3>
                  <p className="text-xs text-navy-800/60 mt-1 max-w-2xl leading-relaxed">
                    Take a virtual tour through the room interiors and beautiful layouts of this curated Goan property.
                  </p>
                </div>
                
                {/* Gallery Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {hotel.gallery
                    .filter((_, idx) => !failedImages[idx])
                    .slice(0, showAllGallery ? undefined : 2)
                    .map((imgSrc, idx) => {
                      const originalIdx = hotel.gallery!.indexOf(imgSrc);
                      return (
                        <div 
                          key={idx}
                          onClick={() => openLightbox(originalIdx)}
                          className="relative h-32 sm:h-40 rounded-xl overflow-hidden shadow-xs border border-[#1D3D9E]/5 cursor-pointer hover:border-orange-brand/30 hover:shadow-md transition-all duration-300 group bg-slate-100"
                        >
                          <Image
                            src={imgSrc}
                            alt={`${hotel.name} Gallery Image ${idx + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, 30vw"
                            onError={() => {
                              setFailedImages(prev => ({ ...prev, [originalIdx]: true }));
                            }}
                          />
                          <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors" />
                        </div>
                      );
                    })}
                </div>

                {/* Show More / Show Less Button */}
                {hotel.gallery.filter((_, idx) => !failedImages[idx]).length > 2 && (
                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setShowAllGallery(!showAllGallery)}
                      className="inline-flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#E05E00] text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition-all cursor-pointer shadow-sm"
                    >
                      <span>{showAllGallery ? "Show Less" : "Show More Images"}</span>
                    </button>
                  </div>
                )}
              </div>
            )}
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
              <div className="flex items-center gap-2 bg-white text-navy-800 text-sm font-bold px-4 py-2 rounded-full border border-slate-200 shadow-sm w-fit">
                <svg className="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 6.16l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span>{rating.score}</span>
                <div className="flex items-center gap-0.5 ml-2 border-l border-slate-200 pl-2">
                  {Array.from({ length: 5 }, (_, i) => {
                    const starValue = i + 1;
                    const scoreVal = parseFloat(rating.score);
                    let fillPercent = 0;
                    if (scoreVal >= starValue) {
                      fillPercent = 100;
                    } else if (scoreVal > starValue - 1) {
                      fillPercent = Math.round((scoreVal - (starValue - 1)) * 100);
                    }
                    const gradientId = `star-grad-detail-${hotel.id}-${starValue}`;
                    return (
                      <svg key={i} className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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

              {/* Description */}
              <div className="text-sm leading-relaxed font-sans border-t border-[#1D3D9E]/10 pt-6">
                <span className="font-serif font-medium text-navy-800 uppercase tracking-wider block mb-3">
                  &mdash; Stay Overview
                </span>
                <div className="bg-sand-100/55 p-4 rounded-xl border border-[#1D3D9E]/5 text-navy-800/90 font-sans leading-relaxed">
                  {hotel.description} Overlooking the prime beachfront stretch of <strong className="text-navy-900">{hotel.subRegion}</strong> in {hotel.region}, Goa.
                </div>
              </div>

              {/* Price Details */}
              <div className="border-t border-[#1D3D9E]/10 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
                <div>
                  <span className="text-[10px] text-navy-800/45 font-bold uppercase tracking-wider block">
                    Starting Rate / Night
                  </span>
                  <span className="text-2xl sm:text-3xl font-serif font-black text-navy-800 block mt-1">
                    ₹ {formatPrice(hotel.startingRate)}
                  </span>
                </div>
                <div className="text-[10px] text-navy-800/40 italic text-left sm:text-right mt-1 sm:mt-0">
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
            Curated luxury hospitality listings and hotel packages.
          </div>
          <div className="flex justify-center gap-6 pt-2">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
          <div className="text-[10px] text-slate-500 pt-4">
            &copy; {new Date().getFullYear()} Elite Stays. All hotel rates subject to season availability.
          </div>
        </div>
      </footer>

      {/* Booking Enquiry Modal */}
      <BookingModal 
        hotel={hotel} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Lightbox Modal */}
      {isLightboxOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 backdrop-blur-xs p-4 select-none">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10 hover:bg-white/20 cursor-pointer"
            aria-label="Close gallery viewer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Controls */}
          <button 
            onClick={prevLightboxImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-brand hover:text-white text-white/80 flex items-center justify-center transition-all z-10 cursor-pointer border border-white/10"
            aria-label="Previous gallery image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button 
            onClick={nextLightboxImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-orange-brand hover:text-white text-white/80 flex items-center justify-center transition-all z-10 cursor-pointer border border-white/10"
            aria-label="Next gallery image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Lightbox Main Image Container */}
          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex flex-col items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[lightboxIndex]}
                alt={`${hotel.name} Full View ${lightboxIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            
            {/* Image Indicator / Caption */}
            <div className="text-white/60 text-xs mt-4 tracking-wider uppercase font-bold">
              Image {lightboxIndex + 1} of {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
