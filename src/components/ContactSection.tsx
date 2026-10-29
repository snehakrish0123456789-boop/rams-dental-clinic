import React from "react";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Building2 } from "lucide-react";
import {
  CLINIC_ADDRESS,
  CLINIC_AREA,
  CLINIC_PHONE,
  CLINIC_PHONE_TEL,
  MAPS_DIRECTIONS_URL,
  openWhatsApp,
} from "../utils/whatsapp";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const handleWhatsApp = () => {
    openWhatsApp(
      "Hello Rams Dental Clinic, I would like to get in touch regarding clinic timings and appointment options."
    );
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F3F8FB] border-b border-[#DCE7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
            LOCATION & CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18344A] tracking-tight">
            Visit Rams Dental Clinic
          </h2>
          <p className="mt-3 text-base text-[#526575] leading-relaxed">
            Get directions or reach out to us via call or WhatsApp. We are here to help with your dental concerns.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Box */}
          <Reveal className="lg:col-span-7 bg-white border border-[#DCE7EE] rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg flex flex-col justify-between">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 pb-6 mb-6 border-b border-[#DCE7EE]">
                <div className="w-12 h-12 rounded-2xl bg-[#F3F8FB] border border-[#DCE7EE] text-[#2875AA] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#18344A] tracking-tight">
                    RAMS DENTAL CLINIC
                  </h3>
                  <span className="text-xs font-semibold text-[#2C8C86] uppercase tracking-wider">
                    Thiruvanmiyur · Chennai
                  </span>
                </div>
              </div>

              {/* Details List */}
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#2C8C86] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-[#18344A] uppercase tracking-wider">
                      Full Address
                    </strong>
                    <p className="text-sm sm:text-base text-[#526575] mt-1 leading-relaxed">
                      {CLINIC_ADDRESS}
                    </p>
                    <span className="inline-block text-xs font-semibold text-[#2875AA] bg-blue-50 px-2.5 py-1 rounded-md mt-2">
                      Area: {CLINIC_AREA}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#2C8C86] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-[#18344A] uppercase tracking-wider">
                      Phone Number
                    </strong>
                    <a
                      href={CLINIC_PHONE_TEL}
                      className="text-lg font-extrabold text-[#18344A] hover:text-[#2875AA] transition-colors mt-1 inline-block"
                    >
                      {CLINIC_PHONE}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#2C8C86] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-xs font-bold text-[#18344A] uppercase tracking-wider">
                      Opening Hours
                    </strong>
                    <p className="text-sm text-[#526575] mt-1">
                      9:00 AM – 9:00 PM <span className="text-amber-800 text-xs font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 ml-1">(Subject to confirmation)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="mt-10 pt-6 border-t border-[#DCE7EE] flex flex-wrap items-center gap-3">
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[180px] inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#2875AA] hover:bg-[#1d608d] py-3.5 px-5 rounded-full transition-all shadow-md text-center"
              >
                <Navigation className="w-4 h-4 text-lime-300" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={handleWhatsApp}
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-[#24866B] hover:bg-[#1c6f58] py-3.5 px-5 rounded-full transition-all shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href={CLINIC_PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 text-sm font-bold text-[#18344A] bg-[#F3F8FB] hover:bg-slate-200 border border-[#DCE7EE] py-3.5 px-5 rounded-full transition-all"
              >
                <Phone className="w-4 h-4 text-[#2875AA]" />
                <span>Call Now</span>
              </a>
            </div>
          </Reveal>

          {/* Interactive Google Maps Embed / Card */}
          <Reveal className="lg:col-span-5 bg-white border border-[#DCE7EE] rounded-3xl p-4 shadow-lg flex flex-col h-full min-h-[380px]" delay={0.1}>
            <div className="relative w-full h-full min-h-[320px] rounded-2xl overflow-hidden bg-slate-100 border border-[#DCE7EE]">
              <iframe
                title="Rams Dental Clinic Location Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  CLINIC_ADDRESS
                )}&output=embed`}
                className="w-full h-full min-h-[320px] border-0 rounded-2xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#DCE7EE] shadow-md text-xs font-bold text-[#18344A] flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#2C8C86]" />
                <span>Rams Dental Clinic · ECR</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
