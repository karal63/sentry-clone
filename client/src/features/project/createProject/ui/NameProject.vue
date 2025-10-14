<script setup lang="ts">
import { SmallButton } from "@/shared/ui";
</script>

<template>
    <div class="flex items-center gap-2 mt-10">
        <div
            class="w-6 h-6 bg-red-500 rounded-full flex-center text-white text-sm font-semibold"
        >
            3
        </div>
        <h3 class="text-xl">Name your project</h3>
    </div>

    <form class="flex gap-7">
        <label class="flex flex-col gap-3 mt-5">
            <p class="text-lg">Project slug</p>
            <input
                type="text"
                placeholder="project-slug"
                class="border border-gray-300 rounded-md px-3 h-10 w-[300px]"
            />
        </label>

        <div class="flex items-end">
            <SmallButton color="purple" class="h-10">
                Create Project
            </SmallButton>
        </div>
    </form>
</template>
