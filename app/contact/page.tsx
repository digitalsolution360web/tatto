import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Om Tattoo",
  description: "Get in touch for tattoo appointments, piercing services, tattoo removal, or course enrollment.",
};

export default function ContactPage() {
  return (
    <div className="py-20 bg-neutral-950 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">Contact <span className="text-[#d4af37]">Om Tattoo</span></h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-8"></div>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Get in touch for tattoo appointments, piercing services, tattoo removal, or course enrollment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Details */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                <Phone className="text-[#d4af37] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Phone Number</h4>
                  <p className="text-gray-400">083328 05594</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                <Mail className="text-[#d4af37] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Address</h4>
                  <p className="text-gray-400">info@omtattoos.in</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                <MapPin className="text-[#d4af37] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Studio Address</h4>
                  <p className="text-gray-400">Spring Rd, near jain temple, beside sree jain brothers, before, Purna Market, Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530002</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
                <Clock className="text-[#d4af37] mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Working Hours</h4>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-900 p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">Book Appointment Now</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Phone Number</label>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Your Phone" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Service Required</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors appearance-none">
                    <option value="">Select Service</option>
                    <option value="permanent-tattoo">Permanent Tattoo</option>
                    <option value="custom-tattoo">Custom Tattoo</option>
                    <option value="tattoo-removal">Tattoo Removal</option>
                    <option value="piercing">Body Piercing</option>
                    <option value="course">Tattoo Course</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400">Preferred Date</label>
                  <input type="date" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Message</label>
                <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors" placeholder="Tell us about your ideas..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#d4af37] text-black font-bold text-base sm:text-lg px-8 py-3 sm:py-4 rounded-lg hover:bg-[#c5a028] transition-all duration-300 mt-4 shadow-lg">
                Book Appointment Now
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.7616605941394!2d83.2989352!3d17.7087158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943c34359ba5b%3A0x3503c96f2ece38a1!2sOm%20tattoos%20studios%20%26%20Piercing%20Hub!5e0!3m2!1sen!2sin!4v1779289417204!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
