"use client";

import { useState } from "react";
import {
  Building2,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
} from "lucide-react";

export default function MarketHighlight() {
  const [openCard, setOpenCard] = useState<string | null>("property");

  const markets = [
    {
      id: "property",
      icon: Building2,
      badge: "INDUSTRI PROPERTI",
      title: "Tingkatkan Closing Properti Lebih Cepat",
      desc:
        "AI chatbot & automation system untuk membantu developer, agency, dan marketing properti mendapatkan lebih banyak leads berkualitas dan closing lebih tinggi.",
      features: [
        "Auto respon WhatsApp & Instagram 24/7",
        "Lead qualification otomatis",
        "Follow-up calon pembeli tanpa admin",
        "Dashboard monitoring sales realtime",
        "Integrasi CRM & tim marketing",
      ],
      stats: [
        { label: "Lead Response", value: "< 5 Detik" },
        { label: "Conversion Rate", value: "+38%" },
        { label: "Efisiensi Admin", value: "70%" },
      ],
    },
    {
      id: "clinic",
      icon: Stethoscope,
      badge: "INDUSTRI KLINIK",
      title: "Optimalkan Pelayanan Pasien Secara Otomatis",
      desc:
        "Sistem AI & ERP modern untuk klinik, aesthetic center, dan healthcare business agar pelayanan pasien lebih cepat, profesional, dan terorganisir.",
      features: [
        "Booking & reminder otomatis",
        "AI customer service pasien 24/7",
        "Manajemen jadwal dokter",
        "Rekam data pasien lebih rapi",
        "Laporan operasional realtime",
      ],
      stats: [
        { label: "Response Pasien", value: "24/7" },
        { label: "Efisiensi Operasional", value: "+65%" },
        { label: "Kepuasan Pasien", value: "+92%" },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 h-[320px] w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] md:h-[420px] md:w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-300">
            Target Industri Digiverse
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            Solusi AI & Automation untuk
            <span className="text-gradient"> Bisnis Berkembang</span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
            Dirancang khusus untuk industri dengan kebutuhan customer handling
            tinggi, operasional kompleks, dan target closing yang agresif.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 space-y-5 md:space-y-6">
          {markets.map((market) => {
            const isOpen = openCard === market.id;

            return (
              <div
                key={market.id}
                className="overflow-hidden rounded-2xl md:rounded-3xl border border-blue-500/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500"
              >
                {/* Header */}
                <button
                  onClick={() =>
                    setOpenCard(isOpen ? null : market.id)
                  }
                  className="flex w-full flex-col sm:flex-row sm:items-start justify-between gap-5 p-5 sm:p-6 md:p-8 text-left"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* Icon */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
                      <market.icon
                        className="text-white"
                        size={24}
                      />
                    </div>

                    <div>
                      <div className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-300">
                        {market.badge}
                      </div>

                      <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-white leading-snug">
                        {market.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm md:text-base leading-6 md:leading-7 text-slate-400">
                        {market.desc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle */}
                  <div className="self-end sm:self-auto flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 text-cyan-300">
                    {isOpen ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </div>
                </button>

                {/* Dropdown Content */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-8 border-t border-blue-500/10 px-5 sm:px-6 md:px-8 pb-6 md:pb-8 pt-6 lg:grid-cols-2">
                      {/* Features */}
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-white">
                          Keunggulan Sistem
                        </h4>

                        <div className="mt-4 md:mt-5 space-y-3 md:space-y-4">
                          {market.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                            >
                              <CheckCircle2
                                size={18}
                                className="mt-0.5 shrink-0 text-cyan-400"
                              />

                              <span className="text-sm leading-6 md:leading-7 text-slate-300">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-white">
                          Dampak untuk Bisnis
                        </h4>

                        <div className="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                          {market.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 p-5 md:p-6"
                            >
                              <div className="text-2xl md:text-3xl font-bold text-white">
                                {stat.value}
                              </div>

                              <div className="mt-2 text-sm text-slate-400">
                                {stat.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}