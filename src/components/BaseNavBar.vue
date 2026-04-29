<template>
  <nav
    class="fixed left-0 top-0 z-50 w-full border-b border-[rgba(201,192,181,0.12)] bg-[rgba(22,24,29,0.92)] text-[var(--text-primary-dark)] backdrop-blur-md"
  >
    <div
      class="mx-auto flex min-h-16 w-full max-w-[90rem] items-center justify-between gap-4 px-4 py-3 md:min-h-[70px] md:px-6 xl:px-10"
    >
      <div class="flex min-w-0 items-center">
        <router-link
          to="/"
          class="font-display text-[2rem] leading-none tracking-[0.02em] text-[var(--text-primary-dark)] transition-colors duration-300 hover:text-[var(--color-gold)] md:text-[2.6rem]"
          @click="isMenuOpen = false"
        >
          {{ props.title }}
        </router-link>
      </div>
      <button
        type="button"
        class="section-label inline-flex items-center rounded-sm border border-[rgba(201,192,181,0.22)] px-3 py-2 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(181,154,92,0.72)] hover:text-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[rgba(181,154,92,0.35)] lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav-links"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? "Close" : "Menu" }}
      </button>
      <div
        id="site-nav-links"
        class="absolute left-0 top-full w-full border-t border-[rgba(201,192,181,0.12)] bg-[rgba(22,24,29,0.97)] px-4 py-4 lg:static lg:w-auto lg:border-t-0 lg:bg-transparent lg:p-0"
        :class="isMenuOpen ? 'block' : 'hidden lg:block'"
      >
        <div
          class="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-2"
        >
          <router-link
            v-for="option in props.options"
            :key="option.name"
            :to="option.to"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <a
              :href="href"
              class="section-label relative inline-flex rounded-sm px-3 py-2 text-[var(--text-secondary-dark)] transition-colors duration-300 hover:text-[var(--text-primary-dark)] lg:px-2 lg:py-3 xl:px-3"
              :class="
                isActive
                  ? 'text-[var(--text-primary-dark)] after:absolute after:bottom-[0.35rem] after:left-3 after:right-3 after:h-px after:bg-[var(--color-gold)] lg:after:left-2 lg:after:right-2 xl:after:left-3 xl:after:right-3'
                  : 'after:absolute after:bottom-[0.35rem] after:left-3 after:right-3 after:h-px after:origin-center after:scale-x-0 after:bg-[var(--color-gold)] after:transition-transform after:duration-300 hover:after:scale-x-100 lg:after:left-2 lg:after:right-2 xl:after:left-3 xl:after:right-3'
              "
              @click="
                navigate();
                isMenuOpen = false;
              "
            >
              {{ option.label }}
            </a>
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
