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
