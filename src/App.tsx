import React from "react";
import { MessageCircle } from "lucide-react";
import { Hero } from "./components/Hero";
import { TrustInfo } from "./components/TrustInfo";
import { AboutSection } from "./components/AboutSection";
import { TreatmentsSection } from "./components/ServiceCard";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { AppointmentForm } from "./components/AppointmentForm";
import { FAQ } from "./components/FAQ";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { openWhatsApp } from "./utils/whatsapp";

export default function App() {
  const handleStickyBookClick = () => {
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to book a dental appointment. Please let me know the available slots."
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#18344A] selection:bg-[#67A9D8]/30 selection:text-[#18344A]">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Trust & Location Summary */}
        <TrustInfo />

        {/* About Rams Dental Clinic */}
        <AboutSection />

        {/* Dental Treatment Services Grid */}
        <TreatmentsSection />

        {/* Why Contact Us */}
        <WhyChooseUs />

        {/* Appointment Form Section */}
        <AppointmentForm />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Map Directions */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar (Max 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-3 left-3 right-3 z-40">
        <button
          onClick={handleStickyBookClick}
          className="w-full flex items-center justify-center gap-2.5 bg-[#24866B] hover:bg-[#1c6f58] text-white font-bold text-sm py-3.5 px-5 rounded-full shadow-2xl border border-white/20 active:scale-[0.98] transition-transform cursor-pointer"
          aria-label="Book appointment on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-lime-300" />
          <span>Book Appointment on WhatsApp</span>
        </button>
      </div>
    </div>
  );
}
