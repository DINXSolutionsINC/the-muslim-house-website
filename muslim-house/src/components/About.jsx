export default function About() {
  const timeline = [
    {
      year: '1968',
      title: 'The Journey Begins',
      text: 'Imam Hanafi Abdul-Malik came to Flint, Michigan from Guthrie, Oklahoma to work for General Motors. His search for spiritual truth led him to study religion — and through that study, he became convinced that Islam was the true path. His wife Iris Malikah walked that path alongside him.',
    },
    {
      year: '1995',
      title: 'A House is Born',
      text: 'Together with two other converts, Hanafi founded The Muslim House — purchasing a two-story house at 804 King Avenue from a former substance abuse treatment agency. Members performed ablutions on the front porch with pans of ice-cold water. Men and women were separated by bed sheets. Portable propane heaters were all that kept the temperature above freezing.',
    },
    {
      year: '1996',
      title: 'Official Recognition',
      text: 'The Muslim House became a registered 501(c)(3) nonprofit organization, formalizing its mission to serve the community through worship, education, and charitable service.',
    },
    {
      year: '2017',
      title: 'The Food Program Begins',
      text: 'TMH launched its monthly Food Program — preparing and serving hot meals to families in need every single month. What began as a simple act of service became a cornerstone of the mission, continuing without exception to this day.',
    },
    {
      year: 'Today',
      title: '30+ Years of Service',
      text: 'Imam Abdul-Malik and Iris Malikah raised 11 children while building and sustaining this masjid. For over 30 years, they have led not only spiritual life but the most essential acts of service — from monthly meals to the sacred duty of janazah.',
    },
  ]

  return (
    <section id="about" className="py-20 md:py-28 bg-cream dark:bg-[#0F1F17] relative">
      <div className="absolute inset-0 geometric-pattern opacity-10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 fade-up">
          <p className="text-gold font-arabic text-xl mb-3">قصتنا</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-deep dark:text-white mb-4">
            Our Story
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-muted dark:text-white/60 text-lg max-w-2xl mx-auto">
            From a building where you could see the stars through the roof to a beacon of light for all of north Flint.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-emerald-deep to-gold" />

          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-6 md:gap-0 mb-12 fade-up ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-cream dark:border-[#0F1F17] z-10 mt-1" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <span className="inline-block bg-gold/10 text-gold text-sm font-bold px-3 py-1 rounded-full mb-3">
                  {item.year}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-emerald-deep dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-muted dark:text-white/60 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Imam bio */}
        <div className="mt-20 max-w-4xl mx-auto fade-up">
          <div className="bg-white dark:bg-white/5 rounded-3xl p-8 md:p-12 shadow-xl border border-gold/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img
                  src="/photos/imam-award.jpg"
                  alt="Imam Hanafi Abdul-Malik receiving an award"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-gold text-sm uppercase tracking-[0.2em] mb-1">Founder & Spiritual Leader</p>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-emerald-deep dark:text-white mb-4">
                    Imam Hanafi Abdul-Malik
                  </h3>
                  <p className="text-muted dark:text-white/60 leading-relaxed mb-4">
                    Imam Abdul-Malik came to Flint from Guthrie, Oklahoma in 1968. His search for spiritual truth
                    led him to Islam, and alongside his wife Iris Malikah, they raised 11 children while building
                    and sustaining this masjid. Beyond leading Jumu&rsquo;ah, Imam Abdul-Malik and Iris serve as
                    the primary people in Flint&rsquo;s African American Muslim community who perform the sacred
                    rites of janazah — washing and preparing the deceased for burial and ensuring every Muslim
                    receives a dignified Islamic burial, regardless of affiliation.
                  </p>
                  <blockquote className="border-l-4 border-gold pl-4 py-2">
                    <p className="text-emerald-deep dark:text-gold/90 font-heading text-lg italic">
                      &ldquo;There is no discretion concerning the value of a person based on their ethnicity.
                      Islam does not acknowledge that.&rdquo;
                    </p>
                    <footer className="text-muted dark:text-white/40 text-sm mt-2">— Imam Hanafi Abdul-Malik</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community quote */}
        <div className="mt-16 text-center fade-up">
          <blockquote className="max-w-3xl mx-auto">
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-emerald-deep dark:text-white italic leading-relaxed">
              &ldquo;We love the people around here... there is just a system of respect and compassion
              that&rsquo;s been implemented here.&rdquo;
            </p>
            <footer className="mt-4 text-gold text-base">— Sa&rsquo;eed Littlejohn, 7-year member</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
