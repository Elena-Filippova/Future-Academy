import teachersArray from '../../constants/teachers'
import TeachersCard from '../teachersCard/TeachersCard'
import styles from './teachers.module.css'

export default function Teachers() {
  return (
    <section className={styles.teachers}>
      <div className={styles.teachersContainer}>
        <div className={styles.teachersWrapper}>
          <h2 className={styles.teachersTitle}>Наши преподаватели</h2>
          <ul className={styles.teachersList}>
            {teachersArray.map((card) => (
              <li className={styles.teachersListItem} key={card.id}>
                <TeachersCard card={card} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
