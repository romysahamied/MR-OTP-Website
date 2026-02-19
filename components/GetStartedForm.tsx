'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './GetStartedForm.module.css'

const VOLUME_OPTIONS = [
  'Select volume range',
  'Under 1,000',
  '1,000 - 10,000',
  '10,000 - 50,000',
  '50,000 - 100,000',
  '100,000 - 500,000',
  '500,000+',
]

export default function GetStartedForm() {
  const [form, setForm] = useState({
    workEmail: '',
    company: '',
    fullName: '',
    country: '',
    volume: '',
  })
  const [consent, setConsent] = useState(false)
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
    if (!form.workEmail.trim()) next.workEmail = 'Work email is required'
    else if (!validateEmail(form.workEmail))
      next.workEmail = 'Please enter a valid email address'
    if (!form.company.trim()) next.company = 'Company is required'
    if (!form.fullName.trim()) next.fullName = 'Full name is required'
    if (!form.country.trim()) next.country = 'Country is required'
    if (!consent)
      next.consent = 'You must agree to receive communications'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setStatus('Sending...')
    setIsSubmitting(true)

    const message = [
      'Get Started Request - Bulk SMS',
      '',
      `Company: ${form.company}`,
      `Country: ${form.country}`,
      `Expected Monthly Volume: ${form.volume || 'Not specified'}`,
      '',
      '[User agreed to receive communications]',
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.fullName,
          email: form.workEmail,
          message,
        }),
      })

      const data = await res.json().catch(() => ({}))
      const errorMsg = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Thank you! We will contact you shortly.')
        setForm({
          workEmail: '',
          company: '',
          fullName: '',
          country: '',
          volume: '',
        })
        setConsent(false)
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
    <section id="get-started" className={styles.section}>
      <div className={styles.card}>
        <h2 className={styles.title}>Get Started Today</h2>
        <p className={styles.subtitle}>
          Tell us about your requirements and we&apos;ll help you choose the right plan.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="workEmail">Work Email *</label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              placeholder="you@company.com"
              value={form.workEmail}
              onChange={handleChange}
              className={errors.workEmail ? styles.inputError : ''}
              aria-invalid={!!errors.workEmail}
            />
            {errors.workEmail && (
              <span className={styles.error}>{errors.workEmail}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company *</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your Company Name"
              value={form.company}
              onChange={handleChange}
              className={errors.company ? styles.inputError : ''}
              aria-invalid={!!errors.company}
            />
            {errors.company && (
              <span className={styles.error}>{errors.company}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="fullName">Full Name *</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="John Smith"
              value={form.fullName}
              onChange={handleChange}
              className={errors.fullName ? styles.inputError : ''}
              aria-invalid={!!errors.fullName}
            />
            {errors.fullName && (
              <span className={styles.error}>{errors.fullName}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="country">Country *</label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="United Arab Emirates"
              value={form.country}
              onChange={handleChange}
              className={errors.country ? styles.inputError : ''}
              aria-invalid={!!errors.country}
            />
            {errors.country && (
              <span className={styles.error}>{errors.country}</span>
            )}
          </div>

          <div className={styles.field}>
            <label htmlFor="volume">Expected Monthly Volume</label>
            <select
              id="volume"
              name="volume"
              value={form.volume}
              onChange={handleChange}
            >
              {VOLUME_OPTIONS.map((opt) => (
                <option key={opt} value={opt === 'Select volume range' ? '' : opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.consent}>
            <label className={styles.consentLabel}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked)
                  if (errors.consent) setErrors((prev) => ({ ...prev, consent: '' }))
                }}
                className={styles.checkbox}
              />
              <span>
                I agree to receive communications from Mr-OTP regarding my inquiry. By submitting this form, I acknowledge that my information will be processed in accordance with Mr-OTP&apos;s{' '}
                <Link href="/privacy">Privacy Policy</Link>.
              </span>
            </label>
            {errors.consent && (
              <span className={styles.error}>{errors.consent}</span>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.submit}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" strokeLinecap="round" strokeLinejoin="round" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {isSubmitting ? 'Sending…' : 'Submit Request'}
          </button>

          {status && (
            <p className={status.includes('Thank you') ? styles.success : styles.status}>
              {status}
            </p>
          )}

          <p className={styles.privacy}>
            We respect your privacy. Your data is secure and will never be shared with third parties.
          </p>
        </form>
      </div>
    </section>
  )
}
