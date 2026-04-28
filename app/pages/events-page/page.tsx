'use client'

import Events from '@/app/components/events-page/Events'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'
import { useEffect } from 'react'

export default function EventsPage() {
  const { setIsProgramsPage } = useHeaderContext()

  useEffect(() => {
    setIsProgramsPage(true)
    return () => setIsProgramsPage(false)
  }, [setIsProgramsPage])

  return (
    <Events />
  )
}