import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', weight: ['300','400','500','600','700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', weight: ['400','500','600','700'] })

const BASE_URL = 'https://www.malicotefence.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Malicote Fence | Cincinnati Fence Installation Since 1994',
    template: '%s | Malicote Fence Cincinnati',
  },
  description: 'Family owned fence company serving Greater Cincinnati since 1994. Wood, aluminum, PVC vinyl and chain link fence installation. Free estimates. Call (513) 560-8881.',
  keywords: ['fence installation Cincinnati', 'Cincinnati fence company', 'wood fence Cincinnati', 'aluminum fence Cincinnati', 'vinyl fence Cincinnati', 'chain link fence Cincinnati', 'fence contractor Ohio', 'Malicote Fence'],
  authors: [{ name: 'Malicote Fence' }],
  creator: 'Malicote Fence',
  publisher: 'Malicote Fence',
  verification: {
    google: 'zMaTVcyG0BN4ywRR7Z4g__c02_PepubuHjQ_NBLOI-A',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Malicote Fence',
    title: 'Malicote Fence | Cincinnati Fence Installation Since 1994',
    description: 'Family owned fence company serving Greater Cincinnati since 1994. Wood, aluminum, PVC vinyl and chain link fence installation. Free estimates.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Malicote Fence - Cincinnati Fence Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Malicote Fence | Cincinnati Fence Installation Since 1994',
    description: 'Family owned fence company serving Greater Cincinnati since 1994. Free estimates. Call (513) 560-8881.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
}

// LocalBusiness + HomeAndConstructionBusiness schema
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Malicote Fence',
  description: 'Family owned fence installation company serving Greater Cincinnati since 1994. Specializing in wood, aluminum, PVC vinyl, chain link and Kentucky board fencing.',
  url: BASE_URL,
  telephone: '+15135608881',
  foundingDate: '1994',
  priceRange: '$$',
  image: `${BASE_URL}/images/hero.jpg`,
  logo: `${BASE_URL}/favicon.ico`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cincinnati',
    addressRegion: 'OH',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.1031,
    longitude: -84.5120,
  },
  areaServed: [
    { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
    { '@type': 'City', name: 'Loveland', addressRegion: 'OH' },
    { '@type': 'City', name: 'Mason', addressRegion: 'OH' },
    { '@type': 'City', name: 'West Chester', addressRegion: 'OH' },
    { '@type': 'City', name: 'Fairfield', addressRegion: 'OH' },
    { '@type': 'City', name: 'Blue Ash', addressRegion: 'OH' },
    { '@type': 'City', name: 'Hyde Park', addressRegion: 'OH' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Fence Installation Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wood Privacy Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wood Picket Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Aluminum Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Chain Link Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PVC Vinyl Fence Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kentucky Board Fence Installation' } },
    ],
  },
  sameAs: [],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Q51KYNSSGE"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q51KYNSSGE');
            `,
          }}
        />
      </body>
    </html>
  )
}
