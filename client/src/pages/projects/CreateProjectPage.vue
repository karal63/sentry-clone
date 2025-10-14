<script setup lang="ts">
import { SelectPlatform } from "@/features/project/selectPlatform";
import { SetAlerts } from "@/features/project/setAlerts";
</script>

<template>
    <div class="my-5 flex justify-between items-center">
        <h1 class="text-3xl font-bold">Create a new project in 3 steps</h1>
    </div>

    <SelectPlatform />
    <SetAlerts />
</template>
