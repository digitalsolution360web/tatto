"use client";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-300 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-[#d4af37] text-2xl font-bold font-serif tracking-wide mb-6">Om Tattoo</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Creative tattoo studio offering unique tattoo designs, safe body piercing, tattoo removal, professional tattoo products, and certified tattoo courses.
            </p>
            <div className="flex gap-3 pt-2 flex-wrap">
              {/* Facebook */}
              <a
                href="#"
                title="Facebook"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all duration-300 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/omtattoosstudio?igsh=c2doMHd3a2s3aGZn"
                target="_blank"
                rel="noopener noreferrer"
                title="Om Tattoo on Instagram"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110"
                style={{ background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@omtattoos?si=qLHUvpiWP9eJSAM6"
                target="_blank"
                rel="noopener noreferrer"
                title="Om Tattoo on YouTube"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-[#d4af37]">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> About Us</Link></li>
              <li><Link href="/permanent-tattoo" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Permanent Tattoos</Link></li>
              <li><Link href="/tattoo-course" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Tattoo Training</Link></li>
              <li><Link href="/gallery" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Our Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-[#d4af37]">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/customized-tattoo" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Customized Designs</Link></li>
              <li><Link href="/tattoo-removal" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Tattoo Removal</Link></li>
              <li><Link href="/body-piercing" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Body Piercing</Link></li>
              <li><Link href="/tattoo-products" className="hover:text-[#d4af37] transition-colors flex items-center gap-2"><span className="text-[#d4af37] text-xs">▹</span> Tattoo Products</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-0.5 after:bg-[#d4af37]">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#d4af37] shrink-0 mt-1" size={18} />
                <span className="text-sm text-gray-400">Spring Rd, near jain temple, beside sree jain brothers, before, Purna Market, Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-[#d4af37] shrink-0" size={18} />
                <span className="text-sm text-gray-400">083328 05594</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-[#d4af37] shrink-0" size={18} />
                <span className="text-sm text-gray-400">info@omtattoos.in</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-[#d4af37] shrink-0" size={18} />
                <span className="text-sm text-gray-400">9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-left">
            &copy; {new Date().getFullYear()} Om Tattoo. All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500">
            Designed by <a href="https://www.digitalsolution360.com/" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">Digital Solution 360</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
