'use client'

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const monthlyPlans = [
  {
    title: "Starter",
    price: "Rp 8 Jt",
    desc:
      "Cocok untuk bisnis kecil yang ingin mulai otomatisasi customer service & lead management.",
    features: [
      "AI Chatbot Basic",
      "Landing Page Modern",
      "WhatsApp Integration",
      "Basic Analytics Dashboard",
      "Setup & Deployment",
    ],
  },
  {
    title: "Professional",
    price: "Rp 20 Jt",
    desc:
      "Solusi lengkap untuk bisnis berkembang yang ingin meningkatkan closing dan efisiensi operasional.",
    features: [
      "Advanced AI Chatbot",
      "Website + Funnel System",
      "CRM Integration",
      "Automation Workflow",
      "Priority Support",
      "Free Maintenance 3 Bulan",
      "Bug Fix & Monitoring",
    ],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "Rp 50 Jt",
    desc:
      "Untuk perusahaan yang membutuhkan AI ecosystem & ERP automation skala besar.",
    features: [
      "Custom AI System",
      "ERP Integration",
      "Advanced Automation",
      "Dedicated Infrastructure",
      "Dedicated Team Support",
      "Free Maintenance 12 Bulan",
      "Full System Monitoring",
      "Scalable Cloud Architecture",
    ],
  },
];

const yearlyPlans = [
  {
    title: "Starter Annual",
    price: "Rp 75 Jt / Tahun",
    desc:
      "Paket hemat untuk bisnis yang ingin menjalankan otomatisasi jangka panjang.",
    features: [
      "AI Chatbot",
      "Landing Page",
      "WhatsApp Integration",
      "Dashboard Analytics",
    ],
  },
  {
    title: "Professional Annual",
    price: "Rp 180 Jt / Tahun",
    desc:
      "Pilihan terbaik untuk scaling bisnis dengan AI automation & CRM integration.",
    features: [
      "Advanced AI System",
      "CRM + Analytics",
      "Full Funnel Website",
      "Priority Support",
      "Maintenance & Monitoring",
      "Monthly Optimization",
    ],
    highlight: true,
  },
  {
    title: "Enterprise Annual",
    price: "Rp 480 Jt / Tahun",
    desc:
      "Full automation ecosystem untuk operasional enterprise berskala besar.",
    features: [
      "Custom AI Solution",
      "ERP + Automation",
      "Unlimited Integrations",
      "Dedicated Infrastructure",
      "Full Maintenance Service",
      "Technical Team Assistance",
      "Performance Optimization",
    ],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = billing === "monthly"
    ? monthlyPlans
    : yearlyPlans;

  return (
    <section className="relative overflow-hidden bg-[#050816] py-28 text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-20 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-[-120px] right-[-100px] h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-xl">
            <Sparkles size={14} />
            Flexible Pricing For Modern Businesses
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Investasi Terbaik Untuk
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Automasi Bisnis
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Dari AI chatbot, CRM, hingga ERP automation —
            pilih paket yang membantu bisnis Anda bekerja lebih cepat,
            lebih efisien, dan menghasilkan lebih banyak closing.
          </p>

          {/* TOGGLE */}
          <div className="mt-10 inline-flex rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                billing === "monthly"
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`rounded-xl px-6 py-3 text-sm font-medium transition-all ${
                billing === "yearly"
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* PRICING GRID */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`
                group relative overflow-hidden rounded-3xl border backdrop-blur-2xl transition-all duration-500
                hover:-translate-y-2
                ${
                  plan.highlight
                    ? "border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-[0_0_60px_rgba(34,211,238,0.15)]"
                    : "border-white/10 bg-white/[0.03]"
                }
              `}
            >

              {/* GLOW */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              </div>

              {/* BADGE */}
              {plan.highlight && (
                <div className="absolute right-5 top-5 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                  Most Popular
                </div>
              )}

              <div className="relative p-8">

                {/* TITLE */}
                <div>
                  <h3 className="text-2xl font-bold">
                    {plan.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {plan.desc}
                  </p>
                </div>

                {/* PRICE */}
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>

                  <span className="pb-1 text-sm text-slate-500">
                    /{billing === "monthly" ? "month" : "year"}
                  </span>
                </div>

                {/* FEATURES */}
                <div className="mt-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500/15">
                        <Check
                          size={12}
                          className="text-cyan-300"
                        />
                      </div>

                      <span className="text-sm text-slate-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  className={`
                    mt-10 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold transition-all duration-300
                    ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:opacity-90"
                        : "border border-white/10 bg-white/5 hover:bg-white/10"
                    }
                  `}
                >
                  Get Started
                  <ArrowRight size={16} />
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-2xl">

          <h3 className="text-3xl font-bold">
            Butuh Solusi Custom?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Kami juga menyediakan custom AI systems,
            ERP enterprise, automation workflow,
            dan integrasi sesuai kebutuhan bisnis Anda.
          </p>

          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-7 py-4 font-semibold text-white transition hover:opacity-90">
            Schedule Free Consultation
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}