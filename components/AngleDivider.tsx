"use client";

import { cn } from '@/lib/utils'

interface AngleDividerProps {
  className?: string
  flip?: boolean
  colorClass?: string
}

export default function AngleDivider({
  className = '',
  flip = false,
  colorClass = 'fill-background',
}: Partial<AngleDividerProps>) {
  return (
    <div className={cn('relative w-full overflow-hidden leading-none', className)}>
      <svg
        className={cn('relative block h-10 w-full md:h-14', flip ? 'rotate-180' : '')}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path className={colorClass} d="M0,0V46.29c47.79,22,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
      </svg>
    </div>
  )
}
