'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status) setStatus('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    setIsSubmitting(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json().catch(() => ({}))
      const message = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus(message || `Request failed (${res.status}). Please try again or email us at info@mr-otp.com`)
      }
    } catch {
      setStatus('Network error. Please check your connection or email us at info@mr-otp.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.section}>
      <div className={styles.glassCard}>
        {/* TOP RIGHT ICON */}
        <div className={styles.iconWrapper}>
          <Image
            src="/contactus-icon.png"
            alt="Contact us icon"
            width={120}
            height={120}
            loading="lazy"
          />
        </div>

        <div className={styles.container}>
          {/* FORM */}
          <form className={styles.formArea} onSubmit={handleSubmit}>
            <h2>Let’s talk</h2>
            <p>
              To request a quote or want to meet up for coffee,
              contact us directly or fill out the form and we will
              get back to you promptly.
            </p>

            {/* <label htmlFor="name">Your Name</label> */}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="email">Your Email</label> */}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            {/* <label htmlFor="message">Message</label> */}
            <textarea
              id="message"
              name="message"
              placeholder="Type something if you want..."
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Message'}
            </button>

            {status && (
              <p className={styles.statusMessage}>{status}</p>
            )}
          </form>
        </div>

        {/* BOTTOM RIGHT – ADDRESS */}
        <div className={styles.address}>
          <p>📍Shams Business Center, Sharjah Media City, Sharjah, United Arab Emirates </p>
          <p>📞 +1 (267) 805-5853</p>
          <p>✉️ info@mr-otp.com</p>
        </div>
      </div>
    </section>
  )
}
