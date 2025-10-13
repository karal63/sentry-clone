<script setup lang="ts">
import { useProject, useProjectStore, type Project } from "@/entities/project";
import { Icon } from "@iconify/vue";
import { onMounted, ref } from "vue";

const project = useProject();
const projectStore = useProjectStore();

const isDropdownOpen = ref(false);
const projects = ref<Project[]>([]);

onMounted(async () => {
    if (localStorage.getItem("currentProject")) {
        projectStore.setCurrentProject(
            JSON.parse(localStorage.getItem("currentProject")!)
        );
    }
    projects.value = await project.getProjects();
});

const selectProject = (project: Project) => {
    projectStore.setCurrentProject(project);
    isDropdownOpen.value = false;
};
</script>

<template>
    <div class="relative">
        <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="py-1 px-2 cursor-pointer flex items-center gap-2"
        >
            {{
                projectStore.currentProject
                    ? projectStore.currentProject.name
                    : "Select Project"
            }}
            <Icon
                icon="weui:arrow-outlined"
                class="text-xl transform rotate-90"
            />
        </button>

        <div
            v-if="isDropdownOpen"
            class="absolute top-[120%] w-[300px] border border-gray-300 bg-mainBg rounded-md shadow-lg px-1 py-2"
        >
            <!-- for filtering -->
            <div>
                <div class="flex justify-between items-center">
                    <h5 class="text-[.7rem] font-semibold ml-2">
                        Filter projects
                    </h5>
                    <button
                        class="text-secondary text-[.7rem] cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
                    >
                        Reset
                    </button>
                </div>
                <input
                    type="text"
                    placeholder="Search ..."
                    class="border border-gray-300 rounded text-sm py-1 px-2 w-full mt-1"
                />
            </div>

            <ul class="mt-1">
                <li v-for="project in projects">
                    <button
                        @click="selectProject(project)"
                        class="hover:bg-gray-200 w-full text-left px-2 py-1 rounded cursor-pointer"
                    >
                        {{ project.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
