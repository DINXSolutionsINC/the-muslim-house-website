import { usePrayerTimes } from '../hooks/usePrayerTimes'

const PRAYER_ICONS = {
  Fajr: '🌙',
  Sunrise: '🌅',
  Dhuhr: '☀️',
  Asr: '🌤️',
  Maghrib: '🌇',
  Isha: '🌃',
}

export default function PrayerTimes() {
  const { times, nextPrayer, loading } = usePrayerTimes()

  if (loading) {
    return (
      <section className="py-8 bg-emerald-deep dark:bg-[#0A1610]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/60 animate-pulse">Loading prayer times...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-6 bg-emerald-deep dark:bg-[#0A1610] border-t border-gold/20 relative overflow-hidden">
      <div className="absolute inset-0 star-pattern opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
          {times &&
            Object.entries(times).map(([name, time]) => (
              <div
                key={name}
                className={`text-center p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  nextPrayer === name
                    ? 'bg-gold/20 border border-gold/40 scale-105 shadow-lg shadow-gold/10'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10'
                }`}
              >
                <span className="text-lg sm:text-xl">{PRAYER_ICONS[name]}</span>
                <p
                  className={`text-xs sm:text-sm font-medium mt-1 ${
                    nextPrayer === name ? 'text-gold' : 'text-white/70'
                  }`}
                >
                  {name}
                </p>
                <p
                  className={`text-base sm:text-lg font-bold font-mono mt-0.5 ${
                    nextPrayer === name ? 'text-gold' : 'text-white'
                  }`}
                >
                  {time}
                </p>
                {nextPrayer === name && (
                  <span className="inline-block mt-1 text-[10px] text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                    NEXT
                  </span>
                )}
              </div>
            ))}
        </div>
        <p className="text-center text-white/40 text-xs mt-3">
          Live prayer times for Flint, MI &middot; Powered by Aladhan API &middot; ISNA Calculation Method
        </p>
      </div>
    </section>
  )
}
