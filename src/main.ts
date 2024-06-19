import '@/scss/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'
import AOS from 'aos'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import VueApexCharts from 'vue3-apexcharts'
import '@fortawesome/fontawesome-free/css/all.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueApexCharts)

app.mount('#app')

AOS.init()

let isVuetifyLoaded = false

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Dashboard' && !isVuetifyLoaded) {
    const vuetifyModule = await import('./plugins/vuetify')
    vuetify = vuetifyModule.default
    app.use(vuetify)
    isVuetifyLoaded = true
    next()
  } else {
    next()
  }
})
