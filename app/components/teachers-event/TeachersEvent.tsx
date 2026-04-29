import teachersArray from '../../constants/teachers'
import TeachersCard from '../teachersCard/TeachersCard'
import styles from './teachersEvent.module.css'

export default function TeachersEvent() {
  return (
    <section className={styles.teachers}>
      <div className={styles.teachersContainer}>
        <div className={styles.teachersWrapper}>
          <h2 className={styles.teachersTitle}>Мероприятие проводят</h2>
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
