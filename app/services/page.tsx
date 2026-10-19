
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Droplet,
  ShieldCheck,
  CheckCircle2,
  Palette,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | OM Tattoos Studio & Piercing Hub",
  description:
    "Explore custom tattoos, black and grey tattoos, fine line art, body piercing, tattoo cover-ups and personalised tattoo consultations in Visakhapatnam.",
};

const services = [
  {
    number: "01",
    title: "Tattoo Services",
    eyebrow: "Art That Tells Your Story",
    description:
      "Turn your ideas, memories and inspirations into meaningful body art. Explore designs ranging from minimal details to elaborate statement pieces.",
    icon: Palette,
    image: "/tatto1.webp",
    imageAlt: "Tattoo artistry at OM Tattoos Studio",
    link: "/permanent-tattoo",
    items: [
      "Custom Tattoo Designs",
      "Black & Grey Tattoos",
      "Realism & Portrait Tattoos",
      "Fine Line Tattoos",
      "Geometric Tattoos",
      "Tribal & Polynesian Tattoos",
      "Spiritual & Religious Tattoos",
      "Name & Lettering Tattoos",
      "Minimalist & Small Tattoos",
      "Mandala & Ornamental Tattoos",
      "Sleeves & Full Arm Tattoos",
      "Full Back Tattoos",
      "Cover-Up Tattoos",
      "Memorial & Couple Tattoos",
      "Colour Tattoos",
      "3D Tattoos",
    ],
  },
  {
    number: "02",
    title: "Piercing Services",
    eyebrow: "Make Your Own Statement",
    description:
      "Discover piercing options that complement your personal style, with guidance to help you choose a suitable placement.",
    icon: Sparkles,
    image: "/tatto1.webp",
    imageAlt: "Body art and piercing services",
    link: "/body-piercing",
    items: [
      "Ear Piercing",
      "Nose Piercing",
      "Helix & Cartilage Piercing",
      "Other Body Piercing Services",
    ],
  },
  {
    number: "03",
    title: "Tattoo Removal",
    eyebrow: "A New Chapter Begins",
    description:
      "Discuss your tattoo removal or lightening goals and explore suitable options for your skin and future tattoo plans.",
    icon: Droplet,
    image: "/tatto1.webp",
    imageAlt: "Tattoo removal consultation",
    link: "/tattoo-removal",
    items: [
      "Tattoo Removal Consultation",
      "Laser Tattoo Removal (if available)",
      "Tattoo Lightening for Cover-Ups",
    ],
  },
  {
    number: "04",
    title: "Aftercare & Consultation",
    eyebrow: "Guidance Beyond The Design",
    description:
      "Get personalised guidance on tattoo concepts, placement, sizing, preparation and aftercare throughout your tattoo journey.",
    icon: ShieldCheck,
    image: "/tatto1.webp",
    imageAlt: "Tattoo consultation and preparation",
    link: "/contact",
    items: [
      "Personalised Tattoo Consultation",
      "Tattoo Placement & Size Guidance",
      "Tattoo Aftercare Guidance",
      "Cover-Up Consultation",
      "Custom Design & Stencil Preparation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-neutral-950 py-16 text-white sm:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* PAGE HERO */}
        <section className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d4af37] sm:text-sm">
            OM Tattoos Studio & Piercing Hub
          </p>

          <h1 className="mb-6 font-serif text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
            Our <span className="text-[#d4af37]">Services</span>
          </h1>

          <div className="mx-auto mb-8 h-1 w-24 bg-[#d4af37]" />

          <p className="text-base leading-8 text-gray-300 sm:text-lg">
            From intricate custom tattoos to piercing and personalised tattoo
            consultations, discover body art services designed around your
            individuality and style.
          </p>
        </section>

        {/* PREMIUM EXPERIENCE */}
        <section className="mb-20 grid grid-cols-1 items-center gap-10 sm:mb-24 lg:grid-cols-2 lg:gap-16">
          {/* LEFT IMAGE */}
          <div className="group relative h-[300px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(212,175,55,0.12)] sm:h-[450px] lg:h-[580px]">
            <Image
              src="/tatto1.webp"
              alt="Tattoo services at OM Tattoos Studio"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5 rounded-xl border border-white/15 bg-black/60 px-5 py-4 backdrop-blur-md sm:bottom-7 sm:left-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d4af37]">
                OM Tattoos Studio
              </p>
              <p className="mt-1 font-serif text-xl text-white sm:text-2xl">
                Your Art. Your Story.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="py-2">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#d4af37]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37] sm:text-sm">
                Premium Experience
              </p>
            </div>

            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Expertise You Can{" "}
              <span className="text-[#d4af37]">Trust</span>
            </h2>

            <div className="mb-7 h-1 w-16 bg-[#d4af37]" />

            <p className="mb-7 text-base leading-8 text-gray-300 sm:text-lg">
              Every tattoo begins with an idea. Our team helps you transform
              that idea into personalised artwork, with attention to design,
              placement, hygiene and aftercare throughout your experience.
            </p>

            <ul className="mb-9 space-y-4">
              {[
                "Hygiene-conscious studio practices",
                "Personalised artwork and design concepts",
                "Placement and sizing guidance",
                "Friendly and professional consultation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#d4af37]"
                    size={22}
                  />
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d4af37] px-6 py-3.5 text-base font-bold text-black transition-all duration-300 hover:bg-[#c5a028] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
            >
              Book an Appointment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>

      {/* SERVICES SECTION */}
      <section
        id="our-services"
        className="relative border-y border-white/[0.06] bg-[#0d0d0d] py-16 sm:py-20 lg:py-24"
      >
        {/* Decorative Glow */}
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-[#d4af37]/[0.04] blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#d4af37]/[0.03] blur-[130px]" />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          {/* SECTION HEADING */}
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-9 bg-[#d4af37]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                  What We Do
                </span>
              </div>

              <h2 className="font-serif text-4xl font-medium sm:text-5xl lg:text-6xl">
                Our <span className="italic text-[#d4af37]">Services</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
              Find the service that matches your style, explore your options
              and connect with our studio to discuss your requirements.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#191919] to-[#101010] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#d4af37]/40 sm:p-8 lg:p-9"
                >
                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#d4af37]/[0.04] blur-3xl transition-colors group-hover:bg-[#d4af37]/[0.10]" />

                  {/* ICON AND NUMBER */}
                  <div className="relative mb-6 flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#d4af37]/25 bg-[#d4af37]/[0.08] text-[#d4af37] transition-colors group-hover:bg-[#d4af37]/[0.15]">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <span className="font-serif text-5xl text-white/[0.12] transition-colors group-hover:text-[#d4af37]/40">
                      {service.number}
                    </span>
                  </div>

                  {/* CARD CONTENT */}
                  <div className="relative">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d4af37] sm:text-xs">
                      {service.eyebrow}
                    </p>

                    <h3 className="font-serif text-2xl font-medium text-white transition-colors group-hover:text-[#e5c65f] sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-neutral-400">
                      {service.description}
                    </p>
                  </div>

                  {/* SERVICE OPTIONS */}
                  <div className="relative mt-7 flex-1 border-t border-white/[0.08] pt-5">
                    <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Available Options
                    </p>

                    <ul className="grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm leading-6 text-neutral-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {service.number === "03" && (
                      <p className="mt-4 text-xs leading-5 text-neutral-500">
                        Laser removal and lightening services are subject to
                        studio availability and consultation.
                      </p>
                    )}

                    {service.number === "02" && (
                      <p className="mt-4 text-xs leading-5 text-neutral-500">
                        Additional body piercing options are subject to
                        availability.
                      </p>
                    )}
                  </div>

                  {/* CARD LINK */}
                  <div className="relative mt-7 border-t border-white/[0.08] pt-5">
                    <Link
                      href={service.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af37] transition-all hover:gap-3 hover:text-white"
                    >
                      Explore Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* HOVER ACCENT */}
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#d4af37] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#191919] to-[#101010] p-6 sm:mt-16 sm:flex-row sm:items-center sm:p-8">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4af37]">
                Have an idea in mind?
              </p>
              <h3 className="font-serif text-2xl text-white sm:text-3xl">
                Let&apos;s Create Something Meaningful.
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-400">
                Talk to our team about your design, placement or preferred
                service.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d4af37]/50 px-6 py-3 text-sm font-semibold text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-black"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}









// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, Heart, Sparkles, Star, Droplet, Shield, MapPin, CheckCircle2 } from "lucide-react";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Our Services | Om Tattoo",
//   description: "Explore our professional tattoo and piercing services including permanent tattoos, customized designs, and tattoo removal.",
// };

// export default function ServicesPage() {
//   const services = [
//     {
//       title: "Permanent Tattoos",
//       desc: "Get stylish and meaningful permanent tattoos created by our experienced tattoo artists. We use premium-quality ink for long-lasting results.",
//       icon: <Heart className="w-8 h-8 text-[#d4af37]" />,
//       link: "/permanent-tattoo"
//     },
//     {
//       title: "Customized Designs",
//       desc: "Turn your ideas into personalized tattoo art based on your personality, story, style, and creativity.",
//       icon: <Sparkles className="w-8 h-8 text-[#d4af37]" />,
//       link: "/customized-tattoo"
//     },
//     {
//       title: "Tattoo Cover-Up",
//       desc: "Hide or transform an old, faded, or unwanted tattoo into a brand new masterpiece with our specialized cover-up techniques.",
//       icon: <Star className="w-8 h-8 text-[#d4af37]" />,
//       link: "/contact"
//     },
//     {
//       title: "Tattoo Removal",
//       desc: "Want to remove or lighten an old tattoo? We offer professional, safe, and effective tattoo removal solutions.",
//       icon: <Droplet className="w-8 h-8 text-[#d4af37]" />,
//       link: "/tattoo-removal"
//     },
//     {
//       title: "Body Piercing",
//       desc: "Safe and hygienic body piercing services performed by trained professionals using sterilized equipment and premium jewelry.",
//       icon: <Shield className="w-8 h-8 text-[#d4af37]" />,
//       link: "/body-piercing"
//     },
//     {
//       title: "Tattoo Products",
//       desc: "Buy professional tattoo products, machines, inks, and accessories directly from our studio.",
//       icon: <MapPin className="w-8 h-8 text-[#d4af37]" />,
//       link: "/tattoo-products"
//     },
//   ];

//   return (
//     <div className="py-20 bg-neutral-950 min-h-screen">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="text-center mb-16 max-w-3xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our <span className="text-[#d4af37]">Services</span></h1>
//           <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
//           <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
//             From intricate custom tattoos to safe piercing and professional tattoo removal, we offer a comprehensive range of body art services.
//           </p>
//         </div>

//         {/* Feature Section with Left Image & Right Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
//           <div className="relative h-[300px] sm:h-[450px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] border border-white/10">
//             <Image src="/tatto1.webp" alt="Tattoo Services" fill className="object-cover" />
//           </div>

//           <div>
//             <h4 className="text-[#d4af37] font-semibold tracking-wider uppercase mb-2">Premium Experience</h4>
//             <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Expertise You Can <span className="text-[#d4af37]">Trust</span></h2>
//             <div className="w-16 h-1 bg-[#d4af37] mb-8"></div>

//             <p className="text-gray-300 text-lg leading-relaxed mb-6">
//               Our studio is equipped with the latest modern equipment, maintaining the highest standards of hygiene and safety for all our procedures.
//             </p>

//             <ul className="space-y-4 mb-10">
//               {["100% Sterilized Equipment", "Award-Winning Artists", "Custom Artwork Creation", "Friendly & Professional Staff"].map((item, i) => (
//                 <li key={i} className="flex items-center gap-3">
//                   <CheckCircle2 className="text-[#d4af37] shrink-0" size={24} />
//                   <span className="text-white font-medium text-lg">{item}</span>
//                 </li>
//               ))}
//             </ul>

//             <Link
//               href="/contact"
//               className="bg-[#d4af37] text-black font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#c5a028] transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
//             >
//               Book an Appointment <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
//             </Link>
//           </div>
//         </div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-neutral-900 p-8 rounded-2xl border border-white/5 hover:border-[#d4af37]/30 transition-all duration-300 group shadow-lg flex flex-col h-full">
//               <div className="mb-6 p-4 bg-white/5 inline-flex rounded-xl group-hover:bg-[#d4af37]/10 transition-colors">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
//               <p className="text-gray-400 leading-relaxed mb-8 flex-grow">{service.desc}</p>
//               <Link href={service.link} className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 group-hover:text-white transition-colors mt-auto">
//                 Learn more <ArrowRight size={16} />
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }