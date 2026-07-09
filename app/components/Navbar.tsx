'use client'

const fencesLinks = [
  { label: 'Wood Privacy Fence', href: '/fences/wood-privacy' },
  { label: 'Wood Picket Fence', href: '/fences/wood-picket' },
  { label: 'Kentucky Board Fence', href: '/fences/kentucky-board' },
  { label: 'Aluminum Fence', href: '/fences/aluminum' },
  { label: 'PVC & Vinyl Fence', href: '/fences/pvc-vinyl' },
  { label: 'Chain Link Fence', href: '/fences/chain-link' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/">
          <span className="font-serif text-2xl font-bold text-[#1B3A2D] tracking-tight">MALICOTE</span>
          <span className="font-serif text-2xl font-normal text-[#C9933A]"> FENCE</span>
          <p className="text-xs text-gray-500 tracking-widest uppercase">Est. 1994 · Cincinnati, Ohio</p>
        </a>
        <nav className="hidden md:flex items-center gap-8">
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
        <a href="/contact" className="hidden md:inline-flex items-center gap-2 bg-[#C9933A] text-white px-5 py-2.5 text-sm font-semibold rounded-none hover:bg-[#b8822f] transition-all duration-200 tracking-wide uppercase">
          Free Estimate →
        </a>
      </div>
    </header>
  )
}
