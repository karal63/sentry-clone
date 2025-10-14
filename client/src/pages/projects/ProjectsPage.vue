<script setup lang="ts">
import { ProjectsFeed } from "@/features/project/projectsFeed";
import { SmallButton } from "@/shared/ui";
import { Icon } from "@iconify/vue";
</script>

<template>
    <div class="my-5 flex justify-between items-center">
        <h1 class="text-3xl font-bold">Projects</h1>

        <RouterLink to="/projects/new">
            <SmallButton class="flex gap-1 items-center"
                ><Icon icon="ic:round-plus" class="text-xl" />Create
                Project</SmallButton
            >
        </RouterLink>
    </div>

    <ProjectsFeed />
</template>

<!-- work on /project/new page -->
