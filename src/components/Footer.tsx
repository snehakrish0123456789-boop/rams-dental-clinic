import React from "react";
import { Phone, MapPin, MessageCircle, Navigation, ArrowUpRight } from "lucide-react";
import {
  CLINIC_ADDRESS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  MAPS_DIRECTIONS_URL,
  openWhatsApp,
} from "../utils/whatsapp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to book a dental appointment. Please let me know available slots."
    );
  };

  return (
    <footer className="bg-[#18344A] text-white pt-16 pb-24 sm:pb-16 border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 text-white group mb-4">
              <div className="w-10 h-10 rounded-full bg-white/15 border border-white/20 flex items-center justify-center text-white font-bold text-lg">
                <svg
                  className="w-5 h-5 text-white fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 7.5C6 11 8 13.5 9 17.5C9.6 19.9 10.2 22 12 22C13.8 22 14.4 19.9 15 17.5C16 13.5 18 11 18 7.5C18 4.5 15.5 2 12 2ZM12 19.5C11.1 19.5 10.6 17.8 10.1 15.8C9.5 13.4 8 11.2 8 7.5C8 5.6 9.8 4 12 4C14.2 4 16 5.6 16 7.5C16 11.2 14.5 13.4 13.9 15.8C13.4 17.8 12.9 19.5 12 19.5Z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-2xl tracking-tight uppercase">
                  RAMS
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-blue-200 uppercase mt-0.5">
                  DENTAL CLINIC
                </span>
              </div>
            </a>

            <p className="text-sm text-blue-100/80 leading-relaxed max-w-sm mb-6">
              Thoughtful, modern dental care in Thiruvanmiyur, Chennai. Connect with us on WhatsApp or call us directly to discuss your dental concerns.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#24866B] hover:bg-[#1e735b] px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-full transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-lime-300" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-lime-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-blue-100/90 font-medium">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About the Clinic</a>
              </li>
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">Dental Treatments</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Contact Us</a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-white transition-colors">Book Appointment</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact & Map</a>
              </li>
            </ul>
          </div>

          {/* Clinic Information Column */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-lime-300 mb-4">
              Clinic Contact
            </h4>

            <div className="space-y-3.5 text-xs text-blue-100/90 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2C8C86] shrink-0 mt-0.5" />
                <span>{CLINIC_ADDRESS}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2C8C86] shrink-0" />
                <a href={CLINIC_PHONE_TEL} className="font-bold text-white hover:underline">
                  {CLINIC_PHONE}
                </a>
              </div>

              <div className="text-[11px] text-blue-200/70 pt-2 border-t border-white/10">
                Opening hours: 9:00 AM – 9:00 PM (Please confirm with clinic before visiting).
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/70 font-medium">
          <div>
            © {currentYear} Rams Dental Clinic. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href={CLINIC_PHONE_TEL} className="hover:text-white transition-colors">
              Call {CLINIC_PHONE}
            </a>
            <span>·</span>
            <button onClick={handleWhatsApp} className="hover:text-white transition-colors cursor-pointer">
              WhatsApp Appointment
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
