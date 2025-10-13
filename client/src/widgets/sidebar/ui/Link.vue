<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { SidebarLink } from "../model/types";
import { useSidebarStore } from "../model/useSidebar";
import { ref } from "vue";
import { useRoute } from "vue-router";

const sidebar = useSidebarStore();
const route = useRoute();

const props = defineProps<{
    link: SidebarLink;
}>();

const isHovering = ref(false);

const hoverLink = () => {
    sidebar.setSelectedLink(props.link);
    isHovering.value = true;
};
</script>

<template>
    <li @mouseover="hoverLink" @mouseleave="isHovering = false">
        <RouterLink :to="link.to">
            <div
                class="flex flex-col items-center p-1 rounded-md transition-all"
            >
                <div
                    class="w-12 h-11 rounded-md flex-center border"
                    :class="
                        route.path.startsWith(link.to)
                            ? 'text-red-500 bg-red-100 border-red-200'
                            : 'border-transparent'
                    "
                >
                    <Icon :icon="link.icon" class="text-3xl" />
                </div>
                <p
                    class="text-[.7rem] font-semibold"
                    :class="
                        route.path.startsWith(link.to) ? 'text-red-500' : ''
                    "
                >
                    {{ link.name }}
                </p>
            </div>
        </RouterLink>
    </li>
</template>
