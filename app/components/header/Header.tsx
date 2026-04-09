'use client'

import styles from './header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import CustomSelect from '../customSelect/CustomSelect'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerWrapper}>
          <Link href='/'>
            <Image 
              src='/header/logo.svg'
              width={100}
              height={70.65}
              alt='Логотип'
            />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={styles.navListItemLilk}
                >
                  <Image
                    src='/header/all-course.svg'
                    width={20}
                    height={15.97}
                    alt='Блоки'
                  />
                  Все курсы
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={styles.navListItemLilk}
                >
                  Мероприятия
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={styles.navListItemLilk}
                >
                  Базы знаний
                </Link>
              </li>
              <li className={styles.navListItem}>
                <Link 
                  href='#'
                  className={styles.navListItemLilk}
                >
                  Карьера
                </Link>
              </li>
            </ul>
          </nav>
          <CustomSelect />
          <Link
            href='tel:+88009503398'
            className={styles.phone}
          >
            8 800 950-33-98
          </Link>
          <Link 
            href='#'
            className={styles.user}
          >
            <Image
              src='/header/user.svg'
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