import Image from 'next/image'
import styles from './reviewsCard.module.css'

interface CardProps {
  card: {
    id: number,
    image: string,
    name: string,
    position: string,
    text: string,
    rating: string
  }
}

export default function ReviewsCard({ card }: CardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.cardWrapper}>
        <div className={styles.person}>
          <Image
            src={card.image}
            width={40}
            height={40}
            alt={card.name}
          />
          <div className={styles.personInfo}>
            <span className={styles.personName}>{card.name}</span>
            <span className={styles.personPosition}>{card.position}</span>
          </div>
        </div>
        <p className={styles.descr}>{card.text}</p>
        <div className={styles.rating}>
          <Image
            src='/reviews/star.svg'
            width={21.87}
            height={21.87}
            alt='Звезда'
          />
          <span className={styles.ratingText}>{card.rating}</span>
        </div>
      </div>
    </article>
  )
}