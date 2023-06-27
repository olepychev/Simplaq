import './assets/main.css';
/* I18n */
import { createI18n } from 'vue-i18n';
import english from './locales/en.json';
import slovak from './locales/sk.json';
/* Iconify Icon */
import Icon from './components/icon/IconComponent.vue';

import Notifications from '@kyvg/vue3-notification'




import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import Routes from './router/routes';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: english,
    sk: slovak,
  },
});


const pinia = createPinia();
const app = createApp(App);
// Define Routes.HOME as a global constant
app.config.globalProperties.$Routes = Routes;

app.use(i18n);
app.use(router);
app.use(pinia);
app.component('Icon', Icon);
app.use(Notifications)



app.mount('#app');
