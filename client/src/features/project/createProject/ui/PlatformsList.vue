<script setup lang="ts">
import vue from "@/shared/assets/vue.png";
import { useCreateProjectStore } from "../model/store";

const createProjectStore = useCreateProjectStore();
</script>

<template>
    <div class="grid grid-cols-14 my-10">
        <div
            @click="createProjectStore.setPlatform('VUE')"
            class="w-full hover:bg-gray-100 px-8 py-3 rounded-md cursor-pointer transition"
        >
            <div class="w-full bg-white rounded-md p-1 border border-gray-300">
                <img :src="vue" alt="vue" class="w-full" />
            </div>
            <div class="mt-3 text-center font-bold text-sm">VUE</div>
        </div>
    </div>
</template>
