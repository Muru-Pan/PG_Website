import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const words = ['Welcoming', 'Comfortable', 'Community']



export default function Hero() {
    const heroRef = useRef(null)
    const bgRef = useRef(null)
    const [count, setCount] = useState(0)

    // Parallax BG
    useEffect(() => {
        const tl = gsap.to(bgRef.current, {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
        return () => tl.kill()
    }, [])

    // Rotating headline word
    useEffect(() => {
        const interval = setInterval(() => setCount(prev => prev + 1), 2500)
        return () => clearInterval(interval)
    }, [])

    return (
        <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
            {/* Parallax Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 scale-110 will-change-transform"
            >
                <img
                    src="/hero.png"
                    alt="NVR LUXURY PG for Gents"
                    fetchpriority="high"
                    className="w-full h-full object-cover"
                />
                {/* Warm Overlay */}
                <div className="absolute inset-0 bg-hero-overlayMix" style={{ background: 'linear-gradient(135deg, rgba(20,15,10,0.7) 0%, rgba(64,23,15,0.85) 100%)' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-32 pb-20">
                <div className="max-w-3xl">


                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-accent text-white mb-6 leading-tight text-shadow">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Experience a{' '}
                            <span className="relative inline-block text-terra-300 min-w-[200px]">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={count}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -15 }}
                                        transition={{ duration: 0.4 }}
                                        className="inline-block"
                                    >
                                        {words[count % words.length]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            Way of Living
                        </motion.div>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                        className="text-cream-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed drop-shadow-md"
                    >
                        More than just a room. Join a vibrant community of students and professionals in our beautifully designed, fully-furnished spaces.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link to="rooms" smooth duration={600} offset={-80} className="w-full sm:w-auto">
                            <button className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
                                Explore Rooms
                            </button>
                        </Link>
                        <Link to="gallery" smooth duration={600} offset={-80} className="w-full sm:w-auto">
                            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto">
                                View Gallery
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>


        </section>
    )
}
