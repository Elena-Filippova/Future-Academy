import styles from './signUp.module.css'

export default function SignUp() {
  return (
    <section className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUpText}>
            <p className={styles.text}>
              Шахматы могут помочь вам планировать наперед, не торопиться с
              решениями и взвешивать их плюсы и минусы.
            </p>
            <p className={styles.text}>
              Шахматами можно наслаждаться в любом возрасте — в результате,
              тренировка мозга может укреплять ваше здоровье.
            </p>
          </div>
          <button className={styles.signUpBtn}>Записаться на курс</button>
        </div>
      </div>
    </section>
  )
}