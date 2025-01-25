import './assets/main.css'
import MycomponentA from './MycomponentA.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

app.component('MycomponentA', MycomponentA);
