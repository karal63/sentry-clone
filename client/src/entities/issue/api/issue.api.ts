import { axiosInstance } from "@/shared/config";
import type { AxiosResponse } from "axios";
import type { Issue } from "../model/types";

export const apiGetIssues = async (
    projectId: string
): Promise<AxiosResponse<Issue[]>> => {
    const res = await axiosInstance.get(
        `${import.meta.env.VITE_API_URL}/issue/${projectId}`
    );

    return res;
};
