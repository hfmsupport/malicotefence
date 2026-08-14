import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Chain Link Fences Cincinnati',
  description: 'Affordable chain link fence installation in Cincinnati. Residential and commercial. Family owned since 1994. Free estimates from Malicote Fence.',
  openGraph: {
    title: 'Chain Link Fence Installation | Cincinnati',
    description: 'Affordable chain link fence installation in Cincinnati. Residential and commercial. Free estimates.',
    url: 'https://www.malicotefence.com/fences/chain-link',
    images: [{ url: '/images/chain-link.jpg', width: 1200, height: 630, alt: 'Chain Link Fence Cincinnati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Chain Link Fence Installation Cincinnati', description: 'Affordable chain link fence installation. Free estimates.', images: ['/images/chain-link.jpg'] },
  alternates: { canonical: 'https://www.malicotefence.com/fences/chain-link' },
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Chain Link Fence Installation',
  provider: { '@type': 'LocalBusiness', name: 'Malicote Fence', telephone: '+15135608881', url: 'https://www.malicotefence.com' },
  areaServed: { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
  url: 'https://www.malicotefence.com/fences/chain-link',
  description: 'Affordable chain link fence installation in Cincinnati. Residential and commercial.',
}

export default function ChainLinkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <ServicePageHero
          title="Chain Link Fences"
          tagline="Unmatched durability. Unbeatable value. Zero compromises."
          image="/images/chain-link.jpg"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Shield',
              title: 'Galvanized or Vinyl Coated',
              description: 'Standard galvanized for pure functionality. Black or green vinyl coating for a cleaner look that blends into landscaping. Both built to last decades.',
            },
            {
              icon: 'Building',
              title: 'Residential to Commercial',
              description: 'From backyard pet enclosures to full commercial perimeter fencing — we scale to your project without scaling back on quality.',
            },
            {
              icon: 'DollarSign',
              title: 'Maximum Security, Minimal Cost',
              description: 'No other fencing material delivers this level of durability and security per dollar. When the budget is real and the need is serious, chain link delivers.',
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">Functional Doesn&apos;t Mean Cheap</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                Chain link fencing gets a bad reputation because most of it is installed poorly. Undersized posts. Shallow footings. Loose tension. Malicote sets posts in concrete, tensions wire to code, and installs top rail and tension bars correctly — every time. The difference is obvious within the first year.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'Commercial Grade', 'Deep-Set Posts'].map(badge => (
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

        <ServiceCTA service="Chain Link Fence" />
      </main>
      <Footer />
    </>
  )
}
