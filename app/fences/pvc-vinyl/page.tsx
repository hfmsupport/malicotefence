import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import ServicePageHero from '@/app/components/ServicePageHero'
import ServiceFeatures from '@/app/components/ServiceFeatures'
import ServiceCTA from '@/app/components/ServiceCTA'

export const metadata: Metadata = {
  title: 'PVC & Vinyl Fences | Malicote Fence Cincinnati',
  description: 'PVC and vinyl fence installation in Cincinnati. UV-stabilized, zero maintenance, weather proof. Privacy and picket styles available. Free estimates.',
}

const checkIcon = (
  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function PvcVinylPage() {
  return (
    <>
      <Navbar />
      <main>
        <ServicePageHero
          title="PVC & Vinyl Fences"
          tagline="Crisp. Clean. Never needs painting."
          image="/images/pvc-vinyl.jpg"
          badge="Zero Maintenance"
        />
        <ServiceFeatures
          features={[
            {
              icon: 'Droplets',
              title: 'Weather Proof by Design',
              description: "UV-stabilized vinyl won't fade, crack, or peel under the harshest sun. Rain, humidity, freeze-thaw cycles — it handles everything without complaint.",
            },
            {
              icon: 'Zap',
              title: 'No Paint. No Stain. Ever.',
              description: "The color goes all the way through. Hose it off once a year and it looks brand new. That's not a sales pitch — that's just how vinyl works.",
            },
            {
              icon: 'Layout',
              title: 'Privacy or Picket — Your Choice',
              description: 'Full-panel privacy sections or classic picket styles available in multiple heights and profiles. Clean modern lines that photograph beautifully.',
            },
          ]}
        />

        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">The Smartest Fence You&apos;ll Ever Buy</h2>
              <p className="text-base leading-relaxed text-[#4A4A4A]">
                PVC and vinyl fencing costs more upfront than wood. That&apos;s true. But when you factor in zero repainting, zero staining, and zero rot treatment over 20+ years — the numbers flip fast. Malicote installs only commercial-grade vinyl with thick-wall construction. Not the flimsy stuff. The real thing.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Licensed & Insured', 'Free Estimates', 'UV Stabilized', 'Thick-Wall Construction'].map(badge => (
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

        <ServiceCTA service="PVC & Vinyl Fence" />
      </main>
      <Footer />
    </>
  )
}
