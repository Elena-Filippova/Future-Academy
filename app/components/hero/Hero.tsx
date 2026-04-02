import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.leftBlock}>
          <div className={styles.leftBlockWrapper}>
            <p className={styles.subTitle}>
              Образовательная платформа
            </p>
            <h1 className={styles.title}>
              ХОД Future Academy
            </h1>
            <p className={styles.descr}>
              Актуальные знания для новичков и профессионалов
            </p>
          </div>
        </div>
        <div className={styles.rightBlock}>
        </div>
      </div>
      <Image
        src='/cross.svg'
        width={130.15}
        height={130}
        alt='Крестик'
        className={styles.crossIcon}
      />
      <Image
        src='/triangle.svg'
        width={98.39}
        height={81.73}
        alt='Треугольник'
        className={styles.triangleIcon}
      />
      <Image
        src='/circle.svg'
        width={120}
        height={120}
        alt='Круг'
        className={styles.circleIcon}
      />
      <Image
        src='/line-1.svg'
        width={338.08}
        height={131.43}
        alt='Линия'
        className={styles.line1Icon}
      />
      <Image
        src='/line-2.svg'
        width={309.38}
        height={0}
        alt='Линия'
        className={styles.line2Icon}
      />
      <Image
        src='/cross-small.svg'
        width={84.83}
        height={84.74}
        alt='Крестик'
        className={styles.crossSmallIcon}
      />
      <Image
        src='/line-3.svg'
        width={126.59}
        height={266.59}
        alt='Линия'
        className={styles.line3Icon}
      />
      <Image
        src='/line-4.svg'
        width={71.27}
        height={79.11}
        alt='Линия'
        className={styles.line4Icon}
      />
    </section>
  )
}