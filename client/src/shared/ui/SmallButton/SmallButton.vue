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
        class="flex-center py-1 px-3 rounded-md font-semibold transition cursor-pointer"
        :style="{
            backgroundColor: color ? color : 'red',
            color: color === 'transparent' ? 'black' : 'white',
        }"
    >
        <slot />
    </button>
</template>
