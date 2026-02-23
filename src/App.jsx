import React, { useState, useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
// Lazy load below-the-fold components
const Rooms = lazy(() => import('./components/Rooms'))
const Amenities = lazy(() => import('./components/Amenities'))
const Gallery = lazy(() => import('./components/Gallery'))
const Location = lazy(() => import('./components/Location'))
const FAQ = lazy(() => import('./components/FAQ'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <div className={`min-h-screen overflow-x-hidden bg-cream-100 text-charcoal-900 transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="min-h-screen bg-cream-100 flex items-center justify-center"><div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-terra-400 to-saffron-400 animate-pulse"></div></div>}>
        <Rooms />
        <Amenities />
        <Gallery />
        <Location />
        <FAQ />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
