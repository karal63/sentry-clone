<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useSidebarStore } from "../model/useSidebar";
import { RouterLink } from "vue-router";

const sidebar = useSidebarStore();
</script>

<template>
    <div
        class="bg-mainBg absolute h-full z-0 transform border-r border-gray-300 shadow-lg px-3 py-5 transition-all w-[200px]"
        :class="sidebar.isExpanded ? 'left-full' : '-left-[200%]'"
    >
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-bold">{{ sidebar.selectedLink?.name }}</h3>

            <button
                class="cursor-pointer w-8 h-8 text-3xl rounded-md hover:bg-gray-200 transition flex-center"
                @click="sidebar.setSidebar(false)"
            >
                <Icon icon="weui:arrow-outlined" class="transform rotate-180" />
            </button>
        </div>

        <ul class="flex flex-col gap-2">
            <li v-for="sublink in sidebar.selectedLink?.sublinks">
                <RouterLink :to="sublink.to">
                    <div
                        v-if="sublink.type === 'single'"
                        class="py-2 border-y border-gray-200"
                    >
                        <p
                            class="hover:bg-gray-200 rounded-md px-3 cursor-pointer transition py-1"
                        >
                            {{ sublink.name }}
                        </p>
                    </div>

                    <p
                        v-else-if="sublink.type === 'list_el'"
                        class="hover:bg-gray-200 rounded-md px-3 cursor-pointer transition py-1"
                    >
                        {{ sublink.name }}
                    </p>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
