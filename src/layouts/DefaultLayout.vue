<script setup lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import WhatsappButton from "@/components/whatsappbutton.vue";
</script>



<template>
    <div>
        <Header />
        <slot />
        <WhatsappButton />
        <Footer />
    </div>
</template>


<style scoped>

</style>