<script setup lang="ts">
import CarCard from "./CarCard.vue";
import type { Car } from "../types/car";
defineProps<{
    cars: Car[];
}>();
</script>

<template>
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <template v-for="car in cars" :key="car.name">
                <CarCard :car="car" />
            </template>
        </div>
    </div>
</template>

<style scoped>

</style>