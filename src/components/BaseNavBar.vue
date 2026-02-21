<template>
  <nav
    class="fixed top-0 left-0 flex justify-between align-middle bg-gray-800 text-gray-50 w-full h-[70px] z-50"
  >
    <div class="flex items-center ml-4">
      <span class="text-xl font-serif">
        {{ props.title }}
      </span>
    </div>
    <div class="flex justify-between items-center mr-5">
      <router-link
        v-for="option in props.options"
        :key="option.name"
        :to="option.to"
        class="hover:bg-gray-600 px-4 py-4 rounded-lg font-serif"
      >
        {{ option.label }}
      </router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

type NavBarOption = { name: string; label: string; to: string };

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  options: {
    type: Array<NavBarOption>,
    required: true,
  },
});
</script>
