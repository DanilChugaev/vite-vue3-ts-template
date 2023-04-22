import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Router from './router';
import VFocus from './directives/v-focus';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$basePath = import.meta.env.VITE_BASE_PATH;

app.directive(VFocus.name, VFocus);

app
  .use(pinia)
  .use(Router)
  .mount('#app');
