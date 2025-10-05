<script setup lang="ts">
defineProps<{
    type: "login" | "signup";
}>();
</script>

<template>{{ type }}</template>
