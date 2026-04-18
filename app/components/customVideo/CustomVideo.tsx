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
      <Image
        className={styles.triangleIcon}
        src='/courses/video/triangle.svg'
        width={164.65}
        height={136.77}
        alt='Треугольник'
      />
      <Image
        className={styles.line1Icon}
        src='/courses/video/line-1.svg'
        width={280}
        height={130}
        alt='Линия'
      />
      <Image
        className={styles.line2Icon}
        src='/courses/video/line-2.svg'
        width={350}
        height={350}
        alt='Линия'
      />
      <Image
        className={styles.crossIcon}
        src='/courses/video/cross.svg'
        width={230}
        height={229.74}
        alt='Крестик'
      />
    </div>
  )
}