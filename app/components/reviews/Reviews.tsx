import SwiperReviews from '../swiperReviews/SwiperReviews'
import Image from 'next/image'
import styles from './reviews.module.css'

export default function Reviews() {
  return (
    <section className={styles.reviews}>
      <div className={styles.reviewsContainer}>
        <h2 className={styles.reviewsTitle}>Отзывы наших студентов</h2>
        <SwiperReviews />
        <Image
          className={styles.line1Icon}
          src='/reviews/line-1.svg'
          width={126.59}
          height={266.59}
          alt='Линия'
        />
        <Image
          className={styles.crossIcon}
          src='/reviews/cross.svg'
          width={130.15}
          height={130}
          alt='Крестик'
        />
        <Image
          className={styles.triangleIcon}
          src='/reviews/triangle.svg'
          width={98.39}
          height={81.73}
          alt='Треугольник'
        />
        <Image 
          className={styles.line2Icon}
          src='/reviews/line-2.svg'
          width={338.08}
          height={131.43}
          alt='Линия'
        />
        <Image
          className={styles.circleIcon}
          src='/reviews/circle.svg'
          width={120}
          height={120}
          alt='Круг'
        />
      </div>
    </section>
  )
}