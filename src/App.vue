<script setup lang="ts">
import Hero from "./components/Hero.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <div class="app-container">
    <Header />
    <Hero />
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  padding: 10px;
}
</style>



