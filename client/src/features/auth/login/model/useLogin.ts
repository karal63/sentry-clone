import type { LoginPayload } from "@/entities/user";
import { apiLogin } from "@/entities/user";
import { AxiosError } from "axios";

export const useLogin = () => {
    const login = async (auth: LoginPayload) => {
        try {
            const res = await apiLogin(auth);
            localStorage.setItem("accessToken", res.data.accessToken);
            console.log(res.data.accessToken);
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data.message;
            }
        }
    };

    return { login };
};
