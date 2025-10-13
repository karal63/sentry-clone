<script setup lang="ts">
import { SIDEBAR_LINKS } from "../lib/constants";
import { useSidebarStore } from "../model/useSidebar";
import Link from "./Link.vue";

const sidebar = useSidebarStore();
</script>

<template>
    <div
        @mouseover="sidebar.setSidebar(true)"
        class="bg-mainBg realative z-10 border-r border-gray-300 px-1"
    >
        <ul class="flex flex-col gap-1 mt-40">
            <Link v-for="link in SIDEBAR_LINKS" :link="link" :key="link.id" />
        </ul>
    </div>
</template>
