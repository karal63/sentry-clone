import { defineStore } from "pinia";
import { ref } from "vue";
import type { Issue } from "./types";
import { apiGetIssues } from "../api/issue.api";

export const useIssueStore = defineStore("issue", () => {
    const issues = ref<Issue[]>([]);

    const setIssues = (newIssues: Issue[]) => {
        issues.value = newIssues;
    };

    const getIssues = async (projectId: string) => {
        const res = await apiGetIssues(projectId);
        issues.value = res.data;
    };

    return { issues, setIssues, getIssues };
});
