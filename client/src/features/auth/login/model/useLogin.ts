import type { LoginPayload } from "@/entities/user";
import { apiLogin } from "@/entities/user";
import { AxiosError } from "axios";

export const useLogin = () => {
    const login = async (auth: LoginPayload) => {
        try {
            const data = await apiLogin(auth);
            console.log(data);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data.message);
            }
            console.log(error);
        }
    };

    return { login };
};
