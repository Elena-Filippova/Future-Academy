import NewsCard from '../newsCard/newsCard'
import newsArray from '../../constants/news'
import styles from './news.module.css'

export default function News() {
  return (
    <section className={styles.news}>
      <div className={styles.newsContainer}>
        <div className={styles.newsWrapper}>
          <h1 className={styles.newsTitle}>
            Новости ХОД Future Academy
          </h1>
          <ul className={styles.newsList}>
            {newsArray.map((card) => {
              return (
                <li
                  className={styles.newsListItem}
                  key={card.id}
                >
                  <NewsCard card={card} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}