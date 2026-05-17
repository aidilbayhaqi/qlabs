"use client";

import {
  Clock,
  Brain,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function ExperienceSection() {
  const pillars = [
    {
      icon: Clock,
      number: "01",
      title: "Respons Otomatis 24/7",
      desc: "AI selalu aktif menjawab pelanggan kapan pun dibutuhkan tanpa membuat customer menunggu.",
      points: [
        {
          h: "Balasan Instan",
          t: "AI langsung merespon chat pelanggan hanya dalam hitungan detik.",
        },
        {
          h: "Aktif Nonstop",
          t: "Tetap melayani customer bahkan di luar jam operasional bisnis.",
        },
        {
          h: "Lead Tidak Hilang",
          t: "Semua inquiry otomatis tercatat dan diproses oleh sistem.",
        },
      ],
    },
    {
      icon: Brain,
      number: "02",
      title: "AI Human-Like Conversation",
      desc: "Percakapan AI terasa natural, profesional, dan memahami kebutuhan customer secara lebih personal.",
      points: [
        {
          h: "Bahasa Natural",
          t: "Respon AI terasa seperti customer service manusia profesional.",
        },
        {
          h: "Paham Konteks",
          t: "AI memahami pertanyaan dan kebutuhan customer secara lebih akurat.",
        },
        {
          h: "Lebih Persuasif",
          t: "Meningkatkan kepercayaan pelanggan dan potensi closing.",
        },
      ],
    },
    {
      icon: MessageSquare,
      number: "03",
      title: "Smart Lead Qualification",
      desc: "AI membantu menyaring leads berkualitas sehingga tim sales fokus pada calon customer potensial.",
      points: [
        {
          h: "Auto Lead Scoring",
          t: "Lead dinilai otomatis berdasarkan intent dan tingkat urgensi.",
        },
        {
          h: "Routing Otomatis",
          t: "Lead potensial langsung diarahkan ke sales yang tepat.",
        },
        {
          h: "Multi Channel",
          t: "Terintegrasi dengan WhatsApp, Instagram, website, dan email.",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#071120] via-[#08182b] to-[#050b16] py-32">
      
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Customer Experience
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Pengalaman Customer yang
            <span className="text-gradient">
              {" "}Lebih Cepat & Modern
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Sistem AI kami dirancang untuk meningkatkan pengalaman pelanggan,
            mempercepat respon, dan membantu bisnis mendapatkan lebih banyak closing secara otomatis.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 space-y-8">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-3xl border border-blue-500/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/20"
            >
              
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              <div className="relative grid gap-10 p-8 lg:grid-cols-[320px_1fr] lg:p-10">
                
                {/* Left */}
                <div>
                  
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-[0_0_30px_rgba(59,130,246,0.35)] transition-transform duration-300 group-hover:scale-105">
                    <p.icon className="text-white" size={28} />
                  </div>

                  {/* Number */}
                  <div className="mt-6 text-sm font-medium tracking-[0.3em] text-cyan-300">
                    {p.number}
                  </div>

                  {/* Title */}
                  <h3 className="mt-3 text-3xl font-bold text-white">
                    {p.title}
                  </h3>

                  {/* Desc */}
                  <p className="mt-4 leading-8 text-slate-400">
                    {p.desc}
                  </p>
                </div>

                {/* Right */}
                <div className="grid gap-5 md:grid-cols-3">
                  {p.points.map((pt) => (
                    <div
                      key={pt.h}
                      className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/20 hover:bg-white/[0.04]"
                    >
                      
                      {/* Icon */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                        <CheckCircle2
                          size={18}
                          className="text-cyan-300"
                        />
                      </div>

                      {/* Content */}
                      <h4 className="mt-5 text-lg font-semibold text-white">
                        {pt.h}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {pt.t}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}