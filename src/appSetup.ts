import './assets/main.css'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import type { App } from 'vue'

export default (app: App) => {
  app.use(createPinia())
  app.use(router)
  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.arena-bricks-calculator-dark-mode',
      },
    },
  })
}
