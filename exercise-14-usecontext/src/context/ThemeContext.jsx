import { createContext, useContext, useState } from 'react'

export const themes = {
  light: {
    name: 'light',
    foreground: '#1e293b',
    background: '#f8fafc',
    buttonBg: '#0ea5e9',
    buttonText: '#ffffff',
    border: '#cbd5e1',
  },
  dark: {
    name: 'dark',
    foreground: '#f1f5f9',
    background: '#0f172a',
    buttonBg: '#38bdf8',
    buttonText: '#0f172a',
    border: '#334155',
  },
}

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === 'light' ? themes.dark : themes.light))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}

export default ThemeContext
