import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get a free fence estimate from Malicote Fence. Serving Greater Cincinnati since 1994. Call (513) 560-8881 or fill out our online form.',
  openGraph: {
    title: 'Contact Malicote Fence | Free Estimates Cincinnati',
    description: 'Get a free fence estimate from Malicote Fence. Serving Greater Cincinnati since 1994. Call (513) 560-8881.',
    url: 'https://www.malicotefence.com/contact',
    images: [{ url: '/images/hero.jpg', width: 1200, height: 630, alt: 'Contact Malicote Fence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Malicote Fence | Free Estimates Cincinnati',
    description: 'Get a free fence estimate. Call (513) 560-8881.',
    images: ['/images/hero.jpg'],
  },
  alternates: { canonical: 'https://www.malicotefence.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
