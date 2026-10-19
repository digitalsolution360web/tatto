"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {  CheckCircle2, Droplet, Heart, MapPin, Shield, Sparkles, Star, X, ZoomIn } from "lucide-react";
import {
  ArrowRight,
  ShieldCheck,
  Gem,
  GraduationCap,
  PenTool,
  CircleDot,
  Eraser,
} from "lucide-react";
export default function Home() {
  const sliderImages = [
    "/banner.webp",
    "/banner2.webp",
    "/banner3.webp"
  ];

  const services = [
    { title: "Permanent Tattoos", icon: <Heart className="w-8 h-8 text-[#d4af37]" />, link: "/permanent-tattoo" },
    { title: "Customized Designs", icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />, link: "/customized-tattoo" },
    { title: "Tattoo Cover-Up & Correction", icon: <Star className="w-8 h-8 text-[#d4af37]" />, link: "/contact" },
    { title: "Tattoo Removal Services", icon: <Droplet className="w-8 h-8 text-[#d4af37]" />, link: "/tattoo-removal" },
    { title: "Body Piercing", icon: <Shield className="w-8 h-8 text-[#d4af37]" />, link: "/body-piercing" },
    { title: "Tattoo Products Sales", icon: <MapPin className="w-8 h-8 text-[#d4af37]" />, link: "/tattoo-products" },
    { title: "Tattoo Training Courses", icon: <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />, link: "/tattoo-course" },
  ];

  const whyChooseUs = [
    "Professional Tattoo Artists",
    "Hygienic & Safe Environment",
    "Customized Artwork",
    "Modern Equipment",
    "Affordable Pricing",
    "Certified Tattoo Courses",
    "Beginner to Advanced Training"
  ];

  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
   
<section className="relative h-[65vh] min-h-[480px] w-full overflow-hidden sm:min-h-[550px] lg:h-[80vh] lg:min-h-[650px]">

  <Swiper
    modules={[Autoplay, EffectFade, Navigation, Pagination]}
    effect="fade"
    speed={1200}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    navigation
    pagination={{ clickable: true }}
    className="hero-swiper h-full w-full"
  >
    {sliderImages.map((src, index) => (
      <SwiperSlide key={index}>
        <div className="absolute inset-0 h-full w-full">
          <Image
            src={src}
            alt={`Tattoo Studio Banner ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Left Side Gradient Only — Image Stays Clear on Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent sm:from-black/70 sm:via-black/30" />

          {/* Very Subtle Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Hero Content */}
  <div className="pointer-events-none absolute inset-0 z-20 flex items-center">
    <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl"
      >
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e2c15c] sm:text-sm">
            Artistry · Precision · Expression
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-5 font-serif text-4xl font-bold leading-[1.12] text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Ink Your Story
          <br />
          with{" "}
          <span className="italic text-[#d4af37]">
            Professional
          </span>
          <br className="hidden sm:block" />
          <span className="text-white"> Tattoo Art.</span>
        </h1>

        {/* Services Line */}
        <p className="mb-5 max-w-2xl text-xs font-semibold leading-6 tracking-wide text-[#e5c96d] sm:text-sm md:text-base">
          Permanent Tattoos <span className="mx-1 text-white/40">|</span>
          Custom Designs <span className="mx-1 text-white/40">|</span>
          Tattoo Removal <span className="mx-1 text-white/40">|</span>
          Body Piercing <span className="mx-1 text-white/40">|</span>
          Tattoo Training
        </p>

        {/* Description */}
        <p className="mb-8 max-w-xl text-sm leading-7 text-white/85 sm:text-base md:text-lg">
          Discover custom tattoo designs, professional body piercing,
          tattoo removal, quality tattoo products, and training programs
          for aspiring and experienced artists.
        </p>

        {/* CTA Buttons */}
        <div className="pointer-events-auto flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#d4af37] px-7 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:bg-[#ebc94f] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Book Appointment
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="/tattoo-course"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-black/10 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d4af37] hover:text-[#e5c96d] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Explore Courses
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
</section>


    
{/* ABOUT SECTION — PREMIUM BLACK & GOLD */}
<section className="relative isolate overflow-hidden bg-[#080807] py-16 sm:py-20 lg:py-24">

  {/* Background Decorations */}
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#d4af37]/[0.06] blur-[100px]" />
  <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#d4af37]/[0.05] blur-[120px]" />

  <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >

        {/* Section Label */}
        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37] sm:w-14" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37] sm:text-xs">
            Welcome to Om Tattoo
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-6 font-serif text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-[66px]">
          Every Tattoo
          <br />
          Tells a{" "}
          <span className="font-normal italic text-[#d4af37]">
            Story.
          </span>
        </h2>

        {/* Gold Accent */}
        <div className="mb-7 flex items-center gap-2">
          <span className="h-[3px] w-12 rounded-full bg-[#d4af37]" />
          <span className="h-[3px] w-3 rounded-full bg-[#d4af37]/40" />
          <span className="h-[3px] w-1.5 rounded-full bg-[#d4af37]/20" />
        </div>

        {/* Description */}
        <p className="mb-5 max-w-xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8">
          At Om Tattoo, we believe every tattoo tells a story. Our studio
          specializes in custom tattoo designs, permanent tattoos, body
          piercings, tattoo correction, and tattoo removal services using
          hygienic equipment and professional techniques.
        </p>

        <p className="mb-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
          We also provide certified tattoo training courses for hobby
          learners and aspiring professional artists.
        </p>

        {/* Service Icons */}
        <div className="mb-9 grid grid-cols-4 divide-x divide-white/10">

          {[
            { label: "Custom Tattoo", Icon: PenTool },
            { label: "Body Piercing", Icon: CircleDot },
            { label: "Tattoo Removal", Icon: Eraser },
            { label: "Training Courses", Icon: GraduationCap },
          ].map(({ label, Icon }) => (
            <div
              key={label}
              className="group flex flex-col items-center px-1.5 text-center sm:px-3"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/[0.04] text-[#d4af37] transition-all duration-300 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black sm:h-16 sm:w-16">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
              </div>

              <span className="max-w-[100px] text-[9px] font-semibold uppercase leading-4 tracking-wide text-gray-300 sm:text-[10px] sm:leading-5 md:text-xs">
                {label}
              </span>
            </div>
          ))}

        </div>

        {/* CTA */}
        <Link
          href="/about"
          className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full border border-[#d4af37] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#e4c45b] transition-all duration-300 hover:bg-[#d4af37] hover:text-black sm:px-8 sm:text-sm"
        >
          Read More About Us
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto w-full max-w-2xl lg:max-w-none"
      >

        {/* Main Image Frame */}
        <div className="relative mr-3 h-[350px] overflow-hidden rounded-[28px] border border-[#d4af37]/60 sm:mr-6 sm:h-[460px] lg:mr-8 lg:h-[520px] xl:h-[570px]">

          <Image
            src="/tatto.webp"
            alt="Professional tattoo artist at work at Om Tattoo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />

      
      
        </div>

        {/* Decorative Gold Circle */}
        <div className="pointer-events-none absolute -right-1 top-10 -z-10 h-32 w-32 rounded-full border border-[#d4af37]/30 sm:-right-3 sm:h-44 sm:w-44" />

        {/* Floating Badge */}
        <div className="absolute -right-1 top-5 flex w-[82px] flex-col items-center rounded-xl border border-[#d4af37]/70 bg-[#0b0b09]/95 px-2 py-4 text-center shadow-xl sm:-right-2 sm:top-8 sm:w-28 sm:px-3 sm:py-5">
          <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-gray-300 sm:text-[10px]">
            Crafted with
          </span>

          <Gem className="my-2 h-5 w-5 text-[#d4af37] sm:h-7 sm:w-7" strokeWidth={1.3} />

          <span className="font-serif text-xs italic text-white sm:text-sm">
            Passion
          </span>

          <span className="mt-2 h-px w-7 bg-[#d4af37]/60" />

          <span className="mt-2 text-[8px] uppercase tracking-wider text-gray-400 sm:text-[9px]">
            Every Detail
          </span>
        </div>

        {/* Floating Quality Card */}
        <div className="absolute -bottom-5 right-0 flex max-w-[235px] items-center gap-3 rounded-2xl border border-white/10 bg-[#15140f]/95 p-3 shadow-2xl backdrop-blur-xl sm:-bottom-6 sm:right-3 sm:max-w-[280px] sm:gap-4 sm:p-4">

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 sm:h-14 sm:w-14">
            <ShieldCheck className="h-6 w-6 text-[#d4af37] sm:h-7 sm:w-7" strokeWidth={1.5} />
          </div>

          <div>
            <p className="mb-1 text-xs font-semibold text-white sm:text-sm">
              Hygiene Comes First
            </p>

            <p className="text-[10px] leading-4 text-gray-400 sm:text-xs sm:leading-5">
              Careful techniques and attention to safety.
            </p>
          </div>

        </div>

      </motion.div>

    </div>

    {/* TRUST STRIP */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 border-y border-white/10 py-7 sm:mt-24 sm:py-9"
    >

      <div className="grid grid-cols-2 gap-y-7 md:grid-cols-4 md:gap-5">

        {[
          {
            title: "Hygiene & Safety",
            subtitle: "A clean studio environment",
            Icon: ShieldCheck,
          },
          {
            title: "Artistic Precision",
            subtitle: "Care in every detail",
            Icon: Gem,
          },
          {
            title: "Custom Designs",
            subtitle: "Made for your story",
            Icon: Star,
          },
          {
            title: "Client First",
            subtitle: "Your comfort matters",
            Icon: Heart,
          },
        ].map(({ title, subtitle, Icon }) => (
          <div
            key={title}
            className="flex items-center gap-3 border-white/10 px-2 sm:gap-4 md:border-r md:last:border-r-0"
          >
            <Icon
              className="h-7 w-7 shrink-0 text-[#d4af37] sm:h-8 sm:w-8"
              strokeWidth={1.4}
            />

            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white sm:text-xs">
                {title}
              </p>

              <p className="mt-1 text-[10px] leading-4 text-gray-500 sm:text-xs">
                {subtitle}
              </p>
            </div>
          </div>
        ))}

      </div>

    </motion.div>

  </div>
</section>


{/* ACADEMY BROCHURE SECTION */}
<section className="relative isolate overflow-hidden bg-[#080807] py-16 sm:py-20 lg:py-24">

  {/* Background Effects */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37]/[0.07] blur-[120px]" />
    <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#d4af37]/[0.04] blur-[100px]" />
  </div>

  <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
  <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

  <div className="relative z-10 mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">

    {/* SECTION HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-12 max-w-4xl text-center sm:mb-16"
    >

      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-[#d4af37] sm:w-12" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d4af37] sm:text-xs">
          Om Ink Tattoo Academy
        </span>
        <span className="h-px w-8 bg-[#d4af37] sm:w-12" />
      </div>

      <h2 className="mb-5 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
        Turn Your Passion Into a
        <span className="mt-2 block font-normal italic text-[#d4af37]">
          Professional Career.
        </span>
      </h2>

      <div className="mx-auto mb-5 flex items-center justify-center gap-2">
        <span className="h-[3px] w-12 rounded-full bg-[#d4af37]" />
        <span className="h-[3px] w-3 rounded-full bg-[#d4af37]/40" />
        <span className="h-[3px] w-1.5 rounded-full bg-[#d4af37]/20" />
      </div>

      <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
        Take the first step towards your artistic journey. Explore the Om Ink
        Tattoo Academy brochure to discover our training opportunities and
        learn more about building your skills as a tattoo artist.
      </p>
    </motion.div>

    {/* BROCHURE SHOWCASE */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto max-w-[1400px]"
    >

      {/* Brochure Frame */}
      <div className="group relative">

        {/* Outer Glow */}
        <div className="pointer-events-none absolute -inset-2 rounded-[26px] bg-[#d4af37]/[0.06] opacity-70 blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:-inset-4" />

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          aria-label="View Om Ink Tattoo Academy brochure in full size"
          className="relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[#d4af37]/30 bg-[#11100d] p-2 text-left shadow-2xl shadow-black/50 transition-all duration-500 hover:border-[#d4af37]/80 sm:rounded-3xl sm:p-3"
        >

          {/* Gold Inner Frame */}
          <div className="pointer-events-none absolute inset-2 z-10 rounded-xl border border-white/[0.08] transition-colors duration-500 group-hover:border-[#d4af37]/30 sm:inset-3 sm:rounded-2xl" />

          {/* Brochure Image */}
          <div className="relative overflow-hidden rounded-xl bg-neutral-900 sm:rounded-2xl">
            <Image
              src="/tattohome.webp"
              alt="Om Ink Tattoo Academy Course Brochure"
              width={1400}
              height={790}
              sizes="(max-width: 768px) 100vw, 1100px"
              className="h-auto w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              priority
            />

            {/* Hover Overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/35">

              <div className="flex translate-y-3 scale-90 flex-col items-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">

                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/70 bg-black/70 text-[#d4af37] shadow-xl backdrop-blur-md">
                  <ZoomIn className="h-8 w-8" strokeWidth={1.5} />
                </div>

                <span className="rounded-full border border-white/20 bg-black/60 px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
                  Click to Enlarge
                </span>

              </div>
            </div>
          </div>

        </button>

        {/* Bottom Corner Accent */}
        <div className="pointer-events-none absolute -bottom-1 left-8 h-1 w-20 rounded-full bg-[#d4af37] sm:left-12 sm:w-28" />
      </div>

      {/* BROCHURE CAPTION */}
      <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/[0.07]">
            <GraduationCap className="h-5 w-5 text-[#d4af37]" strokeWidth={1.5} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white sm:text-base">
              Explore the Academy Brochure
            </h3>
            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              Click the brochure to view its details.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="inline-flex items-center gap-2 self-start text-xs font-semibold text-[#d4af37] transition-colors hover:text-white sm:self-center sm:text-sm"
        >
          View Full Brochure
          <ArrowRight className="h-4 w-4" />
        </button>

      </div>

      {/* CTA BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-9 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
      >

        <Link
          href="/tattoo-course"
          className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-[#d4af37] bg-[#d4af37] px-7 py-4 text-sm font-bold text-black shadow-lg shadow-[#d4af37]/10 transition-all duration-300 hover:border-[#f0d675] hover:bg-[#f0d675] sm:px-9 sm:text-base"
        >
          Explore Courses
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>

        <Link
          href="/contact"
          className="inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/20 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-[#d4af37]/70 hover:bg-[#d4af37]/[0.07] sm:px-9 sm:text-base"
        >
          Book a Free Consultation
          <ArrowRight className="h-5 w-5 text-[#d4af37]" />
        </Link>

      </motion.div>

      {/* BOTTOM TRUST DETAILS */}
      <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/[0.08] pt-7 sm:mt-14 sm:gap-x-10">

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <ShieldCheck className="h-4 w-4 text-[#d4af37]" />
          <span>Learn & Practice</span>
        </div>

        <span className="hidden h-1 w-1 rounded-full bg-[#d4af37]/50 sm:block" />

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <PenTool className="h-4 w-4 text-[#d4af37]" />
          <span>Develop Your Art</span>
        </div>

        <span className="hidden h-1 w-1 rounded-full bg-[#d4af37]/50 sm:block" />

        <div className="flex items-center gap-2 text-xs text-gray-400">
          <GraduationCap className="h-4 w-4 text-[#d4af37]" />
          <span>Explore Training</span>
        </div>

      </div>

    </motion.div>
  </div>
</section>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-[#d4af37] border border-[#d4af37]/50 hover:border-[#d4af37] text-white hover:text-black rounded-full p-2.5 transition-all duration-300"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Fullscreen Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative z-10 max-w-[95vw] max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              style={{ boxShadow: "0 0 60px rgba(212,175,55,0.25)" }}
            >
              <Image
                src="/tattohome.webp"
                alt="Om Ink Tattoo Academy Brochure Fullscreen"
                width={1400}
                height={790}
                className="w-full h-auto max-h-[88vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    {/* Studio Vibe Section — Premium Layout */}
<section className="relative overflow-hidden bg-[#111111] py-16 sm:py-20 lg:py-24">
  {/* Background Details */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d4af37]/[0.06] blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/[0.04] blur-[120px]" />

  <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 xl:gap-20">

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-6"
      >
        <div className="group relative">
          {/* Image Frame */}
          <div className="relative h-[380px] overflow-hidden rounded-2xl border border-white/10 sm:h-[480px] lg:h-[650px]">
            <Image
              src="/tatto5.webp"
              alt="Creative tattoo design process at our studio"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
            />

         
          </div> 

          {/* Decorative Border */}
          <div className="pointer-events-none absolute -bottom-3 -right-3 -z-0 h-28 w-28 rounded-br-2xl border-b border-r border-[#d4af37]/40" />
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:col-span-6"
      >
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-9 bg-[#d4af37]" />
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d4af37] sm:text-sm">
            Artistic Vision
          </span>
        </div>

        {/* Heading */}
        <h2 className="max-w-2xl font-serif text-3xl font-medium leading-[1.15] text-white sm:text-4xl md:text-5xl xl:text-[58px]">
          Turning Ideas into
          <span className="mt-2 block italic text-[#d4af37]">
            Masterpieces.
          </span>
        </h2>

        <p className="mt-6 max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
          Your story deserves more than an ordinary design. We combine
          creativity, precision, and personal expression to create tattoos
          that feel uniquely yours.
        </p>

        {/* Gold Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-[#d4af37]/60 via-white/10 to-transparent sm:my-10" />

        {/* Process Steps */}
        <div className="space-y-3 sm:space-y-4">

          {/* Step 1 */}
          <div className="group flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-white/[0.045] sm:gap-5 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/[0.08] transition-colors duration-300 group-hover:bg-[#d4af37]/15 sm:h-14 sm:w-14">
              <span className="font-serif text-xl text-[#d4af37]">01</span>
            </div>

            <div className="flex-1 pt-0.5">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Personal Consultation
                </h3>
                <span className="text-xs uppercase tracking-widest text-neutral-600">
                  Discover
                </span>
              </div>
              <p className="text-sm leading-6 text-neutral-400 sm:text-[15px]">
                Share your ideas, discuss placement and sizing, and work with
                our artists to shape your vision.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-white/[0.045] sm:gap-5 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/[0.08] transition-colors duration-300 group-hover:bg-[#d4af37]/15 sm:h-14 sm:w-14">
              <span className="font-serif text-xl text-[#d4af37]">02</span>
            </div>

            <div className="flex-1 pt-0.5">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  Bespoke Design
                </h3>
                <span className="text-xs uppercase tracking-widest text-neutral-600">
                  Create
                </span>
              </div>
              <p className="text-sm leading-6 text-neutral-400 sm:text-[15px]">
                Explore a custom sketch thoughtfully designed around your
                personality, preferences, and body structure.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group flex gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-4 transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-white/[0.045] sm:gap-5 sm:p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#d4af37]/[0.08] transition-colors duration-300 group-hover:bg-[#d4af37]/15 sm:h-14 sm:w-14">
              <span className="font-serif text-xl text-[#d4af37]">03</span>
            </div>

            <div className="flex-1 pt-0.5">
              <div className="mb-1 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  The Inking Experience
                </h3>
                <span className="text-xs uppercase tracking-widest text-neutral-600">
                  Express
                </span>
              </div>
              <p className="text-sm leading-6 text-neutral-400 sm:text-[15px]">
                Enjoy a comfortable tattooing experience with careful
                attention to hygiene, precision, and detail.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-7 flex items-center gap-3 sm:mt-8">
          <div className="flex -space-x-1">
            <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
            <span className="h-2 w-2 rounded-full bg-[#d4af37]/60" />
            <span className="h-2 w-2 rounded-full bg-[#d4af37]/30" />
          </div>
          <p className="text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
            Thoughtfully designed. Personally meaningful. Uniquely yours.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>
    {/* Premium Services Section */}
<section className="relative overflow-hidden bg-[#0b0b0b] py-16 sm:py-20 lg:py-24">
  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d4af37]/[0.045] blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/[0.04] blur-[120px]" />

  <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-12 flex flex-col gap-6 sm:mb-16 lg:flex-row lg:items-end lg:justify-between"
    >
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
            What We Do
          </span>
        </div>

        <h2 className="max-w-2xl font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          Artistry Beyond
          <span className="ml-2 italic text-[#d4af37]">Ink.</span>
        </h2>
      </div>

      <div className="max-w-md lg:pb-2">
        <p className="text-sm leading-7 text-neutral-400 sm:text-base">
          Discover our range of tattoo services, where creative vision meets
          precision, individuality, and timeless artistry.
        </p>
      </div>
    </motion.div>

    {/* Gold Divider */}
    <div className="mb-8 h-px w-full bg-gradient-to-r from-[#d4af37]/60 via-white/10 to-transparent sm:mb-10" />

    {/* Services Grid */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
      {services.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.55,
            delay: (index % 3) * 0.1,
          }}
          className="group relative flex min-h-[240px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111111] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/40 hover:bg-[#151515] sm:min-h-[260px] sm:p-8"
        >
          {/* Hover Glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#d4af37]/[0.07] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

          {/* Card Header */}
          <div className="relative mb-8 flex items-start justify-between">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.07] text-[#d4af37] transition-all duration-300 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/[0.13]">
              <span className="[&>svg]:h-7 [&>svg]:w-7">
                {service.icon}
              </span>
            </div>

            <span className="font-serif text-3xl font-medium text-white/[0.13] transition-colors duration-300 group-hover:text-[#d4af37]/60">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Service Details */}
          <div className="relative flex flex-1 flex-col">
            <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#d4af37] sm:text-2xl">
              {service.title}
            </h3>

            <div className="mt-auto pt-5">
              <div className="mb-5 h-px w-full bg-white/[0.08] transition-colors duration-300 group-hover:bg-[#d4af37]/30" />

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-400 transition-all duration-300 hover:text-[#d4af37] group-hover:text-white"
              >
                Explore Service
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#d4af37]"
                />
              </Link>
            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
        </motion.div>
      ))}
    </div>

    {/* Bottom Note */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-10 flex flex-col gap-3 border-t border-white/[0.08] pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-xs uppercase tracking-[0.16em] text-neutral-500 sm:text-sm">
        Crafted with intention. Designed around you.
      </p>

      <div className="flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
        <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
          Your Vision, Our Artistry
        </span>
      </div>
    </motion.div>

  </div>
</section>
     
{/* Why Choose Us — Premium Editorial Layout */}
<section className="relative overflow-hidden bg-[#090909] py-16 sm:py-20 lg:py-28">
  {/* Subtle Background Glow */}
  <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#d4af37]/[0.05] blur-[130px]" />

  <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
    
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-10 flex flex-col gap-4 sm:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-10 bg-[#d4af37]" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
            The Om Tattoo Difference
          </span>
        </div>

        <h2 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          Why Choose <span className="italic text-[#d4af37]">Us?</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
        Your story deserves exceptional artistry, personal attention, and
        a studio experience built around quality and care.
      </p>
    </motion.div>

    {/* Main Editorial Layout */}
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      
      {/* Large Clear Image */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group relative lg:col-span-7"
      >
        <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[520px] lg:h-full lg:min-h-[650px]">
          <Image
            src="/g1.webp"
            alt="Om Tattoo studio artistry and tattoo experience"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
          />

          {/* Very Light Bottom Gradient Only */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          {/* Image Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-9 lg:p-10">
            <span className="mb-3 inline-block rounded-full border border-white/30 bg-black/25 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm sm:text-xs">
              Art · Precision · Individuality
            </span>

            <h3 className="max-w-lg font-serif text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
              Art That Reflects
              <span className="block italic text-[#e7c76a]">
                Who You Are.
              </span>
            </h3>
          </div>

          {/* Small Image Corner Accent */}
          <div className="pointer-events-none absolute right-5 top-5 h-12 w-12 rounded-tr-xl border-r border-t border-[#d4af37]/80 sm:right-7 sm:top-7 sm:h-16 sm:w-16" />
        </div>
      </motion.div>

      {/* Right Content Panel */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center rounded-2xl border border-white/[0.08] bg-[#111111] p-6 sm:p-9 lg:col-span-5 lg:p-10 xl:p-12"
      >
        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
          Excellence in Every Detail
        </span>

        <h3 className="font-serif text-3xl font-medium leading-tight text-white sm:text-4xl">
          More Than Just
          <span className="block italic text-[#d4af37]">A Tattoo.</span>
        </h3>

        <p className="mt-5 text-sm leading-7 text-neutral-400 sm:text-base">
          From your first consultation to the final detail, we focus on
          thoughtful design, careful execution, and a comfortable experience.
        </p>

        {/* Reasons */}
        <div className="mt-8 space-y-0">
          {whyChooseUs.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex items-start gap-4 border-b border-white/[0.08] py-4 first:pt-0 last:border-b-0"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#d4af37]/25 bg-[#d4af37]/[0.07] transition-colors duration-300 group-hover:bg-[#d4af37]/15">
                <CheckCircle2
                  className="text-[#d4af37]"
                  size={17}
                  strokeWidth={1.8}
                />
              </div>

              <span className="pt-1 text-sm font-medium leading-6 text-neutral-200 transition-colors duration-300 group-hover:text-white sm:text-base">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hygiene Highlight */}
        <div className="mt-7 rounded-xl border border-[#d4af37]/20 bg-[#d4af37]/[0.055] p-5 sm:mt-8 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/10">
              <Shield
                className="h-6 w-6 text-[#d4af37]"
                strokeWidth={1.6}
              />
            </div>

            <div>
              <h4 className="text-base font-semibold text-white sm:text-lg">
                Safety Comes First
              </h4>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                We prioritize cleanliness, proper sterilization, and hygienic
                practices throughout your tattoo experience.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Label */}
        <div className="mt-7 flex items-center gap-3">
          <span className="h-px w-8 bg-[#d4af37]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
            Your Trust. Our Craft.
          </span>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    </div>
  );
}
