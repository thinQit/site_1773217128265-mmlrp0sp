'use client'

import { Button } from '@/components/ui/button'
import BadgeChips from '@/components/BadgeChips'

export default function HeroWaves() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-r from-[#FF2E00]/20 via-white/10 to-[#FF2E00]/20" />
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#FF2E00]">Transformation Gallery</p>
        <h1 className="mt-3 text-4xl font-black uppercase text-white md:text-6xl">Real Members. Real Change.</h1>
        <p className="mt-4 max-w-2xl text-white/75">Browse stories from Iron Peak members across fat loss, strength gains, and confidence breakthroughs.</p>
        <BadgeChips chips={['WEIGHT LOSS', 'STRENGTH', 'BODY RECOMP', 'ENDURANCE']} className="mt-6" />
        <Button asChild className="mt-8 bg-[#FF2E00] text-white hover:bg-[#e22a00]">
          <a href="#transformations">View Success Stories</a>
        </Button>
      </div>
    </section>
  )
}
