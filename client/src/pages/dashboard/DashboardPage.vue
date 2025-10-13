<script setup lang="ts">
import SelectPanel from "@/features/project/selectPanel/ui/SelectPanel.vue";
</script>

<template>
    Welcome
    <SelectPanel />
</template>

<!-- do i need to call api request when shared element like PanelSelect mounts, this way it is going to call it multiple times -->
