import './assets/main.css'

import { createApp, defineAsyncComponent, ref,  } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


const sms = ref<string>('Hello world!')

app.provide('sms1', sms);
app.directive('highlight', {
        mounted: (el: any) => {
            el.classList.add('is-highlight');
        }
    
})





// app.component('AsynComp',  defineAsyncComponent(() => (
//     import('./components/AsyncCom.vue')
// )));