<script setup lang="ts">
import { Sidebar } from "@/widgets/sidebar";
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Sidebar />
        <div class="flex-1 ml-18 px-11">
            <router-view />
        </div>
    </div>
</template>
