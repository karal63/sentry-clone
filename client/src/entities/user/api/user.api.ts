import { axiosInstance } from "@/shared/config";
import type { LoginPayload, SignupPayload } from "../model/user.model";

export const apiSignup = async ({ email, name, password }: SignupPayload) => {
    console.log("api call", email, name, password);
};

export const apiLogin = async ({ email, password }: LoginPayload) => {
    const res = await axiosInstance.post(
        `${import.meta.env.VITE_API_URL}/login`,
        {
            email,
            password,
        }
    );

    console.log(res);

    return res;
};
