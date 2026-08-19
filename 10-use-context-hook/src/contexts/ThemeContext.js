import { createContext, useState } from 'react'

// The default value is used ONLY when a component calls useContext without a
// provider above it in the tree. It is not the "initial value" of the provider.
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => { }
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')
  }

  // From React 19 on, the context itself works as the provider.
  // On React 18 and earlier you must write <ThemeContext.Provider value={value}>.
  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext>
  )
}
