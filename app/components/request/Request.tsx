import Image from 'next/image'
import styles from './request.module.css'

export default function Request() {
  return (
    <section className={styles.request}>
      <div className={styles.requestContainer}>
        <div className={styles.requestWrapper}>
          <Image
          className={styles.requestImage}
            src='/request/owl.svg'
            width={276.38}
            height={311.52}
            alt='Сова'
          />
          <div className={styles.requestDescr}>
            <h3 className={styles.title}>Помочь с выбором?</h3>
            <p className={styles.description}>
              Оставьте заявку и наши специалисты свяжутся с вами, ответят на все
              вопросы и подберут подходящий вариант обучения.
            </p>
          </div>
          <form action='#' className={styles.requestForm}>
            <input className={`${styles.requestFormInput} ${styles.inputName}`} type='text' placeholder='Ваше имя' />
            <input className={`${styles.requestFormInput} ${styles.inputPhone}`} type='tel' placeholder='Ваш телефон' />
            <input className={`${styles.requestFormInput} ${styles.inputEmail}`} type='email' placeholder='Ваш e-mail' />
            <p className={styles.requestFormText}>Нажимая на кнопку, я соглашаюсь на обработку персональных данных и с правилами пользования Платформой</p>
            <button className={styles.requestFormBtn}>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  )
}