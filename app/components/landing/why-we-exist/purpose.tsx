// components/why/FoundationSection.tsx

import {
  Compass,
  Eye,
  Heart,
  Target,
  ArrowUpRight,
} from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Misi",
    subtitle: "Mendorong transformasi digital bisnis Indonesia",
    text: "Kami membantu perusahaan bertumbuh lebih cepat melalui AI automation, ERP modern, dan software custom yang efisien, scalable, dan mudah digunakan.",
  },
  {
    icon: Eye,
    title: "Visi",
    subtitle: "Menjadi partner teknologi jangka panjang",
    text: "Membangun ekosistem digital yang memungkinkan bisnis Indonesia bersaing di era AI dengan sistem yang modern, cepat, dan terintegrasi.",
  },
  {
    icon: Heart,
    title: "Value",
    subtitle: "Teknologi yang dibangun dengan kualitas",
    text: "Kami percaya pada transparansi, kualitas produk, inovasi berkelanjutan, dan hubungan jangka panjang yang saling bertumbuh bersama client.",
  },
  {
    icon: Compass,
    title: "Pendekatan",
    subtitle: "Berangkat dari problem nyata bisnis",
    text: "Kami tidak hanya membangun software, tetapi merancang solusi yang benar-benar sesuai dengan workflow dan kebutuhan operasional perusahaan Anda.",
  },
];

export default function FoundationSection() {
  return (
    <section className="relative overflow-hidden py-32 bg-black">
      
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute left-[-120px] top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute right-[-120px] bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="max-w-3xl">
          
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Foundation
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Yang menjadi
            <span className="text-gradient">
              {" "}fondasi utama
            </span>
            {" "}Digiverse
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Kami percaya teknologi bukan hanya tentang software,
            tetapi bagaimana sistem mampu mempercepat pertumbuhan,
            meningkatkan efisiensi, dan menciptakan pengalaman bisnis yang lebih baik.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30"
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>

              {/* Number */}
              <div className="absolute right-6 top-6 text-5xl font-bold text-white/[0.04]">
                0{index + 1}
              </div>

              <div className="relative">
                
                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                  <item.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="mt-8">
                  
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium tracking-wide text-cyan-300">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                      <ArrowUpRight
                        size={18}
                        className="text-slate-300 group-hover:text-cyan-300"
                      />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="mt-6 h-px w-full bg-gradient-to-r from-cyan-400/20 to-transparent" />

                  {/* Description */}
                  <p className="mt-6 leading-8 text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}