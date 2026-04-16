import Image from 'next/image'
import styles from './welcome.module.css'

export default function Welcome() {
  return (
    <section className={styles.welcome}>
      <div className={styles.welcomeContainer}>
        <div className={styles.welcomeWrapper}>
          <h2 className={styles.welcomeTitle}>
            Добро пожаловать в Академию будущего ХОД
          </h2>
          <ul className={styles.welcomeList}>
            <li className={styles.welcomeListItem}>
              <Image
                src='/welcome/item-1.svg'
                width={60}
                height={59.98}
                alt='Схема'
              />
              <p className={styles.itemDescr}>
                Передовой подход к образовательному процессу
              </p>
            </li>
            <li className={styles.welcomeListItem}>
              <Image
                src='/welcome/item-2.svg'
                width={50}
                height={50}
                alt='Книга'
              />
              <p className={styles.itemDescr}>
                Непрерывное усовершенствование и пополнение базы курсов
              </p>
            </li>
            <li className={styles.welcomeListItem}>
              <Image
                src='/welcome/item-3.svg'
                width={56.94}
                height={46.15}
                alt='Учитель пишет на доске'
              />
              <p className={styles.itemDescr}>
                Только практикующие преподаватели
              </p>
            </li>
            <li className={styles.welcomeListItem}>
              <Image
                src='/welcome/item-4.svg'
                width={40}
                height={55.51}
                alt='Учитель'
              />
              <p className={styles.itemDescr}>
                Сопровождение на всех этапах. От начала обучения до
                трудоустройства
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}