import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // BUG 10: Broken dark mode toggle - toggles state but applies class to wrong element
  // and the useEffect dependency is missing so it only runs once
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []); // BUG: empty dependency array - only runs on mount, never on toggle

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // Also tries to toggle a class on a non-existent element
    const root = document.getElementById('root-theme');
    if (root) {
      root.classList.toggle('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
