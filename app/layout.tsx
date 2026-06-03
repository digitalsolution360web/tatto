import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Tattoo | Professional Tattoo & Piercing Studio in Visakhapatnam",
  description: "Om Tattoo is a professional tattoo studio in Visakhapatnam offering custom tattoos, body piercing, tattoo removal, and tattoo training courses.",
  keywords: "Tattoo, Piercing, Visakhapatnam, Om Tattoo, Tattoo Training, Tattoo Removal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "OM Tattoos Studio",
  "url": "https://www.omtattoos.in/",
  "logo": "https://www.omtattoos.in/logo.png",
  "image": "https://www.omtattoos.in/images/studio.jpg",
  "description": "OM Tattoos Studio offers permanent tattoos, customized tattoos, tattoo removal, body piercing, tattoo training courses, and tattoo products.",
  "telephone": "+91-8332805594",
  "email": "gauravvaishnaw1987@gmail.com",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Spring Rd, near jain temple, beside sree jain brothers, before, Purna Market, Jagadamba Junction",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530002",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.6868",
    "longitude": "83.2185"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/omtattoosstudio",
    "https://www.facebook.com/uniquetattoos4u",
    "https://www.youtube.com/@omtattoos"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Tattoo Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Permanent Tattoos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Customized Tattoos"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tattoo Removal"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Body Piercing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tattoo Training Course"
        }
      }
    ]
  }
};
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      </head>
      <body className="min-h-screen flex flex-col bg-neutral-950 text-white font-sans selection:bg-[#d4af37] selection:text-black">
        <Navbar />
        <main className="flex-grow pt-[80px] md:pt-[96px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
