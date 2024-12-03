import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import quasar from './plugin/quasar';

const app = createApp(App);

quasar(app); 

app.mount('#app');

