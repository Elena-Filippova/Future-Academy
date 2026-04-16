import Link from 'next/link'
import Image from 'next/image'
import styles from './coursesList.module.css'

export default function CoursesList() {
  return (
    <ul className={styles.coursesList}>
      <li>
        <Link href='#' className={styles.coursesListLink}>
          <Image
            src='/courses/children-1.svg'
            width={49.08}
            height={49.08}
            alt='Дети'
          />
          <div className={styles.linkDescr}>
            <span className={styles.linkDescrTitle}>Дети</span>
            <span className={styles.linkDescrText}>8 - 14 лет</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href='#' className={styles.coursesListLink}>
          <Image
            src='/courses/children-2.svg'
            width={49.08}
            height={49.08}
            alt='Дети'
          />
          <div className={styles.linkDescr}>
            <span className={styles.linkDescrTitle}>Подростки</span>
            <span className={styles.linkDescrText}>14 - 18 лет</span>
          </div>
        </Link>
      </li>
      <li>
        <Link href='#' className={styles.coursesListLink}>
          <Image
            src='/courses/family.svg'
            width={49.08}
            height={49.08}
            alt='Взрослые'
          />
          <div className={styles.linkDescr}>
            <span className={styles.linkDescrTitle}>Взрослые</span>
            <span className={styles.linkDescrText}>18 - ∞</span>
          </div>
        </Link>
      </li>
    </ul>
  )
}