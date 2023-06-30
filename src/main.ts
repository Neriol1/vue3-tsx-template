import { createApp } from 'vue'
import { App } from './App'
import router from '~/router/router'
import { createPinia } from 'pinia'
import 'virtual:svg-icons-register'

import 'ant-design-vue/dist/antd.css';
import './style.css'



const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
