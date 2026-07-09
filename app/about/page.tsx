import type { Metadata } from 'next'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata: Metadata = {
  title: 'About Us | Malicote Fence',
  description: 'Family owned and operated since 1994. Malicote Fence proudly serves the Greater Cincinnati area with premium residential and commercial fencing.',
}

const noiseBg = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: '128px 128px',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO ── */}
        <section className="relative min-h-[50vh] bg-[#1B3A2D] flex items-center justify-center text-center px-4 overflow-hidden">
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.035, ...noiseBg }} />
          <div className="relative z-10 pt-20 pb-16">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">
              Family Owned &amp; Operated Since 1994
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-6">
              Built on Trust. Driven by Family.
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto">
              Serving the Greater Cincinnati area for over 30 years — one fence, one family at a time.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full">
              <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* ── STORY ── */}
        <section className="section-depth-1 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">Our Story</p>
            <h2 className="font-serif text-4xl font-bold text-[#1A1A1A] mb-8">Three Decades of Getting It Right</h2>
            <p className="text-lg leading-relaxed text-[#4A4A4A] mb-6 max-w-3xl mx-auto">
              Malicote Fence is a family owned and fully insured company established in 1994, proudly serving the Greater Cincinnati area. What started as a commitment to honest craftsmanship has grown into three decades of trusted service across the region.
            </p>
            <p className="text-lg leading-relaxed text-[#4A4A4A] mb-6 max-w-3xl mx-auto">
              As a father and son team, we believe fencing is personal. Every property is different. Every customer deserves to be treated with respect and served with real knowledge — not a sales pitch. Our goal is simple: do the job right the first time, every time.
            </p>
            <p className="text-lg leading-relaxed text-[#4A4A4A] max-w-3xl mx-auto">
              From commercial-grade perimeter fencing to the perfect backyard privacy fence — no job is too big or too small. We look forward to our family working with your family.
            </p>
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section className="section-depth-2 py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] text-center mb-14">Why Families Trust Malicote</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: '30+ Years in Business',
                  desc: "We've been building fences since 1994. That kind of track record doesn't happen by accident — it's earned job by job.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  ),
                },
                {
                  title: 'Fully Licensed & Insured',
                  desc: "Every job is covered. You're protected, your property is protected, and our team is protected. No exceptions.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                },
                {
                  title: 'Father & Son Team',
                  desc: 'When you hire Malicote, you deal with the owners directly. No middlemen, no subcontractors. Real accountability.',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  ),
                },
                {
                  title: 'Greater Cincinnati Proud',
                  desc: 'We live here. We work here. Our reputation in this community is everything — and we protect it on every single job.',
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }) => (
                <div key={title} className="card-3d bg-white border border-[#E8E3DC] rounded-2xl p-8 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-[#1B3A2D] flex items-center justify-center mx-auto mb-6">
                    {icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-3">{title}</h3>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative bg-[#1B3A2D] py-20 px-4 overflow-hidden text-center">
          <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.035, ...noiseBg }} />
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">Start Today</p>
            <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Transform Your Property?</h2>
            <p className="text-lg text-white/75 mb-10">
              Get a free estimate — no pressure, no obligation. The Malicote family is ready to help.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a href="/contact" className="bg-[#C9933A] text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition">
                Get Free Estimate
              </a>
              <a href="tel:5135608881" className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-white/10 transition">
                Call Us Now
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
