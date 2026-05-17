export default function HeroWhy() {
  return (
    <section className="relative overflow-hidden bg-hero py-32">
      
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="absolute left-1/2 top-1/3 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-[image:var(--gradient-glow)] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        
        <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-cyan-300">
          Why We Exist
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-tight text-white md:text-7xl">
          Setiap bisnis berhak
          <span className="text-gradient">
            {" "}tumbuh tanpa batas
          </span>
          {" "}berkat teknologi
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
          Kami melihat ribuan bisnis kehilangan leads, kewalahan operasional,
          dan tertinggal dari kompetitor bukan karena produknya buruk,
          tetapi karena teknologinya belum berkembang.
        </p>
      </div>
    </section>
  );
}