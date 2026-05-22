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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
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
          className={`lg:hidden flex items-center justify-center w-12 h-12 bg-[#d4af37]/10 backdrop-blur-lg border border-[#d4af37]/30 rounded-full text-white transition-all active:scale-90 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:bg-[#d4af37]/20 ${mobileMenuOpen ? "z-[100]" : "z-50"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-[#d4af37]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-1 items-end"
                >
                  <div className="w-6 h-0.5 bg-[#d4af37] rounded-full"></div>
                  <div className="w-4 h-0.5 bg-[#d4af37] rounded-full"></div>
                  <div className="w-5 h-0.5 bg-[#d4af37] rounded-full"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-neutral-950 z-[90] lg:hidden flex flex-col h-[100dvh]"
          >
            <div className="flex flex-col h-full pt-20 px-8 pb-12">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white hover:text-[#d4af37] font-medium text-2xl transition-colors py-3 block border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-auto"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="bg-[#d4af37] text-black font-bold py-4 px-6 rounded-xl text-center block text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Book Appointment
                </Link>
                <div className="mt-8 text-center text-gray-600 text-xs tracking-widest uppercase">
                  <p>© {new Date().getFullYear()} Om Tattoo Studio</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
