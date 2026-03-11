"use client";

import { Button } from '@/components/ui/button'

export default function HeroGradientBlob() {
  return (
    <section className="relative overflow-hidden bg-black py-20">
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-[#FF2E00]/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h1 className="text-4xl font-black uppercase text-white md:text-6xl">Memberships for Every Goal</h1>
        <p className="mt-4 max-w-2xl text-white/75">From drop-ins to unlimited coaching support, choose the tier that fits your momentum.</p>
        <ul className="mt-6 grid max-w-3xl gap-3 text-sm uppercase text-white/90 md:grid-cols-3">
          <li>Flexible plans</li>
          <li>No hidden fees</li>
          <li>Cancel anytime</li>
        </ul>
        <Button asChild className="mt-8 bg-[#FF2E00] text-white hover:bg-[#e22a00]">
          <a href="#pricing">Compare Plans</a>
        </Button>
      </div>
    </section>
  )
}
