import { useState, useEffect, useCallback } from 'react'

const MODE_KEY = 'data-mode'
const MODE_DARK = 'dark'
const MODE_LIGHT = 'light'
const PREFER_DARK_SCHEME = '(prefers-color-scheme: dark)'

export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(() => {
    const isDarkScheme = window.matchMedia(PREFER_DARK_SCHEME).matches
    const colorMode = JSON.parse(window.localStorage.getItem(MODE_KEY))
    return colorMode === MODE_DARK ?? isDarkScheme
  })

  const toggleMode = useCallback(() => {
    setDarkMode(mode => !mode)
  }, [])

  useEffect(() => {
    const onChange = e => {
      setDarkMode(e.matches)
    }
    // Add listener to update styles
    window.matchMedia(PREFER_DARK_SCHEME).addEventListener('change', onChange)

    // Remove listener
    return () => {
      window.matchMedia(PREFER_DARK_SCHEME).removeEventListener('change', onChange)
    }
  }, [])

  useEffect(() => {
    const colorMode = darkMode ? MODE_DARK : MODE_LIGHT
    document.documentElement.setAttribute(MODE_KEY, colorMode)
    window.localStorage.setItem(MODE_KEY, JSON.stringify(colorMode))
  }, [darkMode])

  return (
    <div>
      <button type="button" onClick={toggleMode}>
        Toggle
      </button>
      <div>{darkMode ? 'DARK' : 'LIGHT'}</div>
    </div>
  )
}
