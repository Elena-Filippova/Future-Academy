import Image from 'next/image'
import styles from './info-chess.module.css'
import CustomVideo from '../customVideo/CustomVideo'

export default function Info() {
  return (
    <section className={styles.info}>
      <div className={styles.infoContainer}>
        <div className={styles.infoWrapper}>
          <div className={styles.infoTop}>
            <p className={styles.infoTopText}>Вы полюбите шахматы, и вам этого будет не хватать всегда!</p>
            <Image
              className={styles.infoTopImage}
              src='/chess/info/owl.svg'
              width={168}
              height={188.05}
              alt='Сова'
            />
            <ul className={styles.infoTopList}>
              <li className={`${styles.listItem} ${styles.item1}`}>
                <h3 className={styles.listItemTitle}>Цель 1</h3>
                <p className={styles.listItemDescr}>
                  Привить любовь и интерес к шахматам
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.item2}`}>
                <h3 className={styles.listItemTitle}>Цель 2</h3>
                <p className={styles.listItemDescr}>
                  Получить удовольствие от процесса игры, от факта победы в партии, от спасения
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.item3}`}>
                <h3 className={styles.listItemTitle}>Цель 3</h3>
                <p className={styles.listItemDescr}>
                  Научить анализировать свои и чужие ошибки, учиться на них с помощью GM мирового уровня
                </p>
              </li>
              <li className={`${styles.listItem} ${styles.item4}`}>
                <h3 className={styles.listItemTitle}>Цель 4</h3>
                <p className={styles.listItemDescr}>
                  Получить удовольствие от процесса игры, от факта победы в партии, от спасения
                </p>
              </li>
            </ul>
          </div>
          <div className={styles.infoCenter}><CustomVideo /></div>
          <div className={styles.infoBottom}>
            <h2 className={styles.infoBottomTitle}>Школа шахмат</h2>
            <p className={styles.infoBottomDescr}>
              Шахматы - это отличная идея для времяпрепровождения с родителями, детьми и друзьями.
              Игра дает полезные в жизни навыки: учит побеждать и проигрывать, развивает творческие способности,
              вырабатывает стрессо-устойчивость, терпение, помогает сосредоточиться, а также помогает осознать последствия своих действий.
            </p>
            <ul className={styles.infoBottomList}>
              <li className={`${styles.listBottomItem} ${styles.itemBottom1}`}>
                <p className={styles.listItemBottomDescr}>
                  Интересные уроки по шахматам
                </p>
              </li>
              <li className={`${styles.listBottomItem} ${styles.itemBottom2}`}>
                <p className={styles.listItemBottomDescr}>
                  Шахматы для взрослых и детей
                </p>
              </li>
              <li className={`${styles.listBottomItem} ${styles.itemBottom3}`}>
                <p className={styles.listItemBottomDescr}>
                  Обучение шахматам онлайн
                </p>
              </li>
              <li className={`${styles.listBottomItem} ${styles.itemBottom4}`}>
                <p className={styles.listItemBottomDescr}>
                  Профессиональное обучение шахматам
                </p>
              </li>
              <li className={`${styles.listBottomItem} ${styles.itemBottom5}`}>
                <p className={styles.listItemBottomDescr}>
                  Шахматные турниры
                </p>
              </li>
              <li className={`${styles.listBottomItem} ${styles.itemBottom6}`}>
                <p className={styles.listItemBottomDescr}>
                  Сеанс одновременной игры с GM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}