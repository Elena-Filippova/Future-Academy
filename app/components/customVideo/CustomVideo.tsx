'use client'

import { useRef } from 'react'
import Image from 'next/image'
import styles from './customVideo.module.css'

export default function CustomVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClickPlay = () => {
    const video = videoRef.current

    if (video) { 
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  }
  
  return (
    <div className={styles.videoWrapper}>
      <video 
        className={styles.video}
        ref={videoRef} 
        width={780} 
        height={436} 
        preload='none'
      >
        <source src='/courses/video.webp' type='video/mp4' />
      </video>      
      <button className={styles.videoBtn} onClick={handleClickPlay}>
          <Image
            src='/courses/play.svg'
            width={98.25}
            height={98.25}
            alt='Play'
          />
      </button>
    </div>
  )
}