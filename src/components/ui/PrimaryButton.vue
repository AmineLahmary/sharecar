<template>
    <button class="flex items-center gap-2 px-8 py-3 border bg-stone-900 text-white rounded-full shadow-lg w-fit hover:bg-stone-700 active:bg-stone-800 active:scale-95 transition-all">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
defineProps<{
    text: string;
}>();
</script>

<style scoped>

</style>