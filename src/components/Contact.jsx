import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane, FaChevronDown } from 'react-icons/fa'

const InputWrapper = ({ children, focused }) => (
    <div className={`relative rounded-xl border-2 transition-colors duration-300 bg-cream-50 ${focused ? 'border-terra-400 bg-white' : 'border-cream-200 hover:border-terra-200'}`}>
        {children}
    </div>
)

export default function Contact() {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

    const [formData, setFormData] = useState({
        name: '', phone: '', roomType: '', date: '', message: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        const roomLabels = { single: 'Single Occupancy', double: 'Double Sharing', triple: 'Triple Sharing', unsure: 'Just Visiting' }
        let msg = `Hi, I'd like to inquire about PG accommodation.\n\n`
        msg += `*Name:* ${formData.name}\n`
        msg += `*Phone:* ${formData.phone}\n`
        if (formData.roomType) msg += `*Interested In:* ${roomLabels[formData.roomType] || formData.roomType}\n`
        if (formData.date) msg += `*Expected Move-in:* ${formData.date}\n`
        if (formData.message) msg += `*Requirements:* ${formData.message}\n`

        const whatsappUrl = `https://wa.me/919845518336?text=${encodeURIComponent(msg)}`

        setTimeout(() => {
            setLoading(false)
            setSuccess(true)
            window.open(whatsappUrl, '_blank')
            setTimeout(() => {
                setSuccess(false)
                setFormData({ name: '', phone: '', roomType: '', date: '', message: '' })
            }, 3000)
        }, 800)
    }

    return (
        <section id="contact" className="section-padding bg-cream-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
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
                        Start Your <span className="font-accent text-terra-500 italic">Journey</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        Ready to move in? Have questions? Drop us a message and our team will get back to you shortly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4 flex flex-col gap-6"
                    >
                        <div className="card-parchment rounded-3xl p-8 flex-1 flex flex-col justify-center gap-8 shadow-sm">
                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-terra-100 flex items-center justify-center text-terra-600 text-xl flex-shrink-0 shadow-sm">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h4 className="text-charcoal-500 text-sm font-bold uppercase tracking-wider mb-1">Call Us</h4>
                                    <a href="tel:+919845518336" className="text-charcoal-900 font-bold text-xl hover:text-terra-600 transition-colors inline-block">+91 98455 18336</a>
                                    <p className="text-charcoal-500 text-sm mt-1">Mon-Sun: 9 AM to 8 PM</p>
                                </div>
                            </div>



                            <div className="flex items-start gap-5">
                                <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center text-forest-600 text-xl flex-shrink-0 shadow-sm">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h4 className="text-charcoal-500 text-sm font-bold uppercase tracking-wider mb-1">Visit Us</h4>
                                    <p className="text-charcoal-900 font-bold text-[15px] leading-relaxed">
                                        1st Cross Rd, 4N Block, Yashoda Nagar,<br />Srirampura, Bengaluru – 560021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:col-span-8"
                    >
                        <div className="card-surface rounded-3xl p-8 max-w-2xl mx-auto shadow-card">
                            <h3 className="text-3xl font-accent font-bold text-charcoal-900 mb-8">Book a Visit / Inquiry</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name */}
                                    <InputWrapper focused={formData.name.length > 0}>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent px-5 py-4 pt-6 text-charcoal-900 font-medium focus:outline-none focus:ring-0 placeholder-transparent"
                                            placeholder="Full Name"
                                        />
                                        <label htmlFor="name" className="absolute left-5 top-4 text-charcoal-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-terra-500 font-medium">
                                            Full Name *
                                        </label>
                                    </InputWrapper>

                                    {/* Phone */}
                                    <InputWrapper focused={formData.phone.length > 0}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            required
                                            pattern="[0-9]{10}"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent px-5 py-4 pt-6 text-charcoal-900 font-medium focus:outline-none focus:ring-0 placeholder-transparent"
                                            placeholder="Phone Number"
                                        />
                                        <label htmlFor="phone" className="absolute left-5 top-4 text-charcoal-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-terra-500 font-medium">
                                            Phone Number *
                                        </label>
                                    </InputWrapper>
                                </div>


                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Room Type */}
                                    <div className="relative rounded-xl border-2 border-cream-200 bg-cream-50 focus-within:border-terra-400 focus-within:bg-white transition-colors">
                                        <select
                                            name="roomType"
                                            value={formData.roomType}
                                            onChange={handleChange}
                                            className={`w-full bg-transparent px-5 py-4 text-charcoal-900 font-medium focus:outline-none appearance-none cursor-pointer ${formData.roomType === '' ? 'text-charcoal-400' : ''}`}
                                        >
                                            <option value="" disabled className="text-charcoal-400">Interested In</option>
                                            <option value="single" className="text-charcoal-900">Single Occupancy</option>
                                            <option value="double" className="text-charcoal-900">Double Sharing</option>
                                            <option value="triple" className="text-charcoal-900">Triple Sharing</option>
                                            <option value="unsure" className="text-charcoal-900">Just Visiting</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none text-charcoal-400">
                                            <FaChevronDown className="text-xs" />
                                        </div>
                                    </div>

                                    {/* Move-in Date */}
                                    <InputWrapper focused={formData.date.length > 0}>
                                        <input
                                            type="date"
                                            name="date"
                                            id="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="peer w-full bg-transparent px-5 py-4 pt-6 text-charcoal-900 font-medium focus:outline-none focus:ring-0 placeholder-transparent [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                                            placeholder="Expected Move-in"
                                        />
                                        <label htmlFor="date" className="absolute left-5 top-1.5 text-xs text-charcoal-500 font-medium transition-all peer-focus:text-terra-500">
                                            Expected Move-in
                                        </label>
                                    </InputWrapper>
                                </div>

                                {/* Message */}
                                <InputWrapper focused={formData.message.length > 0}>
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows="3"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="peer w-full bg-transparent px-5 py-4 pt-6 text-charcoal-900 font-medium focus:outline-none focus:ring-0 placeholder-transparent resize-none"
                                        placeholder="Any specific requirements?"
                                    ></textarea>
                                    <label htmlFor="message" className="absolute left-5 top-4 text-charcoal-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-terra-500 font-medium">
                                        Any specific requirements? (Optional)
                                    </label>
                                </InputWrapper>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={loading || success}
                                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-3 px-6 ${success ? 'bg-forest-500 shadow-green' : 'bg-terra-500 hover:bg-terra-600 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5'
                                        } ${loading ? 'opacity-90 cursor-wait' : ''}`}
                                >
                                    <AnimatePresence mode="wait">
                                        {loading ? (
                                            <motion.div
                                                key="loading"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <div className="w-5 h-5 border-3 border-white border-t-white/30 rounded-full animate-spin" />
                                                Sending...
                                            </motion.div>
                                        ) : success ? (
                                            <motion.div
                                                key="success"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <FaCheckCircle className="text-xl" />
                                                Request Received!
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="default"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                <FaPaperPlane />
                                                Send Request
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
