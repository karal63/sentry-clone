<script setup lang="ts">
import { AuthInput, Button } from "@/shared/ui";
import RememberMe from "./RememberMe.vue";
import { ref } from "vue";

import { useLogin } from "../model/useLogin";
import { Icon } from "@iconify/vue";
const { login } = useLogin();

const auth = ref({
    email: "",
    password: "",
});

const authError = ref<string | null>(null);

const handleSubmit = async () => {
    const error = await login(auth.value);
    if (error) {
        return (authError.value = error);
    }
    error.value = null;
};
</script>

<template>
    <h1 class="text-4xl font-extrabold">Login</h1>

    <p class="mt-6 mb-10 text-secondary">
        Welcome back! Login to your account.
    </p>

    <form class="flex flex-col gap-7">
        <div class="flex flex-col">
            <label class="mb-3 text-secondary">User Email</label>
            <AuthInput
                type="email"
                v-model="auth.email"
                placeholder="yourEmail@gmail.com (ex)"
            />
        </div>

        <div class="flex flex-col">
            <label class="mb-3 text-secondary">Password</label>
            <AuthInput
                type="password"
                v-model="auth.password"
                placeholder="*********"
            />
        </div>
    </form>

    <RememberMe />

    <Button @click="handleSubmit">Login</Button>

    <div
        v-if="authError"
        class="mt-3 py-1 px-2 border border-red-800 flex items-center gap-2 text-red-500 bg-gray-200"
    >
        <Icon icon="material-symbols:error-rounded" class="text-3xl" />
        <p class="text-red-800">
            {{ authError }}
        </p>
    </div>

    <div class="mt-10 flex gap-2 items-center">
        <p class="text-secondary">New User?</p>
        <RouterLink to="/signup" class="text-red-600 font-semibold">
            Signup
        </RouterLink>
    </div>
</template>
