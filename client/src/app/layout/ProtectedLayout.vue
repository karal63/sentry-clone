<script setup lang="ts">
import { Sidebar } from "@/widgets/sidebar";
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <Sidebar />
        <div class="flex-1 ml-29">
            <router-view />
        </div>
    </div>
</template>
