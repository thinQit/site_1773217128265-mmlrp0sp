"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface PricingTierCardProps {
  name: string
  price: string
  bestFor: string
  features: string[]
  popular: boolean
}

export default function PricingTierCard({
  name = 'Peak Starter',
  price = '$69/mo',
  bestFor = 'Best for beginners',
  features = ['2 classes/week', 'Gym floor access', '1 onboarding session'],
  popular = false,
}: Partial<PricingTierCardProps>) {
  return (
    <Card className={popular ? 'rounded-xl border-[#FF2E00] bg-white/10 p-6' : 'rounded-xl border-white/10 bg-white/5 p-6'}>
      {popular ? <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#FF2E00]">Most Popular</p> : null}
      <p className="text-2xl font-black uppercase text-white">{name}</p>
      <p className="mt-2 text-3xl font-black text-white">{price}</p>
      <p className="text-sm text-white/70">{bestFor}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {features.map((f, i) => <li key={f + i}>• {f}</li>)}
      </ul>
      <Button className="mt-6 w-full bg-[#FF2E00] text-white hover:bg-[#e22a00]">Choose Plan</Button>
    </Card>
  )
}
