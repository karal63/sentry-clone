import type { RouteRecordRaw } from "vue-router";

// components
import AuthPage from "@/pages/auth/AuthPage.vue";
import LandingPage from "@/pages/landing/LandingPage.vue";
import { DashboardPage } from "@/pages/dashboard";
import { IssuesPage } from "@/pages/issues";
import ProtectedLayout from "../layout/ProtectedLayout.vue";
import { ProjectsPage, ProjectConfigPage } from "@/pages/projects";

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
                component: () =>
                    import("@/pages/projects/CreateProjectPage.vue"),
            },
            {
                path: "/projects/:name/getting-started",
                component: ProjectConfigPage,
            },
        ],
    },
];

// try to lazy-load other pages, like config
