"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TrainerCardProps {
  name: string
  role: string
  bio: string
  specialties: string[]
  cue: string
  imageSrc: string
}

export default function TrainerCard({
  name = 'Coach Maya Torres',
  role = 'Performance Coach',
  bio = 'Strength and conditioning specialist focused on athletic movement patterns.',
  specialties = ['Strength', 'HIIT', 'Mobility'],
  cue = 'Own every rep.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg',
}: Partial<TrainerCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border-white/10 bg-white/5">
      <Image src={imageSrc} alt={name} width={600} height={420} unoptimized className="h-52 w-full object-cover" />
      <div className="p-4">
        <p className="text-xl font-black uppercase text-white">{name}</p>
        <p className="text-sm uppercase text-[#FF2E00]">{role}</p>
        <p className="mt-2 text-sm text-white/75">{bio}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {specialties.map((s, i) => (
            <span key={s + i} className="rounded-full border border-white/20 px-2 py-1 text-xs uppercase text-white/85">{s}</span>
          ))}
        </div>
        <p className="mt-3 text-sm italic text-white/80">"{cue}"</p>
      </div>
    </Card>
  )
}
