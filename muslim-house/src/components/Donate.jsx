import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const DONORBOX_SLUG = 'support-the-muslim-house'

export default function Donate() {
  const embedLoaded = useRef(false)

  useEffect(() => {
    if (!embedLoaded.current && !document.getElementById('donorbox-widget-script')) {
      const script = document.createElement('script')
      script.id = 'donorbox-widget-script'
      script.src = 'https://donorbox.org/install-popup-button.js'
      script.defer = true
      document.head.appendChild(script)
      embedLoaded.current = true
    }
  }, [])

  const openDonorbox = () => {
    window.open(`https://donorbox.org/${DONORBOX_SLUG}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="donate" className="py-20 md:py-28 bg-emerald-deep relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 star-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="fade-up">
            <p className="text-gold font-arabic text-xl mb-3">صدقة</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Support the House<br />That Serves Flint
            </h2>
            <div className="section-divider mb-6" />
          </div>

          {/* Hadith quote */}
          <div className="fade-up mb-12">
            <blockquote className="max-w-2xl mx-auto">
              <p className="font-heading text-xl md:text-2xl text-gold/90 italic leading-relaxed">
                &ldquo;Whoever builds a masjid for Allah, Allah will build for him a house in Jannah.&rdquo;
              </p>
              <footer className="text-white/40 text-sm mt-3">— Sahih Muslim</footer>
            </blockquote>
          </div>

          {/* Donation cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 fade-up">
            {/* Sadaqah — links to dedicated page */}
            <Link
              to="/sadaqah"
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 hover:border-gold/30 transition-all duration-500 group text-left block"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 text-center">Sadaqah</h3>
              <p className="text-white/60 text-sm leading-relaxed text-center">
                Your voluntary charity keeps the light on in north Flint. Every dollar feeds, shelters, and uplifts.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block text-gold text-sm font-semibold group-hover:underline">
                  Give Sadaqah &rarr;
                </span>
              </div>
            </Link>

            {/* Zakat */}
            <button
              onClick={openDonorbox}
              className="bg-white/10 backdrop-blur-sm border border-gold/30 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 group relative text-left cursor-pointer"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-emerald-deep text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                Most Needed
              </div>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 text-center">Zakat</h3>
              <p className="text-white/60 text-sm leading-relaxed text-center">
                Fulfill your obligatory charity. 100% of Zakat funds go directly to those in need in our community.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block text-gold text-sm font-semibold group-hover:underline">
                  Give Zakat &rarr;
                </span>
              </div>
            </button>

            {/* General Fund */}
            <button
              onClick={openDonorbox}
              className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/15 hover:border-gold/30 transition-all duration-500 group text-left cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 text-center">General Fund</h3>
              <p className="text-white/60 text-sm leading-relaxed text-center">
                Help us maintain and improve our facility — the house that has served Flint for 30 years.
              </p>
              <div className="mt-4 text-center">
                <span className="inline-block text-gold text-sm font-semibold group-hover:underline">
                  Give to General Fund &rarr;
                </span>
              </div>
            </button>
          </div>

          {/* Main CTA */}
          <div className="fade-up">
            <p className="text-white/60 text-base mb-6 max-w-lg mx-auto">
              Help us feed, clothe, and shelter our neighbors. Your sadaqah keeps the light on in north Flint.
            </p>
            <button
              onClick={openDonorbox}
              className="inline-block bg-gold hover:bg-gold-light text-emerald-deep px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 hover:-translate-y-1 cursor-pointer"
            >
              Donate Now via Donorbox
            </button>
            <p className="text-white/30 text-xs mt-4">
              The Muslim House Inc. &middot; EIN: 43-2094480 &middot; Tax-deductible 501(c)(3)
            </p>
            <p className="text-white/20 text-[10px] mt-2">
              Secure payments processed by Donorbox &middot; Stripe &amp; PayPal accepted
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
