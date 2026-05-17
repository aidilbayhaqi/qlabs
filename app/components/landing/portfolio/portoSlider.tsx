'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const topProjects = [
  {
    title: "AI Chatbot Lead System",
    category: "AI Automation",
    description:
      "Sistem AI chatbot untuk menangani leads, auto follow-up, dan customer support 24/7.",
    image: "/chatbot.png",
  },
  {
    title: "Smart ERP Dashboard",
    category: "ERP System",
    description:
      "Dashboard ERP realtime untuk finance, inventory, sales, dan operasional bisnis.",
    image: "/dashboard.png",
  },
  {
    title: "AI Landing Page Funnel",
    category: "Web Development",
    description:
      "Landing page conversion-focused dengan AI funnel dan sistem tracking modern.",
    image: "/webverse.png",
  },
  {
    title: "Automation Website",
    category: "Business Automation",
    description:
      "Website automation modern untuk meningkatkan efisiensi workflow bisnis.",
    image: "/ecommerce.jpg",
  },
  {
    title: "AI Customer Support",
    category: "Customer Service AI",
    description:
      "AI customer support untuk menjawab pertanyaan pelanggan secara instan dan scalable.",
    image: "/chatbot.png",
  },
];

export function TopPortfolioSlider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % topProjects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + topProjects.length) % topProjects.length);
  };

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-28 text-white">
      
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-[-120px] h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-xl">
              <Sparkles size={14} />
              Featured Projects
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
              Project pilihan dengan
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {" "}impact nyata
              </span>
            </h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl">
          
          <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center p-8 md:p-14">
              
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cyan-300">
                {topProjects[index].category}
              </div>

              <h3 className="mt-8 text-4xl font-bold leading-tight md:text-5xl">
                {topProjects[index].title}
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
                {topProjects[index].description}
              </p>

              {/* Indicators */}
              <div className="mt-10 flex items-center gap-3">
                {topProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index
                        ? "w-10 bg-cyan-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* CTA */}
              <button className="mt-10 inline-flex w-fit items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]">
                Lihat Detail Project
                <ExternalLink size={18} />
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative h-[360px] lg:h-full">
              
              <Image
                src={topProjects[index].image}
                alt={topProjects[index].title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700"
                priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent lg:bg-gradient-to-l" />

              {/* Floating Glow */}
              <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}