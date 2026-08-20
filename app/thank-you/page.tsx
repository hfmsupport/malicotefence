import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

export const metadata = {
  title: 'Thank You | Malicote Fence',
  description: 'Your message has been received. We will be in touch within 24 hours.',
}

const noiseBg = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: '128px 128px',
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />

      <section className="relative bg-[#1B3A2D] py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.035, ...noiseBg }} />
        <div className="relative z-10 pt-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">
            Message Received
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-white/75 max-w-xl mx-auto">
            We&apos;ll be in touch within 24 hours.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>
      </section>

      <section className="section-depth-1 py-24 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <div className="w-20 h-20 rounded-full bg-[#1B3A2D] flex items-center justify-center mx-auto mb-8">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>

          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">
            Your Request Is In Good Hands
          </h2>
          <p className="text-base leading-relaxed text-[#4A4A4A] mb-10">
            A member of the Malicote family will review your message and reach out within 24 hours.
            In the meantime, feel free to browse our work or give us a call.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/gallery"
              className="bg-[#1B3A2D] text-white font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition"
            >
              View Our Work
            </Link>
            <a
              href="tel:5135608881"
              className="border-2 border-[#1B3A2D] text-[#1B3A2D] font-bold px-8 py-4 rounded-lg text-sm tracking-wide hover:bg-[#1B3A2D] hover:text-white transition"
            >
              Call (513) 560-8881
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Response Time</p>
              <p className="font-semibold text-[#1A1A1A]">Within 24 Hours</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Estimates</p>
              <p className="font-semibold text-[#1A1A1A]">Always Free</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Service Area</p>
              <p className="font-semibold text-[#1A1A1A]">Greater Cincinnati</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
