import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

const quickLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'Rooms', to: 'rooms' },
    { label: 'Amenities', to: 'amenities' },
    { label: 'Gallery', to: 'gallery' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'FAQ', to: 'faq' },
    { label: 'Contact', to: 'contact' },
]



const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
]

export default function Footer() {
    return (
        <footer className="bg-charcoal-900 border-t border-charcoal-800 pt-20 pb-10 text-cream-100 overflow-hidden relative">
            {/* Background graphic */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-terra-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link to="hero" smooth duration={600} className="cursor-pointer flex items-center gap-3 mb-6 inline-flex">
                            <div className="w-10 h-10 bg-terra-500 rounded-lg flex items-center justify-center font-accent text-white text-2xl shadow-sm">
                                H
                            </div>
                            <div>
                                <span className="font-accent text-[22px] tracking-wide text-white">NVR LUXURY PG</span>
                                <div className="text-[10px] font-bold mt-0.5 tracking-[0.2em] uppercase text-terra-400">For Gents</div>
                            </div>
                        </Link>
                        <p className="text-charcoal-400 text-sm leading-relaxed mb-6 max-w-sm">
                            Premium, comfortable, and vibrant paying guest accommodation designed exclusively for students and working professionals looking for a true home.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center text-cream-200 hover:bg-terra-500 hover:text-white transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-7">
                        <h4 className="text-white font-accent text-xl mb-6 tracking-wide">Explore</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, i) => (
                                <li key={i}>
                                    <Link
                                        to={link.to}
                                        smooth
                                        duration={600}
                                        offset={-80}
                                        className="text-charcoal-400 hover:text-terra-400 text-sm cursor-pointer transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="lg:col-span-3 lg:col-start-10">
                        <h4 className="text-white font-accent text-xl mb-6 tracking-wide">Newsletter</h4>
                        <p className="text-charcoal-400 text-sm mb-4">
                            Subscribe to get updates on availability, new locations, and exclusive community events.
                        </p>
                        <form className="relative" onSubmit={e => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-charcoal-800 border border-charcoal-700 rounded-xl px-5 py-3.5 text-cream-100 text-sm focus:outline-none focus:border-terra-500 transition-colors placeholder:text-charcoal-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-2 bottom-2 bg-terra-500 hover:bg-terra-600 text-white px-4 rounded-lg text-sm font-bold transition-colors shadow-sm"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-charcoal-500 text-sm">
                        &copy; {new Date().getFullYear()} NVR LUXURY PG. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-charcoal-500 text-sm">
                        Built with <FaHeart className="text-terra-500" /> in Bangalore
                    </div>
                    <div className="flex gap-6 text-sm text-charcoal-500">
                        <a href="#" className="hover:text-terra-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-terra-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
