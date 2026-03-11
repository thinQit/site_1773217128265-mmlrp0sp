'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  logoText: string
  links: NavItem[]
  onOpenMobile?: () => void
  className?: string
}

export default function Navbar({
  logoText = 'IRON PEAK FITNESS',
  links = [
    { label: 'Classes', href: '#classes' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ],
  onOpenMobile = () => {},
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur', className)}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="text-lg font-black uppercase tracking-wide text-foreground">
          {logoText}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link, idx) => (
            <a key={link.label + idx} href={link.href} className="text-sm font-semibold uppercase text-foreground/80 hover:text-foreground">
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#trial">Free Trial</a>
          </Button>
        </nav>
        <button
          type="button"
          aria-label="Open menu"
          onClick={onOpenMobile}
          className="md:hidden h-11 w-11 inline-flex items-center justify-center"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>
    </header>
  )
}
