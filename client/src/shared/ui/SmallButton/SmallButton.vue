<script setup lang="ts">
defineEmits<{
    (e: "click"): void;
}>();
</script>

<template>
    <button
        @click="$emit('click')"
        class="bg-red-700 flex-center text-white py-1 px-3 rounded-md font-semibold hover:bg-red-800 transition cursor-pointer"
    >
        <slot />
    </button>
</template>
