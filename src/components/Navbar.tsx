import React, { useState } from "react";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { CLINIC_PHONE, CLINIC_PHONE_TEL, openWhatsApp } from "../utils/whatsapp";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Treatments", href: "#treatments" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const handleBookClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to book a dental appointment. Please let me know the available slots."
    );
  };

  return (
    <header className="w-full relative z-30 transition-all duration-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-22 flex items-center justify-between gap-4 border-b border-white/15">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-white group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-lg"
          aria-label="Rams Dental Clinic Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:bg-white/25 transition-colors">
            <svg
              className="w-5 h-5 text-white fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.5 2 6 4.5 6 7.5C6 11 8 13.5 9 17.5C9.6 19.9 10.2 22 12 22C13.8 22 14.4 19.9 15 17.5C16 13.5 18 11 18 7.5C18 4.5 15.5 2 12 2ZM12 19.5C11.1 19.5 10.6 17.8 10.1 15.8C9.5 13.4 8 11.2 8 7.5C8 5.6 9.8 4 12 4C14.2 4 16 5.6 16 7.5C16 11.2 14.5 13.4 13.9 15.8C13.4 17.8 12.9 19.5 12 19.5Z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white uppercase">
              RAMS
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-blue-100 uppercase mt-0.5">
              DENTAL CLINIC
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7 lg:gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-300 hover:after:w-full after:transition-all whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3.5 shrink-0">
          <a
            href={CLINIC_PHONE_TEL}
            className="hidden lg:inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 px-3.5 py-2.5 rounded-full transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-lime-300" />
            <span>{CLINIC_PHONE}</span>
          </a>

          <button
            onClick={handleBookClick}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#18344A] bg-white hover:bg-slate-100 px-5 py-2.5 sm:py-3 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap cursor-pointer"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4 text-[#2875AA]" />
          </button>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <a
            href={CLINIC_PHONE_TEL}
            className="p-2.5 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors"
            aria-label={`Call Rams Dental Clinic at ${CLINIC_PHONE}`}
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2.5 rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors focus-visible:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#18344A]/98 backdrop-blur-xl border-b border-white/10 py-6 px-6 shadow-2xl flex flex-col gap-4 z-40 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-base font-semibold text-white/90 hover:text-white py-2 border-b border-white/10 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-lime-300 text-xs">→</span>
            </a>
          ))}

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={(e) => {
                setIsMenuOpen(false);
                handleBookClick(e);
              }}
              className="w-full flex items-center justify-center gap-2 text-sm font-bold text-[#18344A] bg-white hover:bg-slate-100 py-3.5 rounded-full shadow-lg text-center cursor-pointer"
            >
              <span>Book Appointment on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-[#2875AA]" />
            </button>

            <a
              href={CLINIC_PHONE_TEL}
              className="w-full flex items-center justify-center gap-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 py-3 rounded-full text-center"
            >
              <Phone className="w-4 h-4 text-lime-300" />
              <span>Call {CLINIC_PHONE}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
