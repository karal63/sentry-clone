import { defineStore } from "pinia";
import { ref } from "vue";
import type { CreateProject, Platform, Project } from "@/entities/project";
import { apiCreateProject, useProjectStore } from "@/entities/project";

export const useCreateProjectStore = defineStore("createProject", () => {
    const projectStore = useProjectStore();

    const project = ref<CreateProject>({
        platform: "",
        notifyViaEmail: false,
        name: "",
    });

    const setPlatform = (platform: Platform) => {
        project.value.platform = platform;
    };

    const create = async (): Promise<Project | null> => {
        try {
            const newProject = await apiCreateProject(project.value);
            projectStore.projects.push(newProject);
            return newProject;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return { project, setPlatform, create };
});
