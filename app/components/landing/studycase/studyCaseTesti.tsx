'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Clock3,
  Quote,
  TrendingUp,
  Users,
  Sparkles,
} from 'lucide-react'

const cases = [
  {
    client: 'RetailHub',
    industry: 'Retail / E-commerce',
    tagline: 'Website Modern + ERP Multi-cabang',

    challenge:
      'Manajemen 47 cabang masih menggunakan pelaporan manual dan website lama yang tidak mobile-friendly.',

    solution:
      'Kami membangun ERP cloud-native terintegrasi untuk finance, inventory, dan HR, sekaligus redesign website yang modern, cepat, dan SEO-ready.',

    quote:
      'Dashboard ERP-nya sekarang jadi tools wajib tim operations kami. Semua data lebih cepat dan rapi.',

    person: 'Andi Pratama',
    role: 'Founder, RetailHub',

    results: [
      {
        icon: Clock3,
        value: '7 Hari → 4 Jam',
        label: 'Closing Bulanan',
      },
      {
        icon: TrendingUp,
        value: '+32%',
        label: 'Margin Operasional',
      },
      {
        icon: Users,
        value: '47 Cabang',
        label: 'Terintegrasi',
      },
    ],
  },

  {
    client: 'PropertyPro',
    industry: 'Property / Real Estate',
    tagline: 'AI Smart Leads & Property Recommendation',

    challenge:
      'Sales kewalahan menangani ribuan inquiry properti setiap hari dan banyak leads hilang di luar jam kerja.',

    solution:
      'Kami membangun AI chatbot berbasis LLM yang dapat memahami kebutuhan buyer dan memberikan rekomendasi properti secara realtime.',

    quote:
      'Sales kami sekarang fokus closing, bukan lagi filtering leads satu per satu.',

    person: 'Dewi Lestari',
    role: 'Head of Sales, PropertyPro',

    results: [
      {
        icon: Clock3,
        value: '92%',
        label: 'Inquiry Otomatis',
      },
      {
        icon: TrendingUp,
        value: '3.4x',
        label: 'Lead Conversion',
      },
      {
        icon: Users,
        value: '24/7',
        label: 'Customer Coverage',
      },
    ],
  },

  {
    client: 'EduTech Indonesia',
    industry: 'Education Technology',
    tagline: 'CRM & ERP Automation System',

    challenge:
      'Seluruh administrasi siswa, payroll, billing, dan attendance masih dilakukan manual menggunakan Excel.',

    solution:
      'Kami membangun sistem CRM & ERP terintegrasi untuk billing, attendance, payroll, dan reporting realtime.',

    quote:
      'Laporan bulanan yang sebelumnya memakan waktu berhari-hari kini selesai dalam hitungan detik.',

    person: 'Budi Santoso',
    role: 'Operations Manager, EduTech',

    results: [
      {
        icon: Clock3,
        value: '-85%',
        label: 'Waktu Administrasi',
      },
      {
        icon: TrendingUp,
        value: '+41%',
        label: 'Retention Siswa',
      },
      {
        icon: Users,
        value: '12 Cabang',
        label: 'Tersinkronisasi',
      },
    ],
  },
]

export default function CaseStudiesTesti() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute -top-40 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* HERO */}
      <section className="relative px-6 pb-20 pt-32">
        <div className="mx-auto max-w-4xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            <Sparkles size={12} />
            Case Studies
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Hasil Nyata.
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {' '}Bukan Sekadar Janji.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Lihat bagaimana Digiverse membantu bisnis meningkatkan
            efisiensi operasional, mempercepat closing, dan
            meningkatkan profit melalui AI Smart Leads & ERP Automation.
          </p>
        </div>
      </section>

      {/* CASE LIST */}
      <section className="relative px-6 pb-28">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">

          {cases.map((item, index) => (
            <article
              key={index}
              className="
                group relative overflow-hidden rounded-3xl
                border border-white/10 bg-white/[0.03]
                backdrop-blur-xl transition-all duration-300
                hover:border-cyan-400/20
              "
            >

              {/* GLOW */}
              <div className="absolute -right-20 top-0 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative grid gap-10 p-8 lg:grid-cols-[1.5fr_0.8fr] lg:p-12">

                {/* LEFT */}
                <div>

                  {/* TOP */}
                  <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-300">
                      {item.industry}
                    </span>

                    <span className="text-sm text-slate-500">
                      {item.tagline}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h2 className="mt-6 text-3xl font-bold md:text-5xl">
                    {item.client}
                  </h2>

                  {/* CONTENT */}
                  <div className="mt-10 space-y-6">

                    {/* CHALLENGE */}
                    <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.05] p-6">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-300">
                        Tantangan
                      </div>

                      <p className="leading-relaxed text-slate-300">
                        {item.challenge}
                      </p>
                    </div>

                    {/* SOLUTION */}
                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] p-6">
                      <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-300">
                        Solusi Digiverse
                      </div>

                      <p className="leading-relaxed text-slate-300">
                        {item.solution}
                      </p>
                    </div>

                    {/* TESTIMONIAL */}
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                      <Quote
                        className="text-cyan-300 opacity-60"
                        size={22}
                      />

                      <blockquote className="mt-4 text-lg italic leading-relaxed text-slate-200">
                        "{item.quote}"
                      </blockquote>

                      <div className="mt-5">
                        <p className="font-semibold text-white">
                          {item.person}
                        </p>

                        <p className="text-sm text-slate-400">
                          {item.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col gap-5">

                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                      Hasil yang Dicapai
                    </p>
                  </div>

                  {item.results.map((result, i) => (
                    <div
                      key={i}
                      className="
                        rounded-2xl border border-white/10
                        bg-[#0B1220]/80 p-6
                        transition duration-300
                        hover:border-cyan-400/20
                        hover:bg-cyan-400/[0.04]
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div>
                          <p className="text-3xl font-bold text-white">
                            {result.value}
                          </p>

                          <p className="mt-2 text-sm text-slate-400">
                            {result.label}
                          </p>
                        </div>

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
                          <result.icon
                            className="text-cyan-300"
                            size={22}
                          />
                        </div>

                      </div>
                    </div>
                  ))}

                  {/* CTA */}
                  <div className="mt-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-6">

                    <h4 className="text-lg font-semibold">
                      Ingin hasil seperti ini?
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      Konsultasikan kebutuhan AI & ERP bisnis Anda bersama tim Digiverse.
                    </p>

                    <Link
                      href="/contact"
                      className="
                        mt-5 inline-flex items-center gap-2
                        rounded-xl bg-gradient-to-r
                        from-cyan-400 to-blue-500
                        px-5 py-3 text-sm font-semibold
                        text-black transition
                        hover:scale-[1.02]
                      "
                    >
                      Konsultasi Gratis
                      <ArrowRight size={16} />
                    </Link>

                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}