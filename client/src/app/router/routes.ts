import type { RouteRecordRaw } from "vue-router";

// components
import AuthPage from "@/pages/auth/AuthPage.vue";
import LandingPage from "@/pages/landing/LandingPage.vue";
import { DashboardPage } from "@/pages/dashboard";
import { IssuesPage } from "@/pages/issues";
import ProtectedLayout from "../layout/ProtectedLayout.vue";
import { CreateProjectPage, ProjectsPage } from "@/pages/projects";
import ProjectConfigPage from "@/pages/projects/ProjectConfigPage.vue";

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
        meta: { requiresAuth: true },

        children: [
            {
                path: "/dashboard",
                component: DashboardPage,
            },
            {
                path: "/issues",
                component: IssuesPage,
            },
            {
                path: "/projects",
                component: ProjectsPage,
            },
            {
                path: "/projects/new",
                component: CreateProjectPage,
            },
            {
                path: "/projects/:name/getting-started",
                component: ProjectConfigPage,
            },
        ],
    },
];
