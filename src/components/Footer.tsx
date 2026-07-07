"use client";

import Image from "next/image";
import Link from "next/link";

// Custom inline X/Twitter Icon since Lucide has generic icons
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  return (
    <div className="bg-white w-full flex flex-col">
      
      {/* 2. STAY IN THE LOOP BANNER */}
      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="border border-[#0F2C59]/10 rounded-[32px] p-8 sm:p-12 lg:p-16 bg-white relative overflow-hidden min-h-[240px] flex items-center justify-start">
          
          {/* Dashed trail & paper plane absolute overlay (visible on sm+) */}
          <div className="absolute inset-0 pointer-events-none select-none z-0 hidden sm:block">
            <svg className="w-full h-full text-[#FF6B00]" viewBox="0 0 1000 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M120,60 C240,20 340,10 440,70 C520,110 560,130 600,100 C640,70 630,30 680,40" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeDasharray="6 6" 
                strokeLinecap="round" 
              />
              <g transform="translate(680, 36) rotate(-15)">
                <svg className="w-8 h-8 text-[#0F2C59]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </g>
            </svg>
          </div>

          {/* Desktop version (Visible on lg and larger) - spans full height from absolute top to bottom */}
          <div className="hidden lg:block absolute right-0 bottom-0 top-0 w-[45%] pointer-events-none select-none z-0">
            <Image
              src="/images/cta_lighthouse_ink.png"
              alt="Lighthouse & Cottage Cliff Sketch (Desktop)"
              fill
              sizes="45vw"
              className="object-contain object-right-bottom opacity-95"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 w-full">
            
            {/* Left Side: Typography & Newsletter Form stacked */}
            <div className="space-y-6 lg:col-span-7 text-left w-full relative z-10">
              <div className="space-y-2">
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1D3D9E] leading-tight">
                  Stay in the loop
                </h3>
                <p className="text-[#0F2C59]/75 text-sm sm:text-base">
                  Tips, ideas, and insights to help your business grow.
                </p>
              </div>
              
              <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#FAF6F0] border border-[#1D3D9E]/10 rounded-xl px-5 py-3 text-sm text-[#1D3D9E] placeholder-[#1D3D9E]/40 focus:outline-none focus:border-[#FF6B00] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#FF6B00] hover:bg-[#E05E00] text-white text-sm font-bold px-8 py-3 rounded-xl transition-all duration-200 cursor-pointer flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Side / Mobile Only: Sketched illustration container inside grid */}
            <div className="block lg:hidden w-full h-[240px] sm:h-[280px] relative select-none mt-4 z-0">
              <Image
                src="/images/cta_lighthouse_ink.png"
                alt="Lighthouse & Cottage Cliff Sketch (Mobile)"
                fill
                sizes="100vw"
                className="object-contain object-bottom opacity-95"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. DEEP BLUE FOOTER */}
      <footer className="bg-[#1D3D9E] text-white/80 py-16 w-full border-t border-[#1D3D9E]/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 text-left">
            
            {/* Logo Column */}
            <div className="space-y-6 lg:col-span-2">
              <Link href="/" className="flex items-center select-none">
                <div className="relative w-[140px] h-[45px]">
                  <Image
                    src="/images/light logo.png"
                    alt="Navi Route Logo"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <div className="space-y-2">
                <p className="text-sm font-medium text-white">Navigate today.</p>
                <p className="text-sm font-medium text-[#FF6B00]">Grow tomorrow.</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: TwitterIcon, href: "#" },
                  { icon: LinkedinIcon, href: "#" },
                  { icon: InstagramIcon, href: "#" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-8 h-8 rounded-full border border-white/20 hover:border-[#FF6B00] hover:text-white flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-6">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li><Link href="/services/business-website-development" className="hover:text-white transition-colors">Website Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">App Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">AI Automation</Link></li>
                <li><Link href="/#services" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#work" className="hover:text-white transition-colors">Our Work</Link></li>
                <li><Link href="/#insights" className="hover:text-white transition-colors">Insights</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Resources Links */}
            <div className="space-y-6">
              <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">
                Resources
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Guides</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <p>© 2025 Navi Route Studio. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
