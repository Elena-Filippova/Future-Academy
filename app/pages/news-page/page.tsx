'use client'

import News from '@/app/components/newsPage/News'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'
import { useEffect } from 'react'

export default function NewsPage() {
  const { setIsProgramsPage } = useHeaderContext()

  useEffect(() => {
    setIsProgramsPage(true)
    return () => setIsProgramsPage(false)
  }, [setIsProgramsPage])

  return (
    <News />
  )
}