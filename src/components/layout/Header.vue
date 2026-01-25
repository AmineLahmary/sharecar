<script setup lang="ts">
import Logo from "@/icons/logo.vue";
import { Menu } from "lucide-vue-next";

</script>
<template>
  <header class="header absolute top-5 left-5 right-5 z-10">
    <div class="container flex justify-between">
      <div class="header__content">
        <RouterLink to="/" class="header__logo">
          <Logo color="#000" primary="var(--primary-color)" class="header__logo" />
        </RouterLink>
      </div>
      <div>
        <button class="flex justify-center items-center w-10 h-10 shadow-lg">
          <Menu />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 10px 20px;
}
.header__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo {
  width: 100px;
}
</style>
