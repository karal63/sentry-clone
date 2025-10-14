<script setup lang="ts">
import { SmallButton } from "@/shared/ui";
</script>

<template>
    <div class="flex items-center gap-2">
        <div
            class="w-6 h-6 bg-red-500 rounded-full flex-center text-white text-sm font-semibold"
        >
            2
        </div>
        <h3 class="text-lg">Alerts</h3>
    </div>

    <label class="flex gap-2 mt-5">
        <input type="checkbox" />
        Notify via email
    </label>

    <SmallButton color="transparent" class="my-5 border border-gray-300">
        Connect to messaging
    </SmallButton>
</template>
