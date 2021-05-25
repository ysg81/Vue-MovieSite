import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import Bootstarp from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App)
  .use(router)
  .use(Bootstarp)
  .mount('#app')
