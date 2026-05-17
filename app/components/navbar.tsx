"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/WhyWeExist", label: "Why We Exist" },
  { href: "/StudyCase", label: "Case Studies" },
  { href: "/Portfolio", label: "Portfolio" },
  { href: "/Pricing", label: "Pricing" },
  { href: "/Contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
         <Image src="/qlabs.png" alt="QLabs Logo" width={48} height={48} />

          <span className="font-bold text-lg tracking-tight">
            Q<span className="text-gradient">Labs</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "px-3 py-2 text-sm text-foreground font-medium"
                    : "px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground text-sm font-medium hover:opacity-90 transition glow"
        >
          Book a Demo
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-border/50 px-6 py-4 flex flex-col gap-2 bg-background/95">
          {links.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  active
                    ? "py-2 text-sm text-foreground font-medium"
                    : "py-2 text-sm text-muted-foreground"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}