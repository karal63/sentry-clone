import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import appRouter from "./router";
import { createPinia } from "pinia";
import { useAuthStore } from "@/entities/user";

const bootstrap = async () => {
    const pinia = createPinia();
    const app = createApp(App);
    const authStore = useAuthStore(pinia);

    app.use(appRouter);
    app.use(pinia);

    if (localStorage.getItem("accessToken")) {
        await authStore.checkAuth();
    }

    appRouter.beforeEach((to) => {
        if (to.meta.requiresAuth && !authStore.isAuthenticated) return "/login";
    });

    app.mount("#app");
};

bootstrap();
