<template>
  <section class="hero min-h-screen pt-20">
    <div class="container grid sm:grid-cols-2 gap-5">
      <div class="hero__content flex flex-col gap-8">
        <h1 class="hero__heading">Rent a Car in Marrakech with Ease</h1>
        <p class="hero__sub-heading">
          Affordable, reliable, and fast car rentals for your next trip. 
        </p>
        <RouterLink to="/cars">
            <PrimaryButton text="View Cars" />
        </RouterLink>
      </div>
      <div class="hero__image relative row-start-1 md:row-start-auto">
        <img src="/images/mercedes-maybach.png" alt="" class="mt-10"/> 
        <div class="map-bg absolute -z-10 h-full w-full border -top-20 bg-[url('/images/bg-map.png')] bg-cover">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from "@/components/ui/PrimaryButton.vue";
import { RouterLink } from "vue-router";
</script>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  overflow: hidden;
}
.hero__content {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.hero__heading {
  font-size: clamp(25px, calc(1.5625rem + ((1vw - 7.68px) * 7.5301)), 50px);
  font-family: "Kaushan Script", cursive;
  font-weight: 700;
  line-height: 1.2;
}
.hero__sub-heading {
  color: hsl(0, 0%, 50%);
  font-size: clamp(20px, calc(1.25rem + ((1vw - 7.68px) * 1.506)), 25px);
  line-height: 1.2;
}


.hero__image img {
  width: 100%;
}
.map-bg {
  mask-image: radial-gradient(circle, black , transparent 80%);
  background-size: cover;
  background-position: center;
}
@media (max-width: 768px) {
  .hero {
    border-radius: 20px;
  }
}

</style>
