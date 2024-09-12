import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(localStorage.getItem('isDarkMode') === 'true')
  const toggleDarkMode = () => {
    const element = document.querySelector('html')
    if (isDarkMode.value) {
      element?.classList.add('arena-bricks-calculator-dark-mode')
    } else {
      element?.classList.remove('arena-bricks-calculator-dark-mode')
    }
    localStorage.setItem('isDarkMode', String(isDarkMode.value))
  }
  watchEffect(toggleDarkMode)
  return { isDarkMode, toggleDarkMode }
})
