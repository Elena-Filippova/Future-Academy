import Image from 'next/image'
import styles from './programsCard.module.css'

interface ProgCardProps {
  card: {
    id: number,
    subtitle: string,
    image: string,
    title: string,
    description: string,
    duration: number,
    discount?: string, 
  }
}

export default function ProgramsCard({ card }: ProgCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardWrapper}>
        <span className={styles.cardSubtitle}>{card.subtitle}</span>
        <div className={styles.cardTitleBlock}>
          <Image
            src={card.image}
            width={26.04}
            height={42}
            alt='Мобильный телефон'
          />
          <h3 className={styles.cardTitle}>{card.title}</h3>
        </div>
        <p className={styles.cardDescr}>{card.description}</p>
        <span className={styles.cardDuration}>{card.duration} месяца</span>
        {card.discount && (
          <span className={styles.cardDiscount}>{card.discount}</span>
        )}
      </div>
    </article>
  )
}
