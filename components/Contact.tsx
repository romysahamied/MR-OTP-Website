'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className={styles.section} aria-label="Contact sales form">
      <div className={styles.shell}>
        <div className={styles.glassCard}>
          <div className={styles.grid}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate={false}>
              <h2 className={styles.title}>Let&apos;s talk</h2>
              <p className={styles.lede}>
                To request a quote or want to meet up for coffee, contact us directly or fill out the form and we
                will get back to you promptly.
              </p>
              <input
                id="contact-name"
                name="name"
                type="text"
                className={styles.field}
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
              <input
                id="contact-email"
                name="email"
                type="email"
                className={styles.field}
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
              <textarea
                id="contact-message"
                name="message"
                className={`${styles.field} ${styles.textarea}`}
                placeholder="Type something if you want..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
              />
              <button type="submit" className={styles.submit} disabled={isSubmitting}>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
              {status ? <p className={styles.status}>{status}</p> : null}
            </form>

            <aside className={styles.aside}>
              <div className={styles.illustration} aria-hidden>
                <Image
                  src="/contactus-icon.png"
                  alt=""
                  width={420}
                  height={420}
                  className={styles.contactArt}
                  sizes="(max-width: 1024px) min(90vw, 380px) 420px"
                  priority
                />
              </div>
              <ul className={styles.contactList}>
                <li className={styles.contactRow}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <p className={styles.contactText}>
                    Shams Business Center, Sharjah Media City, Sharjah, United Arab Emirates
                  </p>
                </li>
                <li className={styles.contactRow}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <p className={styles.contactText}>
                    <a href="tel:+12678055853" className={styles.contactLink}>
                      +1 (267) 805-5853
                    </a>
                  </p>
                </li>
                <li className={styles.contactRow}>
                  <span className={styles.contactIcon} aria-hidden>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" strokeLinecap="round" />
                    </svg>
                  </span>
                  <p className={styles.contactText}>
                    <a href="mailto:info@mr-otp.com" className={styles.contactLink}>
                      info@mr-otp.com
                    </a>
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  )
}
