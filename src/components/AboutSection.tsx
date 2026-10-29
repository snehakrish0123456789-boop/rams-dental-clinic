import React from "react";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import { Reveal } from "./Reveal";

export function AboutSection() {
  const handleContactClick = () => {
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to learn more about your dental clinic and available consultation times."
    );
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clinic Image */}
          <Reveal className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#DCE7EE] shadow-xl bg-[#F3F8FB] p-2">
              <img
                src="/src/assets/images/rams_clinic_about_1793282720206.jpg"
                alt="Modern and bright interior room at Rams Dental Clinic in Thiruvanmiyur"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#18344A]/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white border border-[#DCE7EE] p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#2C8C86] flex items-center justify-center font-bold">
                ✓
              </div>
              <div>
                <div className="text-xs font-bold text-[#18344A]">Thiruvanmiyur, Chennai</div>
                <div className="text-[11px] text-[#526575]">East Coast Road (ECR)</div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Copy & Actions */}
          <Reveal className="lg:col-span-6 flex flex-col items-start" delay={0.1}>
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
              ABOUT RAMS DENTAL CLINIC
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18344A] tracking-tight leading-[1.15]">
              Your Smile Deserves Thoughtful Care
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#526575] leading-relaxed">
              At Rams Dental Clinic, we want to make it easy for you to take the next step in caring for your smile. Contact our clinic to discuss your dental concerns, ask about available treatments, and find a suitable appointment time.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-[#18344A] font-medium">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2C8C86] shrink-0" />
                <span>Convenient location in Natesan Colony, ECR, opposite Mega Mart</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2C8C86] shrink-0" />
                <span>Direct WhatsApp and phone connectivity for all patient enquiries</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2C8C86] shrink-0" />
                <span>Clear information on consultations, cleaning, fillings, and tooth restoration</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2.5 text-sm font-bold text-white bg-[#2875AA] hover:bg-[#1f608c] px-6 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact the Clinic</span>
                <ArrowUpRight className="w-4 h-4 text-lime-300" />
              </button>

              <a
                href="#treatments"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2875AA] hover:text-[#18344A] px-4 py-3 transition-colors"
              >
                <span>View Treatment Categories ↓</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
