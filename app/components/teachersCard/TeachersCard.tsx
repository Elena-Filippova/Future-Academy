import Image from 'next/image'
import styles from './teachersCard.module.css'

interface TeacherCard {
  card: {
    id: number,
    image: string,
    name: string,
    description: string,
  }
}

export default function TeachersCard({ card }: TeacherCard) {
  return (
    <article className={styles.card}>
      <div className={styles.cardWrapper}>
        <Image
          src={card.image}
          width={120}
          height={120}
          alt={card.name}
        />
        <h4 className={styles.cardTitle}>{card.name}</h4>
        <p className={styles.cardDescr}>{card.description}</p>
      </div>
    </article>
  )
}