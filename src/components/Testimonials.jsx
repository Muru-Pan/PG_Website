import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const testimonials = [
    {
        name: 'Priya Sharma',
        role: 'Software Engineer at TCS',
        initials: 'PS',
        bg: 'bg-terra-500',
        rating: 5,
        quote: 'Moving to NVR LUXURY PG was the best decision I made. Clean rooms, delicious food, and high-speed Wi-Fi made my life so much easier. The security and the community here are outstanding!',
    },
    {
        name: 'Rahul Verma',
        role: 'B.Tech Student, VIT University',
        initials: 'RV',
        bg: 'bg-forest-500',
        rating: 5,
        quote: "I've been here for 2 years and I can't imagine a better place to live as a student. The study lounge is quiet and well-lit, meals are nutritious, and the staff is incredibly helpful.",
    },
    {
        name: 'Ananya Patel',
        role: 'Data Analyst at Infosys',
        initials: 'AP',
        bg: 'bg-saffron-500',
        rating: 5,
        quote: 'The double room is spacious and feels like home. Regular housekeeping, laundry service, and 24/7 power backup — absolutely worth every rupee. Highly recommended for working women!',
    },
    {
        name: 'Karthik Reddy',
        role: 'MBA Student, BITS Pilani',
        initials: 'KR',
        bg: 'bg-charcoal-700',
        rating: 5,
        quote: 'Great location near the campus, reliable Wi-Fi, and the staff treats residents like family. The recreation room is a great place to unwind after long study sessions.',
    },
    {
        name: 'Deepa Nair',
        role: 'Marketing Executive at Wipro',
        initials: 'DN',
        bg: 'bg-terra-400',
        rating: 4,
        quote: 'Safe, affordable, and well-maintained. The food quality is excellent and the location is extremely convenient for commuting. Would definitely recommend to all my friends!',
    },
]

export default function Testimonials() {
    const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true })

    return (
        <section id="testimonials" className="section-padding relative overflow-hidden bg-white">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terra-50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-saffron-50 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

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
                        Hear from Our <span className="font-accent text-saffron-500 italic">Residents</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Real stories from real people who have made NVR LUXURY PG their home away from home.
                    </p>
                </motion.div>

                {/* Swiper */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={28}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true, bulletActiveClass: 'swiper-pagination-bullet-active !bg-terra-500', bulletClass: 'swiper-pagination-bullet !bg-charcoal-200' }}
                        loop
                        className="pb-16"
                    >
                        {testimonials.map((t, i) => (
                            <SwiperSlide key={i} className="h-auto">
                                <div className="card-surface rounded-3xl p-5 md:p-8 h-full flex flex-col hover:shadow-warm transition-shadow duration-300">
                                    <FaQuoteLeft className="text-terra-200 text-4xl mb-6" />

                                    <p className="text-charcoal-600 text-[15px] leading-relaxed flex-1 mb-8 italic">
                                        "{t.quote}"
                                    </p>

                                    <div className="mt-auto">
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-5">
                                            {Array.from({ length: t.rating }).map((_, si) => (
                                                <FaStar key={si} className="text-saffron-400 text-sm" />
                                            ))}
                                            {Array.from({ length: 5 - t.rating }).map((_, si) => (
                                                <FaStar key={si} className="text-cream-200 text-sm" />
                                            ))}
                                        </div>

                                        {/* Profile */}
                                        <div className="flex items-center gap-4">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-sm ${t.bg}`}>
                                                {t.initials}
                                            </div>
                                            <div>
                                                <div className="text-charcoal-900 font-bold text-sm tracking-wide">{t.name}</div>
                                                <div className="text-charcoal-500 text-xs mt-0.5">{t.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )
}
