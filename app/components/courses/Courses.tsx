'use client'

import Image from 'next/image'
import styles from './courses.module.css'
import CoursesButton from '../coursesButton/CoursesButton'
import CustomVideo from '../customVideo/CustomVideo'
import CoursesList from '../coursesList/CoursesList'

export default function Courses() {
  const buttons = [
    'Робототехника', 
    'Создание игр', 
    'Web-разработка', 
    'Мультимедиа', 
    'Шахматы', 
    '3D-моделирование и дизайн', 
    'Английский язык', 
    'Блогинг', 
    'Soft skills'
  ]

  return (
    <section className={styles.courses}>
      <div className={styles.coursesContainer}>
        <div className={styles.coursesWrapper}>
          <div className={styles.firstBlock}>
            <div className={styles.imageBlock}>
              <div className={styles.imageBlockDescr}>
                <p className={`${styles.text} ${styles.textBold}`}>
                  Кем вы хотите стать?
                </p>
                <p className={styles.text}>
                  Пора найти себя и выбрать подходящий курс :)
                </p>
                <p className={styles.text}>Удачи!</p>
              </div>
              <Image
                src='/courses/owl.svg'
                width={168}
                height={188.05}
                alt='Сова'
                className={styles.imageBlockIcon}
              />
            </div>
            <div className={styles.buttonsBlock}>
              <CoursesList />
              <div className={styles.buttonsBlockBottom}>
                {buttons.map((text, index) => {
                  const link = text === 'Шахматы' ? '/pages/chess-page' : '#'
                  return (
                    <CoursesButton key={index} href={link}>
                      {text}
                    </CoursesButton>
                  )
                })}
              </div>
            </div>
          </div>
          <div className={styles.secondBlock}>
            <CustomVideo />
          </div>
          <div className={styles.thirdBlock}>
            <p className={styles.thirdBlockDescr}>
              Актуальные знания для от признанных экспертов рынка для новичков и
              практикующих специалистов.
            </p>
            <ul className={styles.thirdBlockList}>
              <li className={styles.blockListItem}>
                <span className={styles.numberText}>600</span>
                <span className={styles.descrText}>Курсов</span>
              </li>
              <li className={styles.blockListItem}>
                <span className={styles.numberText}>82</span>
                <span className={styles.descrText}>Ведущих преподавателей</span>
              </li>
              <li className={styles.blockListItem}>
                <span className={styles.numberText}>14 795</span>
                <span className={styles.descrText}>Выпускников</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}