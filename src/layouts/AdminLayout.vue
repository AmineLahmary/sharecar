<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Logo from "@/icons/logo.vue";
import { PanelRightClose, PanelRightOpen } from "lucide-vue-next";

// Example sidebar links
const links = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Cars", path: "/admin/cars" },
  { name: "Bookings", path: "/admin/bookings" },
  { name: "Users", path: "/admin/users" }
];

const isOpen = ref(false);
const router = useRouter();

function navigate(path: string) {
  router.push(path);
}
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside
      class="w-64 bg-zinc-900 text-white flex flex-col p-4"
      v-if="isOpen"
    >
      <h1 class="font-bold mb-6">
        <Logo color="white" primary="white" class="w-32"/>
      </h1>
      <nav class="space-y-2">
        <button
          v-for="link in links"
          :key="link.path"
          @click="navigate(link.path)"
          class="w-full text-left px-3 py-2 rounded hover:bg-gray-700"
        >
          {{ link.name }}
        </button>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="flex justify-between items-center mb-6">
        <button @click="isOpen = !isOpen">
            <PanelRightClose v-show="!isOpen" color="black"/>
            <PanelRightOpen v-show="isOpen" color="black"/>
        </button>
        <span class="text-sm text-gray-600">
            <UAvatar src="https://github.com/benjamincanac.png" />
            <span>Admin</span>
        </span>
      </header>

      <!-- Page content -->
      <slot />
    </main>
  </div>
</template>
