<template>
  <div class="flex flex-wrap items-center justify-center gap-3">
    <button
      v-for="option in props.options"
      :key="option.id"
      type="button"
      :aria-pressed="isSelected(option.id)"
      class="rounded-full border px-4 py-2 text-sm font-medium tracking-[0.01em] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[rgba(181,154,92,0.38)] focus:ring-offset-2 focus:ring-offset-[var(--color-paper)]"
      :class="getPillClasses(option.id)"
      @click="toggleOption(option.id)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

type FilterOption = {
  id: string;
  label: string;
};

const props = defineProps({
  modelValue: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => [],
  },
  options: {
    type: Array as PropType<FilterOption[]>,
    required: false,
    default: () => [
      { id: "all", label: "All" },
      { id: "orchestral", label: "Orchestral" },
      { id: "chamber", label: "Chamber" },
      { id: "electronic", label: "Electronic" },
    ],
  },
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string[]): void;
  (e: "change", value: string[]): void;
}>();

const isSelected = (optionId: string) => props.modelValue.includes(optionId);

const toggleOption = (optionId: string) => {
  const updatedValue = isSelected(optionId)
    ? props.modelValue.filter((selectedId) => selectedId !== optionId)
    : [...props.modelValue, optionId];

  emit("update:modelValue", updatedValue);
  emit("change", updatedValue);
};

const getPillClasses = (optionId: string) =>
  isSelected(optionId)
    ? "border-[rgba(110,89,109,0.72)] bg-[var(--color-plum)] text-[var(--text-primary-dark)] shadow-[0_10px_25px_rgba(110,89,109,0.16)]"
    : "border-[var(--border-soft)] bg-[rgba(244,240,232,0.88)] text-[var(--text-secondary-light)] hover:border-[rgba(181,154,92,0.6)] hover:text-[var(--text-primary-light)]";
</script>
