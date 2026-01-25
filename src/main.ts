import { createApp } from 'vue'
import './style.css'
import 'v-calendar/style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import { setupCalendar } from 'v-calendar';

const pinia = createPinia()
const app = createApp(App)
const head = createHead()

app.use(pinia)
app.use(router)
app.use(head)
app.use(setupCalendar, {})

app.mount('#app')


