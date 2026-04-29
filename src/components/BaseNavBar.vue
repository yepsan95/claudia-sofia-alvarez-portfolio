<template>
  <nav
    class="fixed top-0 left-0 z-50 w-full bg-gray-800 text-gray-50 shadow-sm"
  >
    <div
      class="mx-auto flex min-h-16 w-full max-w-screen-2xl items-center justify-between gap-4 px-4 py-3 md:min-h-[70px] md:px-6"
    >
      <div class="flex min-w-0 items-center">
        <span class="text-xl font-serif leading-tight md:text-[1.9rem]">
          {{ props.title }}
        </span>
      </div>
      <button
        type="button"
        class="inline-flex items-center rounded-md border border-gray-600 px-3 py-2 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white/60 lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav-links"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? "Close" : "Menu" }}
      </button>
      <div
        id="site-nav-links"
        class="absolute left-0 top-full w-full border-t border-gray-700 bg-gray-800 px-4 py-3 lg:static lg:w-auto lg:border-t-0 lg:bg-transparent lg:p-0"
        :class="isMenuOpen ? 'block' : 'hidden lg:block'"
      >
        <div
          class="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-1"
        >
          <router-link
            v-for="option in props.options"
            :key="option.name"
            :to="option.to"
            class="rounded-lg px-3 py-2 font-serif transition-colors hover:bg-gray-600 lg:px-4 lg:py-3"
            @click="isMenuOpen = false"
          >
            {{ option.label }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
