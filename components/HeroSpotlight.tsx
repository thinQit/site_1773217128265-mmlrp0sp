"use client";

import { Button } from '@/components/ui/button'
import BadgeChips from '@/components/BadgeChips'

export default function HeroSpotlight() {
  return (
    <section className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Austin, Texas</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">Built for Real Results</h1>
        <p className="mt-4 max-w-2xl text-white/75">Iron Peak Fitness combines personal training, high-intensity classes, and accountability coaching to help you transform faster.</p>
        <BadgeChips chips={['HIIT', 'YOGA', 'SPINNING', 'BOXING']} className="mt-6" />
        <div className="mt-8">
          <Button asChild className="bg-[#FF2E00] text-white hover:bg-[#e22a00]">
            <a href="#trial">Claim Free Trial</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
