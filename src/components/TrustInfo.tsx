import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import {
  CLINIC_ADDRESS,
  CLINIC_AREA,
  CLINIC_HOURS,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  MAPS_DIRECTIONS_URL,
} from "../utils/whatsapp";
import { Reveal } from "./Reveal";

export function TrustInfo() {
  return (
    <section className="bg-white py-16 sm:py-20 border-b border-[#DCE7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
            CONVENIENT DENTAL CARE
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#18344A] tracking-tight">
            Dental Care Close to Home
          </h2>
          <p className="mt-3 text-base text-[#526575] leading-relaxed">
            Find Rams Dental Clinic in the Thiruvanmiyur area of Chennai and contact the clinic to discuss your dental care needs.
          </p>
        </Reveal>

        {/* 3 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Location Card */}
          <Reveal delay={0.05}>
            <div className="bg-[#F3F8FB] border border-[#DCE7EE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#67A9D8] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7EE] flex items-center justify-center text-[#2875AA] shadow-sm mb-5 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#18344A]">Location</h3>
                <p className="mt-2 text-sm text-[#526575] leading-relaxed">
                  {CLINIC_ADDRESS}
                </p>
                <div className="mt-2 inline-block text-xs font-semibold text-[#2C8C86] bg-teal-50 px-2.5 py-1 rounded-md">
                  Area: {CLINIC_AREA}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE7EE]/60">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2875AA] hover:text-[#18344A] transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps →</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Call Card */}
          <Reveal delay={0.1}>
            <div className="bg-[#F3F8FB] border border-[#DCE7EE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#67A9D8] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7EE] flex items-center justify-center text-[#2875AA] shadow-sm mb-5 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#18344A]">Direct Phone</h3>
                <p className="mt-2 text-sm text-[#526575] leading-relaxed">
                  Call Rams Dental Clinic directly for enquiries and appointment questions.
                </p>
                <div className="mt-3 text-lg font-extrabold text-[#18344A] tracking-tight">
                  {CLINIC_PHONE}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE7EE]/60">
                <a
                  href={CLINIC_PHONE_TEL}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2875AA] hover:text-[#18344A] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {CLINIC_PHONE} Now →</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Hours Card */}
          <Reveal delay={0.15}>
            <div className="bg-[#F3F8FB] border border-[#DCE7EE] rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full hover:border-[#67A9D8] transition-all group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7EE] flex items-center justify-center text-[#2875AA] shadow-sm mb-5 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#18344A]">Opening Hours</h3>
                <p className="mt-2 text-sm text-[#526575] leading-relaxed">
                  Mon – Sun: 9:00 AM – 9:00 PM
                </p>
                <div className="mt-3 text-xs text-amber-800 bg-amber-50 border border-amber-200/60 p-2.5 rounded-lg font-medium">
                  Hours are subject to clinic confirmation. Please verify before visiting.
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE7EE]/60">
                <span className="text-xs text-[#526575] font-medium">
                  Status: <span className="text-[#2C8C86] font-bold">Open Daily</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
