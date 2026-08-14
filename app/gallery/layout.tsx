import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fence Gallery',
  description: 'Browse our fence installation gallery. See examples of wood, aluminum, vinyl, chain link and Kentucky board fences installed across Greater Cincinnati.',
  openGraph: {
    title: 'Fence Gallery | Malicote Fence Cincinnati',
    description: 'Browse our fence installation gallery. Wood, aluminum, vinyl, chain link and Kentucky board fences across Greater Cincinnati.',
    url: 'https://www.malicotefence.com/gallery',
    images: [{ url: '/images/wood-privacy.jpg', width: 1200, height: 630, alt: 'Malicote Fence Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fence Gallery | Malicote Fence Cincinnati',
    description: 'Browse our fence installation gallery across Greater Cincinnati.',
    images: ['/images/wood-privacy.jpg'],
  },
  alternates: { canonical: 'https://www.malicotefence.com/gallery' },
}

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
