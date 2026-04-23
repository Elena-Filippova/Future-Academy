'use client'

import Link from 'next/link'
import Image from 'next/image'
import  useAuthForm  from '../../hooks/useAuthForm'
import styles from './authForm.module.css'

export default function AuthForm() {
  const { mode, setMode } = useAuthForm()
  return (
    <section className={styles.auth}>
      <div className={styles.authContainer}>
        <div className={styles.authWrapper}>
          <div className={styles.leftBlock}>
            <p className={styles.descr}>
              Войдите в систему или зарегистрируйтесь, если у вас ещё нет аккаунта
            </p>
            <Image
              className={styles.descrImage}
              src='/auth/owl.svg'
              width={168}
              height={188.05}
              alt='Сова'
            />
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.headers}>
              <h2 
                className={`${styles.title} ${mode === 'login' ? styles.active : ''}`}
                onClick={() => setMode('login')}
              >Вход</h2>
              <h2 
                className={`${styles.title} ${mode === 'register' ? styles.active : ''}`}
                onClick={() => setMode('register')}
              >Зарегистрироваться</h2>              
            </div>
            <form action='#' className={styles.form}>
              <input className={styles.formInput} type='text' placeholder='Поле ввода' />
              <input className={styles.formInput} type='password' placeholder='Поле ввода' />
              <input className={styles.formInput} type='email' placeholder='Поле ввода' />
              <span className={styles.formText}>Войти с помощью соцсетей:</span>
              <ul className={styles.social}>
                <li>
                  <Link href='#'>
                    <Image
                      src='/auth/vk.svg'
                      width={27}
                      height={29}
                      alt='Vkontakte'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/auth/instagram.svg'
                      width={21}
                      height={26}
                      alt='Instagram'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/auth/facebook.svg'
                      width={24}
                      height={26}
                      alt='Facebook'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/auth/youtube.svg'
                      width={27}
                      height={26}
                      alt='Youtube'
                    />
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <Image
                      src='/auth/telegram.svg'
                      width={21}
                      height={26}
                      alt='Telegram'
                    />
                  </Link>
                </li>
              </ul>
              <button className={styles.formBtn} type='submit'>
                {mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}