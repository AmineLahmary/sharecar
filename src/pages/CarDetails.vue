<template>
    <main class="min-h-screen border flex flex-col pt-32">
        <section>
            <div class="container">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-stone-100 p-5 rounded-3xl">
                        <img :src="car?.image.src" :alt="car?.image.alt" class="w-full" />
                    </div>
                    <div>
                        <h2 class="text-3xl font-bold mb-2">{{ car?.name }}</h2>
                        <p class="mb-2">{{ car?.price }} MAD / day</p>
                        <PrimaryButton text="Check Availability" @click="handleBookingForm" />
                        <BookingForm :show="showBookingForm" @close="showBookingForm = false" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useCarStore } from '@/stores/carStore'
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
import BookingForm from "@/components/layout/BookingForm.vue";

const route = useRoute();

const carStore = useCarStore();
const car = computed(() => carStore.getBySlug(route.params.slug as string))

const showBookingForm = ref<boolean>(false)

const handleBookingForm = () => {
    showBookingForm.value = !showBookingForm.value
}
</script>

<style scoped>

</style>