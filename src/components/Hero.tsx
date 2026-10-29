import React from "react";
import { motion } from "motion/react";
import { Phone, ArrowUpRight, Sparkles, MapPin, HeartHandshake } from "lucide-react";
import { CLINIC_PHONE, CLINIC_PHONE_TEL, openWhatsApp } from "../utils/whatsapp";
import { Navbar } from "./Navbar";

export function Hero() {
  const handleBookClick = () => {
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to book a dental appointment. Please let me know the available slots."
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#74B2DF] via-[#67A9D8] to-[#4D90C2] text-white overflow-hidden flex flex-col justify-between"
    >
      {/* Background Subtle Gradient Blobs & Shimmer */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-3xl pointer-events-none -ml-30 -mb-20" />

      {/* Top Bar Navigation */}
      <Navbar />

      {/* Main Hero Content Grid */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12 my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Copy Block */}
        <motion.div
          className="lg:col-span-6 xl:col-span-5 flex flex-col items-start"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur-md mb-5 text-xs font-bold tracking-[0.18em] uppercase text-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E8F46A] animate-pulse" />
            <span>YOUR SMILE, OUR PRIORITY</span>
          </div>

          {/* Headline */}
          <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] xl:text-[76px] font-normal tracking-[-0.05em] leading-[0.94] text-white mb-6">
            Restore
            <br />
            Your Confident
            <br />
            <span className="font-semibold text-sky-100 italic">Smile.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-blue-50/90 font-normal leading-relaxed max-w-xl mb-8">
            Looking for dental care in Thiruvanmiyur? Connect with Rams Dental Clinic to discuss your dental concerns and appointment options.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <button
              onClick={handleBookClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-[#18344A] bg-white hover:bg-slate-50 px-7 py-3.5 sm:py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-5 h-5 text-[#2875AA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href={CLINIC_PHONE_TEL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 px-6 py-3.5 sm:py-4 rounded-full backdrop-blur-md transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-lime-300" />
              <span>Call {CLINIC_PHONE}</span>
            </a>
          </div>

          {/* Location Kicker */}
          <div className="mt-8 pt-6 border-t border-white/15 w-full flex items-center justify-between text-xs text-blue-100 font-medium">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lime-300 shrink-0" />
              <span>ECR, Opposite Mega Mart, Thiruvanmiyur</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-white/80">
              <HeartHandshake className="w-4 h-4 text-sky-200 shrink-0" />
              <span>Personalized Care</span>
            </div>
          </div>
        </motion.div>

        {/* Right 3D Visual & Floating Cards Block */}
        <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[480px] lg:min-h-[580px]">
          {/* Main 3D Dental Artwork */}
          <motion.div
            className="relative w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-transparent p-2 backdrop-blur-sm">
              <img
                src="/src/assets/images/rams_3d_tooth_1793282719306.jpg"
                alt="Hyper-realistic 3D CGI artwork of a molar tooth with titanium implant and miniature dental professionals"
                className="w-full h-auto object-cover rounded-2xl drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>

            {/* Patient Portrait Overlay Card (Lower-Left Foreground) */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:left-2 bg-white/95 backdrop-blur-md text-[#18344A] p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-white/60 flex items-center gap-3.5 max-w-[280px] sm:max-w-[320px] z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src="/src/assets/images/rams_patient_smile_1793282720276.jpg"
                alt="Smiling patient at Rams Dental Clinic"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover shrink-0 ring-2 ring-[#67A9D8]/30 shadow-md"
              />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-[#2C8C86] font-bold text-xs uppercase tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Your Smile Matters</span>
                </div>
                <span className="text-sm font-extrabold text-[#18344A] leading-tight mt-0.5">
                  Personalized Dental Care
                </span>
                <span className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Thiruvanmiyur, Chennai
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Hero Ticker Strip */}
      <div className="w-full bg-[#18344A]/80 backdrop-blur-md border-t border-white/10 py-3 px-4 sm:px-8 text-xs font-semibold tracking-wider text-blue-100 flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-6 max-w-[1400px] mx-auto w-full justify-between">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2C8C86]" />
            <span>RAMS DENTAL CLINIC</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-2 text-sky-200">
            <span>CARE FOR YOUR SMILE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#E8F46A]" />
          </span>
          <span className="flex items-center gap-2 text-white">
            <MapPin className="w-3.5 h-3.5 text-[#2C8C86]" />
            <span>EAST COAST ROAD (ECR), CHENNAI</span>
          </span>
        </div>
      </div>
    </section>
  );
}
