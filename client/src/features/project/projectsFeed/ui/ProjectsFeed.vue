<script setup lang="ts">
import { useProjectStore } from "@/entities/project";

const projectsStore = useProjectStore();
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <div v-for="project in projectsStore.projects">
            <div class="border border-gray-300 rounded-md">
                {{ project.name }}
            </div>
        </div>
    </div>
</template>
