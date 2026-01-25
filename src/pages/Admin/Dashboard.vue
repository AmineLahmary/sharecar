
<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'

const auth = useAuthStore()

onMounted(() => {
    // auth.checkProfile()
    // console.log(auth.profile)
})

</script>

<template>
    <div class="flex flex-col gap-4">
        <h1>Dashboard</h1>
        <div class="flex gap-4">
            <!-- <UButton color="primary" v-if="auth.profile.is_admin">
                manage Cars
            </UButton>
            <UButton color="primary" v-if="auth.profile.is_admin">
                manage Bookings
            </UButton> -->
        </div>
    </div>
</template>

<style scoped>

</style>