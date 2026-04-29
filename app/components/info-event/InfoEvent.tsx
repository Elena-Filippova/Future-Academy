import Image from 'next/image'
import styles from './infoEvent.module.css'

export default function InfoEvent() {
  return (
    <section className={styles.info}>
      <div className={styles.infoContainer}>
        <div className={styles.infoWrapper}>
          <p className={styles.infoText}>Текст, призывающий записаться на мероприятие</p>
          <Image
            className={styles.infoImage}
            src='/chess/info/owl.svg'
            width={168}
            height={188.05}
            alt='Сова'
          />
          <ul className={styles.infoList}>
            <li className={`${styles.listItem} ${styles.item1}`}>
              <h3 className={styles.listItemTitle}>Заголовок</h3>
              <p className={styles.listItemDescr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
              </p>
            </li>
            <li className={`${styles.listItem} ${styles.item2}`}>
              <h3 className={styles.listItemTitle}>Заголовок</h3>
              <p className={styles.listItemDescr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
              </p>
            </li>
            <li className={`${styles.listItem} ${styles.item3}`}>
              <h3 className={styles.listItemTitle}>Заголовок</h3>
              <p className={styles.listItemDescr}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi elit, egestas ut feugiat id, laoreet volutpat risus. Cras condimentum, ligula eget
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}