"use client";

import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  membership: string
  rating: number
  quote: string
}

export default function TestimonialCard({
  name = 'Taylor M.',
  membership = 'Peak Unlimited',
  rating = 5,
  quote = 'Iron Peak gave me structure, accountability, and confidence. Best gym community in Austin.',
}: Partial<TestimonialCardProps>) {
  return (
    <Card className="rounded-xl border-white/10 bg-white/5 p-5">
      <div className="mb-3 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={i < rating ? 'h-4 w-4 fill-[#FF2E00] text-[#FF2E00]' : 'h-4 w-4 text-white/30'} />
        ))}
      </div>
      <p className="text-sm text-white/85">"{quote}"</p>
      <p className="mt-4 text-sm font-bold uppercase text-white">{name}</p>
      <p className="text-xs uppercase text-white/60">{membership}</p>
    </Card>
  )
}
