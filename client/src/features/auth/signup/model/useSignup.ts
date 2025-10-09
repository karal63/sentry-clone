import type { SignupPayload } from "@/entities/user";
import { apiSignup } from "@/entities/user";
import { AxiosError } from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

export const useSignup = () => {
    const signup = async (auth: SignupPayload) => {
        try {
            await apiSignup(auth);
            router.push("/login");
        } catch (error) {
            if (error instanceof AxiosError) {
                return error.response?.data.message;
            }
        }
    };

    return { signup };
};
