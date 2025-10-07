import type { RouteRecordRaw } from "vue-router";

// components
import AuthPage from "@/pages/auth/AuthPage.vue";
import LandingPage from "@/pages/landing/LandingPage.vue";

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: LandingPage,
    },
    {
        path: "/login",
        component: AuthPage,
        props: {
            type: "login",
        },
    },
    {
        path: "/signup",
        component: AuthPage,
        props: {
            type: "signup",
        },
    },
];
