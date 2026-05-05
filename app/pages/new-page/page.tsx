'use client'

import New from '@/app/components/newPage/New'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'
import { useEffect } from 'react'

export default function NewPage() {
  const { setIsProgramsPage } = useHeaderContext()

  useEffect(() => {
    setIsProgramsPage(true)
    return () => setIsProgramsPage(false)
  }, [setIsProgramsPage])

  return (
    <New />
  )
}