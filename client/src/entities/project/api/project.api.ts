import { axiosInstance } from "@/shared/config";
import type { AxiosResponse } from "axios";
import type { CreateProject, Project } from "../model/types";

export const apiGetProjects = async (): Promise<AxiosResponse<Project[]>> => {
    const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/project`
    );
    return response;
};

export const apiCreateProject = async ({
    platform,
    notifyViaEmail,
    name,
}: CreateProject): Promise<Project> => {
    const response = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/project`,
        {
            platform,
            notifyViaEmail,
            name,
        }
    );
    return response.data;
};
