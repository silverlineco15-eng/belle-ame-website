'use client';

import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { gallery, type GalleryItem } from '@/data/site';
import { cn } from '@/lib/utils';

const categories = ['All', 'Color', 'Balayage', 'Bridal', 'Cuts', 'Extensions'] as const;
type Category = (typeof categories)[number];

const heights = {
  short: 'aspect-[4/3]',
  medium: 'aspect-[4/5]',
  tall: 'aspect-[3/4]'
};

export function GalleryMasonry() {
  const [category, setCategory] = useState<Category>('All');
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    return category === 'All' ? gallery : gallery.filter((item) => item.category === category);
  }, [category]);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selected]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar" aria-label="Gallery categories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mocha',
              category === item ? 'border-charcoal bg-charcoal text-ivory' : 'border-charcoal/10 bg-white text-charcoal/70 hover:bg-pearl hover:text-charcoal'
            )}
            aria-pressed={category === item}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <button key={item.id} type="button" onClick={() => setSelected(item)} className="group mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.5rem] bg-white text-left shadow-[0_18px_60px_rgba(38,35,33,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha">
            <span className={cn('relative block overflow-hidden', heights[item.height])}>
              <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </span>
            <span className="block p-5">
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-mocha">{item.category}</span>
              <span className="mt-2 block font-serif text-2xl text-charcoal">{item.title}</span>
            </span>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-softblack/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selected.title}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] bg-ivory shadow-2xl">
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg" aria-label="Close image preview">
              <X size={22} aria-hidden="true" />
            </button>
            <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative min-h-[55vh]">
                <Image src={selected.image} alt={selected.alt} fill sizes="100vw" className="object-cover" priority />
              </div>
              <div className="p-8 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-mocha">{selected.category}</p>
                <h2 className="mt-4 font-serif text-4xl text-charcoal">{selected.title}</h2>
                <p className="mt-4 text-sm leading-7 text-charcoal/70">
                  A Belle Ame inspired transformation example. Add real client photography here to show before and after results, color work, cuts, bridal styling, and extensions.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

