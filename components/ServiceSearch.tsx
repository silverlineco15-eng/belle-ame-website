'use client';

import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { services, type Service } from '@/data/site';
import { cn } from '@/lib/utils';

const categories = ['All', 'Cuts', 'Color', 'Styling', 'Texture', 'Extensions', 'Bridal', 'Wellness'] as const;
type Category = (typeof categories)[number];

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-[0_18px_60px_rgba(38,35,33,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(38,35,33,0.1)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={service.image} alt={service.title + ' service at Belle Ame Salon'} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-mocha">{service.category}</p>
        <h3 className="mt-3 font-serif text-3xl text-charcoal">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-charcoal/70">{service.description}</p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className="font-semibold text-charcoal">{service.price}</p>
          <Link href="/contact#booking" className="rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-softblack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha">
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceSearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory = category === 'All' || service.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        service.title.toLowerCase().includes(normalized) ||
        service.description.toLowerCase().includes(normalized) ||
        service.category.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <div className="rounded-[2rem] border border-charcoal/10 bg-white p-4 shadow-sm sm:p-5">
        <label htmlFor="service-search" className="text-sm font-semibold text-charcoal">Search services</label>
        <div className="mt-3 flex items-center gap-3 rounded-full border border-charcoal/10 bg-pearl px-4 py-3">
          <Search size={18} className="text-mocha" aria-hidden="true" />
          <input
            id="service-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try balayage, bridal, color..."
            className="w-full bg-transparent text-sm text-charcoal placeholder:text-charcoal/45 focus:outline-none"
          />
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar" aria-label="Service categories">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mocha',
                category === item
                  ? 'border-charcoal bg-charcoal text-ivory'
                  : 'border-charcoal/10 bg-white text-charcoal/70 hover:bg-pearl hover:text-charcoal'
              )}
              aria-pressed={category === item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-charcoal/60" aria-live="polite">
        Showing {filtered.length} service{filtered.length === 1 ? '' : 's'}.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}

