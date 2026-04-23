'use client'

import { useState } from 'react'
import Image from 'next/image'
import closeIconSrc from '../../../public/chess/answers/close.svg'
import openIconSrc from '../../../public/chess/answers/open.svg'
import styles from './accordion.module.css'

interface AccordionItem {
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isActive = activeIndex === index

        return (
          <div
            key={index}
            className={`${styles.accordionItem} ${isActive ? styles.active : ''}`}
          >
            <div
              className={`${styles.accordionTitle} ${isActive ? styles.accordionTitleActive : ''}`}
              onClick={() => toggleItem(index)}
            >
              {item.title}
              <span className={styles.accordionImg}>
                <Image
                  src={isActive ? closeIconSrc : openIconSrc}
                  alt='Кнопка'
                />
              </span>
            </div>
            {isActive && (
              <div className={styles.accordionContent}>{item.content}</div>
            )}
          </div>
        )
      })}
    </div>
  )
}
