import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Aluminum Fences Cincinnati',
  description: 'Durable aluminum fence installation in Cincinnati. Low maintenance, rust-free, elegant designs. Family owned since 1994. Free estimates from Malicote Fence.',
  openGraph: {
    title: 'Aluminum Fence Installation | Cincinnati',
    description: 'Durable aluminum fence installation in Cincinnati. Low maintenance, rust-free, elegant designs. Free estimates.',
    url: 'https://www.malicotefence.com/fences/aluminum',
    images: [{ url: '/images/aluminum.jpg', width: 1200, height: 630, alt: 'Aluminum Fence Cincinnati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Aluminum Fence Installation Cincinnati', description: 'Durable aluminum fence installation. Free estimates.', images: ['/images/aluminum.jpg'] },
  alternates: { canonical: 'https://www.malicotefence.com/fences/aluminum' },
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aluminum Fence Installation',
  provider: { '@type': 'LocalBusiness', name: 'Malicote Fence', telephone: '+15135608881', url: 'https://www.malicotefence.com' },
  areaServed: { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
  url: 'https://www.malicotefence.com/fences/aluminum',
  description: 'Durable aluminum fence installation in Cincinnati and Greater Cincinnati.',
}

export default function AluminumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <ServicePageHero
          title="Aluminum Fences"
          tagline="Elegant. Rust-proof. Built for the long game."
          image="/images/aluminum.jpg"
          badge="Low Maintenance"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Shield',
              title: 'Zero Rust. Zero Rot.',
              description: "Powder-coated aluminum doesn't rust, warp, or rot. It looks as good in year 20 as it did on install day. The math on maintenance practically pays for itself.",
            },
            {
              icon: 'Sparkles',
              title: 'Powder Coat Perfection',
              description: 'Choose from a range of premium powder-coat finishes. Matte black is our most requested — and for good reason. It\'s sharp.',
            },
            {
              icon: 'Lock',
              title: 'Pool & Pet Approved',
              description: 'Aluminum fencing meets all residential pool code requirements and keeps pets safely contained without sacrificing aesthetics.',
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">The Fence That Works As Hard As You Do</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                Aluminum fencing is the intelligent choice for homeowners who want the look of ornamental iron without the lifetime of maintenance. We install commercial-grade aluminum panels that won&apos;t let you down — through frost heaves, UV exposure, or decades of heavy use.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'Pool Code Compliant', 'Powder Coat Warranty'].map(badge => (
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

        <ServiceCTA service="Aluminum Fence" />
      </main>
      <Footer />
    </>
  )
}
