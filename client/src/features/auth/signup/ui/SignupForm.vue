<script setup lang="ts">
import { AuthInput, Button } from "@/shared/ui";
import { ref } from "vue";

import { useSignup } from "../model/useSignup";
import { Icon } from "@iconify/vue";
const { signup } = useSignup();

const auth = ref({
    email: "",
    name: "",
    password: "",
});

const authError = ref<string | null>(null);

const isLoading = ref(false);

const handleSubmit = async () => {
    isLoading.value = true;
    const error = await signup(auth.value);
    if (error) {
        authError.value = error;
    }
    authError.value = null;
    isLoading.value = false;
};
</script>

<template>
    <h1 class="text-4xl font-extrabold">Signup</h1>

    <p class="mt-6 mb-10 text-secondary">Welcome! Create a new account.</p>

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
            <label class="mb-3 text-secondary">User Name</label>
            <AuthInput
                type="text"
                v-model="auth.name"
                placeholder="John (ex)"
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

    <Button @click="handleSubmit" :disabled="isLoading"
        ><Icon v-if="isLoading" icon="line-md:loading-twotone-loop" />
        <p v-else>Signup</p></Button
    >

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
        <p class="text-secondary">Already have an account?</p>
        <RouterLink to="/login" class="text-red-600 font-semibold">
            Login
        </RouterLink>
    </div>
</template>
