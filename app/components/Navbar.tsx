'use client'

import { useState } from 'react'

const fencesLinks = [
  { label: 'Wood Privacy Fence', href: '/fences/wood-privacy' },
  { label: 'Wood Picket Fence', href: '/fences/wood-picket' },
  { label: 'Kentucky Board Fence', href: '/fences/kentucky-board' },
  { label: 'Aluminum Fence', href: '/fences/aluminum' },
  { label: 'PVC & Vinyl Fence', href: '/fences/pvc-vinyl' },
  { label: 'Chain Link Fence', href: '/fences/chain-link' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fencesOpen, setFencesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/">
          <span className="font-serif text-2xl font-bold text-[#1B3A2D] tracking-tight">MALICOTE</span>
          <span className="font-serif text-2xl font-normal text-[#C9933A]"> FENCE</span>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Est. 1994 · Cincinnati, Ohio</p>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {(['Home', 'About', 'Fences', 'Gallery', 'Contact'] as const).map(item =>
            item === 'Fences' ? (
              <div key="Fences" className="relative group">
                <a href="/#fences" className="text-sm font-medium text-gray-700 hover:text-[#1B3A2D] transition-colors duration-200 tracking-wide flex items-center gap-1">
                  Fences
                  <svg className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <div className="absolute top-full left-0 mt-2 w-52 bg-white shadow-xl border-t-2 border-[#C9933A] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                  {fencesLinks.map(({ label, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#F9F7F4] hover:text-[#1B3A2D] border-b border-gray-50 last:border-0 font-medium"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item}
                href={{ Home: '/#home', About: '/about', Gallery: '/gallery', Contact: '/contact' }[item]}
                className="text-sm font-medium text-gray-700 hover:text-[#1B3A2D] transition-colors duration-200 tracking-wide"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <a href="/contact" className="hidden lg:inline-flex items-center gap-2 bg-[#C9933A] text-white px-5 py-2.5 text-sm font-semibold rounded-none hover:bg-[#b8822f] transition-all duration-200 tracking-wide uppercase">
          Free Estimate →
        </a>
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[#E8E3DC] shadow-xl z-50 px-4 py-6 flex flex-col gap-4">
          <a href="/" className="text-sm font-semibold tracking-wide text-[#1A1A1A] py-2 border-b border-[#E8E3DC]" onClick={() => setMenuOpen(false)}>Home</a>

          <div>
            <button
              className="w-full flex items-center justify-between text-sm font-semibold tracking-wide text-[#1A1A1A] py-2 border-b border-[#E8E3DC]"
              onClick={() => setFencesOpen(!fencesOpen)}
            >
              Fences
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points={fencesOpen ? "18 15 12 9 6 15" : "6 9 12 15 18 9"}/>
              </svg>
            </button>
            {fencesOpen && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                <a href="/fences/wood-privacy" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>Wood Privacy Fence</a>
                <a href="/fences/wood-picket" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>Wood Picket Fence</a>
                <a href="/fences/kentucky-board" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>Kentucky Board Fence</a>
                <a href="/fences/aluminum" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>Aluminum Fence</a>
                <a href="/fences/pvc-vinyl" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>PVC & Vinyl Fence</a>
                <a href="/fences/chain-link" className="text-sm text-[#4A4A4A] py-1.5 hover:text-[#1B3A2D]" onClick={() => setMenuOpen(false)}>Chain Link Fence</a>
              </div>
            )}
          </div>

          <a href="/gallery" className="text-sm font-semibold tracking-wide text-[#1A1A1A] py-2 border-b border-[#E8E3DC]" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="/about" className="text-sm font-semibold tracking-wide text-[#1A1A1A] py-2 border-b border-[#E8E3DC]" onClick={() => setMenuOpen(false)}>About Us</a>
          <a href="/contact" className="text-sm font-semibold tracking-wide text-[#1A1A1A] py-2 border-b border-[#E8E3DC]" onClick={() => setMenuOpen(false)}>Contact Us</a>

          <a href="/contact" className="mt-2 bg-[#C9933A] text-white font-bold text-sm tracking-wide py-3 px-6 rounded-lg text-center hover:opacity-90 transition" onClick={() => setMenuOpen(false)}>
            Get Free Estimate
          </a>
        </div>
      )}
    </header>
  )
}
