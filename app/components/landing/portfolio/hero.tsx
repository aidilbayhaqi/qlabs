import { Sparkles } from 'lucide-react'
import React from 'react'

const HeroPortfolio = () => {
  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px] lg:blur-[140px]" />

        <div className="absolute bottom-[-100px] right-[-120px] h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[100px] sm:h-[340px] sm:w-[340px] lg:h-[400px] lg:w-[400px] lg:blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        
        <div className="mx-auto max-w-5xl text-center">

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-300 backdrop-blur-xl sm:text-xs">
            <Sparkles size={14} />
            Portfolio QLabs
          </div>

          {/* TITLE */}
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] sm:mt-7 sm:text-5xl md:text-6xl lg:text-7xl">
            Project digital yang
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {' '}menghasilkan impact nyata
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8 md:text-lg">
            Dari AI Chatbot, ERP Automation, hingga dashboard enterprise —
            kami membantu bisnis meningkatkan efisiensi, mempercepat workflow,
            dan meningkatkan revenue melalui teknologi modern.
          </p>

          {/* STATS */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
            
            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                120+
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Project Delivered
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                98%
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                Client Satisfaction
              </p>
            </div>

            <div className="col-span-2 rounded-2xl border border-white/5 bg-white/[0.03] p-5 backdrop-blur-xl sm:col-span-1">
              <h3 className="text-2xl font-bold text-cyan-300 sm:text-3xl">
                24/7
              </h3>

              <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                AI Automation
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroPortfolio