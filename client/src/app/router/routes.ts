import type { RouteRecordRaw } from "vue-router";

// components
import AuthPage from "@/pages/auth/AuthPage.vue";
import LandingPage from "@/pages/landing/LandingPage.vue";
import { DashboardPage } from "@/pages/dashboard";
import ProtectedLayout from "../layout/ProtectedLayout.vue";

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
    {
        path: "/",
        component: ProtectedLayout,
        children: [
            {
                path: "/dashboard",
                component: DashboardPage,
                meta: { requiresAuth: true },
            },
        ],
    },
];
