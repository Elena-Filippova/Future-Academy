import Image from 'next/image'
import styles from './new.module.css'

export default function New() {
  return (
    <section className={styles.new}>
      <div className={styles.newContainer}>
        <div className={styles.newWrapper}>
          <h1 className={styles.newTitle}>Заголовок новости</h1>
          <span className={styles.newDate}>16 ноября 2021</span>
          <p className={`${styles.newDescr} ${styles.descrTop}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo vestibulum eros. Cras dignissim mi quis
            fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor
            venenatis vel. In hac habitasse platea dictumst.
          </p>
          <Image
            className={styles.newImage}
            src='/new/new.webp'
            width={780}
            height={436}
            alt='Новость'
          />
          <p className={`${styles.newDescr} ${styles.descrCenter}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mi
            elit, egestas ut feugiat id, laoreet volutpat risus. Cras
            condimentum, ligula eget varius eleifend, massa nibh imperdiet est,
            vel sagittis quam justo vestibulum eros. Cras dignissim mi quis
            fringilla feugiat. Proin malesuada luctus diam, vitae faucibus dolor
            venenatis vel. In hac habitasse platea dictumst. Vestibulum
            tristique porta aliquam. Suspendisse blandit et sapien sit amet
            sagittis. Praesent tristique ante sed lacinia congue. Etiam egestas
            mauris at arcu gravida interdum. Aliquam feugiat risus lacus, ac
            rutrum dolor porttitor vitae. Etiam porta, nunc sit amet
            pellentesque posuere, risus nulla sollicitudin enim, commodo
            bibendum nulla lacus et lorem. Interdum et malesuada fames ac ante
            ipsum primis in faucibus. 
          </p>
          <p className={styles.newDescr}>
            Proin sit amet lorem consequat, elementum
            nibh vitae, congue quam. Nunc sapien sapien, commodo nec lorem a,
            elementum facilisis tortor. Sed porta ultrices orci, maximus
            tincidunt est sodales vel. Vestibulum lobortis turpis nibh.
            Vestibulum eros urna, gravida quis lorem at, facilisis pulvinar
            felis. In eget hendrerit ex, nec consequat orci. Suspendisse a est
            porta, fringilla ligula nec, ornare dolor. In tristique sagittis
            mauris dictum volutpat. Maecenas id risus orci. Fusce faucibus metus
            a leo tincidunt, in commodo elit sollicitudin. Fusce consectetur
            nulla vel leo feugiat, a ultrices leo imperdiet. Sed eget est quis
            felis molestie dictum. Sed consequat malesuada quam, id malesuada
            augue euismod nec. Phasellus ultrices velit non venenatis sagittis.
          </p>
        </div>
      </div>
    </section>
  )
}