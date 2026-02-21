'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { COUNTRY_CODES } from '@/lib/countryCodes'
import styles from './GetStartedPageForm.module.css'

const COUNTRIES = [
  'United Arab Emirates', 'India', 'United States', 'United Kingdom', 'Singapore',
  'Australia', 'Zambia', 'Saudi Arabia', 'Egypt', 'Pakistan', 'Nigeria', 'Kenya',
  'Canada', 'Germany', 'France', 'South Africa', 'Malaysia', 'Indonesia', 'Philippines',
  'Bangladesh', 'Sri Lanka', 'Vietnam', 'Thailand', 'Japan', 'China', 'Brazil', 'Mexico',
  'Spain', 'Italy', 'Netherlands', 'Belgium', 'Switzerland', 'Sweden', 'Norway',
]

const SERVICES = [
  { id: 'otp', label: 'OTP SMS' },
  { id: 'bulk', label: 'Bulk SMS' },
  { id: 'transactional', label: 'Transactional SMS' },
  { id: 'rcs', label: 'RCS Messaging' },
  { id: 'whatsapp', label: 'WhatsApp Business' },
  { id: 'other', label: 'Other' },
]

type Props = { backTo?: string }

export default function GetStartedPageForm({ backTo = 'rcs' }: Props) {
  const backConfig = backTo === 'viber'
    ? { href: '/viber', label: 'Back to Viber' }
    : { href: '/rcs', label: 'Back to RCS' }
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    countryCode: '+971',
    phone: '',
    email: '',
    jobTitle: '',
    company: '',
    website: '',
    country: '',
    service: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [countryOpen, setCountryOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')
  const countryRef = useRef<HTMLDivElement>(null)

  const selectedCountry = COUNTRY_CODES.find((c) => c.dial === form.countryCode) ?? COUNTRY_CODES.find((c) => c.code === 'AE')!
  const filteredCountries = countrySearch.trim()
    ? COUNTRY_CODES.filter((c) => c.search.toLowerCase().includes(countrySearch.toLowerCase()))
    : COUNTRY_CODES

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(e.target as Node)) {
        setCountryOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  const validatePhone = (phone: string) => /^[\d\s\-]{8,20}$/.test(phone.replace(/\s/g, ''))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (status) setStatus('')
  }

  const validateStep2 = () => {
    const next: Record<string, string> = {}
    if (!form.firstName.trim()) next.firstName = 'First name is required'
    if (!form.lastName.trim()) next.lastName = 'Last name is required'
    if (!form.phone.trim()) next.phone = 'Mobile phone is required'
    else if (!validatePhone(form.phone)) next.phone = 'Please enter a valid phone number'
    if (!form.email.trim()) next.email = 'Business email is required'
    else if (!validateEmail(form.email)) next.email = 'Please enter a valid email'
    if (!form.jobTitle.trim()) next.jobTitle = 'Job title is required'
    if (!form.company.trim()) next.company = 'Company name is required'
    if (!form.country.trim()) next.country = 'Company HQ country is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleNext = () => {
    if (step === 2 && !validateStep2()) return
    setStep((s) => Math.min(s + 1, 3))
  }

  const handleBack = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      handleNext()
      return
    }
    if (!validateStep2()) return

    setStatus('Sending...')
    setIsSubmitting(true)

    const message = [
      'Get Started Request',
      '',
      `Name: ${form.firstName} ${form.lastName}`,
      `Email: ${form.email}`,
      `Phone: ${form.countryCode} ${form.phone}`,
      `Job Title: ${form.jobTitle}`,
      `Company: ${form.company}`,
      `Website: ${form.website || 'Not provided'}`,
      `Country: ${form.country}`,
      `Service Interest: ${form.service || 'Not specified'}`,
    ].join('\n')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          message,
        }),
      })
      const data = await res.json().catch(() => ({}))
      const errorMsg = typeof data?.error === 'string' ? data.error : null

      if (res.ok) {
        setStatus('Thank you! Our team will contact you shortly.')
        setForm({
          firstName: '', lastName: '', countryCode: '+971', phone: '', email: '',
          jobTitle: '', company: '', website: '', country: '', service: '',
        })
        setStep(1)
      } else {
        setStatus(errorMsg || 'Failed to submit. Please try again or email info@mr-otp.com')
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
        <h1 className={styles.headline}>Let&apos;s Make Your Communications Happen</h1>
        <p className={styles.subtitle}>
          Need help or have a question? Let us connect you with the right team at Mr-OTP.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.formColumn}>
          <Link href={backConfig.href} className={styles.backToRcs} aria-label={backConfig.label}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {backConfig.label}
          </Link>
        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit}>
            {step === 1 && (
              <div className={styles.step}>
                <h2 className={styles.stepTitle}>What are you looking for?</h2>
                <p className={styles.stepSubtitle}>Select the services you&apos;re interested in</p>
                <div className={styles.serviceGrid}>
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className={`${styles.serviceBtn} ${form.service === s.id ? styles.serviceBtnActive : ''}`}
                      onClick={() => {
                        setForm((prev) => ({ ...prev, service: s.id }))
                        setErrors((prev) => ({ ...prev, service: '' }))
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className={styles.step}>
                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handleChange}
                      className={errors.firstName ? styles.inputError : ''}
                    />
                    {errors.firstName && <span className={styles.error}>{errors.firstName}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handleChange}
                      className={errors.lastName ? styles.inputError : ''}
                    />
                    {errors.lastName && <span className={styles.error}>{errors.lastName}</span>}
                  </div>
                </div>

                <div className={styles.field}>
                  <label>Mobile Phone Number *</label>
                  <div className={styles.phoneRow}>
                    <div className={styles.countrySelectWrap} ref={countryRef}>
                      <button
                        type="button"
                        className={styles.countrySelectBtn}
                        onClick={() => setCountryOpen((o) => !o)}
                        aria-haspopup="listbox"
                        aria-expanded={countryOpen}
                        aria-label="Select country code"
                      >
                        <img
                          src={`https://flagcdn.com/24x18/${selectedCountry.code.toLowerCase()}.png`}
                          alt=""
                          className={styles.countryFlagImg}
                          width={24}
                          height={18}
                        />
                        <span className={styles.countryDial}>{selectedCountry.dial}</span>
                        <svg className={styles.countryChevron} viewBox="0 0 12 12" fill="currentColor">
                          <path d="M6 8L1 3h10z" />
                        </svg>
                      </button>
                      {countryOpen && (
                        <div className={styles.countryDropdown}>
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                            className={styles.countrySearch}
                            autoFocus
                          />
                          <ul className={styles.countryList} role="listbox">
                            {filteredCountries.map((c) => (
                              <li
                                key={c.code}
                                role="option"
                                aria-selected={c.dial === form.countryCode}
                                className={`${styles.countryOption} ${c.dial === form.countryCode ? styles.countryOptionActive : ''}`}
                                onClick={() => {
                                  setForm((prev) => ({ ...prev, countryCode: c.dial }))
                                  setCountryOpen(false)
                                  setCountrySearch('')
                                }}
                              >
                                <img
                                  src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
                                  alt=""
                                  className={styles.countryOptionFlagImg}
                                  width={24}
                                  height={18}
                                />
                                <span className={styles.countryOptionName}>{c.name}</span>
                                <span className={styles.countryOptionDial}>{c.dial}</span>
                              </li>
                            ))}
                            {filteredCountries.length === 0 && (
                              <li className={styles.countryOptionEmpty}>No countries found</li>
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="123 456 7890"
                      value={form.phone}
                      onChange={handleChange}
                      className={`${styles.phoneInput} ${errors.phone ? styles.inputError : ''}`}
                    />
                  </div>
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="email">Business Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? styles.inputError : ''}
                    />
                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="jobTitle">Job Title *</label>
                    <input
                      id="jobTitle"
                      name="jobTitle"
                      type="text"
                      placeholder="e.g. Marketing Manager"
                      value={form.jobTitle}
                      onChange={handleChange}
                      className={errors.jobTitle ? styles.inputError : ''}
                    />
                    {errors.jobTitle && <span className={styles.error}>{errors.jobTitle}</span>}
                  </div>
                </div>

                <div className={styles.fieldRow}>
                  <div className={styles.field}>
                    <label htmlFor="company">Company Name *</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                      className={errors.company ? styles.inputError : ''}
                    />
                    {errors.company && <span className={styles.error}>{errors.company}</span>}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="website">Website URL</label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://"
                      value={form.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="country">Company HQ Country *</label>
                  <select
                    id="country"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className={errors.country ? styles.inputError : ''}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                  {errors.country && <span className={styles.error}>{errors.country}</span>}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.step}>
                <h2 className={styles.stepTitle}>Review & Submit</h2>
                <div className={styles.reviewList}>
                  <p><strong>Name:</strong> {form.firstName} {form.lastName}</p>
                  <p><strong>Email:</strong> {form.email}</p>
                  <p><strong>Phone:</strong> {form.countryCode} {form.phone}</p>
                  <p><strong>Job Title:</strong> {form.jobTitle}</p>
                  <p><strong>Company:</strong> {form.company}</p>
                  {form.website && <p><strong>Website:</strong> {form.website}</p>}
                  <p><strong>Country:</strong> {form.country}</p>
                  {form.service && (
                    <p><strong>Interest:</strong> {SERVICES.find((s) => s.id === form.service)?.label}</p>
                  )}
                </div>
              </div>
            )}

            <div className={styles.progress}>
              <span className={styles.progressText}>{step}/3</span>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(step / 3) * 100}%` }} />
              </div>
            </div>

            <div className={styles.actions}>
              {step > 1 ? (
                <button type="button" className={styles.backBtn} onClick={handleBack}>
                  Back
                </button>
              ) : (
                <span />
              )}
              <button
                type={step === 3 ? 'submit' : 'button'}
                className={styles.nextBtn}
                onClick={step < 3 ? handleNext : undefined}
                disabled={step === 3 && isSubmitting}
              >
                {step === 3 ? (isSubmitting ? 'Sending…' : 'Submit') : 'Next'}
              </button>
            </div>

            {status && (
              <p className={status.includes('Thank you') ? styles.success : styles.statusError}>
                {status}
              </p>
            )}
          </form>
        </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.illustrationGraphic}>
            <div className={styles.iconWrap}>
              <Image
                src="/contactus-icon.png"
                alt="Contact"
                width={280}
                height={280}
                className={styles.contactIcon}
              />
            </div>
            <div className={styles.checkmark} />
          </div>
          <p className={styles.illustrationText}>
            Our Team Is <strong>Ready to Help</strong>
          </p>
        </div>
      </section>
    </main>
  )
}
