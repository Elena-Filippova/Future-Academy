import SwiperSchool from '../swiperSchool/SwiperSchool'
import styles from './schoolchildrens.module.css'

export default function SchoolChildrens() {
  return (
    <section className={styles.school}>
      <div className={styles.schoolContainer}>
        <div className={styles.schoolWrapper}>
          <h2 className={styles.schoolTitle}>Chess academy для школьников</h2>
          <p className={styles.schoolDescr}>
            Обеспечиваем индивидуальный подход к учащимся. В основе процесса
            обучения — тесное и открытое взаимодействие педагода и ученика.
            Обучение проходит по программе, созданной GM.
          </p>
        </div>
      </div>
      <SwiperSchool />
    </section>
  )
}