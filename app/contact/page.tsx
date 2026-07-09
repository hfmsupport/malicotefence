'use client'

import { useState } from 'react'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const servicesList = [
  'Wood Privacy Fence',
  'Wood Picket Fence',
  'Kentucky Board Fence',
  'Aluminum Fence',
  'PVC & Vinyl Fence',
  'Chain Link Fence',
]

const noiseBg = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: '128px 128px',
}

const fieldClass =
  'w-full rounded-lg border border-[#E8E3DC] px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#C9933A] transition'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <>
      <Navbar />

      {submitted ? (
        <section className="py-32 text-center">
          <div className="w-20 h-20 rounded-full bg-[#1B3A2D] flex items-center justify-center mx-auto mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-4">Message Received!</h2>
          <p className="text-lg text-[#4A4A4A]">
            Thanks for reaching out. A member of the Malicote family will be in touch within 24 hours.
          </p>
        </section>
      ) : (
        <>
          {/* ── HERO ── */}
          <section className="relative bg-[#1B3A2D] py-24 px-4 text-center overflow-hidden">
            <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.035, ...noiseBg }} />
            <div className="relative z-10 pt-10">
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">
                Free Estimates — No Obligation
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
                Let&apos;s Talk About Your Fence
              </h1>
              <p className="text-xl text-white/75 max-w-xl mx-auto">
                Tell us what you&apos;re thinking. We&apos;ll tell you what it takes. Simple as that.
              </p>
            </div>
            <div className="absolute bottom-0 left-0 right-0">
              <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full">
                <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
              </svg>
            </div>
          </section>

          {/* ── CONTACT SECTION ── */}
          <section className="section-depth-1 py-20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT — info */}
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">Get In Touch</p>
                  <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-6">We&apos;d Love to Hear From You</h2>
                  <p className="text-base leading-relaxed text-[#4A4A4A] mb-10">
                    Whether you know exactly what you want or you&apos;re just starting to explore options — we&apos;re here to help. Reach out and a member of the Malicote family will be in touch within 24 hours.
                  </p>

                  {/* Phone */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#1B3A2D] flex-shrink-0 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.93 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Call Us Directly</p>
                      <p className="text-base font-semibold text-[#1A1A1A]">(513) 560-8881</p>
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-full bg-[#1B3A2D] flex-shrink-0 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Response Time</p>
                      <p className="text-base font-semibold text-[#1A1A1A]">Within 24 Hours</p>
                    </div>
                  </div>

                  {/* Service area */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#1B3A2D] flex-shrink-0 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">Service Area</p>
                      <p className="text-base font-semibold text-[#1A1A1A]">Greater Cincinnati &amp; Surrounding Areas</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT — form */}
                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
                  <form
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
                    className="space-y-6"
                  >
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#4A4A4A] mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className={fieldClass}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#4A4A4A] mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className={fieldClass}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#4A4A4A] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="(513) 555-0100"
                        className={fieldClass}
                      />
                    </div>

                    {/* Services multi-select */}
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#4A4A4A] mb-2">Services Interested</label>
                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          className={`${fieldClass} text-left flex items-center justify-between bg-white`}
                        >
                          <span className={selectedServices.length === 0 ? 'text-gray-400' : 'text-[#1A1A1A]'}>
                            {selectedServices.length === 0
                              ? 'Select fence type(s)...'
                              : `${selectedServices.length} service${selectedServices.length > 1 ? 's' : ''} selected`}
                          </span>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {dropdownOpen && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#E8E3DC] rounded-xl shadow-lg z-20 p-3">
                            {servicesList.map((service) => (
                              <label key={service} className="flex items-center gap-3 px-3 py-2.5 hover:bg-[#F9F7F4] rounded-lg cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={selectedServices.includes(service)}
                                  onChange={() => {
                                    setSelectedServices(prev =>
                                      prev.includes(service)
                                        ? prev.filter(s => s !== service)
                                        : [...prev, service]
                                    )
                                  }}
                                  className="w-4 h-4 rounded accent-[#C9933A]"
                                />
                                <span className="text-sm text-[#1A1A1A]">{service}</span>
                              </label>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold tracking-widest uppercase text-[#4A4A4A] mb-2">Message</label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder="Tell us about your project — property size, fence style preference, timeline, any questions..."
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1B3A2D] text-white font-bold py-4 rounded-lg text-sm tracking-wide hover:opacity-90 transition"
                    >
                      Send My Request
                    </button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-[#E8E3DC] flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1B3A2D] flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.93 2 2 0 0 1 3.6 2.73h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.1a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z"/>
                      </svg>
                    </div>
                    <p className="text-sm text-[#4A4A4A]">
                      Prefer to call? Reach us directly at{' '}
                      <a href="tel:5135608881" className="font-bold text-[#1B3A2D] hover:underline">
                        (513) 560-8881
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </>
  )
}
