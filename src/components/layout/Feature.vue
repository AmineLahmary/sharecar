<script setup lang="ts">
import CarList from "@/components/ui/CarList.vue";
import SectionTitle from "@/components/ui/SectionTitle.vue";
import { useCarStore } from "@/stores/carStore";
import { computed } from "vue";

const carStore = useCarStore();

const cars = computed(() => carStore.cars);

</script>

<template>
    <section class="feature">
        <div class="container">
            <SectionTitle title="Featured Fleet Section" subtitle="Discover Our Exquisite Collection" />
            <div class="car-cards">
                <CarList :cars="cars" />
            </div>
        </div>
    </section>
</template>



<style scoped>
.feature {
    margin-bottom: 120px;
}

.car-cards {
    margin-top: 40px;
}
</style>