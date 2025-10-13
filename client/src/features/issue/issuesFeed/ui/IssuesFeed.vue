<script setup lang="ts">
import { useIssueStore } from "@/entities/issue";
import { useProjectStore } from "@/entities/project";
import { watch } from "vue";
import Issue from "./Issue.vue";

const projectStore = useProjectStore();
const issuesStore = useIssueStore();

watch(
    () => projectStore.currentProject,
    async () => {
        if (projectStore.currentProject) {
            await issuesStore.getIssues(projectStore.currentProject.id);
        }
    },
    { immediate: true }
);
</script>

<template>
    <div class="border border-gray-300 mt-5 rounded-md">
        <ul class="flex flex-col gap-2 divide-y divide-gray-200">
            <Issue
                v-for="issue in issuesStore.issues"
                :key="issue.id"
                :issue="issue"
            />
        </ul>
    </div>
</template>
