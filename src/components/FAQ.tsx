import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_PHONE,
  MAPS_DIRECTIONS_URL,
} from "../utils/whatsapp";
import { Reveal } from "./Reveal";

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList: FAQItem[] = [
    {
      question: "How can I book an appointment?",
      answer:
        "You can easily book an appointment enquiry by clicking any 'Book Appointment' button on this page. It will build a formatted message and open WhatsApp with Rams Dental Clinic (+91 98840 53440). Send the message, and the clinic team will confirm your slot.",
    },
    {
      question: "Where is Rams Dental Clinic located?",
      answer: (
        <span>
          Rams Dental Clinic is located at <strong>{CLINIC_ADDRESS}</strong> in the Kottivakkam / Thiruvanmiyur area of Chennai.
        </span>
      ),
    },
    {
      question: "What are the clinic's opening hours?",
      answer: (
        <span>
          The reported opening hours are <strong>9:00 AM – 9:00 PM</strong> daily. Please note that opening hours are subject to confirmation with the clinic. We recommend sending a quick WhatsApp message or calling before your visit.
        </span>
      ),
    },
    {
      question: "How can I ask about available dental treatments?",
      answer:
        "You can explore the treatment categories on our website and click 'Enquire on WhatsApp' under any treatment (e.g. teeth cleaning, root canal, fillings). This sends a specific enquiry directly to the clinic.",
    },
    {
      question: "How can I contact the clinic directly?",
      answer: (
        <span>
          You can call Rams Dental Clinic directly on <strong>{CLINIC_PHONE}</strong> or message on WhatsApp at <strong>+91 98840 53440</strong>.
        </span>
      ),
    },
    {
      question: "How do I get directions to the clinic?",
      answer: (
        <span>
          Click the <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="text-[#2875AA] underline font-semibold">Get Directions</a> link on this site to automatically open Google Maps with the clinic's supplied address opposite Mega Mart on East Coast Road.
        </span>
      ),
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-b border-[#DCE7EE]">
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center mb-14">
          <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
            COMMON QUESTIONS
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#18344A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#526575] leading-relaxed">
            Find quick answers regarding appointments, location, and contacting Rams Dental Clinic.
          </p>
        </Reveal>

        <div className="space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 0.05}>
                <div
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#2875AA] bg-[#F3F8FB] shadow-md"
                      : "border-[#DCE7EE] bg-white hover:border-[#67A9D8]"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#18344A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2875AA] cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-[#2C8C86] shrink-0" />
                      <span>{item.question}</span>
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen ? "bg-[#2875AA] text-white rotate-180" : "bg-[#F3F8FB] text-[#526575]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-[#526575] leading-relaxed border-t border-[#DCE7EE]/60 pt-4 animate-in fade-in duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
