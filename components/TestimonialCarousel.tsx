'use client';

import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '@/data/site';

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <div className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-[0_24px_80px_rgba(38,35,33,0.08)] sm:p-8" aria-live="polite">
      <div className="flex gap-1 text-mocha" aria-label={active.rating + ' star review'}>
        {Array.from({ length: active.rating }).map((_, starIndex) => (
          <Star key={starIndex} size={18} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-6 font-serif text-3xl leading-snug text-charcoal sm:text-4xl">
        "{active.quote}"
      </blockquote>
      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-bold text-charcoal">{active.name}</p>
          <p className="text-sm text-charcoal/60">{active.service}</p>
        </div>
        <div className="flex gap-2">
          <button type="button" className="flex size-11 items-center justify-center rounded-full border border-charcoal/15 text-charcoal transition hover:bg-pearl" aria-label="Previous testimonial" onClick={() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)}>
            <ChevronLeft aria-hidden="true" size={20} />
          </button>
          <button type="button" className="flex size-11 items-center justify-center rounded-full bg-charcoal text-ivory transition hover:bg-softblack" aria-label="Next testimonial" onClick={() => setIndex((value) => (value + 1) % testimonials.length)}>
            <ChevronRight aria-hidden="true" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

