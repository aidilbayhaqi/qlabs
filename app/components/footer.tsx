import Link from "next/link";


export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[image:var(--gradient-primary)]" />
            <span className="font-bold">digi<span className="text-gradient">verse</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            AI Chatbot, ERP Automation & Custom Software untuk masa depan bisnis Anda.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Produk</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>AI Smart Leads</li>
            <li>ERP Automation</li>
            <li>Custom Software</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Perusahaan</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/why-we-exist" className="hover:text-foreground">Why We Exist</Link></li>
            <li><Link href="/case-studies" className="hover:text-foreground">Case Studies</Link></li>
            <li><Link href="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Kontak</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@digiverse.id</li>
            <li>+62 812 3456 7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Digiverse. Engineering the digital future.
      </div>
    </footer>
  );
}
