<template>
    <div class="flex gap-4">
        <div class="min-w-12 h-12 text-white bg-stone-900 rounded-full flex items-center justify-center">
            <slot name="icon"></slot>
        </div>
        <div class="flex flex-col">
            <h3 class="font-semibold text-lg">
                {{ title }}
            </h3>
            <p class=" text-stone-500">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title: string;
    description: string;
}>();
</script>

<style scoped>

</style>