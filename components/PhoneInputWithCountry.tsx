'use client'

import { useState, useRef, useEffect } from 'react'
import { COUNTRY_CODES } from '@/lib/countryCodes'
import styles from './PhoneInputWithCountry.module.css'

export const validatePhone = (phone: string) =>
  /^[\d\s\-]{8,20}$/.test(phone.replace(/\s/g, ''))

type Props = {
  countryCode: string
  onCountryCodeChange: (code: string) => void
  phone: string
  onPhoneChange: (value: string) => void
  error?: string
  placeholder?: string
  label?: string
  id?: string
  disabled?: boolean
}

export default function PhoneInputWithCountry({
  countryCode,
  onCountryCodeChange,
  phone,
  onPhoneChange,
  error,
  placeholder = '123 456 7890',
  label = 'Phone Number',
  id = 'phone',
  disabled = false,
}: Props) {
  const [countryOpen, setCountryOpen] = useState(false)
  const [countrySearch, setCountrySearch] = useState('')
  const countryRef = useRef<HTMLDivElement>(null)

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.dial === countryCode) ??
    COUNTRY_CODES.find((c) => c.code === 'AE')!
  const filteredCountries = countrySearch.trim()
    ? COUNTRY_CODES.filter((c) =>
        c.search.toLowerCase().includes(countrySearch.toLowerCase())
      )
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

  return (
    <div className={styles.field}>
      <label htmlFor={id}>{label} *</label>
      <div className={styles.phoneRow}>
        <div className={styles.countrySelectWrap} ref={countryRef}>
          <button
            type="button"
            className={`${styles.countrySelectBtn} ${error ? styles.inputError : ''}`}
            onClick={() => !disabled && setCountryOpen((o) => !o)}
            aria-haspopup="listbox"
            aria-expanded={countryOpen}
            aria-label="Select country code"
            disabled={disabled}
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
                    aria-selected={c.dial === countryCode}
                    className={`${styles.countryOption} ${c.dial === countryCode ? styles.countryOptionActive : ''}`}
                    onClick={() => {
                      onCountryCodeChange(c.dial)
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
          id={id}
          name="phone"
          type="tel"
          placeholder={placeholder}
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className={`${styles.phoneInput} ${error ? styles.inputError : ''}`}
          disabled={disabled}
        />
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
