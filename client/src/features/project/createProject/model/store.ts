import { defineStore } from "pinia";
import { ref } from "vue";
import type { CreateProject, Platform } from "@/entities/project";
import { apiCreateProject, useProjectStore } from "@/entities/project";
import { useRouter } from "vue-router";

export const useCreateProjectStore = defineStore("createProject", () => {
    const projectStore = useProjectStore();
    const router = useRouter();

    const project = ref<CreateProject>({
        platform: "",
        notifyViaEmail: false,
        name: "",
    });

    const setPlatform = (platform: Platform) => {
        project.value.platform = platform;
    };

    const create = async () => {
        try {
            const newProject = await apiCreateProject(project.value);
            projectStore.projects.push(newProject);
            router.push(`/projects/${newProject.name}/getting-started`);
        } catch (error) {
            console.log(error);
        }
    };

    return { project, setPlatform, create };
});
