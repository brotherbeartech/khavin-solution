import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import vuetify from '@/plugins/vuetify';

const app = createApp(App)

app.use(createPinia())
    .use(vuetify)
    .use(router)

app.mount('#app')
