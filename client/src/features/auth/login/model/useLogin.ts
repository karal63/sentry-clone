import type { LoginPayload } from "@/entities/user";
import { apiLogin } from "@/entities/user";
import { AxiosError } from "axios";
import { useAuthStore } from "@/entities/user";
import { useRouter } from "vue-router";

export const useLogin = () => {
    const authStore = useAuthStore();
    const router = useRouter();

    const login = async (auth: LoginPayload) => {
        try {
            const res = await apiLogin(auth);
            localStorage.setItem("accessToken", res.data.accessToken);
            authStore.setUser(res.data.user, true);
            await router.push("/dashboard");
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data.message;
            }
        }
    };

    return { login };
};
