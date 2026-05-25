import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Om Tattoo",
  description: "Om Tattoo is a professional tattoo studio dedicated to creativity, safety, and artistic excellence.",
};

export default function AboutPage() {
  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About <span className="text-[#d4af37]">Om Tattoo</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image src="/tatto5.webp" alt="Om Tattoo Studio" fill className="object-cover" />
          </div>
          
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-6">Creativity, Safety, and Artistic Excellence</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Om Tattoo is a professional tattoo studio dedicated to creativity, safety, and artistic excellence. We provide customized tattoos, piercing services, tattoo removal solutions, and tattoo education for aspiring artists.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our experienced tattoo artists focus on delivering high-quality artwork while maintaining complete hygiene and customer satisfaction.
            </p>
            <p className="text-[#d4af37] text-xl font-medium italic mb-8">
              Whether you want a small meaningful tattoo or a full custom design, we turn your ideas into reality.
            </p>

            <div className="space-y-8 mt-12">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#d4af37] block"></span>
                  Our Mission
                </h3>
                <p className="text-gray-400">
                  To provide safe, creative, and professional tattoo services while helping students build successful careers in tattoo artistry.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#d4af37] block"></span>
                  Our Vision
                </h3>
                <p className="text-gray-400">
                  To become a trusted name in tattoo art and professional tattoo education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
