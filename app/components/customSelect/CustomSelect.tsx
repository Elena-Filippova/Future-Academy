'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './customSelect.module.css'

const options = ['Дзержинск', 'Нижний Новгород', 'On-line']

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(options[0])
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const svgColor = (option: string) => {
    if (hoveredOption === option || selected === option) {
      return 'var(--dark-blue)'
    }

    return 'var(--light-black)'
  }

  return (
    <div className={styles.selectBlock}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.select}>
        <Image 
          src='/location.svg' 
          width={17} 
          height={20} 
          alt='Локация'
        />
        <span className={styles.selectedText}>{selected}</span>
        <div className={styles.selectArrow}>
          {isOpen ? (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1L5 5L9 1'
                stroke='var(--dark-blue)'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          ) : (
            <svg
              width='10'
              height='7'
              viewBox='0 0 10 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 5.41406L5 1.41406L9 5.41406'
                stroke='var(--dark-blue)'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          )}
        </div>
      </button>

      {isOpen && (
        <ul className={styles.selectList}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option)
                setIsOpen(false)
              }}
              onMouseEnter={() => setHoveredOption(option)}
              onMouseLeave={() => setHoveredOption(null)}
              className={styles.selectListItem}
            >
              <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='10' cy='10' r='9' stroke={svgColor(option)} strokeWidth='2' />
                {(hoveredOption === option || selected === option) && (
                  <circle 
                    cx='10' 
                    cy='10' 
                    r='5' 
                    fill='var(--dark-blue)' />
                )}
              </svg>
              <span style={{color: hoveredOption === option || selected === option ? 'var(--dark-blue)' : 'var(--light-black)'}}>
                {option}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
