'use client'

import Image from 'next/image'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  MessageSquare,
  TrendingUp,
} from 'lucide-react'

const caseStudies = [
  {
    category: 'Clinic Automation',
    title: 'AI Booking & Patient Management System',
    description:
      'Mengotomatisasi proses booking pasien, reminder jadwal, dan komunikasi customer service dengan AI chatbot yang aktif 24/7.',

    problem:
      'Klinik mengalami overload chat harian, jadwal bentrok, dan banyak pasien lupa datang karena proses booking masih manual.',

    solution:
      'Kami membangun AI chatbot terintegrasi WhatsApp untuk booking otomatis, reminder jadwal, FAQ pasien, dan dashboard monitoring admin.',

    result:
      'Booking meningkat 60%, waktu respon turun hingga < 1 menit, dan angka no-show pasien berkurang drastis.',

    metrics: [
      '60% Faster Booking',
      '24/7 Auto Response',
      'Reduced No-show',
    ],

    tech: ['AI Chatbot', 'WhatsApp API', 'ERP Dashboard'],

    preview: '/erp1.png',
    resultImage: '/clinic-result.png',
  },

  {
    category: 'Property Leads',
    title: 'Smart Lead Capture for Property Business',
    description:
      'Membantu perusahaan properti menangkap dan mengkualifikasi leads secara otomatis menggunakan website dan AI automation.',

    problem:
      'Banyak leads masuk di luar jam kerja dan tidak ter-follow up dengan cepat sehingga peluang closing hilang.',

    solution:
      'Kami membuat landing page high-converting dengan AI chatbot yang langsung menjawab pertanyaan, mengumpulkan data prospek, dan mengarahkan leads ke sales.',

    result:
      'Lead conversion meningkat 45% dengan response time instan dan proses follow-up yang lebih terstruktur.',

    metrics: [
      '45% Higher Conversion',
      '< 1 Minute Response',
      'Automated Lead Flow',
    ],

    tech: ['Landing Page', 'CRM Integration', 'AI Automation'],

    preview: '/erp2.png',
    resultImage: '/property-result.png',
  },
]

export default function CaseStudyChat() {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-28 text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute -top-32 left-0 h-[320px] w-[320px] md:h-[400px] md:w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-[320px] w-[320px] md:h-[400px] md:w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            Case Studies
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Real Business Problems.
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
              {' '}
              Real AI Solutions.
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
            Kami membantu bisnis meningkatkan efisiensi operasional,
            mempercepat response customer, dan meningkatkan closing
            menggunakan AI Automation & ERP System.
          </p>
        </div>

        {/* CASE STUDIES */}
        <div className="mt-16 md:mt-24 space-y-20 md:space-y-28">
          {caseStudies.map((item, index) => {
            const reverse = index % 2 !== 0

            return (
              <div
                key={index}
                className={`
                  grid items-center gap-12 lg:grid-cols-2 lg:gap-16
                  ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}
                `}
              >
                {/* LEFT CONTENT */}
                <div>
                  {/* CATEGORY */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-cyan-300">
                    <Bot size={12} />
                    {item.category}
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-5 text-sm sm:text-base md:text-lg leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  {/* PROBLEM & SOLUTION */}
                  <div className="mt-8 md:mt-10 space-y-5">
                    {/* PROBLEM */}
                    <div className="rounded-2xl border border-red-500/10 bg-red-500/[0.05] p-5 backdrop-blur-xl">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-300">
                        <MessageSquare size={16} />
                        Problem
                      </div>

                      <p className="text-sm leading-relaxed text-slate-300">
                        {item.problem}
                      </p>
                    </div>

                    {/* SOLUTION */}
                    <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.05] p-5 backdrop-blur-xl">
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-cyan-300">
                        <Bot size={16} />
                        Solution
                      </div>

                      <p className="text-sm leading-relaxed text-slate-300">
                        {item.solution}
                      </p>

                      {/* TECH STACK */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[11px] text-cyan-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* RESULT */}
                  <div className="mt-8 rounded-2xl border border-blue-500/10 bg-blue-500/[0.05] p-5 backdrop-blur-xl">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-300">
                      <TrendingUp size={16} />
                      Result
                    </div>

                    <p className="text-sm leading-relaxed text-slate-300">
                      {item.result}
                    </p>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      {item.metrics.map((metric, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-white/5 bg-white/[0.03] p-4 text-center"
                        >
                          <div className="flex justify-center">
                            <CheckCircle2
                              size={18}
                              className="text-cyan-300"
                            />
                          </div>

                          <p className="mt-2 text-xs font-medium text-slate-200">
                            {metric}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
                    View Full Case Study
                    <ArrowRight size={16} />
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl">
                    {/* MAIN IMAGE */}
                    <div className="relative h-[260px] sm:h-[360px] md:h-[500px] overflow-hidden rounded-2xl">
                      <Image
                        src={item.preview}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>

                    {/* FLOATING RESULT CARD */}
                    <div className="absolute left-1/2 bottom-4 sm:bottom-6 w-[90%] sm:w-[85%] -translate-x-1/2 rounded-2xl border border-cyan-400/10 bg-[#0B1220]/95 p-4 backdrop-blur-xl shadow-2xl">
                      <div className="flex items-start gap-3 sm:gap-4">
                        {/* RESULT IMAGE */}
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={item.resultImage}
                            alt="result"
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>

                        {/* TEXT */}
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-cyan-300">
                            Success Result
                          </p>

                          <p className="mt-1 line-clamp-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                            {item.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}