import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePrayerTimes } from '../hooks/usePrayerTimes'

const RECURRING_EVENTS = [
  {
    title: "Jumu'ah Prayer",
    date: 'Every Friday',
    time: '2:00 PM',
    description: 'Weekly congregational prayer with khutbah (sermon). Khutbah begins at 2:00 PM followed by salat al-Jumu\'ah. All Muslims are welcome. Please arrive early to find seating.',
    type: 'weekly',
    icon: '🕌',
    highlight: true,
  },
  {
    title: 'Monthly Food Program',
    date: '3rd Saturday of Each Month',
    time: '1:15 - 2:30 PM',
    description: 'Every month since 2017, TMH members come together to cook and serve 100+ hot meals to families and individuals facing food insecurity. What began as a simple act of service has become a cornerstone of our mission.',
    type: 'monthly',
    icon: '🍽️',
  },
  {
    title: 'Daily Congregational Prayers',
    date: 'Every Day',
    time: 'Fajr through Isha',
    description: 'Five daily prayers offered at The Muslim House. Check our prayer times for the current schedule. All are welcome to join the congregation.',
    type: 'daily',
    icon: '🤲',
  },
  {
    title: 'Islamic Study Circle',
    date: 'Every Sunday',
    time: 'After Dhuhr Prayer',
    description: 'Weekly gathering for Quran study, hadith discussion, and spiritual growth. Open to all levels of knowledge — from those new to Islam to lifelong students of the deen.',
    type: 'weekly',
    icon: '📖',
  },
  {
    title: 'Youth Mentorship Program',
    date: 'Saturdays',
    time: '11:00 AM',
    description: 'Guiding the next generation with Islamic values, life skills, and community service. Building strong character through faith and fellowship.',
    type: 'weekly',
    icon: '🌱',
  },
]

const ANNUAL_EVENTS = [
  {
    title: 'Ramadan Programming',
    description: 'Iftar gatherings, Taraweeh prayers, and community meals throughout the blessed month. A time of increased worship, reflection, and togetherness.',
    icon: '🌙',
  },
  {
    title: 'Eid al-Fitr Celebration',
    description: 'Community Eid prayer and festivities marking the end of Ramadan. A joyful gathering for the whole family with food, fellowship, and celebration.',
    icon: '🎉',
  },
  {
    title: 'Eid al-Adha Celebration',
    description: 'Community Eid prayer commemorating the sacrifice of Prophet Ibrahim (AS). A time for worship, charity, and sharing with those in need.',
    icon: '🐑',
  },
  {
    title: 'Community Fundraising Events',
    description: 'Special fundraising events throughout the year to support TMH programs, building maintenance, and community outreach initiatives.',
    icon: '💛',
  },
]

export default function EventsPage() {
  const { nextPrayer, countdown } = usePrayerTimes()

  useEffect(() => {
    window.scrollTo(0, 0)
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
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-emerald-deep/95 backdrop-blur-md shadow-lg">
        {nextPrayer && (
          <div className="bg-gold/90 text-emerald-deep text-center text-xs font-medium py-1 tracking-wide">
            Next Prayer: <span className="font-bold">{nextPrayer}</span> in{' '}
            <span className="font-mono font-bold">{countdown}</span>
          </div>
        )}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo-dark.svg" alt="The Muslim House" className="h-12 md:h-14 w-auto" />
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/#about' },
                { label: 'Programs', href: '/#services' },
                { label: 'Events', href: '/events' },
                { label: 'Donate', href: '/#donate' },
                { label: 'Contact', href: '/#contact' },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    link.href === '/events' ? 'text-gold' : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold transition-all duration-300 ${
                    link.href === '/events' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}
              <Link
                to="/sadaqah"
                className="ml-3 bg-gold hover:bg-gold-light text-emerald-deep px-5 py-2 rounded-full text-sm font-bold transition-all duration-300"
              >
                Donate
              </Link>
            </div>
            <Link
              to="/"
              className="md:hidden text-white/70 hover:text-gold text-sm font-medium transition-colors flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Home
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero with photo background */}
      <section className="relative bg-emerald-deep overflow-hidden pt-28 md:pt-32 pb-16 md:pb-24 min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Photo background */}
        <div className="absolute inset-0">
          <img
            src="/photos/prayer-congregation.jpg"
            alt="Congregation at The Muslim House"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay: transparent on left, solid on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/10 via-emerald-deep/60 to-emerald-deep" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-emerald-deep to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl ml-auto text-right">
            <p className="font-arabic text-gold text-2xl mb-4">فعالياتنا</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Community Events
            </h1>
            <p className="text-white/80 text-lg md:text-xl">
              Stay connected with everything happening at The Muslim House. From weekly worship
              to monthly service, there&rsquo;s always a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Jumu'ah Feature */}
      <section className="py-12 md:py-16 bg-white dark:bg-[#0A1610]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-up bg-emerald-deep rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-20" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-arabic text-gold text-3xl mb-3">الجمعة</p>
                <h2 className="font-heading text-3xl md:text-4xl text-white font-bold mb-4">
                  Jumu&rsquo;ah Every Friday
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  The weekly congregational prayer is the heartbeat of our community. Khutbah begins
                  at 2:00 PM followed by salat al-Jumu&rsquo;ah. Whether you&rsquo;re a longtime member
                  or visiting Flint for the first time — this is your house.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/#visit"
                    className="bg-gold hover:bg-gold-light text-emerald-deep px-6 py-3 rounded-full font-bold text-sm transition-all"
                  >
                    Get Directions
                  </Link>
                  <Link
                    to="/#contact"
                    className="border border-white/30 hover:border-gold text-white hover:text-gold px-6 py-3 rounded-full font-medium text-sm transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
                  <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Every Friday</p>
                  <p className="text-gold font-heading text-5xl font-bold mb-1">2:00</p>
                  <p className="text-white text-lg">PM</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/60 text-xs">Khutbah followed by Salah</p>
                    <p className="text-white/40 text-xs mt-1">Please arrive early</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event: Celebration of the People */}
      <section className="py-12 md:py-16 bg-cream dark:bg-[#0F1F17]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 fade-up">
            <span className="inline-block bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              Featured Event
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white">
              Upcoming Events
            </h2>
          </div>

          <div className="fade-up bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gold/20 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Event details */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-emerald-deep text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Community Event
                  </span>
                  <span className="bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    Free &amp; Open to All
                  </span>
                </div>

                <h3 className="font-heading text-2xl md:text-3xl font-bold text-emerald-deep dark:text-white mb-2">
                  A Celebration of the People
                </h3>
                <p className="text-gold font-heading text-lg italic mb-6">
                  Different Cities, One Family
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-deep/10 dark:bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-deep dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted dark:text-white/40">Date &amp; Time</p>
                      <p className="text-emerald-deep dark:text-white font-bold">April 19th, 2025 at 2:00 PM</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-deep/10 dark:bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-deep dark:text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-muted dark:text-white/40">Location</p>
                      <p className="text-emerald-deep dark:text-white font-bold">The Muslim House of Flint</p>
                      <p className="text-muted dark:text-white/50 text-sm">804 Martin Luther King Ave, Flint, MI 48503</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-heading text-base font-bold text-emerald-deep dark:text-white mb-3">What to Expect:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {['Free Food', 'Water Giveaway', 'BBQ', 'Youth Activities'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-emerald-deep/5 dark:bg-white/5 rounded-lg px-3 py-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-emerald-deep dark:text-white text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-muted dark:text-white/60 text-sm leading-relaxed mb-6">
                  What started locally has grown into a movement connecting cities through service.
                  Jermaine Carey, along with brothers from Detroit, The Muslim House of Flint, now joined
                  by the Ikhwan brothers from Cleveland and Muslimatic in Chicago — we stand together for Flint.
                </p>

                <blockquote className="border-l-4 border-gold pl-4 py-1 mb-6">
                  <p className="text-emerald-deep dark:text-gold/90 font-heading text-sm italic">
                    &ldquo;Whoever saves one life, it is as if he had saved all of mankind.&rdquo;
                  </p>
                  <footer className="text-muted dark:text-white/40 text-xs mt-1">— Qur&rsquo;an 5:32</footer>
                </blockquote>

                <a
                  href="https://maps.google.com/?q=804+Martin+Luther+King+Ave+Flint+MI+48503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-emerald-deep px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
                >
                  Get Directions
                </a>
              </div>

              {/* Right: Visual */}
              <div className="bg-emerald-deep relative overflow-hidden flex items-center justify-center p-8 md:p-10">
                <div className="absolute inset-0 geometric-pattern opacity-15" />
                <div className="relative text-center">
                  <p className="font-heading text-6xl md:text-7xl text-gold font-bold mb-2">APR</p>
                  <p className="font-heading text-8xl md:text-9xl text-white font-bold leading-none mb-2">19</p>
                  <p className="text-white/70 text-lg mb-4">Saturday, 2:00 PM</p>
                  <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
                  <p className="text-gold font-heading text-xl font-bold mb-2">A Celebration</p>
                  <p className="text-gold font-heading text-xl font-bold mb-4">of the People</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    <span className="bg-white/10 text-white/80 text-[10px] px-3 py-1 rounded-full">Detroit</span>
                    <span className="bg-white/10 text-white/80 text-[10px] px-3 py-1 rounded-full">Flint</span>
                    <span className="bg-white/10 text-white/80 text-[10px] px-3 py-1 rounded-full">Cleveland</span>
                    <span className="bg-white/10 text-white/80 text-[10px] px-3 py-1 rounded-full">Chicago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recurring Events */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A1610]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              Weekly &amp; Monthly Programs
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
              Our regular programs run throughout the week. All are welcome to attend.
            </p>
          </div>

          <div className="space-y-6">
            {RECURRING_EVENTS.map((event, i) => (
              <div
                key={i}
                className={`fade-up bg-white dark:bg-white/5 rounded-2xl overflow-hidden border transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 ${
                  event.highlight ? 'border-gold/30' : 'border-gold/10 hover:border-gold/30'
                }`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: Schedule info */}
                  <div className="bg-emerald-deep p-6 md:p-8 md:w-64 flex-shrink-0 flex flex-col justify-center">
                    <span className="text-3xl mb-3">{event.icon}</span>
                    <p className="text-gold text-xs uppercase tracking-wider font-bold">{event.date}</p>
                    <p className="text-white text-lg font-bold mt-1">{event.time}</p>
                    <span
                      className={`mt-3 inline-block text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold w-fit ${
                        event.type === 'daily'
                          ? 'bg-emerald-light/20 text-emerald-light'
                          : event.type === 'weekly'
                          ? 'bg-gold/20 text-gold'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  {/* Right: Details */}
                  <div className="p-6 md:p-8 flex-1">
                    <h3 className="font-heading text-xl md:text-2xl font-bold text-emerald-deep dark:text-white mb-3">
                      {event.title}
                    </h3>
                    <p className="text-muted dark:text-white/60 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual / Seasonal Events */}
      <section className="py-16 md:py-24 bg-white dark:bg-[#0A1610]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              Annual &amp; Seasonal Events
            </h2>
            <div className="section-divider mb-6" />
            <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
              Special programming throughout the year that brings our community together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 fade-up">
            {ANNUAL_EVENTS.map((event, i) => (
              <div
                key={i}
                className="bg-cream dark:bg-white/5 rounded-2xl p-8 border border-gold/10 hover:border-gold/30 transition-all duration-500 group"
              >
                <span className="text-3xl mb-4 block">{event.icon}</span>
                <h3 className="font-heading text-xl font-bold text-emerald-deep dark:text-white mb-3 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted dark:text-white/60 text-sm leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Photos */}
      <section className="py-16 md:py-24 bg-cream dark:bg-[#0F1F17]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-deep dark:text-white mb-4">
              Our Community
            </h2>
            <div className="section-divider mb-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 fade-up">
            {[
              { src: '/photos/imam-award.jpg', alt: 'Imam Abdul-Malik receiving recognition' },
              { src: '/photos/umflint-group.jpg', alt: 'Community members at UM-Flint' },
              { src: '/photos/community-interior.jpg', alt: 'Inside The Muslim House' },
              { src: '/photos/sisters-selfie.jpg', alt: 'Community sisters' },
              { src: '/photos/event-1.jpg', alt: 'Community event' },
              { src: '/photos/community-gathering.jpg', alt: 'Community gathering' },
            ].map((photo, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Connected */}
      <section className="py-16 md:py-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 star-pattern opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg mx-auto">
            Want to know about upcoming events? Follow us on Facebook or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.facebook.com/The-Muslim-House-148159981880787/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-emerald-deep px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-xl hover:shadow-gold/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Follow on Facebook
            </a>
            <Link
              to="/"
              className="border-2 border-white/30 hover:border-gold text-white hover:text-gold px-8 py-4 rounded-full font-medium transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
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
