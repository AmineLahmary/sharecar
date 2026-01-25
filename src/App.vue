<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AdminLayout from "@/layouts/AdminLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute()




</script>

<template>
  <UApp class="app-container">
    <DefaultLayout v-if="route.meta.layout !== 'AdminLayout'">
        <RouterView />
    </DefaultLayout>
    <AdminLayout v-else>
        <RouterView />
    </AdminLayout>
  </UApp>
</template>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}
</style>



