'use client'

import { useState } from 'react'
import styles from './SignupForm.module.css'

export default function SignupForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    companyName: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (status) setStatus('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    setIsSubmitting(true)

    const message = form.companyName
      ? `Bulk SMS Signup - Company: ${form.companyName}`
      : 'Bulk SMS Signup request'

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message,
        }),
      })

      const data = await res.json().catch(() => ({}))
      const errorMsg = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Thank you! We will contact you shortly.')
        setForm({ name: '', email: '', companyName: '' })
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
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        name="companyName"
        type="text"
        placeholder="Company Name"
        value={form.companyName}
        onChange={handleChange}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending…' : 'FREE SIGNUP'}
      </button>
      {status && <p className={styles.status}>{status}</p>}
    </form>
  )
}
