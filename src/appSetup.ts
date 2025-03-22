import './assets/main.css'
import 'primeicons/primeicons.css'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import router from './router'
import type { App } from 'vue'
import ConfirmationService from 'primevue/confirmationservice'

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
  }),
    app.use(ConfirmationService)
}
