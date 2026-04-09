import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.leftBlock}>
            <Link href='/' className={styles.leftBlockLogo}>
              <Image
                src="/footer/logo.svg"
                width={83.01}
                height={58.64}
                alt="Логотип"
              />
            </Link>
            <address className={styles.address}>
              <Link className={styles.addressPhone} href='tel:+88009503398'>
                8 800 950-33-98
              </Link>
              <p className={styles.addressText}>г. Москва, ул. Ленина, д. 50</p>
              <Link
                className={styles.addressMail}
                href='mailto:info@hodfutureacademy.ru'
              >
                info@hodfutureacademy.ru
              </Link>
            </address>
            <ul className={styles.socialList}>
              <li className={styles.socialListItem}>
                <Link href='https://vk.com/'>
                  <Image
                    src='/footer/vk.svg'
                    width={21}
                    height={26}
                    alt='Вконтакте'
                  />
                </Link>
              </li>
              <li className={styles.socialListItem}>
                <Link href='https://www.instagram.com/'>
                  <Image
                    src='/footer/instagram.svg'
                    width={16}
                    height={26}
                    alt='Инстаграм'
                  />
                </Link>
              </li>
              <li className={styles.socialListItem}>
                <Link href='https://www.facebook.com/'>
                  <Image
                    src='/footer/facebook.svg'
                    width={18}
                    height={26}
                    alt='Фэйсбук'
                  />
                </Link>
              </li>
              <li className={styles.socialListItem}>
                <Link href='https://www.youtube.com/'>
                  <Image
                    src='/footer/youtube.svg'
                    width={21}
                    height={26}
                    alt='Ютуб'
                  />
                </Link>
              </li>
              <li className={styles.socialListItem}>
                <Link href='https://web.telegram.org'>
                  <Image
                    src='/footer/telegram.svg'
                    width={16}
                    height={26}
                    alt='Телеграм'
                  />
                </Link>
              </li>
            </ul>
            <small className={styles.copy}>© ХОД, Future Academy</small>
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.listBox}>
              <h4 className={styles.listBoxTitle}>
                Детям
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href='#'>Робототехника</Link>
                </li>
                <li>
                  <Link href='#'>Создание игр</Link>
                </li>
                <li>
                  <Link href='#'>Программирование</Link>
                </li>
                <li>
                  <Link href='#'>Мультимедиа</Link>
                </li>
                <li>
                  <Link href='#'>Soft skills</Link>
                </li>
                <li>
                  <Link href='#'>Шахматы</Link>
                </li>
                <li>
                  <Link href='#'>Блогинг</Link>
                </li>
                <li>
                  <Link href='#'>Создание игр</Link>
                </li>
                <li>
                  <Link href='#'>Программирование</Link>
                </li>
                <li>
                  <Link href='#'>Мультимедиа</Link>
                </li>
                <li>
                  <Link href='#'>Soft skills</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listBox}>
              <h4 className={styles.listBoxTitle}>
                Подросткам
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href='#'>Web-разработка</Link>
                </li>
                <li>
                  <Link href='#'>Прикладное программирование</Link>
                </li>
                <li>
                  <Link href='#'>Графическое моделирование</Link>
                </li>
                <li>
                  <Link href='#'>Game Development</Link>
                </li>
                <li>
                  <Link href='#'>Soft skills</Link>
                </li>
                <li>
                  <Link href='#'>Разработчик мобильных приложений</Link>
                </li>
                <li>
                  <Link href='#'>Блогинг</Link>
                </li>
                <li>
                  <Link href='#'>Создание игр</Link>
                </li>
                <li>
                  <Link href='#'>Программирование</Link>
                </li>
                <li>
                  <Link href='#'>Мультимедиа</Link>
                </li>
                <li>
                  <Link href='#'>Soft skills</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listBox}>
              <h4 className={styles.listBoxTitle}>
                Взрослым
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href='#'>Разработчик игр на Unity</Link>
                </li>
                <li>
                  <Link href='#'>Разработка ПО</Link>
                </li>
                <li>
                  <Link href='#'>Графический дизайн</Link>
                </li>
                <li>
                  <Link href='#'>Тестировщик ПО</Link>
                </li>
                <li>
                  <Link href='#'>Интернет маркетинг</Link>
                </li>
                <li>
                  <Link href='#'>Java-разработчик</Link>
                </li>
                <li>
                  <Link href='#'>Python-разработчик</Link>
                </li>
                <li>
                  <Link href='#'>IOS-разработчик</Link>
                </li>
                <li>
                  <Link href='#'>Программирование</Link>
                </li>
              </ul>
            </div>
            <div className={styles.listBox}>
              <h4 className={styles.listBoxTitle}>
                Информация
              </h4>
              <ul className={styles.footerList}>
                <li>
                  <Link href='#'>Об академии</Link>
                </li>
                <li>
                  <Link href='#'>Мероприятия</Link>
                </li>
                <li>
                  <Link href='#'>Новости</Link>
                </li>
                <li>
                  <Link href='#'>База знаний</Link>
                </li>
                <li>
                  <Link href='#'>Карьера</Link>
                </li>
                <li>
                  <Link href='#'>Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}