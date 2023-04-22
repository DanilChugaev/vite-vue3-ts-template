import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;

app
  .use(pinia)
  .use(Router)
  .mount('#app');
