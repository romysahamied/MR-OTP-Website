'use client'

import { useState, useEffect } from 'react'
import styles from './Blog.module.css'

const blogPosts = [
  {
    title: 'Understanding OTP SMS Best Practices',
    excerpt: 'Learn how to implement secure and efficient OTP SMS for your authentication flows.',
    date: '2024-01-15',
  },
  {
    title: 'WhatsApp Business API Integration Guide',
    excerpt: 'Step-by-step guide to integrating WhatsApp Business API for customer communication.',
    date: '2024-01-10',
  },
  {
    title: 'SMPP vs REST API: Which Should You Choose?',
    excerpt: 'Comparing SMPP and REST API protocols for enterprise messaging solutions.',
    date: '2024-01-05',
  },
]

export default function Blog() {
  const [open, setOpen] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggle = (index: number) => {
    if (typeof window !== 'undefined') {
      setOpen(open === index ? null : index)
    }
  }

  return (
    <section id="blog" className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.blogSection}>
          <h2 className={styles.sectionTitle}>Latest Blogs</h2>
          <div className={styles.blogGrid}>
            {blogPosts.map((post, index) => (
              <article key={index} className={styles.blogCard}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <time className={styles.blogDate} dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}