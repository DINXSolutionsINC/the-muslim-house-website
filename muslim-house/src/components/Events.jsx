import { Link } from 'react-router-dom'

const EVENTS = [
  {
    title: "Jumu'ah Prayer",
    date: 'Every Friday',
    time: '2:00 PM',
    description: 'Weekly congregational prayer with khutbah (sermon). All Muslims are welcome to join.',
    type: 'weekly',
  },
  {
    title: 'Monthly Food Program',
    date: '3rd Saturday',
    time: '1:15 - 2:30 PM',
    description: 'Hot meals prepared and served by TMH volunteers to families in need. 100+ meals, every month since 2017.',
    type: 'monthly',
  },
  {
    title: 'Islamic Study Circle',
    date: 'Every Sunday',
    time: 'After Dhuhr Prayer',
    description: 'Weekly gathering for Quran study, hadith discussion, and spiritual growth.',
    type: 'weekly',
  },
  {
    title: 'Youth Mentorship Program',
    date: 'Saturdays',
    time: '11:00 AM',
    description: 'Guiding the next generation with Islamic values, life skills, and community service.',
    type: 'weekly',
  },
]

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-28 bg-cream dark:bg-[#0F1F17] relative">
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-gold font-arabic text-xl mb-3">فعالياتنا</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep dark:text-white mb-4">
            Events & Programs
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto mb-4">
            Join us for worship, learning, and community building throughout the week.
          </p>
          <Link
            to="/events"
            className="inline-block text-gold hover:text-gold-light font-medium text-sm transition-colors"
          >
            View All Events &rarr;
          </Link>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {EVENTS.map((event, i) => (
            <div
              key={i}
              className="fade-up bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 group"
            >
              <div className="bg-emerald-deep p-4 flex items-center justify-between">
                <div>
                  <p className="text-gold text-xs uppercase tracking-wider font-bold">{event.date}</p>
                  <p className="text-white/80 text-sm">{event.time}</p>
                </div>
                <span
                  className={`text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold ${
                    event.type === 'weekly'
                      ? 'bg-gold/20 text-gold'
                      : 'bg-emerald-light/20 text-emerald-light'
                  }`}
                >
                  {event.type}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-emerald-deep dark:text-white mb-2 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <p className="text-muted dark:text-white/60 leading-relaxed text-sm">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Jumu'ah highlight */}
        <div className="mt-16 max-w-3xl mx-auto fade-up">
          <div className="bg-emerald-deep rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 geometric-pattern opacity-20" />
            <div className="relative">
              <p className="font-arabic text-gold text-2xl mb-4">الجمعة</p>
              <h3 className="font-heading text-2xl md:text-3xl text-white font-bold mb-3">
                Jumu&rsquo;ah Every Friday
              </h3>
              <p className="text-white/70 mb-6 max-w-lg mx-auto">
                Join us for the weekly congregational prayer. Khutbah begins at 2:00 PM.
                All Muslims are welcome — this is your house. Please arrive early to find seating.
              </p>
              <a
                href="#visit"
                className="inline-block bg-gold hover:bg-gold-light text-emerald-deep px-8 py-3 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
