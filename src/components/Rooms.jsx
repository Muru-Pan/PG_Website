import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBed, FaCheck, FaStar, FaFire } from 'react-icons/fa'
import { Link } from 'react-scroll'

const rooms = [
    {
        type: 'Single Occupancy',
        tag: 'Most Private',
        tagIcon: <FaStar className="text-xs" />,
        price: '5,000',
        period: '/month',
        image: '/room-single.png',
        tagColor: 'tag-pill',
        btnColor: 'btn-primary',
        popular: false,
    },
    {
        type: 'Double Occupancy',
        tag: 'Most Popular',
        tagIcon: <FaFire className="text-xs" />,
        price: '10,000',
        period: '/month',
        image: '/room-double.png',
        tagColor: 'tag-pill-green',
        btnColor: 'btn-green',
        popular: true,
    },
    {
        type: 'Triple Occupancy',
        tag: 'Best Value',
        tagIcon: <FaCheck className="text-xs" />,
        price: '15,000',
        period: '/month',
        image: '/room-triple.png',
        tagColor: 'tag-pill',
        btnColor: 'btn-outline', // Changed to outline for visual hierarchy
        popular: false,
    },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
}
const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Rooms() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="rooms" className="section-padding bg-cream-50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-10 md:mb-16"
                    ref={ref}
                >
                    <div className="flex justify-center mb-6">
                        <div className="divider-warm" />
                    </div>
                    <h2 className="section-title mb-4">
                        Thoughtfully Designed <span className="font-accent text-terra-500 italic">Rooms</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Find the perfect space that suits your budget and lifestyle — all equipped with modern amenities.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10"
                >
                    {rooms.map((room, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}

                            className="card-surface rounded-3xl overflow-hidden card-hover relative text-center md:text-left"
                        >
                            {/* Badge */}
                            <div className="p-5 md:p-8 pb-0 flex justify-center md:justify-start">
                                <div className={room.tagColor}>
                                    {room.tagIcon} {room.tag}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5 md:p-8">
                                <h3 className="font-accent text-2xl md:text-3xl font-bold text-charcoal-900 mb-6">{room.type}</h3>

                                <Link to="contact" smooth duration={600} offset={-80}>
                                    <button className={`${room.btnColor} w-full justify-center text-sm py-4 rounded-xl`}>
                                        Check Availability
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Note */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center text-charcoal-400 text-sm mt-12 font-medium"
                >
                    * Includes meals, electricity, water & Wi-Fi. A 2-month refundable security deposit applies.
                </motion.p>
            </div>
        </section >
    )
}
