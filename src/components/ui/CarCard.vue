<script setup lang="ts">
import type { Car } from "../../types/car";

defineProps<{
  car: Car;
}>();
</script>

<template>
  <div class="bg-stone-100 rounded-3xl w-full flex flex-col justify-between">
    <div class="p-5">
      <img :src="car.image.src" :alt="car.image.alt" class="w-full" />
    </div>
    <div class="flex flex-col gap-8">
      <div class="flex gap-8 items-start justify-between px-5">
        <h3 class="text-xl font-bold">{{ car.name }}</h3>
        <p class="flex flex-col">
          <span class="text-lg font-semibold">{{ car.price }} MAD </span>
          <span class="text-stone-400 leading-3">/day</span>
        </p>
      </div>
      <div class="flex gap-5 justify-between font-semibold uppercase text-sm">
        <RouterLink :to="`/car/${car.slug}`" class="w-full text-center px-5 py-3">Details</RouterLink>
        <button
          class="w-full text-center px-5 py-3 border bg-stone-900 text-white rounded-full rounded-br-none shadow-lg hover:bg-stone-700 transition-colors"
          >Book Now</button
        >
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
