"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface TransformationCardProps {
  name: string
  timeframe: string
  metrics: string
  program: string
  imageSrc: string
}

export default function TransformationCard({
  name = 'Jordan P.',
  timeframe = '16 weeks',
  metrics = '-22 lbs, +18% strength',
  program = 'HIIT + PT Hybrid',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771578069/site-images/fitness/12905815.jpg',
}: Partial<TransformationCardProps>) {
  return (
    <Card className="overflow-hidden rounded-xl border-white/10 bg-white/5">
      <Image src={imageSrc} alt={name} width={700} height={460} unoptimized className="h-56 w-full object-cover" />
      <div className="p-4">
        <p className="text-xl font-black uppercase text-white">{name}</p>
        <p className="text-sm uppercase text-[#FF2E00]">{timeframe}</p>
        <p className="mt-2 text-sm text-white/80">{metrics}</p>
        <p className="text-sm text-white/65">{program}</p>
      </div>
    </Card>
  )
}
