import './assets/main.css'
import 'animate.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import TheHeader from './components/layouts/TheHeader.vue';

const store = createPinia()
const app = createApp(App)

app.component('TheHeader', TheHeader)

app.use(router)
app.use(store)

app.mount('#app')
