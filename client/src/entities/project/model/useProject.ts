import { apiGetProjects } from "../api/project.api";
import type { Project } from "./types";

export const useProject = () => {
    const getProjects = async (): Promise<Project[]> => {
        const res = await apiGetProjects();
        return res.data;
    };

    return { getProjects };
};
