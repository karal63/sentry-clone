import type { SignupPayload } from "@/entities/user";
import { apiSignup } from "@/entities/user";
import { AxiosError } from "axios";

export const useSignup = () => {
    const signup = async (auth: SignupPayload) => {
        try {
            console.log("signup");
            await apiSignup(auth);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data.message);
            }
        }
    };

    return { signup };
};
