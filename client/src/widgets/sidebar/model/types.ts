export type SidebarLink = {
    id: number;
    name: string;
    icon: string;
    to: string;
    sublinks: { name: string; to: string; type: "single" | "list_el" }[];
};
