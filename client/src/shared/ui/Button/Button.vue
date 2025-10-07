<script setup lang="ts">
defineEmits<{
    (e: "click"): void;
}>();
</script>

<template>
    <button
        @click="$emit('click')"
        class="mt-8 bg-red-500 text-white w-full py-4 rounded-md font-bold hover:bg-red-600 transition cursor-pointer"
    >
        <slot />
    </button>
</template>
