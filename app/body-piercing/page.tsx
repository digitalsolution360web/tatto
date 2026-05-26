import { Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Body Piercing | Om Tattoo",
  description: "Safe and hygienic body piercing services performed by trained professionals at Om Tattoo.",
};

export default function BodyPiercingPage() {
  const piercingServices = [
    "Ear Piercing",
    "Nose Piercing",
    "Lip Piercing",
    "Eyebrow Piercing",
    "Navel Piercing",
    "Cartilage Piercing",
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Professional <span className="text-[#d4af37]">Body Piercing</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Safe and hygienic body piercing services performed by trained professionals. We use sterilized equipment and premium-quality jewelry for safety and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {piercingServices.map((service, index) => (
            <div key={index} className="bg-white/5 p-8 rounded-xl border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 text-center group">
              <div className="w-16 h-16 mx-auto rounded-full bg-black flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/10 transition-colors">
                <Activity className="text-[#d4af37]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
