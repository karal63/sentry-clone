<script setup lang="ts">
import PlatformsList from "./PlatformsList.vue";
</script>

<template>
    <div class="mt-10">
        <div class="flex items-center gap-2">
            <div
                class="w-6 h-6 bg-red-500 rounded-full flex-center text-white text-sm font-semibold"
            >
                1
            </div>
            <h3 class="text-lg">Choose your platform</h3>
        </div>
        <PlatformsList />
    </div>
</template>
