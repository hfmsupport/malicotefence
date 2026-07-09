'use client'

import { useState } from 'react'

const SERVICES = [
  'Wood Privacy Fence',
  'Wood Picket Fence',
  'Kentucky Board Fence',
  'Aluminum Fence',
  'PVC & Vinyl Fence',
  'Chain Link Fence',
  'Not Sure / Other',
]

const inputClass =
  'w-full rounded-lg border border-[#E8E3DC] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C9933A] text-sm'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl mx-auto text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] mb-2">
          Thanks! We&apos;ll be in touch within 24 hours.
        </h3>
        <p className="text-sm text-[#4A4A4A]">We appreciate your interest in Malicote Fence.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            className={inputClass}
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className={inputClass}
            placeholder="(513) 000-0000"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="mb-6 relative">
        <label className="block text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">
          Services Interested In
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(o => !o)}
          className={`${inputClass} text-left flex items-center justify-between`}
        >
          <span className={selectedServices.length === 0 ? 'text-gray-400' : 'text-[#1A1A1A]'}>
            {selectedServices.length === 0
              ? 'Select services...'
              : `${selectedServices.length} service(s) selected`}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-[#E8E3DC] rounded-xl shadow-lg p-3">
            {SERVICES.map(service => (
              <label
                key={service}
                className="flex items-center gap-3 py-2 px-2 hover:bg-[#F9F7F4] rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedServices.includes(service)}
                  onChange={() => toggleService(service)}
                  className="w-4 h-4 accent-[#C9933A]"
                />
                <span className="text-sm text-[#1A1A1A]">{service}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-8">
        <label className="block text-xs font-bold tracking-widest uppercase text-[#1A1A1A] mb-2">Message</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={4}
          className={inputClass}
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#C9933A] text-white font-bold py-4 rounded-lg text-sm tracking-wide hover:bg-[#b8822f] transition-colors mb-6"
      >
        Send Message →
      </button>

      <p className="text-center text-sm text-[#4A4A4A]">
        Prefer to call? Reach us directly at{' '}
        <a href="tel:5135608881" className="font-bold text-[#1B3A2D] inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (513) 560-8881
        </a>
      </p>
    </form>
  )
}
