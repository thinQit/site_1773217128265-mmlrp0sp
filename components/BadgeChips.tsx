"use client";

import { cn } from '@/lib/utils'

interface BadgeChipsProps {
  chips: string[]
  className?: string
}

export default function BadgeChips({
  chips = ['24/7 ACCESS', 'HIIT', 'YOGA'],
  className = '',
}: Partial<BadgeChipsProps>) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {chips.map((chip, idx) => (
        <span
          key={chip + idx}
          className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90"
        >
          {chip}
        </span>
      ))}
    </div>
  )
}
