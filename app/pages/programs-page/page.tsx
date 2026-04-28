'use client'

import { useEffect } from 'react'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'
import AllPrograms from '../../components/allPrograms/AllPrograms'

export default function Programs() {
  const { setIsProgramsPage } = useHeaderContext()

  useEffect(() => {
    setIsProgramsPage(true)
    return () => setIsProgramsPage(false)
  }, [setIsProgramsPage])

  return <AllPrograms />
}
