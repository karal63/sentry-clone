<script setup lang="ts">
import { IssuesFeed } from "@/features/issue/issuesFeed";
import { SelectPanel } from "@/features/project/selectPanel";
</script>

<template>
    <div class="my-5">
        <h1 class="text-3xl font-bold">Feed</h1>
    </div>

    <SelectPanel />
    <IssuesFeed />
</template>
