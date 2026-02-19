'use client'

import { useState } from 'react'
import styles from './ContactPage.module.css'

const STATS = [
  { value: '24/7', label: 'Support Available', icon: 'clock' },
  { value: '5', label: 'Global Offices', icon: 'globe' },
  { value: '1000+', label: 'Happy Clients', icon: 'users' },
]

const CONTACT_NUMBERS = [
  { code: 'AE', country: 'UAE', phone: '+971-50-35-95083', tel: '+971503595083' },
  { code: 'US', country: 'USA', phone: '+1-302-492-9037', tel: '+13024929037' },
  { code: 'SG', country: 'Singapore', phone: '+65-315-92108', tel: '+6531592108' },
  { code: 'AU', country: 'Australia', phone: '+61-29-0988360', tel: '+61290988360' },
  { code: 'ZM', country: 'Zambia', phone: '+260-97-8511820', tel: '+260978511820' },
]

const OFFICES = [
  { name: 'Mr-OTP Technologies LLC', address: 'Shams Business Center, Sharjah Media City, Sharjah, United Arab Emirates' },
  { name: 'Mr-OTP Pte. Ltd', address: '68 Circular Road, #02-01, 049422, Singapore' },
  { name: 'Mr-OTP Technologies Limited', address: '6955 Haile Selassie Avenue, Lusaka, Zambia' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^[\d\s\-+()]{10,20}$/.test(phone.replace(/\s/g, ''))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status) setStatus('')
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email address'
    if (!form.phone.trim()) next.phone = 'Phone is required'
    else if (!validatePhone(form.phone)) next.phone = 'Please enter a valid phone number'
    if (!form.subject.trim()) next.subject = 'Subject is required'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('Sending...')
    setIsSubmitting(true)

    const message = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      '',
      'Message:',
      form.message,
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message }),
      })
      const data = await res.json().catch(() => ({}))
      const errorMsg = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Message sent successfully! We will get back to you soon.')
        setForm({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus(errorMsg || 'Failed to send. Please try again or email info@mr-otp.com')
      }
    } catch {
      setStatus('Network error. Please try again or email info@mr-otp.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className={styles.wrapper}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We&apos;re here to help with your messaging needs — OTP SMS, Bulk SMS, Transactional SMS, or APIs.
        </p>
        <div className={styles.statsGrid}>
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <div className={styles.statIcon}>
                {stat.icon === 'clock' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {stat.icon === 'globe' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {stat.icon === 'users' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Global Contact Numbers</h2>
        <div className={styles.contactsGrid}>
          {CONTACT_NUMBERS.map((item) => (
            <div key={item.code} className={styles.contactCard}>
              <div className={styles.contactHeader}>
                <span className={styles.countryCode}>{item.code}</span>
                <span className={styles.countryName}>{item.country}</span>
              </div>
              <a href={`tel:${item.tel}`} className={styles.phoneLink}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionHeading}>Our Offices</h2>
        <div className={styles.officesGrid}>
          {OFFICES.map((office) => (
            <div key={office.name} className={styles.officeCard}>
              <div className={styles.officeIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={styles.officeName}>{office.name}</h3>
              <p className={styles.officeAddress}>{office.address}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.formSection}>
        <h2 className={styles.formHeading}>Send Us a Message</h2>
        <div className={styles.formMapGrid}>
          <div className={styles.formCard}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? styles.inputError : ''}
                />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? styles.inputError : ''}
                />
                {errors.email && <span className={styles.error}>{errors.email}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1-234-567-8900"
                  value={form.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.inputError : ''}
                />
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this regarding?"
                  value={form.subject}
                  onChange={handleChange}
                  className={errors.subject ? styles.inputError : ''}
                />
                {errors.subject && <span className={styles.error}>{errors.subject}</span>}
              </div>
              <div className={styles.field}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help you..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className={errors.message ? styles.inputError : ''}
                />
                {errors.message && <span className={styles.error}>{errors.message}</span>}
              </div>
              <button type="submit" disabled={isSubmitting} className={styles.submitBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
              {status && (
                <p className={status.includes('successfully') ? styles.success : styles.statusError}>
                  {status}
                </p>
              )}
            </form>
          </div>
          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.0!2d55.41!3d25.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6a7b8c9d0e1f%3A0x2a3b4c5d6e7f8a9b!2sShams%20Business%20Center%2C%20Sharjah%20Media%20City!5e0!3m2!1sen!2sae!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 12 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mr-OTP Office Location"
            />
          </div>
        </div>
      </section>

      <section className={styles.supportOptions}>
        <div className={styles.supportOptionsGrid}>
          <div className={styles.supportCard}>
            <div className={styles.supportIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.supportHeading}>Email Us Directly</h3>
            <p className={styles.supportSubtitle}>For general inquiries and support</p>
            <a href="mailto:info@mr-otp.com" className={styles.supportEmailLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              info@mr-otp.com
            </a>
          </div>
          <div className={styles.supportCardWhatsApp}>
            <div className={styles.supportIconWhatsApp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className={styles.supportHeadingWhatsApp}>Need quick help?</h3>
            <p className={styles.supportSubtitleWhatsApp}>Chat with our support team on WhatsApp</p>
            <a
              href="https://wa.me/919070821537?text=Hi%2C%20I%20need%20help%20with%20my%20inquiry"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
