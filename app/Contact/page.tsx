'use client'

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
  Clock3,
} from "lucide-react";

export default function ContactPage() {
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
            <MessageCircle size={14} />
            Let’s Build Something Great
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Konsultasikan
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {" "}Kebutuhan Digital
            </span>
            {" "}Bisnis Anda
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Kami siap membantu bisnis Anda berkembang lebih cepat dengan
            AI automation, website modern, ERP system,
            dan custom software development.
          </p>
        </div>

        {/* CONTENT */}
        <div className="mt-20 grid gap-10 lg:grid-cols-5">

          {/* LEFT INFO */}
          <div className="space-y-6 lg:col-span-2">

            {/* CARD */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <h3 className="text-2xl font-bold">
                Hubungi Tim Kami
              </h3>

              <p className="mt-3 text-slate-400">
                Diskusikan kebutuhan bisnis Anda dan dapatkan solusi digital
                yang sesuai dengan goals perusahaan Anda.
              </p>

              <div className="mt-8 space-y-6">

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Mail className="text-cyan-300" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 font-medium">
                      hello@digiverse.id
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Phone className="text-cyan-300" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Phone / WhatsApp
                    </p>

                    <p className="mt-1 font-medium">
                      +62 812-3456-7890
                    </p>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <MapPin className="text-cyan-300" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="mt-1 font-medium">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10">
                    <Clock3 className="text-cyan-300" size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Working Hours
                    </p>

                    <p className="mt-1 font-medium">
                      Monday - Friday • 09:00 - 18:00
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">

              <h3 className="text-2xl font-bold">
                Free Consultation
              </h3>

              <p className="mt-3 text-slate-300">
                Dapatkan konsultasi gratis untuk strategi digitalisasi,
                AI automation, dan pengembangan software bisnis Anda.
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-semibold text-white transition hover:opacity-90">
                Schedule Meeting
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl">

              <div className="mb-8">
                <h3 className="text-3xl font-bold">
                  Kirim Pesan
                </h3>

                <p className="mt-3 text-slate-400">
                  Isi form di bawah dan tim kami akan segera menghubungi Anda.
                </p>
              </div>

              <form className="space-y-6">

                {/* NAME */}
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40"
                  />
                </div>

                {/* EMAIL */}
                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-400">
                      Nomor WhatsApp
                    </label>

                    <input
                      type="text"
                      placeholder="+62 812..."
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40"
                    />
                  </div>

                </div>

                {/* SERVICE */}
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Layanan
                  </label>

                  <select
                    className="w-full rounded-2xl border border-white/10 bg-[#0d1324] px-5 py-4 text-white outline-none transition focus:border-cyan-400/40"
                  >
                    <option>AI Chatbot</option>
                    <option>ERP System</option>
                    <option>Website Development</option>
                    <option>CRM Integration</option>
                    <option>Custom Software</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="mb-2 block text-sm text-slate-400">
                    Pesan
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Ceritakan kebutuhan bisnis Anda..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none transition focus:border-cyan-400/40"
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 font-semibold text-white transition hover:opacity-90"
                >
                  Kirim Pesan
                  <ArrowRight size={18} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}