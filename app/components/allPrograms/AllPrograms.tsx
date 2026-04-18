'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CoursesButton from '../coursesButton/CoursesButton'
import CoursesList from '../coursesList/CoursesList'
import ProgramsCard from '../programsCard/ProgramsCard'
import programsArray from '../../constants/programs'
import styles from './allPrograms.module.css'

const buttons = [
  'Робототехника',
  'Создание игр',
  'Web-разработка',
  'Мультимедиа',
  'Шахматы',
  '3D-моделирование и дизайн',
  'Английский язык',
  'Блогинг',
  'Soft skills',
]

const colors = [
  '#c7eeff',
  '#ffce94',
  'var(--light-yellow)',
  '#ddf',
  'var(--light-green)',
  '#c7eeff',
  'var(--light-blue)',
  '#ffe9a8',
  'var(--light-pink)',
  '#ddf',
]

export default function AllPrograms() {
  const [checkedLevels, setcheckedLevels] = useState({
    newbie: false,
    user: false,
    professional: false,
    cheater: false,
  })

  const [checkedTypes, setcheckedTypes] = useState({
    any: false,
    profession: false,
    course: false,
  })

  const [maxDuration, setMaxDuration] = useState(24);

  const handleChangeLevels = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target

    setcheckedLevels({
      newbie: id === 'newbie',
      user: id === 'user',
      professional: id === 'professional',
      cheater: id === 'cheater',
    })
  }

  const handleChangeTypes = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = event.target

    setcheckedTypes({
      any: id === 'any',
      profession: id === 'profession',
      course: id === 'course',
    })
  }

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxDuration(parseInt(event.target.value))
  }

  return (
    <section className={styles.programs}>
      <div className={styles.programsContainer}>
        <div className={styles.programsWrapper}>
          <h1 className={styles.programsTitle}>Все программы обучения</h1>
          <div className={styles.coursesListWrapper}>
            <CoursesList />
          </div>
          <div className={styles.programsBlock}>
            <div className={styles.programsBlockLeft}>
              <div className={styles.filter}>
                <h2 className={`${styles.blockTitle} ${styles.filterTitle}`}>
                  Уровень сложности
                </h2>
                <div className={styles.filterCheckbox}>
                  <label
                    htmlFor='newbie'
                    className={`${styles.filterLabel} ${checkedLevels.newbie ? styles.checked : ''}`}
                  >
                    {checkedLevels.newbie ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='newbie'
                      type='checkbox'
                      checked={checkedLevels.newbie}
                      onChange={handleChangeLevels}
                      className={styles.checkboxInput}
                    />
                    <span>Новичок</span>
                  </label>
                  <label
                    htmlFor='user'
                    className={`${styles.filterLabel} ${checkedLevels.user ? styles.checked : ''}`}
                  >
                    {checkedLevels.user ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='user'
                      type='checkbox'
                      checked={checkedLevels.user}
                      onChange={handleChangeLevels}
                      className={styles.checkboxInput}
                    />
                    <span>Пользователь</span>
                  </label>
                  <label
                    htmlFor='professional'
                    className={`${styles.filterLabel} ${checkedLevels.professional ? styles.checked : ''}`}
                  >
                    {checkedLevels.professional ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='professional'
                      type='checkbox'
                      checked={checkedLevels.professional}
                      onChange={handleChangeLevels}
                      className={styles.checkboxInput}
                    />
                    <span>Профессионал</span>
                  </label>
                  <label
                    htmlFor='cheater'
                    className={`${styles.filterLabel} ${checkedLevels.cheater ? styles.checked : ''}`}
                  >
                    {checkedLevels.cheater ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='cheater'
                      type='checkbox'
                      checked={checkedLevels.cheater}
                      onChange={handleChangeLevels}
                      className={styles.checkboxInput}
                    />
                    <span>Читер</span>
                  </label>
                </div>
              </div>
              <div className={styles.filter}>
                <h2 className={`${styles.blockTitle} ${styles.filterTitle}`}>
                  Тип обучения
                </h2>
                <div className={styles.filterCheckbox}>
                  <label
                    htmlFor='any'
                    className={`${styles.filterLabel} ${checkedTypes.any ? styles.checked : ''}`}
                  >
                    {checkedTypes.any ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='any'
                      type='checkbox'
                      checked={checkedTypes.any}
                      onChange={handleChangeTypes}
                      className={styles.checkboxInput}
                    />
                    <span>Любой</span>
                  </label>
                  <label
                    htmlFor='profession'
                    className={`${styles.filterLabel} ${checkedTypes.profession ? styles.checked : ''}`}
                  >
                    {checkedTypes.profession ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='profession'
                      type='checkbox'
                      checked={checkedTypes.profession}
                      onChange={handleChangeTypes}
                      className={styles.checkboxInput}
                    />
                    <span>Профессия</span>
                  </label>
                  <label
                    htmlFor='course'
                    className={`${styles.filterLabel} ${checkedTypes.course ? styles.checked : ''}`}
                  >
                    {checkedTypes.course ? (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          fill='white'
                          stroke='url(#paint0_linear_64_7673)'
                          strokeWidth='2'
                        />
                        <circle
                          cx='10'
                          cy='10'
                          r='5'
                          fill='url(#paint1_linear_64_7673)'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_64_7673'
                            x1='0'
                            y1='10'
                            x2='20'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                          <linearGradient
                            id='paint1_linear_64_7673'
                            x1='5'
                            y1='10'
                            x2='15'
                            y2='10'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopColor='#F7941D' />
                            <stop offset='1' stopColor='#27AAE1' />
                          </linearGradient>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='10'
                          cy='10'
                          r='9'
                          stroke='#333333'
                          strokeWidth='2'
                        />
                      </svg>
                    )}
                    <input
                      id='course'
                      type='checkbox'
                      checked={checkedTypes.course}
                      onChange={handleChangeTypes}
                    />
                    <span>Курс</span>
                  </label>
                </div>
              </div>
              <div className={`${styles.filter} ${styles.filterRange}`}>
                <h2 className={`${styles.blockTitle} ${styles.filterTitle}`}>
                  Длительность
                </h2>
                <span className={styles.filterSubtitle}>
                  от 1 до {maxDuration} месяцев
                </span>
                <input
                  type='range'
                  min='1'
                  max='24'
                  value={maxDuration}
                  onChange={handleSliderChange}
                  className={styles.durationSlider}
                />
                <Image
                  className={styles.inputIcon}
                  src='/all-programs/circle-gradient.svg'
                  width={20}
                  height={20}
                  alt='Круг'
                />
              </div>
            </div>
            <div className={styles.programsBlockRight}>
              <h2 className={styles.blockTitle}>Направление</h2>
              <div className={styles.blockButtons}>
                {buttons.map((text, index) => {
                  const link = text === 'Шахматы' ? '/pages/chess-page' : '#'
                  return <CoursesButton key={index} href={link}>{text}</CoursesButton>
                })}
              </div>
              <ul className={styles.cardList}>
                {programsArray.map((card, index) => (
                  <li
                    className={styles.cardListItem}
                    key={card.id}
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
                    <Link href='#'>
                      <ProgramsCard card={card} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
