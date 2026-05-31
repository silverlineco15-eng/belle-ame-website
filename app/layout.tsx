import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { PageTransition } from '@/components/PageTransition';
import { siteConfig } from '@/data/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', display: 'swap' });

const seoTitle = 'Belle Ame Salon | Hair Salon in Shelby, NC';
const seoDescription =
  'Belle Ame Salon in Shelby, NC offers haircuts, color, highlights, balayage, extensions, bridal hair, styling, spray tanning, and personalized salon care.';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seoTitle,
    template: '%s | Belle Ame Salon Shelby NC'
  },
  description: seoDescription,
  keywords: [
    'Hair Salon Shelby NC',
    'Hair Stylist Shelby NC',
    'Balayage Shelby NC',
    'Hair Color Shelby NC',
    'Beauty Salon Shelby NC',
    'Belle Ame Salon',
    'Shelby NC hair salon'
  ],
  authors: [{ name: 'Belle Ame Salon' }],
  creator: 'Belle Ame Salon',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteConfig.url,
    siteName: 'Belle Ame Salon',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82',
        width: 1200,
        height: 630,
        alt: 'Luxury salon interior and hair styling at Belle Ame Salon'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seoTitle,
    description: seoDescription,
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82']
  }
};

export const viewport: Viewport = {
  themeColor: '#fffdf9',
  colorScheme: 'light'
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: siteConfig.name,
  url: siteConfig.url,
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=82',
  description: siteConfig.description,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country
  },
  areaServed: ['Shelby NC', 'Cleveland County NC'],
  sameAs: siteConfig.social.map((item) => item.href),
  openingHoursSpecification: siteConfig.hours
    .filter((item) => item.time !== 'Closed')
    .map((item) => {
      const times = item.time.replaceAll(' ', '').split('-');
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: item.day,
        opens: times[0],
        closes: times[1]
      };
    }),
  makesOffer: [
    'Haircuts',
    'Hair Color',
    'Highlights',
    'Balayage',
    'Extensions',
    'Bridal Hair',
    'Styling',
    'Spray Tanning'
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable + ' ' + cormorant.variable}>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Navigation />
        <main id="main-content">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </body>
    </html>
  );
}

