import Image from 'next/image'
import styles from './courseContent.module.css'

export default function CourseContent() {
  return (
    <section className={styles.course}>
      <div className={styles.courseContainer}>
        <div className={styles.courseWrapper}>
          <h2 className={styles.courseTitle}>Содержание курса</h2>
          <p className={styles.courseDescription}>
            Программа включает в себя изучение истории возникновения игры в
            шахматы, современные тенденции игры в онлайн-шахматы, знакомство со
            знаменитыми шахматистами прошлого и настоящего. Дети знакомятся с
            фигурами и правилами игры, узнают основные понятия, отрабатывая все
            в игровой практике. Дебют, мителльшпиль, эндшпиль, стратегия и
            тактика игры, особенности позиции – все это включено в первый год
            обучения, а пятилетний курс предполагает обучение ребенка до уровня
            КМС.
          </p>
          <div className={styles.courseBox}>
            <div className={styles.courseBlock}>
              <div className={styles.courseBlockText}>
                <span>Срок обучения:</span>
                <span>5 лет</span>
              </div>
              <div className={styles.courseBlockText}>
                <span>Режим занятий:</span>
                <span>2 раза в неделю по 2 академических часа</span>
              </div>
            </div>
            <p className={styles.courseBlockDialog}>1 занятие бесплатно</p>
            <Image
              className={styles.courseBlockImage}
              src='/chess/course/owl.svg'
              width={196}
              height={220}
              alt='Сова'
            />  
          </div>
          <p className={styles.coursePrice}>от 4 350 ₽ в месяц</p>
          <button className={styles.courseBtn}>Записаться на курс</button>
        </div>
      </div>
    </section>
  )
}