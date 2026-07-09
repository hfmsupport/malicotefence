import Link from 'next/link'

interface ServiceCTAProps {
  service: string
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  return (
    <section className="noise-overlay bg-[#1B3A2D] py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9933A] opacity-10 blur-[100px]" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">Get Started Today</p>
        <h2 className="font-serif text-4xl font-bold text-white mb-4">Ready to Transform Your Property?</h2>
        <p className="text-lg text-white/75 mb-10">
          Get a free estimate for your {service} — no pressure, no obligation.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/contact"
            className="bg-[#C9933A] text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition"
          >
            Get Free Estimate
          </Link>
          <a
            href="tel:5135608881"
            className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-white/10 transition"
          >
            Call (513) 560-8881
          </a>
        </div>
      </div>
    </section>
  )
}
