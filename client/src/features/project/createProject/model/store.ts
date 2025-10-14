import { defineStore } from "pinia";
import { ref } from "vue";
import type { CreateProject, Platform } from "@/entities/project";
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

    const create = async () => {
        const newProject = await apiCreateProject(project.value);
        projectStore.projects.push(newProject);
    };

    return { project, setPlatform, create };
});
