import React from "react";
import { ArrowUpRight, MessageCircle, Sparkles, Stethoscope, ShieldCheck, Zap, Gem, Sparkle } from "lucide-react";
import { openWhatsApp } from "../utils/whatsapp";
import { Reveal } from "./Reveal";

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "consultation",
    number: "01",
    name: "General Dental Consultation",
    description: "Discuss your dental concerns, receive a initial oral check-up, and plan suitable next steps with the clinic.",
    iconName: "Stethoscope",
  },
  {
    id: "cleaning",
    number: "02",
    name: "Teeth Cleaning",
    description: "Enquire about professional scaling and plaque removal to maintain fresh breath and healthy gums.",
    iconName: "Sparkles",
  },
  {
    id: "fillings",
    number: "03",
    name: "Tooth-Coloured Fillings",
    description: "Ask the clinic about aesthetic composite fillings to repair cavities seamlessly with natural-looking materials.",
    iconName: "ShieldCheck",
  },
  {
    id: "root-canal",
    number: "04",
    name: "Root Canal Treatment",
    description: "Discuss tooth pain or infection and ask whether a root canal examination is appropriate for pain relief.",
    iconName: "Zap",
  },
  {
    id: "crowns-bridges",
    number: "05",
    name: "Dental Crowns and Bridges",
    description: "Enquire about custom crowns or bridges to strengthen weakened teeth or replace missing tooth structures.",
    iconName: "Gem",
  },
  {
    id: "cosmetic",
    number: "06",
    name: "Cosmetic Dentistry",
    description: "Ask about options for enhancing your smile aesthetics, teeth whitening, and smile alignment enquiries.",
    iconName: "Sparkle",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="w-5 h-5 text-[#2875AA]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#2875AA]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#2875AA]" />,
  Zap: <Zap className="w-5 h-5 text-[#2875AA]" />,
  Gem: <Gem className="w-5 h-5 text-[#2875AA]" />,
  Sparkle: <Sparkle className="w-5 h-5 text-[#2875AA]" />,
};

export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const handleEnquire = () => {
    openWhatsApp(
      `Hello Rams Dental Clinic, I would like to enquire about ${service.name}. Please share more information and available appointment slots.`
    );
  };

  return (
    <Reveal delay={index * 0.08}>
      <article className="bg-white border border-[#DCE7EE] rounded-2xl p-7 flex flex-col justify-between h-full hover:border-[#67A9D8] hover:shadow-xl transition-all duration-300 group">
        <div>
          {/* Header Row */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-extrabold text-[#2C8C86] tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              {service.number}
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#F3F8FB] border border-[#DCE7EE] flex items-center justify-center group-hover:bg-[#2875AA] group-hover:text-white group-hover:border-[#2875AA] transition-colors">
              {iconMap[service.iconName] || <Sparkles className="w-5 h-5" />}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#18344A] group-hover:text-[#2875AA] transition-colors">
            {service.name}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm text-[#526575] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* CTA Link */}
        <div className="mt-8 pt-5 border-t border-[#DCE7EE]/70">
          <button
            onClick={handleEnquire}
            className="w-full inline-flex items-center justify-between text-xs font-bold text-[#2875AA] hover:text-[#18344A] group-hover:translate-x-0.5 transition-all cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-[#2C8C86]" />
              <span>Enquire on WhatsApp</span>
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#2875AA] group-hover:text-[#2C8C86]" />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

export function TreatmentsSection() {
  return (
    <section id="treatments" className="py-20 sm:py-28 bg-[#F3F8FB] border-y border-[#DCE7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
            PROVISIONAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18344A] tracking-tight">
            Dental Care for Your Smile
          </h2>
          <p className="mt-4 text-base text-[#526575] leading-relaxed">
            Explore common dental care categories below and contact Rams Dental Clinic on WhatsApp to enquire about specific service availability and appointment times.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Note */}
        <Reveal className="mt-12 text-center" delay={0.3}>
          <p className="text-xs text-[#526575] bg-white border border-[#DCE7EE] max-w-xl mx-auto p-4 rounded-xl shadow-sm">
            💡 Service categories are subject to confirmation by Rams Dental Clinic during your consultation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
