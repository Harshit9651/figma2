import { createApp } from "vue"; // Only import createApp
import App from "./App.vue";
import { createPinia } from "pinia";
import './assets/scss/global.scss';
import router from './route'
// Create the app instance
const app = createApp(App);

// Use Pinia for state management
const pinia = createPinia();
app.use(pinia);
app.use(router)

// Mount the app
app.mount("#app");
