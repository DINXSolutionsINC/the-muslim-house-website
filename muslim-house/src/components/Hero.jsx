import { useEffect, useRef } from 'react'
import { usePrayerTimes } from '../hooks/usePrayerTimes'

export default function Hero() {
  const { nextPrayer, countdown, times } = usePrayerTimes()
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        const heroHeight = parallaxRef.current.parentElement?.offsetHeight || 800
        if (scrolled < heroHeight) {
          parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div ref={parallaxRef} className="absolute inset-0 bg-emerald-deep">
        <div className="absolute inset-0 geometric-pattern opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/60 via-emerald-deep/80 to-emerald-deep" />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gold/5 rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        {/* Bismillah */}
        <p className="font-arabic text-gold text-2xl sm:text-3xl md:text-4xl mb-6 opacity-0 animate-[fadeInDown_1s_0.3s_forwards]">
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </p>

        <h1 className="font-heading text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-[fadeInUp_1s_0.6s_forwards]">
          Serving Our Community Through
          <span className="block text-gold">Faith, Fellowship, and Action</span>
        </h1>

        <p className="text-white/70 text-lg sm:text-xl md:text-2xl font-light max-w-2xl mx-auto mb-4 opacity-0 animate-[fadeInUp_1s_0.9s_forwards]">
          Since 1995, The Muslim House has been a place of worship, service, and belonging
          in Flint, Michigan — rooted in Islamic principles and open to all.
        </p>

        <p className="text-gold/80 text-sm sm:text-base tracking-[0.15em] uppercase mb-10 opacity-0 animate-[fadeInUp_1s_1.1s_forwards]">
          Est. 1995 &middot; Flint, Michigan
        </p>

        {/* Next prayer countdown */}
        {nextPrayer && (
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-gold/20 rounded-2xl px-6 py-4 mb-10 opacity-0 animate-[fadeInUp_1s_1.3s_forwards]">
            <div className="text-left">
              <p className="text-white/60 text-xs uppercase tracking-wider">Next Prayer</p>
              <p className="text-gold font-heading text-xl font-bold">{nextPrayer}</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-left">
              <p className="text-white/60 text-xs uppercase tracking-wider">Starts In</p>
              <p className="text-white font-mono text-xl font-bold tracking-wider pulse-gold rounded-lg px-2">{countdown}</p>
            </div>
          </div>
        )}

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-[fadeInUp_1s_1.5s_forwards]">
          <a
            href="#about"
            className="bg-gold hover:bg-gold-light text-emerald-deep px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-0.5"
          >
            Discover Our Story
          </a>
          <a
            href="#donate"
            className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            Support the House
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
