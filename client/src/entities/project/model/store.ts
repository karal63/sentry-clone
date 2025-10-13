import { defineStore } from "pinia";
import { ref } from "vue";
import type { Project } from "./types";
import { apiGetProjects } from "../api/project.api";

export const useProjectStore = defineStore("project", () => {
    const projects = ref<Project[]>([]);
    const currentProject = ref<Project | null>();

    const setCurrentProject = (project: Project) => {
        currentProject.value = project;

        // for saving current project on page reload
        localStorage.setItem("currentProject", JSON.stringify(project));
    };

    const getProjects = async (): Promise<Project[]> => {
        const res = await apiGetProjects();
        return res.data;
    };

    const setProject = (newProjects: Project[]) => {
        projects.value = newProjects;
    };

    return {
        projects,
        currentProject,
        setCurrentProject,
        getProjects,
        setProject,
    };
});
