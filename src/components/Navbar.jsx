import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import { Link } from 'react-scroll'

const navLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'Rooms', to: 'rooms' },
    { label: 'Amenities', to: 'amenities' },
    { label: 'Gallery', to: 'gallery' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'FAQ', to: 'faq' },
    { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-cream-50/90 backdrop-blur-md shadow-sm py-3 border-b border-cream-200'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="hero" smooth duration={600} className="cursor-pointer flex items-center gap-3">
                    <div className="w-10 h-10 bg-terra-500 rounded-lg flex items-center justify-center font-accent text-white text-2xl shadow-warm">
                        H
                    </div>
                    <div>
                        <span className={`block font-accent text-[22px] tracking-wide mt-1 ${scrolled ? 'text-charcoal-900' : 'text-white drop-shadow-md'}`}>NVR LUXURY PG</span>
                        <div className={`text-[10px] font-bold tracking-[0.2em] uppercase ${scrolled ? 'text-terra-600' : 'text-terra-200 drop-shadow-md'}`}>FOR GENTS</div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-80}
                                className={`${scrolled ? 'text-charcoal-600 hover:text-terra-600' : 'text-white/90 hover:text-white drop-shadow-md'} font-medium text-sm cursor-pointer transition-colors duration-300`}
                                activeClass="!text-terra-500 font-bold"
                                spy
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-5">
                    <a href="tel:+919845518336" className={`flex items-center gap-2 font-medium transition-colors text-sm ${scrolled ? 'text-charcoal-700 hover:text-terra-600' : 'text-white drop-shadow-md hover:text-terra-100'}`}>
                        <FaPhoneAlt className="text-terra-500" />
                        +91 98455 18336
                    </a>
                    <Link to="contact" smooth duration={600} offset={-80}>
                        <button className="btn-primary text-sm tracking-wide">
                            Book a Visit
                        </button>
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    className={`lg:hidden p-2 ${scrolled ? 'text-charcoal-900' : 'text-white drop-shadow-md'}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-cream-50 border-t border-cream-200 overflow-hidden shadow-card"
                    >
                        <ul className="flex flex-col py-4 px-6 gap-4">
                            {navLinks.map((link, i) => (
                                <motion.li
                                    key={link.to}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        offset={-80}
                                        className="block text-charcoal-700 hover:text-terra-600 font-medium py-1.5 cursor-pointer"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                            <li className="pt-2 border-t border-cream-200 mt-2">
                                <Link to="contact" smooth duration={600} offset={-80} onClick={() => setMenuOpen(false)}>
                                    <button className="bg-terra-500 text-white font-bold w-full py-3 rounded-lg mt-2 text-sm shadow-warm">
                                        Book a Visit
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}
