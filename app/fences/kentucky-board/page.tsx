import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'Kentucky Board Fences Cincinnati',
  description: 'Kentucky board fence installation in Cincinnati. Classic split-rail style, durable and attractive. Family owned since 1994. Free estimates from Malicote Fence.',
  openGraph: {
    title: 'Kentucky Board Fence Installation | Cincinnati',
    description: 'Kentucky board fence installation in Cincinnati. Classic style, durable and attractive. Free estimates.',
    url: 'https://www.malicotefence.com/fences/kentucky-board',
    images: [{ url: '/images/kentucky-board.jpg', width: 1200, height: 630, alt: 'Kentucky Board Fence Cincinnati' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kentucky Board Fence Installation Cincinnati', description: 'Kentucky board fence installation. Free estimates.', images: ['/images/kentucky-board.jpg'] },
  alternates: { canonical: 'https://www.malicotefence.com/fences/kentucky-board' },
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kentucky Board Fence Installation',
  provider: { '@type': 'LocalBusiness', name: 'Malicote Fence', telephone: '+15135608881', url: 'https://www.malicotefence.com' },
  areaServed: { '@type': 'City', name: 'Cincinnati', addressRegion: 'OH' },
  url: 'https://www.malicotefence.com/fences/kentucky-board',
  description: 'Kentucky board fence installation in Cincinnati. Classic split-rail style, durable and attractive.',
}

export default function KentuckyBoardPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <Navbar />
      <main>
        <ServicePageHero
          title="Kentucky Board Fences"
          tagline="Wide open land deserves a fence that commands respect."
          image="/images/kentucky-board.jpg"
          badge="Ranch Favorite"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Layers',
              title: 'Classic 3 or 4 Rail Design',
              description: 'Clean horizontal boards define your property line with confidence. No fuss, no pretense — just strong, honest fencing.',
            },
            {
              icon: 'Wind',
              title: 'Built for Open Properties',
              description: "Whether you're enclosing pasture, acreage, or a sprawling residential lot, Kentucky board fencing scales beautifully without looking industrial.",
            },
            {
              icon: 'Wrench',
              title: 'Post-and-Board Precision',
              description: 'Posts set deep in concrete. Boards fastened with corrosion-resistant hardware. This fence will still be standing when your grandkids inherit the property.',
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">Land This Good Deserves Better Than Wire</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                Wire fencing is practical. Kentucky board fencing is a statement. It tells anyone who drives past that you take pride in your property — and that you chose to build it right. Malicote brings the same precision to every acre as we do to every backyard.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'Scales to Any Acreage', 'Deep-Set Concrete Posts'].map(badge => (
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

        <ServiceCTA service="Kentucky Board Fence" />
      </main>
      <Footer />
    </>
  )
}
