<script setup>
import SectionTitle from "@/components/ui/SectionTitle.vue";
import WhyUsCard from "@/components/ui/WhyUsCard.vue";
import { ShieldCheck, Headset, HandCoins, HatGlasses } from "lucide-vue-next";

</script>

<template>
    <section class="my-20">
        <div class="container">
            <SectionTitle title="Why Choose Us" subtitle="Reliable Car Rentals in Marrakech" />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-5 mt-10">
                <WhyUsCard title="Full Insurance" description="Drive with peace of mind knowing you’re fully covered with comprehensive insurance.">
                    <template #icon>
                        <ShieldCheck :size="24" :stroke-width="2" />
                    </template>
                </WhyUsCard>
                <WhyUsCard title="24/7 Assistance" description="Need help anytime? Our team is available around the clock to assist you.">
                    <template #icon>
                        <Headset :size="24" :stroke-width="2" />
                    </template>
                </WhyUsCard>
                <WhyUsCard title="Free Delivery" description="We deliver your rental car to your hotel, riad, or the airport — at no extra cost.">
                    <template #icon>
                        <HandCoins :size="24" :stroke-width="2" />
                    </template>
                </WhyUsCard>
                <WhyUsCard title="No Hidden Fees" description="What you see is what you pay — transparent pricing with no surprises.">
                    <template #icon>
                        <HatGlasses :size="24" :stroke-width="2" />
                    </template>
                </WhyUsCard>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>