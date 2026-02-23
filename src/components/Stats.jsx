import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHome, FaUsers, FaCity, FaTrophy } from 'react-icons/fa'

const stats = [
    { icon: <FaUsers />, value: 2000, suffix: '+', label: 'Happy Residents', color: 'text-terra-500' },
    { icon: <FaHome />, value: 500, suffix: '+', label: 'Premium Rooms', color: 'text-forest-500' },
    { icon: <FaCity />, value: 3, suffix: '', label: 'Cities', color: 'text-saffron-500' },
    { icon: <FaTrophy />, value: 8, suffix: '+', label: 'Years of Excellence', color: 'text-terra-400' },
]

function Counter({ value, suffix, inView }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!inView) return
        const duration = 2000
        const steps = 60
        const step = value / steps
        let current = 0
        const timer = setInterval(() => {
            current += step
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, duration / steps)
        return () => clearInterval(timer)
    }, [inView, value])

    return <span>{count}{suffix}</span>
}

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
}
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Stats() {
    const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })

    return (
        <section id="stats" ref={ref} className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-cream-100">
            {/* Subtle divider top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-terra-300 to-transparent" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        variants={cardVariants}
                        className="card-parchment rounded-3xl p-6 md:p-10 text-center card-hover group"
                    >
                        <div className={`text-4xl mb-4 ${stat.color} flex justify-center group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300`}>
                            {stat.icon}
                        </div>
                        <div className={`text-4xl md:text-5xl font-bold font-accent ${stat.color} mb-2`}>
                            <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                        </div>
                        <div className="text-charcoal-600 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
