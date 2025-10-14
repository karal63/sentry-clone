import type { RouteRecordRaw } from "vue-router";

// components
import AuthPage from "@/pages/auth/AuthPage.vue";
import LandingPage from "@/pages/landing/LandingPage.vue";
import { DashboardPage } from "@/pages/dashboard";
import { IssuesPage } from "@/pages/issues";
import ProtectedLayout from "../layout/ProtectedLayout.vue";
import { CreateProjectPage, ProjectsPage } from "@/pages/projects";

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
            {
                path: "/issues",
                component: IssuesPage,
                meta: { requiresAuth: true },
            },
            {
                path: "/projects",
                component: ProjectsPage,
                meta: { requiresAuth: true },
            },
            {
                path: "/projects/new",
                component: CreateProjectPage,
                meta: { requiresAuth: true },
            },
        ],
    },
];
