import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Star, Droplet, Shield, MapPin, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Om Tattoo",
  description: "Explore our professional tattoo and piercing services including permanent tattoos, customized designs, and tattoo removal.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Permanent Tattoos",
      desc: "Get stylish and meaningful permanent tattoos created by our experienced tattoo artists. We use premium-quality ink for long-lasting results.",
      icon: <Heart className="w-8 h-8 text-[#d4af37]" />,
      link: "/permanent-tattoo"
    },
    {
      title: "Customized Designs",
      desc: "Turn your ideas into personalized tattoo art based on your personality, story, style, and creativity.",
      icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />,
      link: "/customized-tattoo"
    },
    {
      title: "Tattoo Cover-Up",
      desc: "Hide or transform an old, faded, or unwanted tattoo into a brand new masterpiece with our specialized cover-up techniques.",
      icon: <Star className="w-8 h-8 text-[#d4af37]" />,
      link: "/contact"
    },
    {
      title: "Tattoo Removal",
      desc: "Want to remove or lighten an old tattoo? We offer professional, safe, and effective tattoo removal solutions.",
      icon: <Droplet className="w-8 h-8 text-[#d4af37]" />,
      link: "/tattoo-removal"
    },
    {
      title: "Body Piercing",
      desc: "Safe and hygienic body piercing services performed by trained professionals using sterilized equipment and premium jewelry.",
      icon: <Shield className="w-8 h-8 text-[#d4af37]" />,
      link: "/body-piercing"
    },
    {
      title: "Tattoo Products",
      desc: "Buy professional tattoo products, machines, inks, and accessories directly from our studio.",
      icon: <MapPin className="w-8 h-8 text-[#d4af37]" />,
      link: "/tattoo-products"
    },
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our <span className="text-[#d4af37]">Services</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            From intricate custom tattoos to safe piercing and professional tattoo removal, we offer a comprehensive range of body art services.
          </p>
        </div>

        {/* Feature Section with Left Image & Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-white/10">
            <Image src="/tatto1.webp" alt="Tattoo Services" fill className="object-cover" />
          </div>

          <div>
            <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Premium Experience</h4>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Expertise You Can <span className="text-[#d4af37]">Trust</span></h2>
            <div className="w-16 h-1 bg-[#d4af37] mb-8"></div>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our studio is equipped with the latest modern equipment, maintaining the highest standards of hygiene and safety for all our procedures.
            </p>

            <ul className="space-y-4 mb-10">
              {["100% Sterilized Equipment", "Award-Winning Artists", "Custom Artwork Creation", "Friendly & Professional Staff"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#d4af37] shrink-0" size={24} />
                  <span className="text-white font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="bg-[#d4af37] text-black font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book an Appointment <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-900 p-8 rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 group shadow-lg flex flex-col h-full">
              <div className="mb-6 p-4 bg-white/5 inline-flex rounded-xl group-hover:bg-[#d4af37]/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors mt-auto">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
