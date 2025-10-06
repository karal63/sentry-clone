<script setup lang="ts">
defineProps<{
    type: "text" | "password" | "email";
}>();
</script>

<template>
    <input
        :type="type"
        class="border border-black/10 rounded-md py-4 px-4 font-semibold focus:outline-none focus:ring-2 focus:border-white/10 focus:ring-red-300 transition resize-none"
    />
</template>
