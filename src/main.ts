import App from './App.vue'
import { createApp } from 'vue'
import appSetup from './appSetup'
const app = createApp(App)
appSetup(app)
app.mount('#arena_bricks_calculator_app')
