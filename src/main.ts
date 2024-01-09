import './assets/main.css'
import 'animate.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import TheHeader from './components/layouts/TheHeader.vue';

const app = createApp(App)

app.component('TheHeader', TheHeader)

app.use(router)
app.mount('#app')
