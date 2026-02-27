<template>
  <div class="min-h-screen mt-12">
    <base-sidebar
      :header="sidebarHeader"
      :footer="sidebarFooter"
      :options="sidebarOptions"
      @option-click="handleSidebarOptionClick"
    />
    <main class="ml-64 overflow-y-auto">
      <div class="py-9 mt-6">
        <p class="flex justify-center text-3xl py-2">{{ props.title }}</p>
        <p class="flex justify-center text-center text-lg px-[100px] py-2">
          {{ props.subtitle }}
        </p>
      </div>
      <base-accordion
        :data="accordionData"
        :open-collapse-state
        :has-two-levels="false"
        ref="baseAccordionRef"
        @update:open-collapse-state="openCollapseState = $event"
      >
        <template
          v-for="year in Object.keys(timelineData)"
          #[`content[${year}]`]
        >
          <base-work
            v-for="(work, index) in timelineData[year]"
            :key="`work-${year}-${index}`"
            :year="year"
            :title="work.title"
            :instrumentation="work.instrumentation"
            :description="work.description"
            :premiere-date="work.premiereDate"
            :premiere-place="work.premierePlace"
            :publish-date="work.publishDate"
            :duration="work.duration"
            :video-url="work.videoUrl"
            :embedded-video-url="work.embeddedVideoUrl"
          />
        </template>
      </base-accordion>
    </main>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import BaseSidebar from "./BaseSidebar.vue";
import BaseAccordion from "./BaseAccordion.vue";
import BaseWork from "./BaseWork.vue";

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
  timelineData: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  sidebarHeader: {
    type: String,
    required: false,
    default: "My Sidebar",
  },
  sidebarFooter: {
    type: String,
    required: false,
    default: "© 2025 My App",
  },
});

const sidebarOptions: { label: string; id: string }[] = Object.keys(
  props.timelineData,
).map((value) => ({ label: value, id: value }));

const accordionData = ref(
  Object.keys(props.timelineData).map((year) => ({ title: year, id: year })),
);

const openCollapseState = ref<{ [key: string]: boolean }>(
  Object.fromEntries(sidebarOptions.map((option) => [option.id, true])),
);

const baseAccordionRef = ref<InstanceType<typeof BaseAccordion> | null>(null);

const handleSidebarOptionClick = async (optionId: string) => {
  if (!baseAccordionRef.value) return;
  const previousCollapseState = openCollapseState.value[optionId];
  const collapseRef = baseAccordionRef.value?.baseCollapseRefs[optionId].$el;
  openCollapseState.value[optionId] = true;

  const offset = openCollapseState.value[optionId] ? -60 : 0;
  if (!previousCollapseState) {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  await scrollToCollapse(collapseRef, offset);
};

const scrollToCollapse = async (el: HTMLElement, offset: number) => {
  if (!el) return;
  await nextTick();
  await new Promise(requestAnimationFrame);
  await new Promise(requestAnimationFrame);

  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};
</script>

<style>
html {
  overflow-anchor: none;
}
</style>
