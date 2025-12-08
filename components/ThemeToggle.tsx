'use client'

import { useEffect, useState } from 'react'

const themes = [
  { id: 'light-elegant', label: 'Light Elegante', icon: '☀️' },
  { id: 'dark-premium', label: 'Dark Premium', icon: '🌙' },
]

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('light-elegant')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light-elegant'
    setCurrentTheme(saved)
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light-elegant' ? 'dark-premium' : 'light-elegant'
    setCurrentTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const current = themes.find(t => t.id === currentTheme)

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-sm gap-2"
      title={`Cambiar a ${currentTheme === 'light-elegant' ? 'Dark Premium' : 'Light Elegante'}`}
    >
      <span className="text-lg">{current?.icon}</span>
      <span className="hidden sm:inline text-xs opacity-70">{current?.label}</span>
    </button>
  )
}
