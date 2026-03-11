"use client";

import { Card } from '@/components/ui/card'

interface ClassCardProps {
  category: string
  time: string
  coach: string
  duration: string
  focus: string
}

export default function ClassCard({
  category = 'HIIT',
  time = '6:00 AM',
  coach = 'Coach Maya',
  duration = '45 min',
  focus = 'Conditioning + Core',
}: Partial<ClassCardProps>) {
  return (
    <Card className="rounded-xl border-white/10 bg-white/5 p-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#FF2E00]">{category}</p>
      <p className="mt-1 text-xl font-black text-white">{time}</p>
      <p className="text-sm text-white/75">{coach}</p>
      <p className="mt-3 text-sm uppercase text-white/80">{duration}</p>
      <p className="text-sm text-white/70">{focus}</p>
    </Card>
  )
}
