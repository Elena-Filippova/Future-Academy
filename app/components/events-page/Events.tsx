import Image from 'next/image'
import styles from './events.module.css'

export default function Events() {
  return (
    <section className={styles.events}>
      <div className={styles.eventsContainer}>
        <div className={styles.eventsWrapper}>
          <h1 className={styles.eventsTitle}>Все мероприятия</h1>
          <ul className={styles.eventsList}>
            <li className={`${styles.eventsListItem} ${styles.item1}`}>
              <div className={styles.itemDate}>
                <span className={styles.dateBold}>25</span>
                <span className={styles.dateRegular}>ноября</span>
              </div>
              <div className={styles.itemDescr}>
                <h3 className={styles.itemTitle}>День открытых дверей</h3>
                <p className={styles.itemSubtitle}>
                  Приглашаем всех желающих на бесплатную экскурсию в мир
                  востребованных профессий и полезных навыков
                </p>
              </div>
              <button className={styles.itemBtn}>
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
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item2}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item3}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item4}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item5}`}>
              <span className={styles.eventsCardSubtitle}>Вебинар</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.item6}`}>
              <h4 className={styles.item6Title}>Заголовок мероприятия</h4>
              <p className={`${styles.cardDescr} ${styles.item6Descr}`}>
                Краткий анонс мероприятия в нескольких предложениях. Текст, 
                который будет заинтересовывать пользователя
              </p>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item7}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item8}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item8}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
            <li className={`${styles.eventsListItem} ${styles.eventsCard} ${styles.item9}`}>
              <span className={styles.eventsCardSubtitle}>Встреча</span>
              <div className={styles.eventsCardTitleBlock}>
                <Image
                  src='/events/mobile.svg'
                  width={26.04}
                  height={42}
                  alt='Мобильный телефон'
                />
                <h4 className={styles.cardTitle}>Заголовок мероприятия</h4>
              </div>
              <p className={styles.cardDescr}>
                Краткий анонс мероприятия в нескольких предложениях. Текст,
                который будет заинтересовывать пользователя
              </p>
              <span className={styles.cardDate}>16 ноября 2021</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}