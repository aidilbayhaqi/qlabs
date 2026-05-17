import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function ManifestoSection() {
    return (

<section className="relative py-28 overflow-hidden bg-black">
  
  {/* Background */}
  <div className="absolute inset-0 bg-grid opacity-[0.03]" />

  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full bg-cyan-500/10 blur-[160px]" />

  <div className="relative mx-auto max-w-6xl px-6">
    
    {/* Heading */}
    <div className="max-w-3xl">
      <div className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl">
        Manifesto Digiverse
      </div>

      <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
        Kami percaya teknologi harus
        <span className="text-gradient">
          {" "}membantu bisnis bertumbuh,
        </span>{" "}
        bukan membuatnya semakin rumit.
      </h2>

      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        Digiverse dibangun dengan keyakinan bahwa AI dan automasi bukan hanya
        milik perusahaan besar. Setiap bisnis berhak memiliki sistem modern
        untuk meningkatkan penjualan, efisiensi operasional, dan pengalaman customer.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-16 grid gap-6">
      {[
        {
          number: "01",
          title: "AI adalah kebutuhan bisnis modern.",
          text:
            "Perusahaan yang bergerak lebih cepat dengan AI akan memenangkan pasar lebih dulu. AI bukan lagi teknologi masa depan — tetapi alat utama untuk meningkatkan penjualan, pelayanan, dan efisiensi hari ini.",
        },
        {
          number: "02",
          title: "ERP seharusnya sederhana & powerful.",
          text:
            "Sistem bisnis yang baik harus mudah dipahami, cepat digunakan, dan langsung memberikan dampak nyata. Kami percaya software enterprise tidak harus rumit ataupun mahal.",
        },
        {
          number: "03",
          title: "Software custom menciptakan keunggulan.",
          text:
            "Setiap bisnis memiliki workflow unik. Karena itu kami membangun solusi yang benar-benar mengikuti proses bisnis Anda, bukan memaksa bisnis mengikuti sistem.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 hover:bg-white/[0.05]"
        >
          
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          </div>

          <div className="relative flex flex-col gap-8 md:flex-row md:items-start">
            
            {/* Number */}
            <div className="shrink-0">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-3xl font-bold text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                {item.number}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">
                {item.text}
              </p>

              {/* Highlight */}
              <div className="mt-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                ⚡ Dirancang untuk bisnis yang ingin tumbuh lebih cepat
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
    )
}
{/* Manifesto / Beliefs */}
