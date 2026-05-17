"use client";
import CTA from "./components/CTA";
import ExperienceSection from "./components/landing/home/experience";
import Featured from "./components/landing/home/featured";
import Hero from "./components/landing/home/hero";
import MarketHighlight from "./components/landing/home/market";
import Products from "./components/landing/home/products";


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Products/>
      <MarketHighlight/>
      <ExperienceSection/>
      <Featured/>
      <CTA/>
    </div>
  );
}

