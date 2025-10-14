<script setup lang="ts">
defineEmits<{
    (e: "click"): void;
}>();

defineProps<{
    color?: string;
}>();
</script>

<template>
    <button
        @click="$emit('click')"
        class="flex-center py-1 px-3 rounded-md font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-auto transition"
        :style="{
            backgroundColor: color ? color : 'red',
            color: color === 'transparent' ? 'black' : 'white',
        }"
    >
        <slot />
    </button>
</template>
