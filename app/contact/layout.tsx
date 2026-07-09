import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Malicote Fence',
  description: 'Get a free fence estimate from Malicote Fence. Serving Greater Cincinnati since 1994. Call us or fill out our form — we respond within 24 hours.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
