import type { Metadata } from 'next';
import { BadgeCheck, Heart, Home, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ButtonLink';
import { Reveal } from '@/components/Reveal';
import { SectionHeader } from '@/components/SectionHeader';
import { images, team } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Belle Ame Salon, a locally owned Shelby, NC salon focused on relationships, confidence, beauty, and welcoming professional care.'
};

const values = [
  { title: 'Locally owned', description: 'Rooted in Shelby and proud to care for the community.', icon: Home },
  { title: 'Relationship focused', description: 'Appointments built on listening, trust, and honest guidance.', icon: Heart },
  { title: 'Confidence first', description: 'Beauty services designed to help every client feel like themselves.', icon: Sparkles },
  { title: 'Experienced professionals', description: 'Skilled stylists who care about craft, comfort, and consistency.', icon: BadgeCheck }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-pearl/70 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-mocha">Our Story</p>
            <h1 className="font-serif text-5xl leading-tight text-charcoal sm:text-7xl">Beauty, trust, and genuine care in Shelby.</h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/72">
              Belle Ame Salon is a locally owned salon dedicated to helping clients look and feel their best through comfortable, welcoming service and experienced professional care.
            </p>
            <ButtonLink href="/contact#booking" className="mt-8">Book Appointment</ButtonLink>
          </Reveal>
          <Reveal delay={0.1} className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] shadow-[0_30px_100px_rgba(38,35,33,0.14)]">
            <Image src={images.consultation} alt="Belle Ame Salon consultation focused on personalized hair care" fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <Reveal>
              <SectionHeader eyebrow="Belle Ame Approach" title="A salon experience centered on confidence." description="We believe beautiful hair starts with understanding the person in the chair. Our team creates a relaxing environment where clients feel heard, cared for, and excited about their results." />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Reveal key={value.title} delay={index * 0.05} className="rounded-[1.8rem] border border-charcoal/10 bg-white p-6 shadow-sm">
                    <Icon className="text-mocha" size={28} aria-hidden="true" />
                    <h2 className="mt-5 font-serif text-3xl text-charcoal">{value.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-charcoal/70">{value.description}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-4 py-18 text-ivory sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">Mission Statement</p>
          <blockquote className="mt-5 font-serif text-4xl leading-tight sm:text-6xl">
            &quot;To create beautiful results while providing exceptional service and genuine care.&quot;
          </blockquote>
        </Reveal>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader eyebrow="Meet The Team" title="Stylists who make luxury feel welcoming." description="Each profile card supports a photo, bio, specialties, and social links so the salon can keep expanding team content over time." align="center" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 0.06} className="overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white shadow-[0_18px_60px_rgba(38,35,33,0.08)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src={member.image} alt={member.name + ' stylist profile photo'} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-mocha">{member.role}</p>
                  <h2 className="mt-2 font-serif text-4xl text-charcoal">{member.name}</h2>
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{member.bio}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span key={specialty} className="rounded-full bg-pearl px-3 py-1 text-xs font-semibold text-charcoal/70">{specialty}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-3">
                    {member.social.map((social) => (
                      <Link key={social.label} href={social.href} className="text-sm font-bold text-mocha underline-offset-4 hover:underline">
                        {social.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

