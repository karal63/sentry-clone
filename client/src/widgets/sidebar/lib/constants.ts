import type { SidebarLink } from "../model/types";

export const SIDEBAR_LINKS: SidebarLink[] = [
    {
        id: 1,
        name: "Issues",
        icon: "codicon:issue-draft",
        to: "/issues",
        sublinks: [
            { name: "Feed", to: "/issues", type: "single" },
            {
                name: "Errors & Outages",
                to: "/issues/errors-outages",
                type: "list_el",
            },
            { name: "Warnings", to: "/issues/warnings", type: "list_el" },
        ],
    },

    {
        id: 2,
        name: "Projects",
        icon: "si:projects-alt-line",
        to: "/projects",
        sublinks: [{ name: "All", to: "/projects", type: "single" }],
    },
];
