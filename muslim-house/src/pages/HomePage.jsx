import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PrayerTimes from '../components/PrayerTimes'
import About from '../components/About'
import Services from '../components/Services'
import Events from '../components/Events'
import Donate from '../components/Donate'
import Visit from '../components/Visit'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function HomePage({ dark, setDark }) {
  useScrollAnimation()

  return (
    <>
      <Header dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <PrayerTimes />
        <About />
        <Services />
        <Events />
        <Donate />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
