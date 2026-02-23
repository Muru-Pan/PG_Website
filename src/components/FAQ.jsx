import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
    { q: 'What is included in the monthly rent?', a: 'Your monthly rent includes fully furnished accommodation, 3 meals per day (breakfast, lunch, dinner), high-speed Wi-Fi, electricity, water, laundry service, housekeeping, 24/7 security, and power backup. No hidden charges!' },
    { q: 'What is the minimum stay period?', a: 'We offer flexible stays with a minimum lock-in period of 1 month. Long-term stays (6 months or more) get a discount of up to 10% on monthly charges.' },
    { q: 'Is the PG co-ed or single gender?', a: 'We operate separate PG facilities for males and females in secured, independent wings. Each wing has its own entrance and dedicated security.' },
    { q: 'How do I apply or book a room?', a: 'You can book a room by filling the inquiry form on our website, calling our number, or visiting in person. We recommend scheduling a free site visit before booking.' },
    { q: 'What payment methods are accepted?', a: 'We accept UPI (PhonePe, Google Pay, Paytm), NEFT/RTGS bank transfers, debit/credit cards, and cash. EMI options are available for select plans.' },
]

function FAQItem({ faq, index }) {
    const [open, setOpen] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.07, duration: 0.5 }}
            className={`card-surface rounded-2xl transition-all duration-300 overflow-hidden mb-3 border ${open ? 'border-terra-300 shadow-warm' : 'border-cream-200 hover:border-terra-200'}`}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left focus:outline-none"
            >
                <span className="text-charcoal-900 font-bold text-[15px] md:text-base leading-snug pr-2">{faq.q}</span>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.35 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${open ? 'bg-terra-500 text-white shadow-sm' : 'bg-cream-100 text-terra-600'}`}
                >
                    <FaChevronDown className="text-sm" />
                </motion.div>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                        <div className="px-5 md:px-6 pb-6 text-charcoal-600 text-[15px] leading-relaxed border-t border-cream-100 pt-5">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function FAQ() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    return (
        <section id="faq" className="section-padding relative bg-cream-100">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="divider-warm" />
                    </div>
                    <h2 className="section-title mb-4">
                        Frequently Asked <span className="font-accent text-terra-500 italic">Questions</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Everything you need to know before making NVR LUXURY PG your new home.
                    </p>
                </motion.div>

                <div className="space-y-1">
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} faq={faq} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}
