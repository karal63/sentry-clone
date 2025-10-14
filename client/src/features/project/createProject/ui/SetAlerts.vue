<script setup lang="ts">
import { SmallButton } from "@/shared/ui";
import { useCreateProjectStore } from "../model/store";

const createProjectStore = useCreateProjectStore();
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

    <label class="flex gap-2 my-10">
        <input
            type="checkbox"
            v-model="createProjectStore.project.notifyViaEmail"
        />
        Notify via email
    </label>

    <SmallButton color="transparent" class="border border-gray-300">
        Connect to messaging
    </SmallButton>
</template>
