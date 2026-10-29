import React from "react";
import { MapPin, MessageSquareText, Info } from "lucide-react";
import { Reveal } from "./Reveal";

export function WhyChooseUs() {
  const reasons = [
    {
      number: "01",
      icon: <MapPin className="w-6 h-6 text-[#2C8C86]" />,
      title: "Convenient Location",
      text: "Easily accessible in Natesan Colony, East Coast Road (ECR), directly opposite Mega Mart in Thiruvanmiyur.",
    },
    {
      number: "02",
      icon: <MessageSquareText className="w-6 h-6 text-[#2C8C86]" />,
      title: "Direct Appointment Enquiries",
      text: "Connect directly via phone or WhatsApp without complicated third-party booking systems.",
    },
    {
      number: "03",
      icon: <Info className="w-6 h-6 text-[#2C8C86]" />,
      title: "Clear Treatment Information",
      text: "Discuss your dental concerns and ask about suitable options before committing to an in-person visit.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-white border-b border-[#DCE7EE]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
            WHY CONTACT US
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18344A] tracking-tight">
            A Simple Way to Get Started
          </h2>
          <p className="mt-4 text-base text-[#526575] leading-relaxed">
            We make dental care enquiries straightforward and accessible for patients in Kottivakkam, Thiruvanmiyur, and the wider Chennai ECR area.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <div className="bg-[#F3F8FB] border border-[#DCE7EE] rounded-2xl p-8 flex flex-col justify-between h-full hover:border-[#67A9D8] transition-all group">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#DCE7EE] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-sm font-extrabold text-[#2875AA] font-mono">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#18344A] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#526575] leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE7EE]/60">
                  <span className="text-xs font-semibold text-[#2C8C86]">
                    Rams Dental Care Protocol ✓
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
