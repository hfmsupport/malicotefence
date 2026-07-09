import Image from 'next/image'

interface ServicePageHeroProps {
  title: string
  tagline: string
  image: string
  badge?: string
}

export default function ServicePageHero({ title, tagline, image, badge }: ServicePageHeroProps) {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(135deg, rgba(27,58,45,0.82) 0%, rgba(10,20,15,0.65) 100%)' }}
      />
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />
      <div
        className="relative z-[3] flex flex-col items-center justify-center text-center px-4 pt-20"
        style={{ minHeight: '70vh' }}
      >
        {badge && (
          <span
            className="absolute top-6 right-6 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full text-white"
            style={{ background: '#C9933A' }}
          >
            {badge}
          </span>
        )}
        <h1
          className="font-serif text-5xl sm:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
        >
          {title}
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">{tagline}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[3]">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
