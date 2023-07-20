import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head'
import english from '@/locales/en.json';
import slovak from '@/locales/sk.json';
import Notifications from '@kyvg/vue3-notification';
import Icon from './components/icon/IconComponent.vue';
import App from './App.vue';
import router from './router';
// Enums for routes
import Routes from './router/routes';
// Dashboard Routes Enums
import Dashboard_ENUMS from './router/dashboardEnums';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: english,
    sk: slovak,
  },
});

const pinia = createPinia();
const app = createApp(App);
const head = createHead()

// Use createHead as a plugin

app.config.globalProperties.$Routes = Routes;
app.config.globalProperties.$Dashboard_ENUMS = Dashboard_ENUMS;
app.use(i18n);
app.use(router);
app.use(pinia);
app.component('Icon', Icon);
app.use(head);
app.use(Notifications);

app.mount('#app');
