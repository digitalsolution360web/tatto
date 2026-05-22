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
    { src: "/g.webp", alt: "Tattoo Artwork 7" },
    { src: "/g1.webp", alt: "Tattoo Artwork 8" },
    { src: "/g2.webp", alt: "Tattoo Artwork 9" },
    { src: "/g3.webp", alt: "Tattoo Artwork 10" },
    { src: "/g4.webp", alt: "Tattoo Artwork 11" },
    { src: "/g5.webp", alt: "Tattoo Artwork 12" },
    { src: "/g6.webp", alt: "Tattoo Artwork 13" },
    { src: "/g7.webp", alt: "Tattoo Artwork 14" },
    { src: "/g8.webp", alt: "Tattoo Artwork 15" },
    { src: "/g9.webp", alt: "Tattoo Artwork 16" },
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

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {["All", ...categories].map((cat, i) => (
            <button key={i} className="bg-white/5 hover:bg-[#d4af37] text-white hover:text-black border border-white/10 hover:border-[#d4af37] py-2.5 px-6 md:px-8 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-sm shadow-xl">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((img, index) => (
            <div key={index} className="relative aspect-[4/5] rounded-2xl overflow-hidden group shadow-2xl">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                <p className="text-[#d4af37] font-serif text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.alt}</p>
                <div className="h-0.5 w-12 bg-[#d4af37] mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75"></div>
              </div>
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Om Tattoo Studio
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
