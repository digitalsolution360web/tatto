import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permanent Tattoos | Om Tattoo",
  description: "Get stylish and meaningful permanent tattoos created by experienced tattoo artists at Om Tattoo.",
};

export default function PermanentTattooPage() {
  const tattooStyles = [
    "Black & Grey Tattoos",
    "Color Tattoos",
    "Portrait Tattoos",
    "Religious Tattoos",
    "Minimal Tattoos",
    "Sleeve Tattoos",
    "Couple Tattoos",
    "Name Tattoos",
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Permanent <span className="text-[#d4af37]">Tattoo Services</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Get stylish and meaningful permanent tattoos created by experienced tattoo artists. We use premium-quality ink and hygienic equipment for long-lasting results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/tatto1.webp" alt="Permanent Tattoo Services" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">Unique Tattoo Styles We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tattooStyles.map((style, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/5 p-4 rounded-lg border border-white/5 hover:border-[#d4af37]/50 transition-colors">
                  <Sparkles className="text-[#d4af37] shrink-0" size={20} />
                  <span className="text-white font-medium">{style}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <Link
                href="/contact"
                className="bg-[#d4af37] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book Your Tattoo Session <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
