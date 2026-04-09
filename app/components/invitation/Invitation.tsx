import Image from 'next/image'
import styles from './invitation.module.css'

export default function Invitation() {
  return (
    <section className={styles.invitation}>
      <div className={styles.invitationContainer}>
        <ul className={styles.cardsList}>
          <li className={`${styles.cardsListItem} ${styles.card1}`}>
            <div className={styles.card1Date}>
              <span className={styles.dateBold}>25</span>
              <span className={styles.dateRegular}>ноября</span>
            </div>
            <div className={styles.card1Descr}>
              <h3 className={styles.card1Title}>День открытых дверей</h3>
              <p className={styles.card1Subtitle}>
                Приглашаем всех желающих на бесплатную экскурсию в мир
                востребованных профессий и полезных навыков
              </p>
            </div>
            <button className={styles.card1Btn}>
              <span>Записаться</span>
              <svg
                width='9'
                height='13'
                viewBox='0 0 9 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L6.80762 6.56543L1 11.9689'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </li>
          <li className={`${styles.cardsListItem} ${styles.card2}`}>
            <Image
              src='/invitation/monitor.svg'
              width={77.55}
              height={77.55}
              alt='Монитор'
            />
            <h3 className={styles.cardTitle}>Программы обучения</h3>
            <p className={styles.cardSubtitle}>
              В списке наших курсов вы сможете найти профессию и занятие по
              душе, изучить новое и получить практические знания, которые
              помогут получить работу мечты.
            </p>
            <button className={styles.card2Btn}>
              <span>Подробнее</span>
              <svg
                width='9'
                height='13'
                viewBox='0 0 9 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 1L6.80762 6.56543L1 11.9689'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </li>
          <li className={`${styles.cardsListItem} ${styles.card3}`}>
            <Image
              src='/invitation/newspaper.svg'
              width={68.49}
              height={68.49}
              alt='Газета'
            />
            <h3 className={styles.cardTitle}>
              Новости Академии
            </h3>
          </li>
          <li className={`${styles.cardsListItem} ${styles.card4}`}>
            <Image
              src='/invitation/diagram.svg'
              width={68.49}
              height={68.49}
              alt='Диаграмма'
            />
            <h3 className={styles.cardTitle}>
              Мир IT
            </h3>
          </li>
          <li className={`${styles.cardsListItem} ${styles.card5}`}>
            <Image
              src='/invitation/icons.svg'
              width={97.34}
              height={97.23}
              alt='Иконки'
            />
            <div className={styles.card5Descr}>
              <h3 className={styles.cardTitle}>Попробуй!</h3>
              <p className={styles.subTitle}>
                Пройдите тест и узнайте свои способности в сфере информационных технологий
              </p>  
            </div>

          </li>
        </ul>
      </div>
    </section>
  )
}