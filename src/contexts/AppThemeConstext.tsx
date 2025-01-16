import { createContext, useState, useEffect, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles'
import { AppThemeContextProps } from '@/types'

export const AppThemeContext = createContext<AppThemeContextProps | undefined>(
  undefined
)

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const savedTheme = localStorage.getItem('theme')
  const [apptheme, setAppTheme] = useState(savedTheme ?? 'light')

  const toggledTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', apptheme)
  }, [apptheme])

  return (
    <AppThemeContext.Provider value={{ apptheme, toggledTheme }}>
      <ThemeProvider theme={apptheme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  )
}
