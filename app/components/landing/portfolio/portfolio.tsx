'use client'

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Bot,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

const portfolioItems = [
  {
    title: "Nexar Finance Suite",
    category: "ERP Automation",
    description:
      "Sistem ERP multi-cabang untuk finance, inventory, dan operational reporting secara realtime.",
    image: "/erp-dashboard.jpg",
    icon: Cpu,
  },
  {
    title: "Volta Smart CS",
    category: "AI Chatbot",
    description:
      "AI customer service berbasis LLM yang menangani ribuan chat pelanggan setiap hari.",
    image: "/ai-chatbot.jpg",
    icon: Bot,
  },
  {
    title: "Helix Operations Hub",
    category: "Custom Dashboard",
    description:
      "Dashboard monitoring produksi realtime untuk meningkatkan efisiensi operasional perusahaan.",
    image: "/hero-dashboard.jpg",
    icon: LayoutDashboard,
  },
  {
    title: "Orbit Lead Engine",
    category: "AI Smart Leads",
    description:
      "Sistem lead generation multi-channel dengan AI qualification & automation workflow.",
    image: "/ai-chatbot.jpg",
    icon: Sparkles,
  },
  {
    title: "Quanta People OS",
    category: "HR & ERP System",
    description:
      "Platform SDM modern untuk payroll, KPI tracking, attendance, dan workflow automation.",
    image: "/erp-dashboard.jpg",
    icon: Cpu,
  },
  {
    title: "Axion Insight",
    category: "Business Intelligence",
    description:
      "Dashboard analytics untuk monitoring growth, sales, dan performa bisnis secara realtime.",
    image: "/hero-dashboard.jpg",
    icon: LayoutDashboard,
  },
];

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-140px] top-10 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-100px] right-[-120px] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>


      {/* PORTFOLIO GRID */}
      <section className="relative px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 xl:grid-cols-3">

          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.05]"
            >
              
              {/* Image */}
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1280px) 50vw,
                        33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-black/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-cyan-300 backdrop-blur-xl">
                    <item.icon size={13} />
                    {item.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                
                {/* Glow */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-bold leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                      <ArrowUpRight
                        size={18}
                        className="text-slate-300 transition group-hover:text-cyan-300"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-white"
                  >
                    Lihat Detail Project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Border Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-cyan-400/0 transition duration-500 group-hover:border-cyan-400/20" />
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}