import { Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Products | Om Tattoo",
  description: "Buy professional tattoo products and accessories for tattoo artists and studios.",
};

export default function TattooProductsPage() {
  const products = [
    "Tattoo Machines",
    "Tattoo Ink",
    "Needles & Cartridges",
    "Gloves & Hygiene Products",
    "Tattoo Aftercare Products",
    "Power Supplies",
    "Practice Skin",
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Tattoo <span className="text-[#d4af37]">Products Sales</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Buy professional tattoo products and accessories for tattoo artists and studios. Quality products for beginners and professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors">
              <Package className="text-[#d4af37] mb-4" size={32} />
              <h3 className="text-lg font-bold text-white">{product}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
