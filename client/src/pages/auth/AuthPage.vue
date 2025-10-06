<script setup lang="ts">
import { AuthInput } from "@/shared/ui";

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
                    <h1 class="text-4xl font-extrabold">
                        {{ type === "login" ? "Login" : "Signup" }}
                    </h1>

                    <p class="mt-6 mb-10 text-secondary">
                        Welcome back! Please login to your account.
                    </p>

                    <form class="flex flex-col gap-7">
                        <div class="flex flex-col">
                            <label class="mb-3 text-secondary"
                                >User Email</label
                            >
                            <AuthInput
                                type="email"
                                placeholder="yourEmail@gmail.com (ex)"
                            />
                        </div>

                        <div v-if="type === 'signup'" class="flex flex-col">
                            <label class="mb-3 text-secondary">User Name</label>
                            <AuthInput type="text" placeholder="John (ex)" />
                        </div>

                        <div class="flex flex-col">
                            <label class="mb-3 text-secondary">Password</label>
                            <AuthInput
                                type="password"
                                placeholder="*********"
                            />
                        </div>
                    </form>

                    <div
                        v-if="type === 'login'"
                        class="mt-8 flex items-center justify-between"
                    >
                        <label class="flex gap-2 items-center font-semibold">
                            <input type="checkbox" /> Remember Me
                        </label>

                        <button class="text-secondary cursor-pointer">
                            Forget password?
                        </button>
                    </div>

                    <button
                        class="mt-8 bg-red-500 text-white w-full py-4 rounded-md font-bold hover:bg-red-600 transition cursor-pointer"
                    >
                        {{ type === "login" ? "Login" : "Signup" }}
                    </button>

                    <div class="mt-10 flex gap-2 items-center">
                        <p class="text-secondary">
                            {{
                                type === "login"
                                    ? "New User?"
                                    : "Already have an account?"
                            }}
                        </p>
                        <RouterLink
                            :to="type === 'login' ? '/signup' : '/login'"
                            class="text-red-600 font-semibold"
                            >{{
                                type === "login" ? "Signup" : "Login"
                            }}</RouterLink
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
