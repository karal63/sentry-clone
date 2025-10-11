import { defineStore } from "pinia";
import { ref } from "vue";
import type { SidebarLink } from "./types";

export const useSidebarStore = defineStore("sidebar", () => {
    const isExpanded = ref(false);
    const selectedLink = ref<SidebarLink | null>(null);

    const setSidebar = (val: boolean) => {
        isExpanded.value = val;
    };

    const setSelectedLink = (link: SidebarLink) => {
        selectedLink.value = link;
    };

    return { isExpanded, setSidebar, selectedLink, setSelectedLink };
});
