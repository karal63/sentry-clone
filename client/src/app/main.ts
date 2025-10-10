import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import appRouter from "./router";
import { createPinia } from "pinia";
import { useAuthStore } from "@/entities/user";

const pinia = createPinia();
const app = createApp(App);

app.use(appRouter);
app.use(pinia);

appRouter.beforeEach((to) => {
    const authStore = useAuthStore(pinia);
    if (to.meta.requiresAuth && !authStore.isAuthenticated) return "/login";
});

app.mount("#app");
