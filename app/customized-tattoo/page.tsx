import Image from "next/image";
import { PenTool } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customized Tattoo Designs | Om Tattoo",
  description: "Turn your ideas into personalized tattoo art. Our artists create custom tattoos based on your personality, story, style, and creativity.",
};

export default function CustomizedTattooPage() {
  const categories = [
    "Personal Design Tattoos",
    "Family & Couple Tattoos",
    "Spiritual Tattoos",
    "Signature Tattoos",
    "Artistic Sketch Tattoos",
    "Unique Concept Tattoos",
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Customized <span className="text-[#d4af37]">Tattoo Designs</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Turn your ideas into personalized tattoo art. Our artists create custom tattoos based on your personality, story, style, and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-8">Custom Tattoo Categories</h2>
            <div className="space-y-4">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center gap-4 bg-white/5 p-5 rounded-xl border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center group-hover:bg-[#d4af37]/20 transition-colors">
                    <PenTool className="text-[#d4af37]" size={20} />
                  </div>
                  <span className="text-white font-medium text-lg">{category}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-[#d4af37]/10 rounded-xl border border-[#d4af37]/20">
              <p className="text-[#d4af37] font-medium text-lg italic">
                "We work closely with clients to create one-of-a-kind tattoo designs that perfectly match their vision."
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative h-[300px] sm:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/tatto2.webp" alt="Customized Tattoo Designs" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
