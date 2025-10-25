import { useProjectStore } from "../model/store";
import type { Project } from "../model/types";

export const getProjectByName = (
    name: string | string[] | undefined
): Project | undefined => {
    const projectStore = useProjectStore();

    return projectStore.projects.find((project) => project.name === name);
};
