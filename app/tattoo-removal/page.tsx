import Link from "next/link";
import { ArrowRight, Eraser } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Removal Services | Om Tattoo",
  description: "Want to remove or lighten an old tattoo? We offer professional tattoo removal solutions for unwanted tattoos and tattoo corrections.",
};

export default function TattooRemovalPage() {
  const solutions = [
    "Tattoo Fading",
    "Cover-Up Preparation",
    "Old Tattoo Removal",
    "Multi-Session Treatment",
    "Safe Skin Care Guidance",
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Tattoo <span className="text-[#d4af37]">Removal Services</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Want to remove or lighten an old tattoo? We offer professional tattoo removal solutions for unwanted tattoos and tattoo corrections.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-2xl border border-white/5 p-8 md:p-12 shadow-2xl">
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">Our Tattoo Removal Solutions</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-center gap-4 bg-black/40 p-5 rounded-xl border border-white/5">
                <Eraser className="text-[#d4af37]" size={24} />
                <span className="text-gray-200 font-medium">{solution}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 mb-8 italic">
              Safe procedures with expert consultation available.
            </p>
            <Link
              href="/contact"
              className="bg-[#d4af37] text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Schedule Consultation <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
