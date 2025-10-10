import { axiosInstance } from "@/shared/config";
import type { LoginPayload, SignupPayload } from "../model/types";

export const apiSignup = async ({ email, name, password }: SignupPayload) => {
    const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/signup`,
        {
            email,
            name,
            password,
        }
    );

    return res;
};

export const apiLogin = async ({ email, password }: LoginPayload) => {
    const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
            email,
            password,
        }
    );

    return res;
};
