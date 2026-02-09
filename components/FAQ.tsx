'use client'

import { useState } from 'react'
import styles from './FAQ.module.css'

type FAQItem = {
    question: string
    answer: string
}

const faqs: FAQItem[] = [
    {
        question: 'What is Mr-OTP?',
        answer: 'Mr-OTP is an AI-powered omnichannel communication platform that provides SMS, WhatsApp Business, and other messaging services.',
    },
    {
        question: 'How do I get started with SMS services?',
        answer: 'Sign up, verify your account, and integrate using our REST API or SMPP 3.4.',
    },
    {
        question: 'What channels are supported?',
        answer: 'SMS, WhatsApp Business, Viber, Voice, and RCS.',
    },
    {
        question: 'Is 24/7 support available?',
        answer: 'Yes, we offer 24/7 customer support via email and phone.',
    },
    {
        question: "What is SMS marketing and how can it help my business?",
        answer: "SMS marketing allows you to send promotional or transactional messages directly to your customers’ mobile phones. It’s highly effective for engagement, reminders, alerts, and boosting sales with higher open rates than email.",
    },
    {
        question: "Can I send bulk SMS or WhatsApp messages to my customers?",
        answer: "Yes! Our platform supports bulk messaging, enabling you to reach thousands of customers at once, while ensuring compliance with messaging regulations.",
    },
    {
        question: "Is my customer data safe with your platform?",
        answer: "Absolutely. We follow strict data security standards and ensure all customer information is encrypted and stored securely.",
    },
    {
        question: "How quickly will my messages be delivered?",
        answer: "Delivery speed varies by network, but SMS messages are usually delivered within seconds, and WhatsApp messages within minutes, ensuring timely communication.",
    },
    {
        question: "Can I use your service for promotional campaigns?",
        answer: "Yes. You can run promotions, offers, reminders, or transactional alerts while complying with local messaging regulations.",
    },
]

export default function FAQSection() {
    const [openFAQ, setOpenFAQ] = useState<number | null>(null)

    return (
        <section className={styles.faqSection}>
            <div className={styles.container}>

                {/* LEFT SIDE */}
                <div className={styles.leftContent}>
                    <span className={styles.faqLabel}>FAQ</span>
                    <h2 className={styles.sectionTitle}>All the details.</h2>
                    <p className={styles.sectionSubtitle}>
                        Got questions? We’ve got you covered.
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={`${styles.faqQuestion} ${openFAQ === index ? styles.faqQuestionActive : ''
                                    }`}
                                onClick={() =>
                                    setOpenFAQ(openFAQ === index ? null : index)
                                }
                            >

                                {faq.question}
                               <span className={`${styles.faqIcon} ${openFAQ === index ? styles.faqIconActive : '' }`} >
                                    {openFAQ === index ? '−' : '+'}
                                </span>
                                
                            </button>

                            <div
                                className={`${styles.faqAnswer} ${openFAQ === index ? styles.open : ''
                                    }`}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
