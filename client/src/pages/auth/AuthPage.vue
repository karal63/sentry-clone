<script setup lang="ts">
import { LoginForm } from "@/features/auth/login";
import { SignupForm } from "@/features/auth/signup";

defineProps<{
    type: "login" | "signup";
}>();
</script>

<template>
    <div class="h-[100vh] w-full flex-center">
        <div class="w-[1000px] flex rounded-lg overflow-hidden shadow-2xl">
            <div
                class="w-1/2 bg-gradient-to-br from-red-600 to-red-400 px-13 flex items-center"
            >
                <h1 class="text-white text-6xl font-bold leading-18">
                    Welcome<br />Back!
                </h1>
            </div>

            <div class="w-1/2 flex flex-col items-center justify-center py-20">
                <div class="w-[350px]">
                    <component
                        :is="type === 'login' ? LoginForm : SignupForm"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
