import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    FaWifi, FaUtensils, FaTshirt, FaShieldAlt, FaParking,
    FaBook, FaBolt, FaBroom, FaTint, FaGamepad, FaFirstAid, FaVideo,
} from 'react-icons/fa'

const amenities = [
    { icon: <FaWifi />, label: 'High-Speed Wi-Fi', desc: '100 Mbps fiber broadband', bg: 'bg-terra-50', text: 'text-terra-500' },
    { icon: <FaUtensils />, label: 'Healthy Meals', desc: 'Breakfast, lunch & dinner daily', bg: 'bg-saffron-50', text: 'text-saffron-500' },
    { icon: <FaShieldAlt />, label: '24/7 Security', desc: 'CCTV + security personnel', bg: 'bg-terra-50', text: 'text-terra-600' },
    { icon: <FaParking />, label: 'Secure Parking', desc: 'Two-wheeler & car parking', bg: 'bg-charcoal-50', text: 'text-charcoal-500' },
    { icon: <FaBolt />, label: 'Power Backup', desc: 'Uninterrupted 24/7 power', bg: 'bg-saffron-50', text: 'text-saffron-400' },
    { icon: <FaBroom />, label: 'Housekeeping', desc: 'Daily room cleaning', bg: 'bg-terra-50', text: 'text-terra-400' },
    { icon: <FaTint />, label: 'Water Supply', desc: 'RO water + hot water 24/7', bg: 'bg-forest-50', text: 'text-forest-400' },
    { icon: <FaFirstAid />, label: 'First Aid', desc: 'On-call medical assistance', bg: 'bg-terra-50', text: 'text-terra-500' },
    { icon: <FaVideo />, label: 'CCTV Monitoring', desc: 'All common areas monitored', bg: 'bg-charcoal-50', text: 'text-charcoal-400' },
]

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
}
const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Amenities() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="amenities" className="section-padding relative overflow-hidden bg-white">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-forest-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
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
                        Everything You <span className="font-accent text-forest-500 italic">Need</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        All amenities included in your monthly rent — no hidden charges, complete peace of mind.
                    </p>
                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
                >
                    {amenities.map((am, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="card-surface rounded-2xl p-4 md:p-6 group cursor-default hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-2xl mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300 ${am.bg} ${am.text}`}>
                                {am.icon}
                            </div>
                            <h3 className="text-charcoal-900 font-bold text-xs md:text-sm mb-1">{am.label}</h3>
                            <p className="text-charcoal-500 text-xs md:text-sm leading-relaxed hidden sm:block">{am.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
