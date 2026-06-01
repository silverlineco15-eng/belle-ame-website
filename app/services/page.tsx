import type { Metadata } from 'next';
import { BookingWidget } from '@/components/BookingWidget';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceSearch } from '@/components/ServiceSearch';
import { faqs } from '@/data/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Belle Ame Salon services including haircuts, color, highlights, balayage, extensions, perms, styling, bridal hair, spray tanning, and beard trims in Shelby, NC.'
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-pearl/70 px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-mocha">Services</p>
          <h1 className="font-serif text-5xl leading-tight text-charcoal sm:text-7xl">Hair services personalized to your goals.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/72">
            Search and filter salon services, then book a consultation or appointment when you are ready.
          </p>
        </Reveal>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ServiceSearch />
        </div>
      </section>

      <section className="bg-pearl/70 py-18 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="FAQ" title="Before your appointment." description="Helpful answers for booking, consultations, appointment prep, and cancellation expectations." align="center" />
          </Reveal>
          <div className="mt-10 grid gap-4">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 0.04}>
                <details className="group rounded-[1.5rem] border border-charcoal/10 bg-white p-6 shadow-sm">
                  <summary className="cursor-pointer list-none font-serif text-2xl text-charcoal marker:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-3xl text-mocha transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}

