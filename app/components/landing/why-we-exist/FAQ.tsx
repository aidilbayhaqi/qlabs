'use client'

import React, { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  MessageCircleQuestion,
} from "lucide-react";

const faqs = [
  {
    question: "Apa itu AI Automation dan bagaimana membantu bisnis saya?",
    answer:
      "AI Automation membantu bisnis bekerja lebih cepat dan efisien melalui otomatisasi customer service, lead management, follow-up, hingga operasional internal menggunakan teknologi AI modern.",
  },
  {
    question: "Apakah chatbot bisa terintegrasi dengan WhatsApp?",
    answer:
      "Ya. Sistem kami dapat terhubung dengan WhatsApp, Instagram, website, hingga CRM sehingga semua komunikasi pelanggan dapat dikelola dalam satu dashboard.",
  },
  {
    question: "Apakah saya bisa request sistem custom?",
    answer:
      "Tentu. Kami membangun solusi sesuai kebutuhan bisnis Anda, mulai dari AI chatbot, ERP system, dashboard analytics, hingga aplikasi custom berbasis web maupun mobile.",
  },
  {
    question: "Berapa lama proses pengerjaan project?",
    answer:
      "Durasi pengerjaan bergantung pada kompleksitas project. Untuk implementasi standar biasanya memerlukan waktu 1–4 minggu.",
  },
  {
    question: "Apakah ada support setelah project selesai?",
    answer:
      "Ya. Kami menyediakan maintenance, monitoring, dan technical support agar sistem tetap optimal dan scalable seiring pertumbuhan bisnis Anda.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#050816] py-28 text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
            <Sparkles size={14} />
            Frequently Asked Questions
          </div>

          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
            Pertanyaan yang
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}sering ditanyakan
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            Semua yang perlu Anda ketahui tentang AI Automation,
            ERP System, chatbot bisnis, dan solusi digital Digiverse.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-cyan-400/30 bg-white/[0.05]"
                    : "border-white/10 bg-white/[0.03] hover:border-cyan-400/20"
                } backdrop-blur-xl`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div
                      className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
                        isOpen
                          ? "bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      <MessageCircleQuestion
                        size={18}
                        className={isOpen ? "text-white" : "text-cyan-300"}
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-base font-semibold md:text-lg">
                        {faq.question}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Klik untuk melihat jawaban
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronDown
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 text-cyan-300"
                        : "text-slate-500"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/10 px-6 pb-6 pt-5">
                      <p className="leading-relaxed text-slate-300">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-8 text-center backdrop-blur-xl">
          <h3 className="text-2xl font-bold">
            Masih punya pertanyaan?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Tim kami siap membantu Anda memahami solusi AI dan ERP
            terbaik untuk bisnis Anda.
          </p>

          <button className="mt-6 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </section>
  );
}