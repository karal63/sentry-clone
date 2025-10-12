<script setup lang="ts">
import { onMounted, ref } from "vue";

const isDropdownOpen = ref(false);
const selectedProject = ref(null);

onMounted(() => {
    console.log("fetch projects");
});

const projects = ref([
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
]);
</script>

<template>
    <div class="relative">
        <button
            @click="isDropdownOpen = !isDropdownOpen"
            class="py-1 px-2 cursor-pointer"
        >
            {{ selectedProject ? selectedProject.name : "Select Project" }}
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
                        @click="selectedProject = project"
                        class="hover:bg-gray-200 w-full text-left px-2 py-1 rounded cursor-pointer"
                    >
                        {{ project.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<!-- <Icon
                    icon="weui:arrow-outlined"
                    class="text-xl transform rotate-90"
                /> -->
