<script setup lang="ts">
import { useIssueStore } from "@/entities/issue";
import { useProjectStore } from "@/entities/project";
import { watch } from "vue";

const projectStore = useProjectStore();
const issuesStore = useIssueStore();

watch(
    () => projectStore.currentProject,
    async () => {
        console.log("current project changed");
        if (projectStore.currentProject) {
            await issuesStore.getIssues(projectStore.currentProject.id);
        }
    }
);
</script>

<template>
    <div class="border">
        <ul>
            <li v-for="issue in issuesStore.issues">{{ issue.message }}</li>
        </ul>
    </div>
</template>
