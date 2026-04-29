<template>
  <div class="min-h-screen mt-12">
    <base-sidebar
      :is-open="isSidebarOpen"
      :header="sidebarHeader"
      :footer="sidebarFooter"
      :options="sidebarOptions"
      @option-click="handleSidebarOptionClick"
    />
    <button
      type="button"
      class="fixed top-[86px] z-20 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm transition-all duration-300 hover:bg-gray-100"
      :class="isSidebarOpen ? 'left-[272px]' : 'left-4'"
      :aria-expanded="isSidebarOpen"
      :aria-controls="sidebarId"
      @click="toggleSidebar"
    >
      {{ isSidebarOpen ? "Hide years" : "Show years" }}
    </button>
    <main
      class="overflow-y-auto transition-[margin] duration-300"
      :class="isSidebarOpen ? 'ml-64' : 'ml-0'"
    >
      <div class="py-9 mt-6">
        <p class="flex justify-center text-3xl py-2">{{ props.title }}</p>
        <p class="flex justify-center text-center text-lg px-[100px] py-2">
          {{ props.subtitle }}
        </p>
      </div>
      <div
        v-if="props.filterOptions.length"
        class="flex justify-center px-10 pb-6"
      >
        <base-filter v-model="selectedFilters" :options="props.filterOptions" />
      </div>
      <base-accordion
        :data="accordionData"
        :open-collapse-state="openCollapseState"
        :has-two-levels="false"
        ref="baseAccordionRef"
        @update:open-collapse-state="openCollapseState = $event"
      >
        <template
          v-for="year in Object.keys(filteredTimelineData)"
          :key="year"
          #[`content[${year}]`]
        >
          <base-work
            v-for="(work, index) in filteredTimelineData[year]"
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
import { computed, nextTick, ref, watch } from "vue";
import type { PropType } from "vue";
import BaseAccordion from "./BaseAccordion.vue";
import BaseFilter from "./BaseFilter.vue";
import BaseSidebar from "./BaseSidebar.vue";
import BaseWork from "./BaseWork.vue";

type FilterOption = {
  id: string;
  label: string;
};

type TimelineWork = {
  title: string;
  instrumentation: string[];
  description?: string | null;
  premiereDate?: string | null;
  premierePlace?: string | null;
  publishDate?: string | null;
  duration?: string | null;
  videoUrl?: string | null;
  embeddedVideoUrl?: string | null;
  categories?: string | null;
};

type TimelineData = Record<string, TimelineWork[]>;

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
    type: Object as PropType<TimelineData>,
    required: false,
    default: () => ({}),
  },
  filterOptions: {
    type: Array as PropType<FilterOption[]>,
    required: false,
    default: () => [],
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

const selectedFilters = ref<string[]>([]);
const openCollapseState = ref<{ [key: string]: boolean }>({});
const baseAccordionRef = ref<InstanceType<typeof BaseAccordion> | null>(null);
const isSidebarOpen = ref(true);
const sidebarId = "timeline-sidebar";

const matchesSelectedFilters = (work: TimelineWork) => {
  if (!selectedFilters.value.length) return true;
  const categories = work.categories
    ? work.categories.split(",").map((category) => category.trim())
    : [];

  return selectedFilters.value.some((selectedFilter) =>
    categories.includes(selectedFilter),
  );
};

const filteredTimelineData = computed<TimelineData>(() =>
  Object.fromEntries(
    Object.entries(props.timelineData)
      .map(([year, works]) => [year, works.filter(matchesSelectedFilters)])
      .filter(([, works]) => works.length > 0),
  ),
);

const sidebarOptions = computed<{ label: string; id: string }[]>(() =>
  Object.keys(filteredTimelineData.value).map((value) => ({
    label: value,
    id: value,
  })),
);

const accordionData = computed(() =>
  Object.keys(filteredTimelineData.value).map((year) => ({
    title: year,
    id: year,
  })),
);

watch(
  sidebarOptions,
  (options) => {
    const nextState = Object.fromEntries(
      options.map((option) => [
        option.id,
        openCollapseState.value[option.id] ?? true,
      ]),
    );
    openCollapseState.value = nextState;
  },
  { immediate: true },
);

const handleSidebarOptionClick = async (optionId: string) => {
  if (!baseAccordionRef.value) return;
  const previousCollapseState = openCollapseState.value[optionId];
  const collapseRef = baseAccordionRef.value?.baseCollapseRefs[optionId]?.$el;
  openCollapseState.value[optionId] = true;

  const offset = openCollapseState.value[optionId] ? -60 : 0;
  if (!previousCollapseState) {
    await nextTick();
    await new Promise((resolve) => setTimeout(resolve, 200));
  }

  await scrollToCollapse(collapseRef, offset);
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
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
