import type { SignupPayload } from "@/entities/user";
import { apiSignup } from "@/entities/user";

export const useSignup = () => {
    const signup = async (auth: SignupPayload) => {
        console.log("signup");
        await apiSignup(auth);
    };

    return { signup };
};
