<script setup lang="ts">
import { useProjectStore } from "@/entities/project";

const projectsStore = useProjectStore();
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <div
            v-for="project in projectsStore.projects"
            class="border border-gray-300 rounded-md py-3"
        >
            <!-- header -->
            <div class="px-3">
                <h2 class="text-blue-700 font-semibold text-lg">
                    {{ project.name }}
                </h2>
            </div>
        </div>
    </div>
</template>
