'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'

const images = [
  { src: '/images/wood-privacy.jpg',   title: 'Wood Privacy Fence',  category: 'Wood' },
  { src: '/images/wood-picket.jpg',    title: 'Wood Picket Fence',   category: 'Wood' },
  { src: '/images/kentucky-board.jpg', title: 'Kentucky Board Fence',category: 'Wood' },
  { src: '/images/aluminum.jpg',       title: 'Aluminum Fence',      category: 'Aluminum' },
  { src: '/images/pvc-vinyl.jpg',      title: 'PVC & Vinyl Fence',   category: 'Vinyl' },
  { src: '/images/chain-link.jpg',     title: 'Chain Link Fence',    category: 'Chain Link' },
  { src: '/images/hero.jpg',           title: 'Premium Fencing',     category: 'Featured' },
  { src: '/images/about.jpg',          title: 'Our Work',            category: 'Featured' },
]

const noiseBg = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
  backgroundSize: '128px 128px',
}

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  // Keyboard navigation
  useEffect(() => {
    if (activeIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActiveIndex(prev => prev === null ? null : prev === images.length - 1 ? 0 : prev + 1)
      if (e.key === 'ArrowLeft')  setActiveIndex(prev => prev === null ? null : prev === 0 ? images.length - 1 : prev - 1)
      if (e.key === 'Escape')     setActiveIndex(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [activeIndex])

  // Lock body scroll while lightbox is open
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [activeIndex])

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative bg-[#1B3A2D] py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{ opacity: 0.035, ...noiseBg }} />
        <div className="relative z-10 pt-10">
          <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-4">Our Work</p>
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4">
            Built to Last. Built to Impress.
          </h1>
          <p className="text-xl text-white/75 max-w-xl mx-auto">
            Every fence in our gallery was designed, built, and installed by the Malicote team. No stock photos. No shortcuts.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full absolute bottom-0 left-0 right-0">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* ── GALLERY GRID ── */}
      <section className="section-depth-1 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-[#1A1A1A] mb-3">Our Portfolio</h2>
            <p className="text-base text-[#4A4A4A]">Click any photo to view full screen</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-[#1B3A2D]${index === 0 ? ' lg:col-span-2' : ''}`}
                style={{ aspectRatio: '4/3', position: 'relative' }}
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-90"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B3A2D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">{img.category}</p>
                    <p className="font-serif text-lg font-bold text-white">{img.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition cursor-pointer"
              onClick={() => setActiveIndex(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="20" height="20">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Left arrow */}
            <button
              className="absolute left-4 sm:left-8 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition cursor-pointer"
              onClick={() => setActiveIndex(prev => prev === null ? null : prev === 0 ? images.length - 1 : prev - 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="24" height="24">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            {/* Right arrow */}
            <button
              className="absolute right-4 sm:right-8 z-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition cursor-pointer"
              onClick={() => setActiveIndex(prev => prev === null ? null : prev === images.length - 1 ? 0 : prev + 1)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="24" height="24">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full max-w-5xl mx-auto px-20" style={{ height: '75vh' }}>
              <Image
                src={images[activeIndex].src}
                alt={images[activeIndex].title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>

            {/* Bottom info bar */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-6 bg-gradient-to-t from-black/60 to-transparent text-center">
              <p className="text-xs font-bold tracking-widest uppercase text-[#C9933A] mb-1">
                {images[activeIndex].category}
              </p>
              <p className="font-serif text-xl font-bold text-white">{images[activeIndex].title}</p>
              <p className="text-sm text-white/50 mt-2">{activeIndex + 1} of {images.length}</p>
              <div className="flex gap-2 justify-center mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-[#C9933A] scale-125' : 'bg-white/30 hover:bg-white/60'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
