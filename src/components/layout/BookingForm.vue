<template>
  <Dialog :show="show" @close="(value: boolean) => emit('close', value)">
    <form @submit.prevent="handleSubmit">
      <div>
        <div class="border-b border-stone-200 p-5 flex justify-between">
          <div v-if="!lastStep">
            <div v-if="!selectedRange.start && !selectedRange.end" class="text-lg font-semibold">
              Select dates
            </div>
            <div v-else class="flex items-center gap-1 text-lg font-semibold">
              <div>
                <!-- <span class="font-normal text-base text-stone-500">Start:</span> -->
                {{ selectedRange.start }}
              </div>
              <ArrowRight />
              <div>
                <!-- <span class="font-normal text-base text-stone-500">End:</span> -->
                {{ selectedRange.end }}
              </div>
            </div>
          </div>
          <div v-else class="text-lg font-semibold">Personal information</div>
          <button @click="emit('close')" class="secondary-btn rounded-full aspect-square p-1">
            <X size="18" />
          </button>
        </div>
        <div v-if="!lastStep">
          <DatePicker borderless transparent color="gray" title-position="left" :columns="columns" expanded
            :min-date="new Date()" mode="date" v-model.string.range="selectedRange" :masks="masks" class="mt-3" />
        </div>
      </div>
      <div class="next-step" v-if="lastStep">
        <!-- Next Step -->
        <div class="max-w-sm mx-auto py-3">
          <div class="mb-5">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
            <input type="text" id="name" name="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Amine Lahmary" required />
          </div>
          <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="hello@amine-lahmary.com" required />
          </div>
          <div class="mb-5">
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone</label>
            <input type="tel" id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+2126 18 79 95 98" required />
          </div>
        </div>
      </div>
      <div class="p-5 border-t border-stone-200 flex" v-if="!lastStep">
        <button type="button" class="ml-auto secondary-btn" @click="lastStep = true">
          Personal Information
          <MoveRight :size="17" class="h-fit" />
        </button>
      </div>
      <div class="p-5 border-t border-stone-200 flex justify-between" v-if="lastStep">
        <button type="button" @click="lastStep = false" class="secondary-btn">Back</button>
        <button type="submit" class="primary-btn">Submit</button>
      </div>
    </form>
  </Dialog>
</template>

<script setup lang="ts">
import supabase from "@/lib/supabase";

import { DatePicker } from "v-calendar";
import Dialog from "@/components/ui/Dialog.vue";
import { onMounted, ref } from "vue";
import { ArrowRight, X, MoveRight } from "lucide-vue-next";

const selectedRange = ref<{ start: Date | null; end: Date | null }>({
  start: null,
  end: null,
});
const lastStep = ref<boolean>(false);
const masks = ref({
  modelValue: "YYYY-MM-DD",
});

defineProps<{
  show: boolean;
}>();

const emit = defineEmits(["close"]);

const handleSubmit = (event: Event) => {
  const form = event.target as HTMLFormElement;
  if (!form) return;
  const formData = new FormData(form);
  console.log(Object.fromEntries(formData));
};


const columns = 1;

const cars = ref<any>([]);

async function getCars() {
  const { data } = await supabase.from("cars").select();
  return data;
}

onMounted(async () => {
  cars.value = await getCars();
});
</script>

<style scoped></style>
