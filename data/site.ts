export const siteConfig = {
  name: 'Belle Ame Salon',
  tagline: 'Beautiful Hair. Genuine Confidence.',
  description:
    'Professional hair services, personalized care, and a salon experience designed around you in Shelby, North Carolina.',
  url: 'https://belleameshelby.com',
  address: {
    street: '425 Cherryville Rd Suite B',
    city: 'Shelby',
    state: 'NC',
    postalCode: '28150',
    country: 'US'
  },
  phoneDisplay: '(704) 555-0198',
  phoneHref: 'tel:+17045550198',
  email: 'hello@belleameshelby.com',
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=425%20Cherryville%20Rd%20Suite%20B%2C%20Shelby%2C%20NC%2028150',
  mapEmbedUrl:
    'https://www.google.com/maps?q=425%20Cherryville%20Rd%20Suite%20B%2C%20Shelby%2C%20NC%2028150&output=embed',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Pinterest', href: 'https://www.pinterest.com/' }
  ],
  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday', time: '8:00 AM - 7:00 PM' },
    { day: 'Wednesday', time: '8:00 AM - 6:00 PM' },
    { day: 'Thursday', time: '8:00 AM - 7:00 PM' },
    { day: 'Friday', time: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' }
  ]
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' }
];

export const images = {
  hero:
    'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=82',
  about:
    'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=82',
  consultation:
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1400&q=82',
  bridal:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=82'
};

export type Service = {
  title: string;
  slug: string;
  category: 'Cuts' | 'Color' | 'Styling' | 'Texture' | 'Extensions' | 'Bridal' | 'Wellness';
  description: string;
  price: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Women's Haircuts",
    slug: 'womens-haircuts',
    category: 'Cuts',
    description:
      'Customized cuts shaped around your face, lifestyle, texture, and daily styling routine.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: "Men's Haircuts",
    slug: 'mens-haircuts',
    category: 'Cuts',
    description:
      'Clean, tailored cuts with detail work for a polished finish that grows out beautifully.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Color Services',
    slug: 'color-services',
    category: 'Color',
    description:
      'Dimensional all-over color, glossing, root touch-ups, and color refreshes with salon-quality care.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Highlights',
    slug: 'highlights',
    category: 'Color',
    description:
      'Natural brightness, soft dimension, and custom placement for a luminous finish.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Balayage',
    slug: 'balayage',
    category: 'Color',
    description:
      'Hand-painted color for soft, lived-in dimension with a low-maintenance grow out.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Extensions',
    slug: 'extensions',
    category: 'Extensions',
    description:
      'Length, fullness, and confidence with consultation-led extension options and blending.',
    price: 'Consultation required',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Perms',
    slug: 'perms',
    category: 'Texture',
    description:
      'Soft movement, curl support, and texture services designed for your hair goals.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Styling',
    slug: 'styling',
    category: 'Styling',
    description:
      'Blowouts, waves, smoothing, and finishing services for everyday polish or special plans.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Special Occasion Hair',
    slug: 'special-occasion-hair',
    category: 'Styling',
    description:
      'Event-ready curls, updos, and polished styles that photograph beautifully.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Bridal Hair',
    slug: 'bridal-hair',
    category: 'Bridal',
    description:
      'Romantic, secure bridal styles with trial options and thoughtful wedding day planning.',
    price: 'Custom quote',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Spray Tanning',
    slug: 'spray-tanning',
    category: 'Wellness',
    description:
      'A natural-looking glow customized for your tone, occasion, and desired depth.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1596178060810-72f53ce9a65c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    title: 'Beard Trims',
    slug: 'beard-trims',
    category: 'Cuts',
    description:
      'Shape, clean-up, and detail work for a refined, well-groomed look.',
    price: 'Starting at $--',
    image:
      'https://images.unsplash.com/photo-1599351431402-433ef72fe40b?auto=format&fit=crop&w=1000&q=80'
  }
];

export const trustItems = [
  { label: '5-Star Rated', detail: 'Trusted by local Shelby clients' },
  { label: 'Experienced Stylists', detail: 'Skilled care for every texture and goal' },
  { label: 'Personalized Consultations', detail: 'A plan before every transformation' },
  { label: 'Relaxing Environment', detail: 'Clean, calm, and welcoming' }
];

export const testimonials = [
  {
    name: 'Megan R.',
    service: 'Balayage and cut',
    quote:
      'Belle Ame made me feel completely listened to. My color is soft, dimensional, and exactly what I hoped for.',
    rating: 5
  },
  {
    name: 'Caroline S.',
    service: 'Highlights',
    quote:
      'The salon is beautiful and comfortable, and the team is so kind. I left feeling polished and confident.',
    rating: 5
  },
  {
    name: 'Ashley M.',
    service: 'Bridal styling',
    quote:
      'My wedding hair stayed perfect all day. The whole experience felt calm, personal, and special.',
    rating: 5
  }
];

export const team = [
  {
    name: 'Heather',
    role: 'Stylist',
    bio:
      'Heather brings a thoughtful consultation style and a polished eye for everyday cuts, color maintenance, and healthy hair routines.',
    specialties: ['Dimensional color', 'Long layers', 'Blowouts'],
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80',
    social: [{ label: 'Instagram', href: 'https://www.instagram.com/' }]
  },
  {
    name: 'Wendy',
    role: 'Stylist',
    bio:
      'Wendy is known for warm care, precision styling, and helping clients choose looks that feel beautiful and realistic for their lifestyle.',
    specialties: ['Precision cuts', 'Highlights', 'Hair health'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=80',
    social: [{ label: 'Facebook', href: 'https://www.facebook.com/' }]
  },
  {
    name: 'Kasie',
    role: 'Stylist',
    bio:
      'Kasie focuses on soft transformations, special occasion styling, and confidence-building finishes for every appointment.',
    specialties: ['Balayage', 'Event hair', 'Extensions'],
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    social: [{ label: 'Instagram', href: 'https://www.instagram.com/' }]
  }
];

export type GalleryItem = {
  id: number;
  title: string;
  category: 'Color' | 'Balayage' | 'Bridal' | 'Cuts' | 'Extensions';
  image: string;
  alt: string;
  height: 'short' | 'medium' | 'tall';
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    title: 'Dimensional brunette color',
    category: 'Color',
    image:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=82',
    alt: 'Dimensional brunette hair color after salon service',
    height: 'tall'
  },
  {
    id: 2,
    title: 'Soft blonde balayage',
    category: 'Balayage',
    image:
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=82',
    alt: 'Soft blonde balayage with loose waves',
    height: 'medium'
  },
  {
    id: 3,
    title: 'Elegant bridal updo',
    category: 'Bridal',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=82',
    alt: 'Elegant bridal hair updo with accessory',
    height: 'tall'
  },
  {
    id: 4,
    title: 'Fresh layered cut',
    category: 'Cuts',
    image:
      'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=82',
    alt: 'Fresh layered haircut with smooth finish',
    height: 'short'
  },
  {
    id: 5,
    title: 'Seamless extension blend',
    category: 'Extensions',
    image:
      'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=82',
    alt: 'Long seamless hair extensions styled in waves',
    height: 'tall'
  },
  {
    id: 6,
    title: 'Golden highlight refresh',
    category: 'Color',
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=82',
    alt: 'Golden highlight refresh with curled finish',
    height: 'medium'
  },
  {
    id: 7,
    title: 'Romantic event waves',
    category: 'Bridal',
    image:
      'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=82',
    alt: 'Romantic event waves for a special occasion',
    height: 'medium'
  },
  {
    id: 8,
    title: 'Lived-in blonde color',
    category: 'Balayage',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=82',
    alt: 'Lived-in blonde hair color styled with volume',
    height: 'short'
  },
  {
    id: 9,
    title: 'Polished shoulder-length cut',
    category: 'Cuts',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=82',
    alt: 'Polished shoulder-length haircut inside a salon',
    height: 'medium'
  }
];

export const faqs = [
  {
    question: 'How do I book?',
    answer:
      'Use the booking section on this site, call the salon, or send a contact form message with your preferred service and availability.'
  },
  {
    question: 'Do you offer consultations?',
    answer:
      'Yes. Consultations are recommended for color transformations, extensions, bridal services, and any new look that needs extra planning.'
  },
  {
    question: 'What should I bring to my appointment?',
    answer:
      'Bring inspiration photos, a short history of recent color or chemical services, and notes about your daily styling routine.'
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Please provide as much notice as possible if you need to reschedule. Final salon policies can be confirmed when booking.'
  }
];

