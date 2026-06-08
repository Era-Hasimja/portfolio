import { useCallback, useEffect, useState } from 'react'

/**
 * Light/dark theme hook.
 * - Reads the initial value from the <html class="dark"> set by the inline
 *   script in index.html (which already accounts for localStorage + OS setting).
 * - Persists the user's explicit choice to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ignore write failures (e.g. private mode) */
    }
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return { theme, toggleTheme }
}
