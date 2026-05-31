import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { navLinks, siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.65fr_0.8fr_0.85fr_1fr] lg:px-8">
        <div>
          <p className="font-serif text-4xl">Belle Ame Salon</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/70">
            Luxury hair care with genuine warmth in Shelby, North Carolina. Professional services, thoughtful consultations, and beautiful results.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.social.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-full border border-ivory/15 px-4 py-2 text-sm font-semibold text-ivory/80 transition hover:border-ivory/35 hover:text-ivory">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm text-ivory/70">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-champagne" size={18} aria-hidden="true" />
              <span>{siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.postalCode}</span>
            </li>
            <li>
              <Link href={siteConfig.phoneHref} className="flex gap-3 transition hover:text-ivory">
                <Phone className="mt-0.5 shrink-0 text-champagne" size={18} aria-hidden="true" />
                {siteConfig.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link href={'mailto:' + siteConfig.email} className="flex gap-3 transition hover:text-ivory">
                <Mail className="mt-0.5 shrink-0 text-champagne" size={18} aria-hidden="true" />
                {siteConfig.email}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] text-champagne">
            <Clock size={17} aria-hidden="true" /> Hours
          </h2>
          <dl className="mt-5 space-y-2 text-sm text-ivory/70">
            {siteConfig.hours.map((item) => (
              <div key={item.day} className="flex justify-between gap-4 border-b border-ivory/10 pb-2">
                <dt>{item.day}</dt>
                <dd className="text-right">{item.time}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-champagne">Location Map</h2>
          <div className="mt-5 overflow-hidden rounded-3xl border border-ivory/15 bg-ivory/5">
            <iframe
              title="Footer map showing Belle Ame Salon location"
              src={siteConfig.mapEmbedUrl}
              className="h-48 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10 px-4 py-6 text-center text-xs text-ivory/55 sm:px-6 lg:px-8">
        <p>Copyright {new Date().getFullYear()} Belle Ame Salon. All rights reserved.</p>
      </div>
    </footer>
  );
}

