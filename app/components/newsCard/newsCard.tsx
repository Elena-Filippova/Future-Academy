import Image from 'next/image'
import styles from './newsCard.module.css'
import Link from 'next/link'

interface NewsCardProps {
  card: {
    id: number,
    image: string,
    date: string,
    title: string,
    description: string,
  }
}

export default function NewsCard({ card }: NewsCardProps) {
  return (
    <article className={styles.card}>
      <Image
        className={styles.cardImage}
        src={card.image}
        width={380}
        height={250}
        alt={card.title}
      />
      <div className={styles.cardWrapper}>
        <span className={styles.cardDate}>{card.date}</span>
        <h4 className={styles.cardTitle}>{card.title}</h4>
        <p className={styles.cardDescr}>{card.description}</p>
        <Link 
          href='/pages/new-page'
          className={styles.cardLink}
        >
          <span>Подробнее</span>
          <Image
            src='/news/arrow.svg'
            width={21}
            height={15}
            alt='Стрелка'
          />
        </Link>
      </div>
    </article>
  )
}
