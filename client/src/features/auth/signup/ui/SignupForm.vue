<script setup lang="ts">
import { AuthInput, Button } from "@/shared/ui";
import { ref } from "vue";

import { useSignup } from "../model/useSignup";
const { signup } = useSignup();

const auth = ref({
    email: "",
    name: "",
    password: "",
});

const handleSubmit = async () => {
    await signup(auth.value);
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

    <Button @click="handleSubmit">Signup</Button>

    <div class="mt-10 flex gap-2 items-center">
        <p class="text-secondary">Already have an account?</p>
        <RouterLink to="/login" class="text-red-600 font-semibold"
            >Login
        </RouterLink>
    </div>
</template>
