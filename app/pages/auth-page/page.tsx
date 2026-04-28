'use client'

import AuthForm from '@/app/components/authForm/AuthForm'
import { useHeaderContext } from '@/app/hooks/useHeaderContext'
import { useEffect } from 'react'

export default function AuthPage() {
  const { setIsProgramsPage } = useHeaderContext()

  useEffect(() => {
    setIsProgramsPage(true)
    return () => setIsProgramsPage(false)
  }, [setIsProgramsPage])

  return (
    <AuthForm />
  )
}