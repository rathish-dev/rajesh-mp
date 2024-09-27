// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Import the router

import 'bootstrap/dist/css/bootstrap.min.css';  // Optionally import Bootstrap

createApp(App)
  .use(router)  // Tell Vue to use the router
  .mount('#app');
