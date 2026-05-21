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
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
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
