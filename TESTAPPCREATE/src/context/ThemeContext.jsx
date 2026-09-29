import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false)

  function toggleTheme() {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode)
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
