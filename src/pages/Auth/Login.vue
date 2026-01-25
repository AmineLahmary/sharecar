<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')
const auth = useAuthStore()

const handleLogin = async () => {
  await auth.logIn(email.value, password.value)

  if(auth.user) {
    router.push('/admin') 
  }
}
</script>

<template>
  <section class="h-screen">
    <div class="container h-full flex justify-center flex-col">
        <div class="max-w-xl mx-auto">
            <h2 class="text-xl font-bold mb-4">Login</h2>
        
            <input
              v-model="email"
              type="email"
              placeholder="Email"
              class="w-full mb-3 border p-2 rounded"
            />
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full mb-3 border p-2 rounded"
            />
        
            <button
              @click="handleLogin"
              class="w-full bg-stone-900 text-white p-2 rounded"
            >
              Login
              <span v-if="auth.loading" class="ml-2 animate-spin">...</span>
            </button>
        
            <p v-if="auth.error" class="text-red-600 mt-3">{{ auth.error }}</p>
        </div>
        <button @click="email = 'alinelahmary@gmail.com'; password = 'J7NmDdSRPd8smYX'" class="text-stone-900 mt-3">
          click here to fill the form with the correct info
        </button>
    </div>
  </section>
</template>


<style scoped></style>
