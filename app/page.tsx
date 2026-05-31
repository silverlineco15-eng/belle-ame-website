import type { Metadata } from 'next';
import { Award, HeartHandshake, Leaf, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BookingWidget } from '@/components/BookingWidget';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { gallery, images, services, testimonials, trustItems } from '@/data/site';

export const metadata: Metadata = {
  title: 'Luxury Hair Salon in Shelby, NC',
  description:
    'Book personalized haircuts, color, highlights, balayage, extensions, styling, bridal hair, and beauty services at Belle Ame Salon in Shelby, NC.'
};

const icons = [Award, Sparkles, HeartHandshake, Leaf];

export default function HomePage() {
  const featuredServices = services.filter((service) =>
    ['womens-haircuts', 'color-services', 'balayage', 'extensions', 'styling', 'bridal-hair'].includes(service.slug)
  );

  return (
    <>
      <section className="relative overflow-hidden bg-ivory">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-champagne/35 to-transparent" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
          <Reveal className="flex flex-col justify-center">
            <p className="mb-5 inline-flex w-fit rounded-full border border-mocha/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-mocha">
              Shelby, North Carolina hair salon
            </p>
            <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] text-charcoal sm:text-7xl lg:text-8xl">
              Beautiful Hair. Genuine Confidence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/70 sm:text-xl">
              Professional hair services, personalized care, and a salon experience designed around you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#booking">Book Appointment</ButtonLink>
              <ButtonLink href="/services" variant="secondary">View Services</ButtonLink>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-[2rem] border border-charcoal/10 bg-white/80 p-4 shadow-sm backdrop-blur">
              <div>
                <p className="font-serif text-3xl text-charcoal">5.0</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">Rated</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-charcoal">12+</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">Services</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-charcoal">Local</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/50">Shelby NC</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-pearl shadow-[0_30px_100px_rgba(38,35,33,0.16)] lg:min-h-[660px]">
            <Image src={images.hero} alt="Stylist creating a luxury salon hair transformation" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-softblack/55 via-softblack/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.8rem] bg-white/88 p-5 shadow-lg backdrop-blur-md sm:left-auto sm:max-w-sm">
              <p className="font-serif text-3xl text-charcoal">Luxury that feels personal.</p>
              <p className="mt-2 text-sm leading-6 text-charcoal/70">Consultation-led services in a clean, relaxing, welcoming salon environment.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-pearl/70 py-14 sm:py-18">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {trustItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={item.label} delay={index * 0.05} className="rounded-[1.8rem] border border-charcoal/10 bg-white p-6 shadow-sm">
                <Icon className="text-mocha" size={28} aria-hidden="true" />
                <h2 className="mt-5 font-serif text-2xl text-charcoal">{item.label}</h2>
                <p className="mt-2 text-sm leading-6 text-charcoal/65">{item.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Featured Services" title="Salon care for every season of your style." description="From maintenance cuts to dimensional color and wedding day styling, Belle Ame Salon creates results that feel polished, personal, and wearable." />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 0.04}>
                <Link href="/services" className="group block overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-[0_18px_60px_rgba(38,35,33,0.07)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_rgba(38,35,33,0.1)]">
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <Image src={service.image} alt={service.title + ' at Belle Ame Salon'} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                  </span>
                  <span className="block p-6">
                    <span className="text-xs font-bold uppercase tracking-[0.22em] text-mocha">{service.category}</span>
                    <span className="mt-3 block font-serif text-3xl text-charcoal">{service.title}</span>
                    <span className="mt-3 block text-sm leading-7 text-charcoal/70">{service.description}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-18 text-ivory sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative min-h-[430px] overflow-hidden rounded-[2.5rem]">
            <Image src={images.about} alt="Warm salon consultation and hair styling experience" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-champagne">About Belle Ame</p>
            <h2 className="font-serif text-4xl leading-tight sm:text-6xl">Trusted Shelby stylists with a personal touch.</h2>
            <p className="mt-6 text-base leading-8 text-ivory/72 sm:text-lg">
              Belle Ame Salon is a locally focused Shelby salon built around relationship-first care. Every appointment starts with listening, so your haircut, color, style, or transformation supports how you want to look and feel every day.
            </p>
            <ButtonLink href="/about" variant="light" className="mt-8 w-fit">Meet the Team</ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Gallery Preview" title="Soft color, polished cuts, and camera-ready styling." description="A Pinterest-style glimpse of transformations, bridal hair, color work, highlights, cuts, and extensions." />
          </Reveal>
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {gallery.slice(0, 6).map((item) => (
              <Reveal key={item.id} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.6rem] bg-white shadow-[0_18px_60px_rgba(38,35,33,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/gallery" variant="secondary">View Gallery</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-pearl/70 py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Client Love" title="Modern reviews from clients who feel seen." align="center" />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <TestimonialCarousel />
            </Reveal>
            <div className="grid gap-4">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 0.05} className="rounded-[1.6rem] border border-charcoal/10 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-7 text-charcoal/72">"{item.quote}"</p>
                  <p className="mt-4 font-bold text-charcoal">{item.name}</p>
                  <p className="text-sm text-mocha">{item.service}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-charcoal p-8 text-center text-ivory shadow-[0_30px_100px_rgba(38,35,33,0.18)] sm:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">Ready for your next transformation?</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Book a salon experience designed around you.</h2>
          <ButtonLink href="/contact#booking" variant="light" className="mt-8">Book Appointment</ButtonLink>
        </Reveal>
      </section>

      <section className="px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}

