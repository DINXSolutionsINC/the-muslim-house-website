import { useState, useEffect } from 'react'

const PRAYER_NAMES = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha']

export function usePrayerTimes() {
  const [times, setTimes] = useState(null)
  const [nextPrayer, setNextPrayer] = useState(null)
  const [countdown, setCountdown] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTimes() {
      try {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()
        const res = await fetch(
          `https://api.aladhan.com/v1/timingsByCity/${dd}-${mm}-${yyyy}?city=Flint&state=Michigan&country=US&method=2`
        )
        const data = await res.json()
        if (data.code === 200) {
          const t = data.data.timings
          setTimes({
            Fajr: t.Fajr,
            Sunrise: t.Sunrise,
            Dhuhr: t.Dhuhr,
            Asr: t.Asr,
            Maghrib: t.Maghrib,
            Isha: t.Isha,
          })
        }
      } catch (err) {
        console.error('Failed to fetch prayer times:', err)
        setTimes({
          Fajr: '05:30',
          Sunrise: '06:55',
          Dhuhr: '13:15',
          Asr: '16:45',
          Maghrib: '19:50',
          Isha: '21:15',
        })
      } finally {
        setLoading(false)
      }
    }
    fetchTimes()
  }, [])

  useEffect(() => {
    if (!times) return

    function updateCountdown() {
      const now = new Date()
      let found = null

      for (const name of PRAYER_NAMES) {
        const [h, m] = times[name].split(':').map(Number)
        const prayerDate = new Date(now)
        prayerDate.setHours(h, m, 0, 0)

        if (prayerDate > now) {
          found = { name, time: prayerDate }
          break
        }
      }

      if (!found) {
        const [h, m] = times.Fajr.split(':').map(Number)
        const tomorrow = new Date(now)
        tomorrow.setDate(tomorrow.getDate() + 1)
        tomorrow.setHours(h, m, 0, 0)
        found = { name: 'Fajr', time: tomorrow }
      }

      setNextPrayer(found.name)

      const diff = found.time - now
      const hours = Math.floor(diff / 3600000)
      const mins = Math.floor((diff % 3600000) / 60000)
      const secs = Math.floor((diff % 60000) / 1000)
      setCountdown(
        `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
      )
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    return () => clearInterval(interval)
  }, [times])

  return { times, nextPrayer, countdown, loading }
}
