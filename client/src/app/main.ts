import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import appRouter from "./router";

const app = createApp(App);

app.use(appRouter);

app.mount("#app");
