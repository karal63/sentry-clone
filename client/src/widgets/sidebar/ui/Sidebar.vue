<script setup lang="ts">
import SidebarSmall from "./SidebarSmall.vue";
import SidebarExpanded from "./SidebarExpanded.vue";
import { useSidebarStore } from "../model/useSidebar";

const sidebar = useSidebarStore();
</script>

<template>
    <div
        @mouseleave="sidebar.setSidebar(false)"
        class="absolute left-0 top-0 h-full flex"
    >
        <SidebarSmall />
        <SidebarExpanded />
    </div>
</template>
