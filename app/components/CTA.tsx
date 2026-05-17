import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-32 bg-black">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border-glow glass p-12 md:p-16 text-center">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-[image:var(--gradient-glow)] blur-3xl" />
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold">
              Siap masuki <span className="text-gradient">era digital</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Konsultasi gratis 30 menit untuk memetakan kebutuhan AI & ERP Anda.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground font-medium glow-strong hover:opacity-90 transition">
              Jadwalkan Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}