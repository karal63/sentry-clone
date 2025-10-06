<script setup lang="ts">
import { AuthInput, Button } from "@/shared/ui";
import RememberMe from "./RememberMe.vue";
</script>

<template>
    <h1 class="text-4xl font-extrabold">Login</h1>

    <p class="mt-6 mb-10 text-secondary">
        Welcome back! Login to your account.
    </p>

    <form class="flex flex-col gap-7">
        <div class="flex flex-col">
            <label class="mb-3 text-secondary">User Email</label>
            <AuthInput type="email" placeholder="yourEmail@gmail.com (ex)" />
        </div>

        <div class="flex flex-col">
            <label class="mb-3 text-secondary">Password</label>
            <AuthInput type="password" placeholder="*********" />
        </div>
    </form>

    <RememberMe />

    <Button>Login</Button>

    <div class="mt-10 flex gap-2 items-center">
        <p class="text-secondary">New User?</p>
        <RouterLink to="/signup" class="text-red-600 font-semibold">
            Signup
        </RouterLink>
    </div>
</template>
