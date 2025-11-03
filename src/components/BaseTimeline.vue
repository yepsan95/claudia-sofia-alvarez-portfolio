<template>
  <div class="grid grid-cols-[16rem_1fr] min-h-screen">
    <base-sidebar
      :options="sidebarOptions"
      @option-click="handleSidebarOptionClick"
    />
    <main class="overflow-y-auto">
      <div class="py-9 mt-6">
        <p class="flex justify-center text-xl py-2">{{ props.title }}</p>
        <p class="flex justify-center text-center text-xs px-[100px] py-2">
          {{ props.subtitle }}
        </p>
      </div>
      <base-accordion :open-collapse-state :has-two-levels="false" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseSidebar from "./BaseSidebar.vue";
import BaseAccordion from "./BaseAccordion.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Base Timeline Title",
  },
  subtitle: {
    type: String,
    required: false,
    default:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
});

const sidebarOptions: { label: string; id: string }[] = [
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
];

const openCollapseState = ref<{ [key: string]: boolean }>(
  Object.fromEntries(sidebarOptions.map((option) => [option.id, false])),
);

const handleSidebarOptionClick = (optionId: string) => {
  openCollapseState.value[optionId] = true;
};
</script>
