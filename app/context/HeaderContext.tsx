'use client'

import { createContext, useState, ReactNode } from 'react'

interface HeaderContextType {
  isProgramsPage: boolean
  setIsProgramsPage: (value: boolean) => void
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isProgramsPage, setIsProgramsPage] = useState(false)

  return (
    <HeaderContext.Provider value={{ isProgramsPage, setIsProgramsPage }}>
      {children}
    </HeaderContext.Provider>
  )
}