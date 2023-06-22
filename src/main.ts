import './assets/main.css';
/* I18n */
import { createI18n } from 'vue-i18n';
import english from './locales/en.json';
import slovak from './locales/sk.json';
/* Iconify Icon */
import { Icon } from '@iconify/vue';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: english,
    sk: slovak,
  },
});

const pinia = createPinia();
const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(pinia);

app.component('Icon', Icon);

app.mount('#app');
