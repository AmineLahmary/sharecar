<script setup lang="ts">
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <section class="relative my-20">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-5 items-center">
                <div class="flex flex-col gap-5">
                    <h2 class="text-4xl font-bold">Ready to book your next adventure?</h2>
                    <p class="text-stone-500">Experience the thrill of the open road with our reliable car rentals in Marrakech. Book your next trip today!</p>
                    <RouterLink to="/cars">
                        <PrimaryButton text="View Cars" />
                    </RouterLink>
                </div>
                <div class="flex justify-end row-start-1 md:row-start-auto relative h-full w-full">
                    <img src="/images/duster-side-image.png" alt="" class="">
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>