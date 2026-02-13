import Image from 'next/image'
import styles from './Channels.module.css'

const channels = [
  { name: 'WhatsApp', icon: '/whatsapp.svg', isImage: true, size: 'sm' },
  { name: 'Viber', icon: '/viber-icon.png', isImage: true, size: 'lg' },
  { name: 'SMS', icon: '/sms-icon.png', isImage: true, size: 'lg' },
  { name: 'Voice', icon: '/voice-icon.png', isImage: true, size: 'lg' },
  { name: 'RCS', icon: '/RCS-icon.png', isImage: true, size: 'lg' },
]

export default function Channels() {
  return (
    <section id="channels" className={styles.channels}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>More Channels</h2>
        <div className={styles.channelList}>
          {channels.map((channel, index) => (
            <div key={index} className={styles.channelItem}>
              <span className={styles.channelIcon}>
                {channel.isImage ? (
                  <Image
                  src={channel.icon}
                  alt={channel.name}
                  width={channel.size === 'lg' ? 112 : 80}
                  height={channel.size === 'lg' ? 112 : 80}
                  className={`${styles.channelIconImage} ${channel.size === 'lg' ? styles.channelIconLg : styles.channelIconSm}`}
                  sizes={channel.size === 'lg' ? '112px' : '80px'}
                />
                ) : (
                  <span className={styles.emojiIcon}>{channel.icon}</span>
                )}
              </span>
              <span className={styles.channelName}>{channel.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}