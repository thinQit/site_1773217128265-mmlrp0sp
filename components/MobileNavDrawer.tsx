'use client'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open: boolean
  onClose: () => void
  className?: string
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  className = '',
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-[60] md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none', className)}>
      <div onClick={onClose} className={cn('absolute inset-0 bg-black/70 transition-opacity', open ? 'opacity-100' : 'opacity-0')} />
      <aside className={cn('absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-background p-6 transition-transform', open ? 'translate-x-0' : 'translate-x-full')}>
        <div className="mb-8 flex items-center justify-between">
          <p className="text-lg font-black uppercase text-foreground">Menu</p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="h-11 w-11 inline-flex items-center justify-center"
          >
            <X className="h-6 w-6 text-foreground" />
          </button>
        </div>
        <div className="space-y-4">
          <a href="#schedule" className="block text-sm font-semibold uppercase text-foreground/90">Schedule</a>
          <a href="#pricing" className="block text-sm font-semibold uppercase text-foreground/90">Pricing</a>
          <a href="#contact" className="block text-sm font-semibold uppercase text-foreground/90">Contact</a>
          <Button asChild className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#trial">Start Free Trial</a>
          </Button>
        </div>
      </aside>
    </div>
  )
}
