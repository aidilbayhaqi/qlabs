"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "AI Lead Automation",
    description:
      "Otomatisasi distribusi dan follow-up leads menggunakan AI untuk meningkatkan conversion rate dan mempercepat proses closing bisnis Anda.",
    image: "/porto2.png",
  },
  {
    title: "Realtime Analytics Dashboard",
    description:
      "Pantau performa sales, marketing, dan operasional secara realtime dalam satu dashboard modern berbasis AI.",
    image: "/erp2.png",
  },
  {
    title: "Integrated CRM & WhatsApp",
    description:
      "Kelola komunikasi pelanggan secara terpusat melalui integrasi WhatsApp, CRM, dan workflow automation.",
    image: "/erp1.png",
  },
  {
    title: "Smart Financial Reporting",
    description:
      "Laporan keuangan otomatis dan insight bisnis realtime untuk membantu pengambilan keputusan lebih cepat dan akurat.",
    image: "/erp3.png",
  },
];

export default function Featured() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            AI Agent & ERP Platform
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Dashboard Pintar untuk
            <span className="text-gradient">
              {" "}Optimasi Bisnis Modern
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Kelola leads, transaksi, laporan keuangan, hingga performa tim
            dalam satu sistem terintegrasi berbasis AI dan automation.
          </p>
        </div>

        {/* Features */}
        <div className="mt-24 space-y-32">
          {features.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <div
                key={item.title}
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                
                {/* Image */}
                <div className="group relative">
                  
                  {/* Glow */}
                  <div className="absolute -inset-6 rounded-[40px] bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                  {/* Card */}
                  <div className="relative overflow-hidden rounded-[32px] border border-blue-500/10 bg-white/[0.03] backdrop-blur-xl">
                    
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-transparent to-blue-500/5" />

                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={900}
                      className="relative h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  
                  {/* Number */}
                  <div className="text-sm font-medium tracking-[0.3em] text-cyan-300">
                    0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-white md:text-5xl">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-6 text-lg leading-8 text-slate-400">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mt-8 space-y-4">
                    {[
                      "Optimasi workflow bisnis lebih cepat",
                      "Integrasi sistem tanpa ribet",
                      "Efisiensi operasional & biaya",
                    ].map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                      >
                        <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10">
                          <CheckCircle2
                            size={16}
                            className="text-cyan-300"
                          />
                        </div>

                        <span className="text-sm leading-7 text-slate-300">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 font-medium text-cyan-300 transition-all duration-300 hover:gap-3 hover:bg-cyan-400/20 hover:text-white">
                    Pelajari Lebih Lanjut
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}