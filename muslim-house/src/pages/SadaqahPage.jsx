import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { usePrayerTimes } from '../hooks/usePrayerTimes'

export default function SadaqahPage() {
  const iframeLoaded = useRef(false)
  const { nextPrayer, countdown } = usePrayerTimes()

  useEffect(() => {
    // Re-run scroll animations for this page
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-up').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(40px)'
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-cream dark:bg-[#0F1F17]">
      {/* Header */}
      <header className="bg-emerald-deep sticky top-0 z-50">
        {nextPrayer && (
          <div className="bg-gold/90 text-emerald-deep text-center text-xs font-medium py-1 tracking-wide">
            Next Prayer: <span className="font-bold">{nextPrayer}</span> in{' '}
            <span className="font-mono font-bold">{countdown}</span>
          </div>
        )}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M20 4C20 4 12 10 12 18C12 22 14 26 20 28C26 26 28 22 28 18C28 10 20 4 20 4Z" fill="#C9A84C" />
                <path d="M15 32H25V36H15V32Z" fill="#C9A84C" />
                <circle cx="20" cy="16" r="3" fill="#1B4332" />
              </svg>
            </div>
            <span className="text-white font-heading text-lg font-bold">The Muslim House</span>
          </Link>
          <Link
            to="/"
            className="text-white/70 hover:text-gold text-sm font-medium transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero with embedded donation form */}
      <section className="relative bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-deep/95 to-emerald-medium/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left: Content */}
            <div>
              <p className="font-arabic text-gold text-2xl md:text-3xl mb-4">صدقة</p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Give Sadaqah<br />
                <span className="text-gold">Change a Life</span>
              </h1>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Your voluntary charity keeps the light on in north Flint. Every dollar feeds,
                shelters, and uplifts a neighbor in need.
              </p>

              {/* Key stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gold font-heading text-2xl font-bold">30+</p>
                  <p className="text-white/50 text-xs mt-1">Years Serving</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gold font-heading text-2xl font-bold">1000s</p>
                  <p className="text-white/50 text-xs mt-1">Meals Served</p>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-gold font-heading text-2xl font-bold">100%</p>
                  <p className="text-white/50 text-xs mt-1">Community Driven</p>
                </div>
              </div>

              <blockquote className="border-l-4 border-gold pl-4 py-2">
                <p className="text-gold/90 font-heading text-lg italic">
                  &ldquo;Sadaqah extinguishes sin as water extinguishes fire.&rdquo;
                </p>
                <footer className="text-white/40 text-sm mt-1">— Prophet Muhammad (PBUH), Tirmidhi</footer>
              </blockquote>
            </div>

            {/* Right: Donorbox Embed */}
            <div className="flex flex-col items-end">
              <iframe
                src="https://donorbox.org/embed/support-the-muslim-house?default_interval=o&hide_donation_meter=true"
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="100%"
                style={{
                  maxWidth: '420px',
                  minWidth: '250px',
                  maxHeight: 'none',
                  border: 'none',
                  background: 'transparent',
                  marginLeft: 'auto',
                  marginRight: '0',
                  display: 'block',
                }}
                allow="payment"
                title="Donorbox Donation Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is Sadaqah */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#0F1F17]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              What is Sadaqah?
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="prose prose-lg max-w-none fade-up">
            <p className="text-muted dark:text-white/60 text-lg leading-relaxed mb-6">
              Sadaqah is a voluntary act of charity given out of compassion, love, friendship, or generosity.
              Unlike Zakat, which is obligatory, Sadaqah can be given at any time and in any amount. It is one
              of the most beloved acts of worship in Islam.
            </p>
            <p className="text-muted dark:text-white/60 text-lg leading-relaxed mb-6">
              The word &ldquo;Sadaqah&rdquo; comes from the Arabic root &ldquo;sidq&rdquo; meaning sincerity —
              reflecting that this charity is a sign of sincere faith. It is not limited to monetary donations;
              even a smile, a kind word, or removing harm from a path is considered Sadaqah.
            </p>
          </div>

          {/* Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 fade-up">
            {[
              { icon: '🍽️', title: 'Feed the Hungry', text: 'Provide meals to families across north Flint through our food drives.' },
              { icon: '🧥', title: 'Clothe the Needy', text: 'Warm coats, shoes, and essentials distributed to those without.' },
              { icon: '💧', title: 'Provide Clean Water', text: 'Water distribution to the Flint community during the ongoing crisis.' },
              { icon: '🏠', title: 'Shelter Travelers', text: 'Temporary lodging, food, and laundry access for those passing through.' },
              { icon: '💝', title: 'Counsel & Support', text: 'Spiritual and personal counseling for anyone who walks through our doors.' },
              { icon: '🤲', title: 'Maintain the Masjid', text: 'Keep the Muslim House open — the building that was rebuilt from nothing.' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-white dark:bg-white/5 rounded-xl border border-gold/10"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-heading text-base font-bold text-emerald-deep dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted dark:text-white/60 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hadith & Benefits */}
      <section className="py-16 md:py-24 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 star-pattern opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-up">
            <p className="font-arabic text-gold text-xl mb-6">فضل الصدقة</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-10">
              The Virtues of Sadaqah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {[
              {
                title: 'Shade on Judgment Day',
                quote: 'The believer\'s shade on the Day of Resurrection will be their charity.',
                source: 'Tirmidhi',
              },
              {
                title: 'Protection from Calamity',
                quote: 'Give charity without delay, for it stands in the way of calamity.',
                source: 'Tirmidhi',
              },
              {
                title: 'Purification of Wealth',
                quote: 'Charity does not decrease wealth.',
                source: 'Sahih Muslim',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left"
              >
                <h3 className="font-heading text-lg font-bold text-gold mb-3">{item.title}</h3>
                <p className="text-white/70 text-sm italic leading-relaxed mb-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="text-white/40 text-xs">— {item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why The Muslim House */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A1610]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              Why Give to The Muslim House?
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="fade-up">
            <div className="bg-cream dark:bg-white/5 rounded-2xl p-8 md:p-10 border border-gold/10">
              <blockquote className="mb-6">
                <p className="font-heading text-xl md:text-2xl text-emerald-deep dark:text-white italic leading-relaxed">
                  &ldquo;It&rsquo;s a landmark and a safe space not only for Muslims but for anyone in the
                  community who is in need.&rdquo;
                </p>
              </blockquote>
              <p className="text-muted dark:text-white/60 leading-relaxed mb-6">
                For over 30 years, The Muslim House has served the Flint community from a building that was
                once in complete disrepair — where members could look up and see the stars through the roof.
                Today, it stands as a beacon of light in north Flint, providing daily prayers, food drives,
                clothing drives, water distribution, counseling, and shelter.
              </p>
              <p className="text-muted dark:text-white/60 leading-relaxed mb-6">
                Your Sadaqah goes directly to serving the community. We feed the hungry, clothe the needy,
                and open our doors to anyone who walks in — Muslim or not. As Imam Hanafi Abdul-Malik says:
              </p>
              <blockquote className="border-l-4 border-gold pl-4">
                <p className="text-emerald-deep dark:text-gold font-heading text-lg italic">
                  &ldquo;Brother, pull back and rest your camel.&rdquo;
                </p>
                <footer className="text-muted dark:text-white/40 text-sm mt-1">— Imam Hanafi Abdul-Malik</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#0F1F17]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="space-y-6 fade-up">
            {[
              {
                q: 'What is the difference between Sadaqah and Zakat?',
                a: 'Zakat is an obligatory form of charity (2.5% of qualifying wealth) required of every eligible Muslim. Sadaqah is voluntary and can be given in any amount, at any time, by anyone — it is not limited to financial contributions.',
              },
              {
                q: 'Can I give Sadaqah on behalf of someone else?',
                a: 'Yes, you can give Sadaqah on behalf of a loved one, whether living or deceased. This is a beautiful way to honor them and earn blessings for both of you.',
              },
              {
                q: 'Is my donation tax-deductible?',
                a: 'Yes. The Muslim House Inc. (EIN: 43-2094480) is a registered 501(c)(3) nonprofit. All donations are tax-deductible to the extent allowed by law.',
              },
              {
                q: 'How is my Sadaqah used?',
                a: 'Your donation directly supports our community programs: food drives, clothing distribution, water provision, counseling services, traveler lodging, and masjid maintenance.',
              },
              {
                q: 'Can I set up a recurring Sadaqah donation?',
                a: 'Yes, our Donorbox form supports monthly recurring donations. Regular giving helps us plan and sustain our community programs.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white dark:bg-white/5 rounded-xl border border-gold/10 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer font-heading text-base font-bold text-emerald-deep dark:text-white hover:text-gold transition-colors list-none">
                  {item.q}
                  <svg
                    className="w-5 h-5 text-gold flex-shrink-0 ml-4 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-muted dark:text-white/60 text-sm leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Give Sadaqah?
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
            Scroll back up to complete your donation, or return to explore our other programs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-gold hover:bg-gold-light text-emerald-deep px-8 py-4 rounded-full text-base font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25 cursor-pointer"
            >
              Donate Now
            </button>
            <Link
              to="/"
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full text-base font-medium transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Simple footer */}
      <footer className="bg-emerald-deep/95 border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} The Muslim House Inc. &middot; EIN: 43-2094480 &middot; 804 Martin Luther King Ave, Flint, MI 48503
          </p>
        </div>
      </footer>
    </div>
  )
}
