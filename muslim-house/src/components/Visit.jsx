export default function Visit() {
  return (
    <section id="visit" className="py-20 md:py-28 bg-white dark:bg-[#0A1610] relative">
      <div className="absolute inset-0 geometric-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-gold font-arabic text-xl mb-3">زورونا</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep dark:text-white mb-4">
            Visit Us
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
            Our doors are always open. Everyone is welcome at The Muslim House.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="fade-up rounded-2xl overflow-hidden shadow-xl border border-gold/10 h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2944.5!2d-83.68908!3d43.02287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8822154e1d2b7d75%3A0x7a9e5b5e7d8f4c2a!2s804%20Martin%20Luther%20King%20Ave%2C%20Flint%2C%20MI%2048503!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Muslim House Location"
            />
          </div>

          {/* Info */}
          <div className="fade-up space-y-6">
            {/* Address */}
            <div className="bg-cream dark:bg-white/5 rounded-2xl p-6 border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-emerald-deep dark:text-white mb-1">Address</h3>
                  <p className="text-muted dark:text-white/60">
                    804 Martin Luther King Ave<br />
                    Flint, MI 48503
                  </p>
                  <a
                    href="https://maps.google.com/?q=804+Martin+Luther+King+Ave+Flint+MI+48503"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-gold hover:text-gold-light text-sm font-medium transition-colors"
                  >
                    Get Directions &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Nearby */}
            <div className="bg-cream dark:bg-white/5 rounded-2xl p-6 border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-emerald-deep dark:text-white mb-1">Nearby Landmarks</h3>
                  <ul className="text-muted dark:text-white/60 space-y-1 text-sm">
                    <li>Near I-475 (easy highway access)</li>
                    <li>Near Hurley Hospital</li>
                    <li>Near University of Michigan&ndash;Flint</li>
                    <li>Accessible by bus</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-cream dark:bg-white/5 rounded-2xl p-6 border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-emerald-deep dark:text-white mb-1">Accessibility</h3>
                  <p className="text-muted dark:text-white/60 text-sm">
                    Wheelchair-accessible parking available. The masjid is located at the intersection of
                    Martin Luther King Ave &amp; 5th Ave, serving as a gateway to north Flint neighborhoods.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-cream dark:bg-white/5 rounded-2xl p-6 border border-gold/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-emerald-deep dark:text-white mb-1">Hours</h3>
                  <p className="text-muted dark:text-white/60 text-sm">
                    Open daily for all five prayers — from Fajr to Isha.<br />
                    Jumu&rsquo;ah (Friday Prayer): 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
