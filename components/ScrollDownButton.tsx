// 'use client'

import { useEffect, useState } from 'react'

export default function ScrollDownButton() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Hide once user scrolls down even a little
      setHidden(window.scrollY > 50)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Scroll Down"
      className={`scroll-indicator ${hidden ? 'hidden' : ''}`}
    >
      {/* <span className="dot" /> */}
    </button>
  )
}
