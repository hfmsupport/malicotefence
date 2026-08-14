import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Wood Privacy Fences Cincinnati',
  description: 'Premium wood privacy fence installation in Cincinnati and Greater Cincinnati. Custom heights, quality lumber, fully insured. Family owned since 1994. Free estimates.',
  openGraph: {
    title: 'Wood Privacy Fence Installation | Cincinnati',
    description: 'Premium wood privacy fence installation in Cincinnati. Custom heights, quality lumber. Free estimates from Malicote Fence.',
    url: 'https://www.malicotefence.com/fences/wood-privacy',
    images: [{ url: '/images/wood-privacy.jpg', width: 1200, height: 630, alt: 'Wood Privacy Fence Cincinnati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Wood Privacy Fence Installation Cincinnati', description: 'Premium wood privacy fence installation. Free estimates.', images: ['/images/wood-privacy.jpg'] },
  alternates: { canonical: 'https://www.malicotefence.com/fences/wood-privacy' },
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Wood Privacy Fence Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Malicote Fence',
    telephone: '+15135608881',
    url: 'https://www.malicotefence.com',
  },
  areaServed: { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
  url: 'https://www.malicotefence.com/fences/wood-privacy',
  description: 'Premium wood privacy fence installation in Cincinnati and Greater Cincinnati.',
}

export default function WoodPrivacyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <ServicePageHero
          title="Wood Privacy Fences"
          tagline="Your yard. Your sanctuary. Your rules."
          image="/images/wood-privacy.jpg"
          badge="Most Popular"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Shield',
              title: 'Total Seclusion',
              description: 'Block out neighbors, traffic, and noise with solid board construction up to 8 feet tall. Built to last, not just to look good.',
            },
            {
              icon: 'Tree',
              title: 'Premium Cedar & Pine',
              description: 'We source only quality lumber — tight grain, kiln-dried, naturally resistant to rot and insects. No shortcuts.',
            },
            {
              icon: 'Hammer',
              title: 'Custom Built On-Site',
              description: "Every fence is measured, cut, and installed specifically for your property. Cookie-cutter doesn't belong here.",
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">The Gold Standard in Privacy</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                A wood privacy fence is more than a boundary — it&apos;s an extension of your home. Malicote builds every panel with structural integrity in mind: posts set in concrete, boards fastened with exterior-grade hardware, and rails spaced for maximum load bearing. We don&apos;t cut corners because we know this fence will be standing long after we&apos;ve left your property.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'Custom Heights', '10-Year Craftsmanship Warranty'].map(badge => (
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

        <ServiceCTA service="Wood Privacy Fence" />
      </main>
      <Footer />
    </>
  )
}
