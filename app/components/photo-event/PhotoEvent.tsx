import SwiperPhoto from '../swiperPhoto/SwiperPhoto'
import styles from './photoEvent.module.css'

export default function PhotoEvent() {
  return (
    <section className={styles.photo}>
      <div className={styles.photoContainer}>
        <div className={styles.photoWrapper}>
          <h2 className={styles.photoTitle}>Фотографии с прошлых мероприятий</h2>
          <p className={styles.photoDescr}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo.
          </p>
        </div>
      </div>
      <SwiperPhoto />
    </section>
  )
}