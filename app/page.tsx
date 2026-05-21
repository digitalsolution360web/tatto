"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, CheckCircle2, Droplet, Heart, MapPin, Shield, Sparkles, Star } from "lucide-react";

export default function Home() {
  const sliderImages = [
    "/tatto.webp",
    "/tatto1.webp",
    "/tatto2.webp"
  ];

  const services = [
    { title: "Permanent Tattoos", icon: <Heart className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Customized Designs", icon: <Sparkles className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Tattoo Cover-Up & Correction", icon: <Star className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Tattoo Removal Services", icon: <Droplet className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Body Piercing", icon: <Shield className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Tattoo Products Sales", icon: <MapPin className="w-8 h-8 text-[#d4af37]" /> },
    { title: "Tattoo Training Courses", icon: <CheckCircle2 className="w-8 h-8 text-[#d4af37]" /> },
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

  return (
    <div className="overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative h-[65vh] lg:h-[80vh] w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {sliderImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                  src={src}
                  alt={`Tattoo Studio Banner ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute inset-0 z-20 flex items-center justify-start pointer-events-none">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 pointer-events-auto leading-tight">
                Ink Your Story with <br className="hidden md:block" /><span className="text-[#d4af37]">Professional Tattoo Art</span>
              </h1>
              <p className="text-[#d4af37] font-medium text-base md:text-lg tracking-wide mb-4 pointer-events-auto">
                Permanent Tattoos | Customized Designs | Tattoo Removal | Body Piercing | Tattoo Training
              </p>
              <p className="text-gray-300 text-sm md:text-base mb-8 pointer-events-auto max-w-xl leading-relaxed">
                Creative tattoo studio offering unique tattoo designs, safe body piercing, tattoo removal, professional tattoo products, and certified tattoo courses for beginners to advanced artists.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-start items-center pointer-events-auto">
                <Link
                  href="/contact"
                  className="bg-[#d4af37] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
                >
                  Book Appointment <ArrowRight size={20} />
                </Link>
                <Link
                  href="/tattoo-course"
                  className="border-2 border-white/30 hover:border-[#d4af37] bg-black/20 hover:bg-[#d4af37]/10 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Explore Courses
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Short Section */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Welcome to Om Tattoo</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">Every Tattoo Tells a <span className="text-[#d4af37]">Story</span></h2>
              <div className="w-20 h-1 bg-[#d4af37] mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At Om Tattoo, we believe every tattoo tells a story. Our studio specializes in custom tattoo designs, permanent tattoos, body piercings, tattoo correction, and tattoo removal services using hygienic equipment and professional techniques.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                We also provide certified tattoo training courses for hobby learners and professional artists.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-[#d4af37] hover:text-white transition-colors font-semibold border-b border-[#d4af37] pb-1">
                Read More About Us <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
              <Image src="/tatto3.webp" alt="Tattoo Artist at work" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Studio Vibe Section (Left Image, Right Content) */}
      <section className="py-24 bg-neutral-900 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image src="/tatto5.webp" alt="Creative Design Process" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Artistic Vision</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Turning Ideas into <span className="text-[#d4af37]">Masterpieces</span></h2>
              <div className="w-20 h-1 bg-[#d4af37] mb-8"></div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our creative process begins with you. We take the time to understand your vision, your story, and the meaning behind the ink you desire.
              </p>
              <div className="space-y-6 mt-8">
                <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-12 h-12 shrink-0 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Consultation</h4>
                    <p className="text-gray-400">Discuss your ideas, placement, and sizing with our expert artists to conceptualize the perfect design.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-12 h-12 shrink-0 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Custom Sketch</h4>
                    <p className="text-gray-400">We create a unique, hand-drawn sketch tailored entirely to your body structure and personal taste.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-12 h-12 shrink-0 bg-[#d4af37]/20 rounded-full flex items-center justify-center">
                    <span className="text-[#d4af37] font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Inking Session</h4>
                    <p className="text-gray-400">Experience a safe, comfortable, and hygienic tattooing session using premium quality inks and equipment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-neutral-950 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">What We Do</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Our Services</h2>
              <div className="w-20 h-1 bg-[#d4af37] mx-auto"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-950 p-8 rounded-xl border border-white/5 hover:border-[#d4af37]/50 transition-all duration-300 group hover:-translate-y-2 shadow-lg"
              >
                <div className="mb-6 p-4 bg-white/5 inline-block rounded-full group-hover:bg-[#d4af37]/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm text-gray-400 group-hover:text-white transition-colors mt-4">
                  Learn more <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-white/10"
            >
              <Image src="/tatto4.webp" alt="Why Choose Om Tattoo" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Excellence in Art</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Why Choose Us</h2>
              <div className="w-20 h-1 bg-[#d4af37] mb-10"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {whyChooseUs.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle2 className="text-[#d4af37] shrink-0 mt-1" size={20} />
                    <span className="text-gray-300 font-medium text-lg">{reason}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0">
                    <Shield className="text-[#d4af37] w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">100% Safe & Hygienic</h4>
                    <p className="text-gray-400">We prioritize your health with sterilized equipment.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
