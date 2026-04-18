'use client'

import { Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import ReviewsCard from '../reviewsCard/ReviewsCard'
import reviewsArray from '../../constants/reviews'
import './swiperReviews.module.css'

export default function SwiperReviews() {
  return (
    <Swiper
      modules={[Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={6}  
    >
      {reviewsArray.map((review) => (
        <SwiperSlide key={review.id}>
          <ReviewsCard card={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
