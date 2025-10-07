import type { LoginPayload } from "@/entities/user";
import { apiLogin } from "@/entities/user";

export const useLogin = () => {
    const login = async (auth: LoginPayload) => {
        console.log("login");
        await apiLogin(auth);
    };

    return { login };
};
