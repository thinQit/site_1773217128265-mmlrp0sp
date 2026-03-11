"use client";

import PricingTierCard from '@/components/PricingTierCard'

export default function MembershipTiers() {
  return (
    <section id="pricing" className="bg-[#111111] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-black uppercase text-white md:text-5xl">Membership Pricing</h2>
        <p className="mt-2 text-white/70">Drop-in pass: $25 per class</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <PricingTierCard />
          <PricingTierCard
            name="Peak Unlimited"
            price="$129/mo"
            bestFor="Best for class lovers"
            popular
            features={['Unlimited classes', 'Open gym access', 'Monthly body scan', 'Priority booking']}
          />
          <PricingTierCard
            name="Peak Elite PT"
            price="$249/mo"
            bestFor="Best for fast transformation"
            features={['Unlimited classes', '4 PT sessions/mo', 'Nutrition coaching', 'VIP support']}
          />
        </div>
      </div>
    </section>
  )
}
