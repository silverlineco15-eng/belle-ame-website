'use client';

import { Menu, Phone, Scissors, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks, siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link href="/" className="group flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha">
          <span className="flex size-11 items-center justify-center rounded-full bg-charcoal text-ivory shadow-sm transition group-hover:bg-softblack">
            <Scissors aria-hidden="true" size={20} />
          </span>
          <span>
            <span className="block font-serif text-2xl leading-none text-charcoal">Belle Ame</span>
            <span className="block text-[0.65rem] font-bold uppercase tracking-[0.24em] text-mocha">Salon Shelby NC</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-semibold text-charcoal/70 transition hover:bg-pearl hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mocha',
                  active && 'bg-pearl text-charcoal'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={siteConfig.phoneHref} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-charcoal/75 transition hover:bg-pearl hover:text-charcoal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mocha">
            <Phone aria-hidden="true" size={16} />
            Call
          </Link>
          <Link href="/contact#booking" className="inline-flex min-h-11 items-center justify-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-softblack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha">
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal lg:hidden"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-charcoal/10 bg-ivory px-4 pb-5 pt-2 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl px-4 py-3 text-base font-semibold text-charcoal transition hover:bg-pearl">
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-3">
              <Link href={siteConfig.phoneHref} className="inline-flex min-h-12 items-center justify-center rounded-full border border-charcoal/15 px-4 text-sm font-semibold text-charcoal">
                Call
              </Link>
              <Link href="/contact#booking" className="inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-4 text-sm font-semibold text-ivory">
                Book
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

