import { createRouter, createWebHistory, type Router } from "vue-router";
import { routes } from "./routes";

const appRouter: Router = createRouter({
    history: createWebHistory(),
    routes,
});

export default appRouter;
