import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ButtonLink';
import { GalleryMasonry } from '@/components/GalleryMasonry';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'View Belle Ame Salon gallery inspiration for color work, balayage, bridal hair, highlights, cuts, extensions, and transformations in Shelby, NC.'
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-pearl/70 px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-mocha">Gallery</p>
          <h1 className="font-serif text-5xl leading-tight text-charcoal sm:text-7xl">Transformation inspiration, styled beautifully.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/72">
            Browse color, balayage, bridal, cuts, extensions, highlights, and before-and-after inspired salon work. Click any image for a larger preview.
          </p>
        </Reveal>
      </section>

      <section className="py-18 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <GalleryMasonry />
        </div>
      </section>

      <section className="px-4 pb-18 sm:px-6 sm:pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl rounded-[2.5rem] bg-charcoal p-8 text-center text-ivory sm:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-champagne">Love what you see?</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">Let us create a look that feels like you.</h2>
          <ButtonLink href="/contact#booking" variant="light" className="mt-8">Book Appointment</ButtonLink>
        </Reveal>
      </section>
    </>
  );
}

