<script setup lang="ts">
import { useProjectStore } from "@/entities/project";
import { Sidebar } from "@/widgets/sidebar";
import { onMounted } from "vue";

const projectStore = useProjectStore();

onMounted(async () => {
    // getting projects
    const projects = await projectStore.getProjects();
    projectStore.setProjects(projects);
});
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Sidebar />
        <div class="flex-1 ml-18 px-11">
            <router-view />
        </div>
    </div>
</template>
