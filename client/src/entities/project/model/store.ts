import { defineStore } from "pinia";
import { ref } from "vue";
import type { Project } from "./types";

export const useProjectStore = defineStore("project", () => {
    const currentProject = ref<Project | null>();

    const setCurrentProject = (project: Project) => {
        currentProject.value = project;

        // for saving current project on page reload
        localStorage.setItem("currentProject", JSON.stringify(project));
    };

    return { currentProject, setCurrentProject };
});
