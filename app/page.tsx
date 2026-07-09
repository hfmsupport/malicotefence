'use client'

import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100')
            entry.target.classList.remove('opacity-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      {/* ── SECTION 2: HERO ── */}
      <section id="home" className="noise-overlay relative min-h-screen flex items-center overflow-hidden bg-[#1B3A2D]">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)`
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C9933A] opacity-10 blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#0d2218] opacity-60 blur-[80px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div>
            <div className="opacity-0 animate-fadeUp delay-100 inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-[#C9933A]" />
              <span className="text-[#C9933A] text-sm font-medium tracking-[0.2em] uppercase">Family Owned Since 1994</span>
            </div>

            <h1 className="opacity-0 animate-fadeUp delay-200 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Cincinnati&apos;s<br />
              <span className="text-[#C9933A]">Trusted</span><br />
              Fence Experts
            </h1>

            <p className="opacity-0 animate-fadeUp delay-300 text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              Serving Butler County and the Greater Cincinnati area for over 30 years. From your first call to the final post — family run, every step of the way.
            </p>

            <div className="opacity-0 animate-fadeUp delay-400 flex flex-wrap gap-4 mb-14">
              <a href="/contact" className="inline-flex items-center gap-2 bg-[#C9933A] text-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#b8822f] transition-all duration-300 shadow-lg shadow-[#C9933A]/20">
                Request Free Estimate →
              </a>
              <a href="/gallery" className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                View Our Work
              </a>
            </div>

            {/* Trust badges — animate-scaleIn with stagger */}
            <div className="opacity-0 animate-fadeUp delay-500 flex flex-wrap gap-6">
              {[
                { num: '30+', label: 'Years Experience' },
                { num: '100%', label: 'Family Operated' },
                { num: 'Free', label: 'Estimates' },
              ].map((badge, i) => (
                <div key={badge.label} className="reveal opacity-0 transition-all duration-700 animate-scaleIn flex flex-col" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="font-serif text-3xl font-bold text-[#C9933A]">{badge.num}</span>
                  <span className="text-gray-400 text-xs tracking-widest uppercase">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="opacity-0 animate-fadeUp delay-300 relative">
            <div className="relative rounded-none overflow-hidden">
              <div className="absolute -top-3 -left-3 w-24 h-24 border-t-2 border-l-2 border-[#C9933A] z-20" />
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-[#C9933A] z-20" />
              <img
                src="/images/hero.jpg"
                alt="Malicote Fence Installation Cincinnati"
                className="w-full h-[520px] object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80' }}
              />
              <div className="absolute bottom-6 left-6 bg-[#1B3A2D]/95 backdrop-blur-sm p-4 border-l-2 border-[#C9933A]">
                <p className="text-white font-serif text-lg font-semibold">Fully Insured</p>
                <p className="text-gray-400 text-xs tracking-wide">Licensed &amp; Professional</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float opacity-60">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#C9933A] mx-auto mb-2" />
          <p className="text-gray-500 text-xs tracking-widest uppercase text-center">Scroll</p>
        </div>
      </section>

      {/* ── SECTION 3: ANIMATED SEPARATOR ── */}
      <div className="relative bg-[#F9F7F4] py-20 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1B3A2D] to-transparent opacity-20" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C9933A]" style={{ animation: 'separatorGlow 3s ease-in-out infinite' }} />
            <div className="w-2 h-2 rounded-full bg-[#C9933A]" />
            <div className="w-3 h-3 rounded-full border-2 border-[#C9933A]" />
          </div>

          <div className="relative flex flex-col items-center">
            <div className="absolute w-24 h-24 rounded-full border border-[#C9933A]/30" style={{ animation: 'rotateSlow 12s linear infinite' }} />
            <div className="absolute w-32 h-32 rounded-full border border-[#1B3A2D]/10" style={{ animation: 'rotateSlow 18s linear infinite reverse' }} />
            <div className="relative z-10 w-20 h-20 rounded-full bg-[#1B3A2D] flex flex-col items-center justify-center shadow-xl shadow-[#1B3A2D]/30">
              <span className="text-[#C9933A] font-serif text-xl font-bold leading-none">30</span>
              <span className="text-white text-[8px] tracking-widest uppercase">Years</span>
            </div>
            <p className="mt-4 text-[#1B3A2D] text-sm font-semibold tracking-widest uppercase text-center">Why Choose Us</p>
          </div>

          <div className="flex-1 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full border-2 border-[#C9933A]" />
            <div className="w-2 h-2 rounded-full bg-[#C9933A]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C9933A]" style={{ animation: 'separatorGlow 3s ease-in-out infinite 1.5s' }} />
          </div>
        </div>
      </div>

      {/* ── SECTION 4: WHY CHOOSE US ── */}
      <section className="relative bg-[#F9F7F4] pb-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="font-serif text-[200px] font-bold text-[#1B3A2D]/[0.03] leading-none whitespace-nowrap">MALICOTE</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
                title: 'Always Open For You',
                desc: 'We are available when you need us. From your first question to the final nail — we are with you every step of the way.',
                isGold: false,
              },
              {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" /></svg>`,
                title: 'Unbeatable Prices',
                desc: 'Quality fencing should not break the bank. We deliver premium craftsmanship at prices that make sense for your family.',
                isGold: true,
              },
              {
                icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.745 3.745 0 0 1 3.296-1.043A3.745 3.745 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>`,
                title: 'Professionally Qualified',
                desc: 'Fully licensed and insured with over 30 years of experience. Every job is done right, the first time — guaranteed.',
                isGold: false,
              },
            ].map((card, i) => (
              /* animate-scaleIn with stagger delay */
              <div key={i} className="reveal opacity-0 transition-all duration-700 animate-scaleIn group relative overflow-hidden rounded-none shadow-xl hover:-translate-y-2" style={{ transitionDelay: `${i * 150}ms` }}>
                <div
                  className="absolute inset-0 animate-gradientShift"
                  style={{
                    background: card.isGold
                      ? 'linear-gradient(135deg, #8a6520, #C9933A, #8a6520)'
                      : 'linear-gradient(135deg, #1B3A2D, #2d5a42, #1B3A2D)',
                    backgroundSize: '200% 200%',
                  }}
                />
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#C9933A]" />
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 16px)' }} />
                <div className="relative z-10 p-10 flex flex-col h-full min-h-[280px]">
                  <div className="text-white mb-6 opacity-90" dangerouslySetInnerHTML={{ __html: card.icon }} />
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/75 text-base leading-relaxed flex-1">{card.desc}</p>
                  <div className="mt-8 w-8 h-px bg-[#C9933A] group-hover:w-16 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SERVICES GRID ── */}
      <section id="fences" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#C9933A]" />
              <span className="text-[#C9933A] text-sm font-medium tracking-[0.2em] uppercase">Our Services</span>
              <div className="h-px w-12 bg-[#C9933A]" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1B3A2D]">Offering All Of Your<br />Fencing Needs</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Which style of fence is right for you? We offer fully customised options to make your fence the best on the block.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Wood Privacy Fence', img: 'wood-privacy', desc: 'Maximum privacy and natural beauty. Multiple height and style options available.' },
              { name: 'Wood Picket Fence', img: 'wood-picket', desc: 'Classic curb appeal with a warm, welcoming look for your home.' },
              { name: 'Kentucky Board Fence', img: 'kentucky-board', desc: 'Rustic, charming and incredibly durable. A Cincinnati favorite.' },
              { name: 'Aluminum Fence', img: 'aluminum', desc: 'Low maintenance elegance. Perfect for pools, gardens and perimeters.' },
              { name: 'PVC Vinyl Fence', img: 'pvc-vinyl', desc: 'Weather resistant and long lasting. Looks great year after year.' },
              { name: 'Chain Link Fence', img: 'chain-link', desc: 'Affordable, durable and practical. Ideal for commercial and residential use.' },
            ].map((service, i) => (
              <a key={i} href={`/fences/${service.img}`} className="card-3d reveal opacity-0 transition-all duration-700 group relative overflow-hidden border border-gray-100 hover:border-[#C9933A] hover:shadow-xl block" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="relative overflow-hidden h-52">
                  <img
                    src={`/images/${service.img}.jpg`}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80` }}
                  />
                  <div className="absolute inset-0 bg-[#1B3A2D]/0 group-hover:bg-[#1B3A2D]/20 transition-all duration-400" />
                </div>
                <div className="p-6 bg-white">
                  <div className="w-6 h-px bg-[#C9933A] mb-3 group-hover:w-12 transition-all duration-300" />
                  <h3 className="font-serif text-xl font-bold text-[#1B3A2D] mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: ABOUT TEASER ── */}
      <section id="about" className="section-depth-2 py-20 relative">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <div className="inline-block border-l-4 pl-5 text-left mb-8" style={{ borderColor: '#C9933A' }}>
            <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#C9933A' }}>Our Story</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold" style={{ color: '#1A1A1A' }}>
              Rooted in craftsmanship.<br />Built for generations.
            </h2>
          </div>
          <p className="text-base leading-relaxed mb-8" style={{ color: '#4A4A4A' }}>
            Malicote Fence has been building premium fences across the region for years. Every post, every rail, installed with the precision your property deserves — no shortcuts, no subcontractors, no compromises.
          </p>
          <a href="/about" className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide transition-colors hover:opacity-80" style={{ color: '#1B3A2D' }}>
            Our Story →
          </a>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section id="contact" className="relative py-24 bg-[#1B3A2D] overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 20px)' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9933A] opacity-10 blur-[100px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#C9933A]" />
            <span className="text-[#C9933A] text-sm font-medium tracking-[0.2em] uppercase">Get Started Today</span>
            <div className="h-px w-12 bg-[#C9933A]" />
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Ready to Build<br />Your Perfect Fence?</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">Contact us today for a free estimate. Serving Cincinnati and surrounding areas with pride since 1994.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* animate-pulseGlow on the gold CTA button */}
            <a href="tel:5135608881" className="inline-flex items-center gap-3 bg-[#C9933A] text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#b8822f] transition-all duration-300 shadow-lg shadow-[#C9933A]/20 animate-pulseGlow">
              Call (513) 560-8881
            </a>
            <a href="mailto:info@malicotefence.com" className="inline-flex items-center gap-3 border border-white/40 text-white px-10 py-4 font-medium uppercase tracking-widest text-sm hover:bg-white/10 transition-all duration-300">
              Email Us
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <span>📞 (513) 560-8881</span>
            <span>✉ info@malicotefence.com</span>
            <span>🕐 Mon–Fri: 8am–5pm</span>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
