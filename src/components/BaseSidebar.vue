<template>
  <aside
    id="timeline-sidebar"
    class="fixed left-0 z-20 h-[calc(100vh-4rem)] w-[min(18rem,85vw)] overflow-y-auto border-r border-[rgba(201,192,181,0.08)] bg-[linear-gradient(180deg,#202735_0%,#1a202b_100%)] text-[var(--text-primary-dark)] transition-transform duration-300 md:top-[70px] md:h-[calc(100vh-70px)] lg:w-64"
    :class="sidebarStateClass"
  >
    <div class="border-b border-[rgba(201,192,181,0.1)] px-5 py-5">
      <p class="section-label text-[var(--color-gold)]">Archive</p>
      <h2 class="mt-2 font-display text-[2rem] leading-none">
        {{ props.header }}
      </h2>
    </div>

    <nav class="px-3 py-4">
      <button
        v-for="option in props.options"
        :key="option.id"
        type="button"
        class="group flex w-full items-center gap-3 rounded-sm px-3 py-3 text-left font-[var(--font-mono)] text-sm tracking-[0.08em] text-[var(--text-secondary-dark)] transition-colors duration-300 hover:text-[var(--color-gold)]"
        @click="handleOptionClick(option.id)"
      >
        <span
          class="h-px w-4 bg-[rgba(201,192,181,0.15)] transition-all duration-300 group-hover:w-6 group-hover:bg-[var(--color-gold)]"
        />
        <span>{{ option.label }}</span>
      </button>
    </nav>

    <footer
      class="mt-auto border-t border-[rgba(201,192,181,0.1)] px-5 py-4 text-xs text-[var(--text-secondary-dark)]"
    >
      {{ props.footer }}
    </footer>
  </aside>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Option = { id: string; label: string };

const props = defineProps({
  header: {
    type: String,
    required: false,
    default: "My Sidebar",
  },
  options: {
    type: Array<Option>,
    required: false,
    default: [
      {
        label: "Option 1",
        id: "collapse 1",
      },
      {
        label: "Option 2",
        id: "collapse 2",
      },
      {
        label: "Option 3",
        id: "collapse 3",
      },
      {
        label: "Option 4",
        id: "collapse 4",
      },
      {
        label: "Option 5",
        id: "collapse 5",
      },
      {
        label: "Option 6",
        id: "collapse 6",
      },
      {
        label: "Option 7",
        id: "collapse 7",
      },
      {
        label: "Option 8",
        id: "collapse 8",
      },
      {
        label: "Option 9",
        id: "collapse 9",
      },
    ],
  },
  footer: {
    type: String,
    required: false,
    default: "© 2025 My App",
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: true,
  },
  isDesktop: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emit = defineEmits<{
  optionClick: [optionId: string];
}>();

const sidebarStateClass = computed(() => [
  props.isOpen ? "translate-x-0" : "-translate-x-full",
  props.isDesktop ? "top-[70px]" : "top-16 shadow-xl",
]);

const handleOptionClick = (optionId: string) => {
  emit("optionClick", optionId);
};
</script>
