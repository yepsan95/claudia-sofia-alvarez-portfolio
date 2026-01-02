<template>
  <aside
    class="fixed top-6 left-0 h-[calc(105vh-4rem)] w-64 bg-gray-800 text-white overflow-y-auto z-10"
  >
    <div class="p-4 border-b border-gray-700">
      <h2 class="text-xl font-semibold">{{ props.header }}</h2>
    </div>

    <nav class="p-4 space-y-2">
      <a
        v-for="option in props.options"
        :key="option.id"
        class="block px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
        @click="handleOptionClick(option.id)"
      >
        <button type="button">
          {{ option.label }}
        </button>
      </a>
    </nav>

    <footer class="p-4 border-t border-gray-700 text-sm text-gray-400">
      {{ props.footer }}
    </footer>
  </aside>
</template>

<script setup lang="ts">
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
});
const emit = defineEmits<{
  optionClick: [optionId: string];
}>();
const handleOptionClick = (optionId: string) => {
  emit("optionClick", optionId);
};
</script>
