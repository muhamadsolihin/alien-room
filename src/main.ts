import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "bootstrap/dist/css/bootstrap.css";
// import "./assets/scss/main.scss"

import { initVeeValidate } from '@/core/plugins/vee-validate';

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)

initVeeValidate();

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";
