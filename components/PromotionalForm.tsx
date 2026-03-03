'use client'

import { useState } from 'react'
import PhoneInputWithCountry, { validatePhone } from './PhoneInputWithCountry'
import styles from './TransactionalForm.module.css'

const VOLUME_OPTIONS = [
  'Select volume range',
  '1K - 10K messages',
  '10K - 50K messages',
  '50K - 100K messages',
  '100K - 500K messages',
  '500K+ messages',
]

export default function PromotionalForm() {
  const [form, setForm] = useState({
    phone: '',
    countryCode: '+971',
    email: '',
    volume: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status) setStatus('')
  }

  const validate = () => {
    const next: Record<string, string> = {}
    if (!form.phone.trim()) next.phone = 'Phone number is required'
    else if (!validatePhone(form.phone)) next.phone = 'Please enter a valid phone number'
    if (!form.email.trim()) next.email = 'Email address is required'
    else if (!validateEmail(form.email))
      next.email = 'Please enter a valid email address'
    if (!form.volume.trim()) next.volume = 'Monthly SMS volume is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('Sending...')
    setIsSubmitting(true)

    const message = [
      'Promotional SMS - Request Demo',
      '',
      `Phone: ${form.countryCode} ${form.phone}`,
      `Email: ${form.email}`,
      `Monthly SMS Volume: ${form.volume}`,
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Promotional SMS Request',
          email: form.email,
          message,
        }),
      })

      const data = await res.json().catch(() => ({}))
      const errorMsg = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Thank you! We will contact you shortly.')
        setForm({ phone: '', countryCode: '+971', email: '', volume: '' })
      } else {
        setStatus(errorMsg || 'Request failed. Please try again or email info@mr-otp.com')
      }
    } catch {
      setStatus('Network error. Please try again or email info@mr-otp.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Get Started Today</h2>
      <p className={styles.subtitle}>
        Unlock higher engagement and stronger returns with promotional SMS.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <PhoneInputWithCountry
          countryCode={form.countryCode}
          onCountryCodeChange={(code) => {
            setForm((prev) => ({ ...prev, countryCode: code }))
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
            if (status) setStatus('')
          }}
          phone={form.phone}
          onPhoneChange={(value) => {
            setForm((prev) => ({ ...prev, phone: value }))
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: '' }))
            if (status) setStatus('')
          }}
          error={errors.phone}
          label="Phone Number"
          id="phone"
          placeholder="123 456 7890"
        />

        <div className={styles.field}>
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? styles.inputError : ''}
          />
          {errors.email && (
            <span className={styles.error}>{errors.email}</span>
          )}
        </div>

        <div className={styles.field}>
          <label htmlFor="volume">Monthly SMS Volume *</label>
          <select
            id="volume"
            name="volume"
            value={form.volume}
            onChange={handleChange}
            className={errors.volume ? styles.inputError : ''}
          >
            {VOLUME_OPTIONS.map((opt) => (
              <option key={opt} value={opt === 'Select volume range' ? '' : opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.volume && (
            <span className={styles.error}>{errors.volume}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.submit}>
          {isSubmitting ? 'Sending…' : 'Request Demo'}
        </button>

        {status && (
          <p className={status.includes('Thank you') ? styles.success : styles.status}>
            {status}
          </p>
        )}

        <p className={styles.privacy}>
          Built with strict data protection standards and fully aligned with opt-out and consent regulations.
        </p>
      </form>
    </div>
  )
}
