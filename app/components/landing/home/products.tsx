"use client";

import { Bot, Cpu, Zap, ArrowRight } from "lucide-react";

export default function Products() {
  const items = [
    {
      icon: Bot,
      title: "AI Chatbot Smart Leads",
      desc: "Ubah setiap chat menjadi peluang penjualan. AI kami melayani pelanggan 24/7, menjawab pertanyaan otomatis, hingga mengkualifikasi leads dengan respons layaknya customer service profesional.",
      features: [
        "Terintegrasi WhatsApp, Instagram & Website",
        "Lead scoring otomatis berbasis AI",
        "Auto follow-up & handover ke sales",
      ],
    },
    {
      icon: Cpu,
      title: "ERP Automation System",
      desc: "Sederhanakan seluruh operasional bisnis dalam satu dashboard pintar. Mulai dari keuangan, inventori, HR, hingga laporan realtime — semuanya otomatis dan terintegrasi.",
      features: [
        "Dashboard bisnis realtime",
        "Manajemen SDM & inventori otomatis",
        "Laporan & forecasting berbasis AI",
      ],
    },
    {
      icon: Zap,
      title: "Custom Software Development",
      desc: "Bangun software sesuai kebutuhan bisnis Anda. Dari internal tools, CRM, aplikasi mobile, hingga sistem enterprise dengan performa cepat, aman, dan scalable.",
      features: [
        "Custom web & mobile apps",
        "Integrasi API & sistem existing",
        "Cloud-native & scalable architecture",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-b from-[#071120] via-[#08182b] to-[#050b16]">
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-blue-300 backdrop-blur-md">
            Produk Unggulan Digiverse
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-4xl">
            Solusi Digital untuk
            <span className="text-gradient">
              {" "}Meningkatkan Profit{" "}
            </span>
            dan Efisiensi Bisnis
          </h2>

          <p className="mt-6 max-w-2xl text-md leading-relaxed text-slate-400">
            Kami membantu bisnis berkembang lebih cepat dengan AI Automation,
            ERP System, dan software custom modern yang dirancang untuk
            meningkatkan produktivitas, mempercepat operasional, dan menghasilkan lebih banyak closing.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative overflow-hidden rounded-3xl border border-blue-500/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/[0.05]"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 right-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
              </div>

              <div className="relative p-8">
                
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.45)] transition-transform duration-500 group-hover:scale-110">
                  <it.icon className="text-white" size={26} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-white">
                  {it.title}
                </h3>

                {/* Desc */}
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {it.desc}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {it.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-slate-300"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:gap-3 hover:text-white">
                  Pelajari lebih lanjut
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}