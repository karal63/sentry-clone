<script setup lang="ts">
import { SmallButton } from "@/shared/ui";
import { useCreateProjectStore } from "../model/store";
import { ref } from "vue";
import { useRouter } from "vue-router";

const createProjectStore = useCreateProjectStore();
const router = useRouter();

const isLoading = ref(false);

const handleSubmit = async () => {
    isLoading.value = true;
    const newProject = await createProjectStore.create();
    router.push(`/projects/${newProject?.name}/getting-started`);
    isLoading.value = false;
};
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

    <div class="flex gap-7">
        <label class="flex flex-col gap-3 mt-5">
            <p class="text-lg">Project slug</p>
            <input
                type="text"
                v-model="createProjectStore.project.name"
                placeholder="project-slug"
                class="border border-gray-300 rounded-md px-3 h-10 w-[300px]"
            />
        </label>

        <div class="flex items-end">
            <SmallButton
                :disabled="isLoading"
                @click="handleSubmit"
                color="purple"
                class="h-10"
            >
                Create Project
            </SmallButton>
        </div>
    </div>
</template>
