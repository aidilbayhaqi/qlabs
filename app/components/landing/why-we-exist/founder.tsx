// components/why/FounderSection.tsx

import Image from "next/image";
import {
  
  Mail,
  ArrowUpRight,
} from "lucide-react";

const founders = [
  {
    name: "Muhammad Aidil Bayhaqi",
    role: "Founder & CEO",
    image: "/founder.jpg",
    reverse: false,
    desc1:
      "Seorang software engineer dan technology strategist yang fokus membangun AI automation, ERP systems, dan digital infrastructure untuk membantu bisnis berkembang lebih cepat.",
    desc2:
      "Berpengalaman dalam pengembangan software modern, cloud architecture, dan AI integration untuk berbagai kebutuhan bisnis modern.",
  },

  {
    name: "Ridho Fadhalah",
    role: "Co-Founder & CTO",
    image: "/founder2.jpg",
    reverse: true,
    desc1:
      "Berfokus pada pengembangan scalable system architecture, backend engineering, dan security infrastructure untuk mendukung pertumbuhan platform digital.",
    desc2:
      "Membangun sistem yang cepat, stabil, dan scalable agar setiap solusi QLabs mampu digunakan oleh bisnis dalam skala besar.",
  },
];

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-[#050b16] py-32">
      
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Leadership Team
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            Orang di balik
            <span className="text-gradient">
              {" "}QLabs
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            QLabs dibangun oleh tim yang memiliki passion dalam teknologi,
            automation, dan pengembangan sistem modern untuk membantu bisnis
            bertumbuh lebih cepat.
          </p>
        </div>

        {/* Founder List */}
        <div className="mt-24 space-y-32">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`grid items-center gap-16 lg:grid-cols-2 ${
                founder.reverse
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              
              {/* IMAGE */}
              <div className="group relative">
                
                {/* Glow */}
                <div className="absolute -inset-6 rounded-[40px] bg-cyan-400/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/20" />

                {/* Card */}
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
                  
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/5 via-transparent to-blue-500/5" />

                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div>
                
                {/* Role */}
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1 text-sm text-slate-300">
                  {founder.role}
                </div>

                {/* Name */}
                <h3 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                  {founder.name}
                </h3>

                {/* Description */}
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  {founder.desc1}
                </p>

                <p className="mt-6 leading-8 text-slate-400">
                  {founder.desc2}
                </p>

                {/* Stats */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/20">
                    <div className="text-3xl font-bold text-cyan-300">
                      120+
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Project & solusi digital dikembangkan
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-cyan-400/20">
                    <div className="text-3xl font-bold text-cyan-300">
                      AI & ERP
                    </div>

                    <p className="mt-2 text-sm text-slate-400">
                      Fokus pada automation & modern systems
                    </p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-10 flex flex-wrap gap-4">
                  
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 hover:text-white"
                  >
                    
                    LinkedIn
                  </a>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-cyan-400/20 hover:text-white"
                  >
                    <Mail size={18} />
                    Contact
                  </a>

                  <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.03]">
                    Lihat Profil
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}