import { CalendarDays, ExternalLink, ShieldCheck } from 'lucide-react';
import { ButtonLink } from '@/components/ButtonLink';

export function BookingWidget() {
  return (
    <section id="booking" aria-labelledby="booking-title" className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-[0_24px_80px_rgba(38,35,33,0.08)] sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-pearl px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-mocha">
            <CalendarDays size={16} aria-hidden="true" /> Booking
          </p>
          <h2 id="booking-title" className="font-serif text-3xl text-charcoal sm:text-4xl">Reserve your salon visit</h2>
          <p className="mt-4 text-sm leading-7 text-charcoal/70 sm:text-base">
            This placeholder is ready for Square Appointments, Vagaro, or GlossGenius. Replace this card with the provider embed when the salon chooses a booking platform.
          </p>
        </div>
        <div className="grid gap-3 sm:min-w-72">
          <ButtonLink href="/contact" className="w-full">Book Appointment</ButtonLink>
          <ButtonLink href="/services" variant="secondary" className="w-full">View Services</ButtonLink>
          <p className="flex items-center justify-center gap-2 text-xs text-charcoal/55">
            <ShieldCheck size={15} aria-hidden="true" /> Secure booking integration placeholder
          </p>
        </div>
      </div>
      <div className="mt-6 rounded-3xl border border-dashed border-mocha/30 bg-pearl/70 p-5 text-sm text-charcoal/70">
        <p className="font-semibold text-charcoal">Integration notes</p>
        <p className="mt-2">
          Add the selected provider script or iframe here. The surrounding design already matches the Belle Ame brand and will scale across mobile and desktop layouts.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 font-semibold text-mocha">
          Provider options: Square Appointments, Vagaro, GlossGenius <ExternalLink size={15} aria-hidden="true" />
        </p>
      </div>
    </section>
  );
}

