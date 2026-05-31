'use client';

import { Send } from 'lucide-react';
import { useState } from 'react';

const serviceOptions = ['Haircut', 'Color', 'Highlights', 'Balayage', 'Extensions', 'Bridal Hair', 'Spray Tanning', 'Other'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-charcoal/10 bg-white p-6 shadow-[0_24px_80px_rgba(38,35,33,0.08)] sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-charcoal">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-pearl px-4 py-3 text-charcoal focus:outline-mocha" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-semibold text-charcoal">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-pearl px-4 py-3 text-charcoal focus:outline-mocha" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-charcoal">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-pearl px-4 py-3 text-charcoal focus:outline-mocha" />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-semibold text-charcoal">Service Interested In</label>
          <select id="service" name="service" className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-pearl px-4 py-3 text-charcoal focus:outline-mocha" defaultValue="">
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-charcoal">Message</label>
          <textarea id="message" name="message" rows={5} required className="mt-2 w-full rounded-2xl border border-charcoal/10 bg-pearl px-4 py-3 text-charcoal focus:outline-mocha" placeholder="Tell us about your hair goals, preferred appointment windows, or inspiration photos." />
        </div>
      </div>
      <button type="submit" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-softblack focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-mocha">
        Send Message <Send size={16} aria-hidden="true" />
      </button>
      {submitted ? (
        <p className="mt-4 rounded-2xl bg-pearl px-4 py-3 text-sm font-semibold text-charcoal" role="status">
          Thank you. This demo form is ready to connect to email, CRM, or booking software.
        </p>
      ) : null}
    </form>
  );
}

