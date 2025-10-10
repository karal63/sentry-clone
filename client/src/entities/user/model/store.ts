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
        const response = await axiosInstance.post(
            `${import.meta.env.VITE_API_URL}/refresh`
        );
        if (response.status === 401) {
            return console.log("User is not authenticated");
        }

        if (!response.data.user) return;

        localStorage.setItem("accessToken", response.data.accessToken);
        setUser(response.data.user, true);
    };

    return { setUser, user, isAuthenticated, checkAuth };
});
