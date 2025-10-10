import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import appRouter from "./router";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

app.use(appRouter);
app.use(pinia);

app.mount("#app");
