"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/tattoo-products" },
    { name: "Courses", href: "/tattoo-course" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg py-3" : "bg-black/60 backdrop-blur-sm py-4 border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="relative h-12 w-32 md:h-16 md:w-40">
            <Image
              src="/logo.webp"
              alt="Om Tattoo Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-white font-medium hover:text-[#d4af37] transition-colors py-2 block relative overflow-hidden group-hover:after:w-full after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#d4af37] after:transition-all after:duration-300"
              >
                {link.name}
              </Link>
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden flex flex-col pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-6 pb-12">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-[#d4af37] font-semibold text-xl transition-colors border-b border-white/10 pb-2 block"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#d4af37] text-black font-bold py-3 px-6 rounded-full text-center mt-4 text-lg"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
