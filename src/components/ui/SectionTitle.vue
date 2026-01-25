<template>
    <div class="md:text-center">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string;
    subtitle?: string;
}>();
</script>

<style scoped>
h2 {
    font-size: clamp(25px, calc(1.5625rem + ((1vw - 7.68px) * 7.5301)), 50px);
    font-weight: 500;
}
p {
    color: hsl(0, 0%, 40%);
    font-size: clamp(20px, calc(1rem + ((1vw - 7.68px) * 1.0361)), 30px);
}
</style>