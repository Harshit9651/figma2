import { createApp } from "vue"; // Only import createApp
import App from "./App.vue";
import { createPinia } from "pinia";
import './assets/scss/global.scss'; // Ensure this path is correct

// Create the app instance
const app = createApp(App);

// Use Pinia for state management
const pinia = createPinia();
app.use(pinia);

// Mount the app
app.mount("#app");
