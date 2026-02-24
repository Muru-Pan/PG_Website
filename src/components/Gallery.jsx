import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaTimes, FaExpand } from 'react-icons/fa'

const galleryItems = [
    { src: '/hostel-exterior.jpeg', label: 'Hostel Exterior', span: 'md:col-span-2 md:row-span-2' },
    { src: '/room-shared.jpeg', label: 'Shared Room', span: '' },
    { src: '/balcony.jpeg', label: 'Balcony Corridor', span: '' },
    { src: '/bathroom-1.jpeg', label: 'Attached Bathroom', span: '' },
    { src: '/bathroom-2.jpeg', label: 'Bathroom Facilities', span: 'md:col-span-2' },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Gallery() {
    const [lightbox, setLightbox] = useState(null)
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="gallery" className="section-padding bg-cream-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
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
                        A Glimpse of <span className="font-accent text-terra-500 italic">Home</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Every corner is thoughtfully designed to create a warm, inviting, and practical living space.
                    </p>
                </motion.div>

                {/* Masonry Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-3 auto-rows-[150px] md:auto-rows-[220px] gap-3 md:gap-6"
                >
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className={`relative overflow-hidden rounded-3xl cursor-pointer group ${item.span} shadow-sm border border-charcoal-500/10 hover:shadow-warm transition-shadow`}
                            onClick={() => setLightbox(item)}
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                <span className="text-white font-semibold text-lg drop-shadow-md">{item.label}</span>
                                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                    <FaExpand size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-charcoal-950/90 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="relative max-w-5xl w-full"
                            onClick={e => e.stopPropagation()}
                        >
                            <img
                                src={lightbox.src}
                                alt={lightbox.label}
                                loading="lazy"
                                decoding="async"
                                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
                            />
                            <p className="text-center text-cream-200 mt-4 font-accent text-2xl tracking-wide">{lightbox.label}</p>
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute -top-6 -right-6 md:-right-12 w-12 h-12 bg-cream-50 rounded-full flex items-center justify-center text-charcoal-900 hover:bg-terra-100 hover:text-terra-600 transition-colors shadow-warm"
                            >
                                <FaTimes size={20} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
