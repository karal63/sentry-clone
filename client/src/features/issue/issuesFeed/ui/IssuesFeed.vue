<script setup lang="ts">
import { useIssueStore } from "@/entities/issue";
import { useProjectStore } from "@/entities/project";
import { ref, watch } from "vue";
import Issue from "./Issue.vue";

const projectStore = useProjectStore();
const issuesStore = useIssueStore();

const isLoading = ref(false);

watch(
    () => projectStore.currentProject,
    async () => {
        if (projectStore.currentProject) {
            isLoading.value = true;
            await issuesStore.getIssues(projectStore.currentProject.id);
            isLoading.value = false;
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="border border-gray-300 mt-5 rounded-md">
        <ul
            v-if="isLoading"
            class="flex flex-col gap-2 divide-y divide-gray-200"
        >
            <li v-for="_ in 5" class="px-10 py-2">
                <div class="w-36 h-6 bg-gray-300 rounded-md mb-2"></div>
                <div class="flex gap-2">
                    <div class="w-1 h-4 bg-gray-500 rounded-md"></div>
                    <p class="w-96 h-5 bg-gray-300 rounded-md mb-2"></p>
                </div>
                <div class="flex text-[.8rem] divide-x divide-gray-200">
                    <span
                        class="w-36 h-4 bg-gray-300 rounded-md mb-2 mx-2"
                    ></span>
                    <span
                        class="w-28 h-4 bg-gray-300 rounded-md mb-2 mx-2"
                    ></span>
                    <span
                        class="w-40 h-4 bg-gray-300 rounded-md mb-2 mx-2"
                    ></span>
                </div>
            </li>
        </ul>

        <ul v-else class="flex flex-col gap-2 divide-y divide-gray-200">
            <Issue
                v-for="issue in issuesStore.issues"
                :key="issue.id"
                :issue="issue"
            />
        </ul>
    </div>
</template>
