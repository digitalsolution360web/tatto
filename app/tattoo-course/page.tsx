import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Medal } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Tattoo Training Courses | Om Tattoo",
  description: "Learn tattoo art from industry professionals with practical training and certification. Beginner to advanced courses available.",
};

export default function TattooCoursePage() {
  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Professional <span className="text-[#d4af37]">Tattoo Training</span> Courses</h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg leading-relaxed">
            Learn tattoo art from industry professionals with practical training and certification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
          {/* Basic Course */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-white/5 p-4 rounded-bl-3xl group-hover:bg-[#d4af37]/10 transition-colors">
              <BookOpen className="text-[#d4af37]" size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Basic Hobby Course</h3>
            <p className="text-gray-400 mb-6 min-h-[3rem]">Perfect for beginners interested in tattoo art basics.</p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Tattoo Introduction</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Safety & Hygiene</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Basic Machine Handling</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Practice on Artificial Skin</li>
            </ul>
          </div>

          {/* Intermediate Course */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-[#d4af37]/50 relative shadow-[0_0_20px_rgba(212,175,55,0.15)] transform lg:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#d4af37] text-black text-sm font-bold py-1 px-4 rounded-b-lg">
              MOST POPULAR
            </div>
            <div className="absolute top-4 right-4 bg-white/5 p-4 rounded-full">
              <GraduationCap className="text-[#d4af37]" size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4 mt-6">Intermediate Course</h3>
            <p className="text-gray-400 mb-6 min-h-[3rem]">Develop professional tattoo skills with advanced techniques.</p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Shading Techniques</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Line Work Practice</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Design Understanding</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Live Practice Sessions</li>
            </ul>
          </div>

          {/* Advanced Course */}
          <div className="bg-neutral-900 rounded-2xl p-8 border border-white/5 hover:border-[#d4af37]/30 transition-all shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-white/5 p-4 rounded-bl-3xl group-hover:bg-[#d4af37]/10 transition-colors">
              <Medal className="text-[#d4af37]" size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-white mb-4">Advanced Vocational Training</h3>
            <p className="text-gray-400 mb-6 min-h-[3rem]">Professional career-focused tattoo training with certification.</p>
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Advanced Tattoo Techniques</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Client Handling</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Custom Design Creation</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Professional Setup Guidance</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Portfolio Development</li>
              <li className="flex items-center gap-2"><span className="text-[#d4af37] text-xl">•</span> Certification</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#d4af37]/5 rounded-2xl border border-[#d4af37]/20 p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-white mb-8">Course Benefits</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Practical Training", "Expert Guidance", "Certification", "Career Support", "Professional Environment"].map((benefit, i) => (
              <span key={i} className="bg-black/40 text-gray-300 py-2 px-6 rounded-full border border-white/10 text-sm font-medium">
                {benefit}
              </span>
            ))}
          </div>
          <Link
            href="/contact"
            className="bg-[#d4af37] text-black font-bold text-base sm:text-lg px-6 py-3 sm:px-10 sm:py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto"
          >
            Enroll Now <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
