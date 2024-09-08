import { ref, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)
  const toggleDarkMode = () => {
    const element = document.querySelector('html')
    if (isDarkMode.value) {
      element?.classList.add('arena-bricks-calculator-dark-mode')
    } else {
      element?.classList.remove('arena-bricks-calculator-dark-mode')
    }
  }
  watchEffect(toggleDarkMode)
  return { isDarkMode, toggleDarkMode }
})
