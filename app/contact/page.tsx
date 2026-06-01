import type { Metadata } from 'next';
import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import Link from 'next/link';
import { BookingWidget } from '@/components/BookingWidget';
import { ButtonLink } from '@/components/ButtonLink';
import { ContactForm } from '@/components/ContactForm';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Belle Ame Salon at 425 Cherryville Rd Suite B in Shelby, NC. Book appointments, request consultations, call the salon, get directions, and view business hours.'
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-pearl/70 px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-mocha">Contact</p>
          <h1 className="font-serif text-5xl leading-tight text-charcoal sm:text-7xl">We would love to welcome you in.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/72">
            Send a message, book a visit, call the salon, or get directions to Belle Ame Salon in Shelby, North Carolina.
          </p>
        </Reveal>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Visit Us" title="Belle Ame Salon" description="425 Cherryville Rd Suite B, Shelby, NC 28150" />
            <div className="mt-8 grid gap-4">
              <Link href={siteConfig.phoneHref} className="flex items-center gap-4 rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-sm transition hover:bg-pearl">
                <Phone className="text-mocha" aria-hidden="true" />
                <span><span className="block text-sm text-charcoal/55">Call button</span><span className="font-bold text-charcoal">{siteConfig.phoneDisplay}</span></span>
              </Link>
              <Link href={'mailto:' + siteConfig.email} className="flex items-center gap-4 rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-sm transition hover:bg-pearl">
                <Mail className="text-mocha" aria-hidden="true" />
                <span><span className="block text-sm text-charcoal/55">Email</span><span className="font-bold text-charcoal">{siteConfig.email}</span></span>
              </Link>
              <Link href={siteConfig.directionsUrl} className="flex items-center gap-4 rounded-[1.5rem] border border-charcoal/10 bg-white p-5 shadow-sm transition hover:bg-pearl">
                <Navigation className="text-mocha" aria-hidden="true" />
                <span><span className="block text-sm text-charcoal/55">Directions button</span><span className="font-bold text-charcoal">Open Google Maps</span></span>
              </Link>
            </div>
            <div className="mt-8 rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 font-serif text-3xl text-charcoal"><Clock className="text-mocha" aria-hidden="true" /> Business Hours</h2>
              <dl className="mt-5 space-y-3 text-sm text-charcoal/70">
                {siteConfig.hours.map((item) => (
                  <div key={item.day} className="flex justify-between gap-4 border-b border-charcoal/10 pb-3 last:border-0 last:pb-0">
                    <dt>{item.day}</dt>
                    <dd className="font-semibold text-charcoal">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="bg-pearl/70 py-18 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <Reveal className="min-h-[440px] overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-[0_24px_80px_rgba(38,35,33,0.08)]">
            <iframe
              title="Google map showing Belle Ame Salon in Shelby, North Carolina"
              src={siteConfig.mapEmbedUrl}
              className="h-full min-h-[440px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-mocha">
              <MapPin size={16} aria-hidden="true" /> Shelby NC
            </p>
            <h2 className="font-serif text-4xl leading-tight text-charcoal sm:text-6xl">Easy to find, relaxing once you arrive.</h2>
            <p className="mt-5 text-base leading-8 text-charcoal/70">
              Belle Ame Salon is located on Cherryville Road in Shelby. Use the directions button for route planning, then settle into a warm salon experience centered on your goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={siteConfig.phoneHref}>Call Salon</ButtonLink>
              <ButtonLink href={siteConfig.directionsUrl} variant="secondary">Get Directions</ButtonLink>
            </div>
          </Reveal>
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

