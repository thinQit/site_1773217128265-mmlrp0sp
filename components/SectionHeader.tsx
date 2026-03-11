"use client";

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTA {
  label: string
  href: string
}

interface SectionHeaderProps {
  eyebrow: string
  headline: string
  subheadline: string
  primaryCta?: CTA
  secondaryCta?: CTA
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeader({
  eyebrow = 'IRON PEAK FITNESS',
  headline = 'TRAIN HARD. STAY STRONG.',
  subheadline = 'Austin’s high-energy training community built for results.',
  primaryCta = { label: '', href: '' },
  secondaryCta = { label: '', href: '' },
  align = 'left',
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('space-y-4', align === 'center' ? 'text-center' : 'text-left', className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">{headline}</h2>
      <p className={cn('max-w-2xl text-white/75', align === 'center' ? 'mx-auto' : '')}>{subheadline}</p>
      {(primaryCta?.label || secondaryCta?.label) && (
        <div className={cn('flex flex-wrap gap-3', align === 'center' ? 'justify-center' : '')}>
          {primaryCta?.label ? (
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href={primaryCta.href || '#'}>{primaryCta.label}</a>
            </Button>
          ) : null}
          {secondaryCta?.label ? (
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
              <a href={secondaryCta.href || '#'}>{secondaryCta.label}</a>
            </Button>
          ) : null}
        </div>
      )}
    </div>
  )
}
