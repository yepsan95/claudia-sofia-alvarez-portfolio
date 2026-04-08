<template>
  <div class="flex flex-wrap items-center gap-3">
    <button
      v-for="option in props.options"
      :key="option.id"
      type="button"
      :aria-pressed="isSelected(option.id)"
      class="rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#8aa8ff] focus:ring-offset-2"
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
    ? "border-[#7f8ce8] bg-[#8ea2ff] text-[#1f2352] shadow-sm"
    : "border-[#d7dbff] bg-gradient-to-r from-[#e9f1ff] to-[#f0e7ff] text-[#5b628a] hover:border-[#b9c7ff] hover:text-[#404872]";
</script>
