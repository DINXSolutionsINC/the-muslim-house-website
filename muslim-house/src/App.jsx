import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useDarkMode } from './hooks/useDarkMode'
import HomePage from './pages/HomePage'
import SadaqahPage from './pages/SadaqahPage'
import EventsPage from './pages/EventsPage'

export default function App() {
  const [dark, setDark] = useDarkMode()

  return (
    <BrowserRouter>
      <div className={dark ? 'dark' : ''}>
        <Routes>
          <Route path="/" element={<HomePage dark={dark} setDark={setDark} />} />
          <Route path="/sadaqah" element={<SadaqahPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
