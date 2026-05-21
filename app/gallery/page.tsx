import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tattoo Gallery | Om Tattoo",
  description: "Explore our collection of tattoo artwork, body piercing styles, and student training sessions.",
};

export default function GalleryPage() {
  const categories = ["Custom Tattoos", "Portrait Tattoos", "Sleeve Tattoos", "Piercing Work", "Tattoo Training Classes"];
  
  const galleryImages = [
    { src: "/tatto.webp", alt: "Tattoo Artwork 1" },
    { src: "/tatto1.webp", alt: "Tattoo Artwork 2" },
    { src: "/tatto2.webp", alt: "Tattoo Artwork 3" },
    { src: "/tatto3.webp", alt: "Tattoo Artwork 4" },
    { src: "/tatto4.webp", alt: "Tattoo Artwork 5" },
    { src: "/tatto5.webp", alt: "Tattoo Artwork 6" },
  ];

  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our <span className="text-[#d4af37]">Tattoo Gallery</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Explore our collection of tattoo artwork, body piercing styles, and student training sessions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <span key={i} className="bg-white/5 hover:bg-[#d4af37]/20 border border-white/10 hover:border-[#d4af37] text-white py-2 px-6 rounded-full text-sm font-medium transition-all cursor-pointer">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden group">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
