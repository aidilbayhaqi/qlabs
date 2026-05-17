"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Bot,
  LineChart,
  Sparkles,
  ArrowRight,
  Play,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[image:var(--gradient-glow)] blur-3xl animate-float" />

        <div
          className="absolute bottom-1/4 -right-20 h-[28rem] w-[28rem] rounded-full bg-[image:var(--gradient-glow)] blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Scan Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-32 pt-24 lg:grid-cols-2">
        
        {/* LEFT */}
        <div className="animate-fade-up">
          
          {/* Badge */}
          <div className="glass border-glow inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-xl">
            <Sparkles size={12} className="text-primary animate-pulse" />

            #1 Indonesia's Smart Lead System For Business
          </div>

          {/* Title */}
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-7xl">
            Automasi Bisnis Anda,
            <span className="text-gradient">
              {" "}Lipat Gandakan
            </span>{" "}
            Profitnya
          </h1>

          {/* Desc */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Solusi cerdas untuk manajemen leads dan operasional otomatis.
            Hadirkan layanan pelanggan 24/7 tanpa perlu menambah tim admin.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="glow inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Mulai Konsultasi
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/portfolio"
              className="glass border-glow inline-flex items-center gap-2 rounded-xl px-6 py-3 font-medium text-foreground transition-all duration-300 hover:scale-105 hover:bg-card/60"
            >
              <Play size={14} />
              Lihat Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "120+", l: "Proyek" },
              { v: "98%", l: "Akurasi AI" },
              { v: "24/7", l: "Smart CS" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="animate-fade-up"
                style={{
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                <div className="text-shimmer text-3xl font-bold">
                  {s.v}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative animate-fade-in">
          
          {/* Image */}
          <div className="glass animate-pulse-glow relative overflow-hidden rounded-3xl border-glow">
            <Image
              src="/hero-dashboard.jpg"
              width={1200}
              height={800}
              alt="AI ERP holographic dashboard"
              className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/10" />
          </div>

          {/* Floating Card 1 */}
          <div className="glass border-glow animate-float absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl px-4 py-3">
            <Bot className="text-primary" size={20} />

            <div>
              <div className="text-xs text-muted-foreground">
                AI Response
              </div>

              <div className="text-sm font-medium">
                8.2ms latency
              </div>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div
            className="glass border-glow animate-float absolute -right-4 -top-4 flex items-center gap-3 rounded-2xl px-4 py-3"
            style={{ animationDelay: "1.5s" }}
          >
            <LineChart className="text-primary" size={20} />

            <div>
              <div className="text-xs text-muted-foreground">
                Revenue ↑
              </div>

              <div className="text-sm font-medium">
                +38.4%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}