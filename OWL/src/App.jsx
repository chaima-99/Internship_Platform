import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    })
  }, [])

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-10" data-aos="fade-up">
        🚀 Animate On Scroll (AOS) is working!
      </h1>

      <p className="text-lg text-gray-600" data-aos="zoom-in">
        Scroll down to see more animations.
      </p>
    </div>
  )
}

export default App
