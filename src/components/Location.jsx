import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaSubway, FaGraduationCap, FaHospital, FaShoppingBag, FaRoad } from 'react-icons/fa'

const nearbyPlaces = [
    { icon: <FaSubway />, label: 'Srirampura Metro', dist: '1.9km', color: 'text-forest-600', bg: 'bg-forest-50' },
    { icon: <FaHospital />, label: 'Suguna Hospital', dist: '750m', color: 'text-saffron-600', bg: 'bg-saffron-50' },
    { icon: <FaShoppingBag />, label: 'Lulu Mall', dist: '1.8km', color: 'text-forest-600', bg: 'bg-forest-50' },
    { icon: <FaMapMarkerAlt />, label: 'KSR Railway Station', dist: '2.3km', color: 'text-saffron-600', bg: 'bg-saffron-50' },
]

export default function Location() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="location" className="section-padding bg-cream-50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="divider-warm" />
                    </div>
                    <h2 className="section-title mb-4">
                        Perfectly <span className="font-accent text-forest-500 italic">Located</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Situated at the heart of the city — close to colleges, IT parks, hospitals, and transit hubs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-3 rounded-3xl overflow-hidden border border-cream-200 shadow-card"
                    >
                        <div className="relative h-80 lg:h-full min-h-72 bg-cream-100">
                            <iframe
                                title="NVR LUXURY PG Location"
                                src="https://maps.google.com/maps?q=12.9837,77.5622&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full"
                                style={{ border: 0, filter: 'sepia(0.2) contrast(1.1) brightness(0.95)' }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                            {/* Pin overlay */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                                <div className="bg-terra-500 text-white font-bold text-xs px-4 py-2 rounded-full shadow-warm flex items-center gap-2">
                                    <FaMapMarkerAlt /> 1st Cross, Yashoda Nagar
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Nearby places */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-2 flex flex-col justify-between gap-4"
                    >
                        <div className="card-parchment rounded-2xl p-6 border mb-2">
                            <h3 className="text-charcoal-900 font-bold mb-1 text-lg">📍 NVR LUXURY PG</h3>
                            <p className="text-charcoal-600 text-sm">1st Cross Rd, 4N Block, Yashoda Nagar,<br />Srirampura, Bengaluru – 560021</p>
                        </div>
                        {nearbyPlaces.map((place, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
                                className="flex items-center justify-between card-surface rounded-2xl px-5 py-4 hover:shadow-card-hover transition-shadow"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-xl ${place.bg} flex items-center justify-center ${place.color} text-lg shadow-sm border border-black/5`}>
                                        {place.icon}
                                    </div>
                                    <span className="text-charcoal-900 text-sm font-semibold">{place.label}</span>
                                </div>
                                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${place.bg} ${place.color} border border-black/5`}>
                                    {place.dist}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
