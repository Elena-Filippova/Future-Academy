import Image from 'next/image'
import styles from './heroEvent.module.css'

export default function HeroEvent() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Название мероприятия</h1>
            <p className={styles.heroDescr}>Подпись к названию</p>
            <div className={styles.heroTextBlock}>
              <p className={styles.text}>
                Узнайте самые востребованные профессии, на которые более 113
                тысяч вакансий
              </p>
              <p className={styles.text}>
                Выберите подходящую именно для вас
              </p>
              <p className={styles.text}>
                Сделайте первые шаги к возможности выйти на доход более 100
                тысяч рублей
              </p>
            </div>
            <p className={styles.heroTextInvite}>
              Запишись сейчас
            </p>
            <button className={styles.heroBtn}>
              Записаться на интенсив
            </button>
          </div>
          <div className={styles.heroRight}>
            <Image
              src='/event/hero/hero.webp'
              width={750}
              height={480}
              alt='Мужчина смотрит планшет'
            />
          </div>
        </div>
      </div>
      <Image
        className={styles.horseIcon}
        src='/chess/hero/horse.svg'
        width={69.6}
        height={115}
        alt='Шахматный конь'
      />
      <Image
        className={styles.line1Icon}
        src='/chess/hero/line-1.svg'
        width={126.59}
        height={266.59}
        alt='Линия'
      />
      <Image
        className={styles.line2Icon}
        src='/chess/hero/line-2.svg'
        width={338.08}
        height={131.43}
        alt='Линия'
      />
      <Image
        className={styles.circleIcon}
        src='/chess/hero/circle.svg'
        width={128}
        height={128}
        alt='Круг'
      />
      <Image
        className={styles.triangleIcon}
        src='/chess/hero/triangle.svg'
        width={98.39}
        height={81.73}
        alt='Треугольник'
      />
      <Image
        className={styles.crossIcon}
        src='/chess/hero/cross.svg'
        width={100}
        height={100}
        alt='Крестик'
      />
      <Image
        className={styles.triangleBigIcon}
        src='/chess/hero/triangle-big.svg'
        width={138}
        height={115}
        alt='Треугольник'
      />
      <Image
        className={styles.line4Icon}
        src='/chess/hero/line-4.svg'
        width={338.08}
        height={131.43}
        alt='Линия'
      />
    </section>
  )
}