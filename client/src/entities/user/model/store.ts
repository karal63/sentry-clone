import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "./types";
import { axiosInstance } from "@/shared/config";

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isAuthenticated = ref(false);

    const setUser = (newUser: User | null, authenticated: boolean) => {
        user.value = newUser;
        isAuthenticated.value = authenticated;
    };

    const checkAuth = async () => {
        try {
            const response = await axiosInstance.get(
                `${import.meta.env.VITE_API_URL}/refresh`
            );

            localStorage.setItem("accessToken", response.data.accessToken);
            setUser(response.data.user, true);
        } catch (error) {
            console.log(error);
        }
    };

    return { setUser, user, isAuthenticated, checkAuth };
});
