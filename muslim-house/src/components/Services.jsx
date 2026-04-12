const SERVICES = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Daily Prayers & Jumu\'ah',
    description:
      'Daily salah and weekly Jumu\'ah services every Friday at 2:00 PM. The Muslim House welcomes all Muslims to join us for congregational prayer.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
      </svg>
    ),
    title: 'Monthly Food Program',
    description:
      'Every month since 2017, TMH members cook and serve hot meals to families in need. 3rd Saturday of each month, 1:15–2:30 PM. 100+ meals served, without exception.',
    image: '/photos/food-program.jpg',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Clothing Drives',
    description:
      'Collecting and distributing clothing to those in need throughout the Flint community. Warm coats, shoes, and essentials for every season.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Water Distribution',
    description:
      'Providing clean water to the Flint community, including collaboration with the Flint Islamic Center during the ongoing water crisis.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Janazah Services',
    description:
      'Imam Abdul-Malik and his wife perform the sacred rites of washing, preparation, and funeral prayer — ensuring every Muslim in our community receives a dignified Islamic burial, regardless of affiliation.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
      </svg>
    ),
    title: 'Traveler Lodging',
    description:
      'Temporary lodging for travelers and newcomers, including food, restroom, and laundry access. As the Imam says: "Brother, pull back and rest your camel."',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white dark:bg-[#0A1610] relative">
      <div className="absolute inset-0 star-pattern opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-gold font-arabic text-xl mb-3">خدماتنا</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep dark:text-white mb-4">
            How We Serve
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
            More than a masjid — a lifeline for the entire Flint community. We serve anyone in need,
            regardless of faith or background.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="fade-up group bg-cream dark:bg-white/5 rounded-2xl p-8 border border-transparent hover:border-gold/30 transition-all duration-500 hover:shadow-xl hover:shadow-gold/5 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-deep/10 dark:bg-gold/10 text-emerald-deep dark:text-gold flex items-center justify-center mb-5 group-hover:bg-gold/20 group-hover:text-gold transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-emerald-deep dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-muted dark:text-white/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center fade-up">
          <p className="text-emerald-deep/60 dark:text-white/40 text-lg italic max-w-xl mx-auto">
            &ldquo;You need some water? Here you go. You need a dollar? Here you go. Are you passing out food? Yes.&rdquo;
          </p>
        </div>
      </div>
    </section>
  )
}
