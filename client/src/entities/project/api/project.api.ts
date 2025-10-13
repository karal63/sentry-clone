import { axiosInstance } from "@/shared/config";
import type { AxiosResponse } from "axios";
import type { Project } from "../model/types";

export const apiGetProjects = async (): Promise<AxiosResponse<Project[]>> => {
    const response = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/project`
    );
    return response;
};
