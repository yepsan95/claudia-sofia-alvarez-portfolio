<template>
  <nav
    class="fixed left-0 top-0 z-50 w-full border-b border-[rgba(201,192,181,0.12)] bg-[linear-gradient(180deg,rgba(39,49,66,0.95),rgba(36,29,39,0.95))] text-[var(--text-primary-dark)] backdrop-blur-xl"
  >
    <div
      class="mx-auto flex min-h-16 w-full max-w-[96rem] items-center justify-between gap-4 px-4 py-3 md:min-h-[74px] md:px-6 xl:px-10"
    >
      <div class="flex min-w-0 items-center gap-4">
        <span
          class="hidden h-10 w-px bg-[linear-gradient(180deg,rgba(181,154,92,0.15),rgba(181,154,92,0.85),rgba(181,154,92,0.15))] lg:block"
        />
        <router-link
          to="/"
          class="min-w-0 whitespace-nowrap font-display text-[clamp(1.4rem,7vw,2rem)] leading-none tracking-[0.01em] text-[var(--text-primary-dark)] transition-colors duration-300 hover:text-[var(--color-gold)] md:text-[2.65rem]"
          @click="isMenuOpen = false"
        >
          {{ props.title }}
        </router-link>
      </div>
      <button
        type="button"
        class="section-label inline-flex items-center rounded-sm border border-[rgba(201,192,181,0.22)] px-3 py-2 text-[var(--text-primary-dark)] transition-colors duration-300 hover:border-[rgba(106,48,64,0.72)] hover:text-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[rgba(106,48,64,0.32)] lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="site-nav-links"
        @click="toggleMenu"
      >
        {{ isMenuOpen ? "Close" : "Menu" }}
      </button>
      <div
        id="site-nav-links"
        class="absolute left-0 top-full w-full border-t border-[rgba(201,192,181,0.12)] bg-[linear-gradient(180deg,rgba(39,49,66,0.98),rgba(36,29,39,0.98))] px-4 py-4 lg:static lg:w-auto lg:border-t-0 lg:bg-transparent lg:p-0"
        :class="isMenuOpen ? 'block' : 'hidden lg:block'"
      >
        <div
          class="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:items-center lg:justify-end lg:gap-1"
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
              class="section-label relative inline-flex rounded-sm px-3 py-2 text-[var(--text-secondary-dark)] transition-colors duration-300 hover:text-[var(--text-primary-dark)] lg:px-3 lg:py-3"
              :class="
                isActive
                  ? 'text-[var(--text-primary-dark)] before:absolute before:left-0 before:top-1/2 before:hidden before:h-px before:w-2 before:-translate-y-1/2 before:bg-[var(--color-gold)] lg:before:block after:absolute after:bottom-[0.35rem] after:left-3 after:right-3 after:h-px after:bg-[var(--color-gold)]'
                  : 'after:absolute after:bottom-[0.35rem] after:left-3 after:right-3 after:h-px after:origin-center after:scale-x-0 after:bg-[var(--color-gold)] after:transition-transform after:duration-300 hover:after:scale-x-100'
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
