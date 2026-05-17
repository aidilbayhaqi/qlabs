'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Sparkles,
  LineChart,
  Bot,
} from 'lucide-react'

export default function CaseStudyHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] py-20 sm:py-24 lg:py-32">

      {/* GRID */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      {/* GLOW */}
      <div className="absolute left-[-100px] top-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[420px] sm:w-[420px]" />

      <div className="absolute bottom-0 right-[-100px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[420px] sm:w-[420px]" />

      {/* LIGHT */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div className="text-center lg:text-left">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-xl sm:text-xs">
              <Sparkles size={12} />
              Case Studies
            </div>

            {/* TITLE */}
            <h1 className="mx-auto mt-6 max-w-[320px] text-4xl font-bold leading-[1.05] text-white sm:max-w-[600px] sm:text-5xl md:text-6xl lg:mx-0 lg:max-w-none lg:text-7xl">
              Transforming
              <span className="text-gradient">
                {' '}Business Problems{' '}
              </span>
              Into AI-Powered Growth
            </h1>

            {/* DESC */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:text-lg md:leading-8 lg:mx-0">
              Kami membantu perusahaan meningkatkan penjualan,
              mempercepat operasional, dan mengotomatisasi customer
              service menggunakan AI chatbot, ERP dashboard,
              dan sistem digital modern.
            </p>

            {/* STATS */}
            <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 sm:gap-6 lg:mx-0">

              {[
                { value: '120+', label: 'Projects' },
                { value: '98%', label: 'AI Accuracy' },
                { value: '24/7', label: 'Automation' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl"
                >
                  <div className="text-xl font-bold text-cyan-300 sm:text-3xl">
                    {item.value}
                  </div>

                  <div className="mt-1 text-[11px] text-slate-500 sm:text-sm">
                    {item.label}
                  </div>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                href="/case-studies"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]"
              >
                Explore Case Studies

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-medium text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            {/* IMAGE CONTAINER */}
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-2 backdrop-blur-xl sm:p-3">

              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent" />

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[22px]">

                <Image
                  src="/dashboard.png"
                  alt="Dashboard"
                  width={900}
                  height={700}
                  priority
                  className="h-auto w-full object-cover"
                />

              </div>
            </div>

            {/* FLOAT CARD LEFT */}
            <div className="absolute bottom-3 left-3 hidden rounded-2xl border border-cyan-400/20 bg-[#081120]/90 p-3 backdrop-blur-xl md:block">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Bot className="text-cyan-300" size={20} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    AI Automation
                  </p>

                  <h4 className="text-sm font-semibold text-white">
                    24/7 Smart Response
                  </h4>
                </div>

              </div>
            </div>

            {/* FLOAT CARD RIGHT */}
            <div className="absolute right-3 top-3 hidden rounded-2xl border border-blue-400/20 bg-[#081120]/90 p-3 backdrop-blur-xl md:block">

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/10">
                  <LineChart className="text-blue-300" size={20} />
                </div>

                <div>
                  <p className="text-[11px] text-slate-400">
                    Revenue Growth
                  </p>

                  <h4 className="text-sm font-semibold text-white">
                    +38.4% Conversion
                  </h4>
                </div>

              </div>
            </div>

            {/* MOBILE INFO */}
            <div className="mt-5 grid grid-cols-2 gap-3 md:hidden">

              <div className="rounded-2xl border border-cyan-400/10 bg-white/[0.03] p-4 backdrop-blur-xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Bot className="text-cyan-300" size={18} />
                </div>

                <p className="mt-3 text-[11px] text-slate-400">
                  AI Automation
                </p>

                <h4 className="mt-1 text-sm font-semibold text-white">
                  24/7 Smart Response
                </h4>

              </div>

              <div className="rounded-2xl border border-blue-400/10 bg-white/[0.03] p-4 backdrop-blur-xl">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-400/10">
                  <LineChart className="text-blue-300" size={18} />
                </div>

                <p className="mt-3 text-[11px] text-slate-400">
                  Revenue Growth
                </p>

                <h4 className="mt-1 text-sm font-semibold text-white">
                  +38.4% Conversion
                </h4>

              </div>

            </div>

            {/* BIG GLOW */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] sm:h-[500px] sm:w-[500px]" />

          </div>
        </div>
      </div>
    </section>
  )
}