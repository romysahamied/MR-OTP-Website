'use client'

import styles from './BrandScroll.module.css'

const brands = ['Zoho', 'Oppo', 'Amazon', 'MI', 'Ubisoft', 'Adobe']

export default function BrandScroll() {
  return (
    <section className={styles.brandScroll}>
      
      {/* CLIENTS HEADING */}
      <h2 className={styles.clientsHeading}>
        Clients
      </h2>

      {/* MARQUEE */}
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {brands.map((brand, index) => (
            <div key={index} className={styles.brandItem}>
              {brand}
            </div>
          ))}
          {brands.map((brand, index) => (
            <div key={`duplicate-${index}`} className={styles.brandItem}>
              {brand}
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
