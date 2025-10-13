<script setup lang="ts">
import type { Issue } from "@/entities/issue";

defineProps<{
    issue: Issue;
}>();
</script>

<template>
    <li class="px-10 py-2">
        <h3 class="font-semibold">{{ issue.type }}</h3>
        <div class="flex gap-2">
            <div class="w-1 h-4 bg-red-500 rounded-md"></div>
            <p class="text-[.9rem]">{{ issue.message }}</p>
        </div>
        <div class="flex text-[.8rem] divide-x divide-gray-200">
            <span class="text-secondary px-2">{{ issue.project_id }}</span>
            <span class="text-red-500 px-2">{{ issue.status }}</span>
            <span class="text-secondary px-2">{{ issue.culprit }}</span>
        </div>
    </li>
</template>
