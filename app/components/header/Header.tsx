'use client'

import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CustomSelect from '../customSelect/CustomSelect'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'

export default function Header() {
  const { isProgramsPage } = useHeaderContext()

  return (
    <header className={`${styles.header} ${isProgramsPage ? styles.headerDark : ''}`}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <Link href='/'>
            <Image 
              src={isProgramsPage ? '/header/logo-white.svg' : '/header/logo.svg'}
              width={100}
              height={70.65}
              alt='Логотип'
            />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Link 
                  href='/pages/programs-page'
                  className={`${styles.navListItemLilk} ${isProgramsPage ? styles.linkWhite : ''}`}
                >
                  <Image
                    src={isProgramsPage ? '/header/all-course-white.svg' : '/header/all-course.svg'}
                    width={20}
                    height={15.97}
                    alt='Блоки'
                  />
                  Все курсы
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='/pages/events-page'
                  className={`${styles.navListItemLilk} ${isProgramsPage ? styles.linkWhite : ''}`}
                >
                  Мероприятия
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={`${styles.navListItemLilk} ${isProgramsPage ? styles.linkWhite : ''}`}
                >
                  Базы знаний
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={`${styles.navListItemLilk} ${isProgramsPage ? styles.linkWhite : ''}`}
                >
                  Карьера
                </Link>
              </li>
            </ul>
          </nav>
          <CustomSelect />
          <Link
            href='tel:+88009503398'
            className={`${styles.phone} ${isProgramsPage ? styles.phoneWhite : ''}`}
          >
            8 800 950-33-98
          </Link>
          <Link 
            href='/pages/auth-page'
            className={`${styles.user} ${isProgramsPage ? styles.userWhite : ''}`}
          >
            <Image
              src={isProgramsPage ? '/header/user-white.svg' : '/header/user.svg'}
              width={17.28}
              height={18.32}
              alt='Пользователь'
            />
            Войти
          </Link>
        </div>
      </div>
    </header>
  )
}