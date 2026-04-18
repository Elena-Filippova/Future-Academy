import Image from 'next/image'
import styles from './hero-chess.module.css'

export default function HeroChess() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroWrapper}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>Шахматная школа</h1>
            <p className={styles.heroDescr}>Развитие мышления и логики</p>
            <div className={styles.heroTextBlock}>
              <div className={styles.text}>
                <span>Срок обучения:</span>
                <span>5 лет</span>
              </div>
              <div className={styles.text}>
                <span>Режим занятий:</span>
                <span>2 раза в неделю по 2 академических часа</span>
              </div>
            </div>
            <p className={styles.heroPrice}>от 4 350 ₽ в месяц</p>
            <p className={styles.heroText}>1 занятие бесплатно</p>
            <p className={styles.heroTextInvite}>Прежде чем начать обучение советуем записаться на пробное занятие</p>
            <button className={styles.heroBtn}>Записаться на пробное занятие</button>
          </div>
          <div className={styles.heroRight}>
            <Image
              src='/chess/hero/hero.webp'
              width={517}
              height={480}
              alt='Мальчик играет в шахматы'
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
        className={styles.line3Icon}
        src='/chess/hero/line-3.svg'
        width={399.47}
        height={90.09}
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