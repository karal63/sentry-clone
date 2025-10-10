import { defineStore } from "pinia";
import { ref } from "vue";
import type { User } from "./types";

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isAuthenticated = ref(false);

    const setUser = (newUser: User | null, authenticated: boolean) => {
        user.value = newUser;
        isAuthenticated.value = authenticated;
    };

    return { setUser, user, isAuthenticated };
});
