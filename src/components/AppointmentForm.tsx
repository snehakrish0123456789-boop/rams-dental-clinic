import React, { useState } from "react";
import { MessageCircle, Phone, Calendar, Clock, User, FileText, CheckCircle2 } from "lucide-react";
import { CLINIC_PHONE, CLINIC_PHONE_TEL, openWhatsApp } from "../utils/whatsapp";
import { servicesData } from "./ServiceCard";
import { Reveal } from "./Reveal";

export function AppointmentForm() {
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [treatment, setTreatment] = useState("General Dental Consultation");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!patientName.trim()) {
      return;
    }

    const messageLines = [
      "Hello Rams Dental Clinic, I would like to book a dental appointment.",
      "",
      `*Patient Name:* ${patientName.trim()}`,
      patientPhone.trim() ? `*Contact Number:* ${patientPhone.trim()}` : null,
      `*Treatment / Reason:* ${treatment}`,
      preferredDate ? `*Preferred Date:* ${preferredDate}` : "*Preferred Date:* Flexible",
      preferredTime ? `*Preferred Time:* ${preferredTime}` : "*Preferred Time:* Flexible",
      notes.trim() ? `*Additional Notes:* ${notes.trim()}` : null,
      "",
      "Please let me know the available appointment slots. Thank you!",
    ].filter((line) => line !== null);

    const fullMessage = messageLines.join("\n");
    openWhatsApp(fullMessage);
    setIsSubmitted(true);
  };

  const minDate = new Date().toISOString().split("T")[0];

  return (
    <section id="appointment" className="py-20 sm:py-28 bg-[#EBF4FA] border-b border-[#DCE7EE] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Text & Info Column */}
          <Reveal className="lg:col-span-5 flex flex-col items-start">
            <div className="text-[11px] font-bold tracking-[0.2em] text-[#2C8C86] uppercase mb-2">
              BOOKING ENQUIRY
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#18344A] tracking-tight leading-[1.12]">
              Ready to Book Your Visit?
            </h2>

            <p className="mt-4 text-base text-[#526575] leading-relaxed">
              Send Rams Dental Clinic a WhatsApp message to ask about available appointment times. We'll prefill your request details so you can send it in one click.
            </p>

            {/* Direct Phone Call Box */}
            <div className="mt-8 w-full bg-white border border-[#DCE7EE] rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#18344A] uppercase tracking-wider mb-2">
                Prefer to call us directly?
              </h3>
              <p className="text-xs text-[#526575] mb-4">
                Speak directly with the clinic for urgent dental enquiries or immediate slot confirmation.
              </p>
              <a
                href={CLINIC_PHONE_TEL}
                className="inline-flex items-center gap-2.5 text-sm font-bold text-white bg-[#2875AA] hover:bg-[#1d618e] px-5 py-3 rounded-full transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-lime-300" />
                <span>Call {CLINIC_PHONE}</span>
              </a>
            </div>

            {/* Key Assurance Note */}
            <div className="mt-6 flex items-start gap-3 text-xs text-[#526575] leading-relaxed">
              <CheckCircle2 className="w-5 h-5 text-[#2C8C86] shrink-0 mt-0.5" />
              <span>
                Your privacy is respected. No medical records are stored on this website. Your appointment is confirmed once the clinic replies on WhatsApp or phone.
              </span>
            </div>
          </Reveal>

          {/* Right Interactive Form Column */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="bg-white border border-[#DCE7EE] rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DCE7EE]">
                <div>
                  <h3 className="text-xl font-bold text-[#18344A]">Appointment Request</h3>
                  <p className="text-xs text-[#526575] mt-1">
                    Fill in your preferences to generate your WhatsApp enquiry message.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm leading-relaxed flex items-start gap-3 animate-in fade-in duration-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold">WhatsApp Opened!</strong>
                    <span>
                      Please complete your enquiry by pressing <strong>Send</strong> in the WhatsApp window. If WhatsApp didn't open automatically, click the button below again.
                    </span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Patient Name */}
                <div>
                  <label htmlFor="patientName" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#526575] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="patientName"
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full pl-10 pr-4 py-3 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] placeholder:text-slate-400 focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Patient Phone & Treatment Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label htmlFor="patientPhone" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                      Contact Phone <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#526575] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="patientPhone"
                        type="tel"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="e.g. 98840 00000"
                        className="w-full pl-10 pr-4 py-3 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] placeholder:text-slate-400 focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Treatment Category */}
                  <div>
                    <label htmlFor="treatment" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                      Reason / Treatment
                    </label>
                    <div className="relative">
                      <FileText className="w-4 h-4 text-[#526575] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="treatment"
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all appearance-none cursor-pointer"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name}
                          </option>
                        ))}
                        <option value="General Check-up & Consultation">General Check-up & Consultation</option>
                        <option value="Tooth Pain / Emergency Concern">Tooth Pain / Emergency Concern</option>
                        <option value="Other Dental Enquiry">Other Dental Enquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Preferred Date & Preferred Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Date */}
                  <div>
                    <label htmlFor="preferredDate" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#526575] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="preferredDate"
                        type="date"
                        min={minDate}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label htmlFor="preferredTime" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#526575] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="preferredTime"
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all appearance-none cursor-pointer"
                      >
                        <option value="">Flexible Time</option>
                        <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 9:00 PM)">Evening (4:00 PM - 9:00 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-[#18344A] uppercase tracking-wider mb-2">
                    Additional Message <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Mention any specific concerns, pain areas, or questions..."
                    className="w-full p-4 bg-[#F3F8FB] border border-[#DCE7EE] rounded-xl text-sm text-[#18344A] placeholder:text-slate-400 focus:outline-none focus:border-[#2875AA] focus:bg-white focus:ring-2 focus:ring-[#2875AA]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 text-base font-bold text-white bg-[#24866B] hover:bg-[#1d7059] py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Appointment Enquiry on WhatsApp</span>
                </button>

                <p className="text-[11px] text-[#526575] text-center leading-normal">
                  Clicking opens WhatsApp with your prefilled message. You must press <strong>Send</strong> in WhatsApp to deliver it to Rams Dental Clinic.
                </p>
              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
