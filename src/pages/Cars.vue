<script setup lang="ts">
import CarList from "@/components/ui/CarList.vue";
import { useCarStore } from "@/stores/carStore";
import { computed } from "vue";

const carStore = useCarStore();

const cars = computed(() => carStore.cars);

</script>

<template>
    <main class="min-h-screen pt-26">
        <div class="container">
            <h1 class="text-4xl font-bold mb-10">Our Cars</h1>
            <CarList :cars="cars" />
        </div>
    </main>
</template>

<style scoped>

</style>