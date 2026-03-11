"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SiteContainerProps {
  children: ReactNode
  className?: string
  withSectionSpacing?: boolean
}

export default function SiteContainer({
  children,
  className = '',
  withSectionSpacing = true,
}: Partial<SiteContainerProps>) {
  return (
    <section className={cn(withSectionSpacing ? 'py-16 md:py-20' : '', className)}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
