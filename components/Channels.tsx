import Image from 'next/image'
import styles from './Channels.module.css'

const channels = [
  { name: 'WhatsApp', icon: '/whatsapp.svg', isImage: true },
  { name: 'Viber', icon: '/viber.jpg', isImage: true },
  { name: 'SMS', icon: '/sms-icon.png', isImage: true },
  { name: 'Voice', icon: '/voice-icon.png', isImage: true },
  { name: 'RCS', icon: '/RCS-icon.png', isImage: true },
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
                  <Image src={channel.icon} alt={channel.name} width={48} height={48} className={styles.channelIconImage} />
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