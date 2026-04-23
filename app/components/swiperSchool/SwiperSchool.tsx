'use client'

import { Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/scrollbar'
import styles from './swiperSchool.module.css'

export default function SwiperSchool() {
  return (
    <Swiper modules={[ Scrollbar, A11y ]} spaceBetween={20} slidesPerView={6}>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider1.webp' width={299} height={210} alt='Слайдер 1' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider2.webp' width={313} height={210} alt='Слайдер 2' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider3.webp' width={316.16} height={210.07} alt='Слайдер 3' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider4.webp' width={372.88} height={210.07} alt='Слайдер 4' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider5.webp' width={315.11} height={210.07} alt='Слайдер 5' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider6.webp' width={314.06} height={210.07} alt='Слайдер 6' />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <Image className={styles.swiperImg} src='/chess/school/slider3.webp' width={316.6} height={210.07} alt='Слайдер 7'/>
      </SwiperSlide>
    </Swiper>
  )
}
