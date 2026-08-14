import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Wood Picket Fences Cincinnati',
  description: 'Classic wood picket fence installation in Cincinnati. Custom designs, quality craftsmanship, family owned since 1994. Free estimates from Malicote Fence.',
  openGraph: {
    title: 'Wood Picket Fence Installation | Cincinnati',
    description: 'Classic wood picket fence installation in Cincinnati. Custom designs, quality craftsmanship. Free estimates.',
    url: 'https://www.malicotefence.com/fences/wood-picket',
    images: [{ url: '/images/wood-picket.jpg', width: 1200, height: 630, alt: 'Wood Picket Fence Cincinnati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Wood Picket Fence Installation Cincinnati', description: 'Classic wood picket fence installation. Free estimates.', images: ['/images/wood-picket.jpg'] },
  alternates: { canonical: 'https://www.malicotefence.com/fences/wood-picket' },
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wood Picket Fence Installation',
  provider: { '@type': 'LocalBusiness', name: 'Malicote Fence', telephone: '+15135608881', url: 'https://www.malicotefence.com' },
  areaServed: { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
  url: 'https://www.malicotefence.com/fences/wood-picket',
  description: 'Classic wood picket fence installation in Cincinnati and Greater Cincinnati.',
}

export default function WoodPicketPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <ServicePageHero
          title="Wood Picket Fences"
          tagline="Timeless American character. Built to outlast trends."
          image="/images/wood-picket.jpg"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Home',
              title: 'Curb Appeal That Sells',
              description: "A well-built picket fence doesn't just look good — it signals pride of ownership and adds measurable value to your home.",
            },
            {
              icon: 'Paintbrush',
              title: 'Paint or Stain Ready',
              description: 'Our picket fences arrive prepped and ready for your finish of choice. White, natural wood tones, stained dark — your call.',
            },
            {
              icon: 'Ruler',
              title: 'Classic or Custom Spacing',
              description: 'Traditional equal spacing or decorative scalloped tops — we build it exactly how you envision it.',
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">The Fence That Never Goes Out of Style</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                Picket fences have defined American homes for over a century. But a poorly built one deteriorates fast. We use premium lumber and proper post-setting techniques so your fence holds its shape, its finish, and its value for decades.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'Paint/Stain Ready', 'Custom Tops Available'].map(badge => (
                <div key={badge} className="bg-white card-3d border border-[#E8E3DC] rounded-xl p-5 text-center">
                  <div className="w-8 h-8 rounded-full bg-[#1B3A2D] flex items-center justify-center mx-auto">
                    {checkIcon}
                  </div>
                  <p className="text-sm font-bold text-[#1A1A1A] mt-3">{badge}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA service="Wood Picket Fence" />
      </main>
      <Footer />
    </>
  )
}
