<template>
  <div class="relative space-y-5">
    <div
      v-if="props.showTimelineMarkers && props.data.length"
      class="pointer-events-none absolute -bottom-12 top-8 left-0 w-[3px] bg-[rgba(181,154,92,0.3)]"
    />
    <base-collapse
      v-for="(element, dataKey) in props.data"
      :key="dataKey"
      :ref="
        (el) =>
          setCollapseRef(element.id, el as InstanceType<typeof BaseCollapse>)
      "
      :title="element.title"
      title-class="flex items-center justify-start"
      :is-open="props.openCollapseState[element.title]"
      @update:is-open="(value) => handleCollapseToggle(element.title, value)"
    >
      <template v-if="props.showTimelineMarkers" #title>
        <div class="relative flex w-full items-center">
          <span
            class="absolute left-[-0.90625rem] top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(181,154,92,0.72)] bg-[var(--color-gold)] shadow-[0_0_0_3px_rgba(244,240,232,0.92),0_6px_14px_rgba(22,24,29,0.12)] sm:left-[-1.40625rem] lg:left-[-1.90625rem]"
          />
          <span
            class="section-label relative z-10 rounded-full border border-[rgba(181,154,92,0.72)] bg-[var(--color-paper)] px-4 py-2 text-[var(--text-primary-light)] shadow-[0_8px_24px_rgba(22,24,29,0.08)]"
          >
            {{ element.title }}
          </span>
        </div>
      </template>
      <slot :name="`content[${element.title}]`">
        <div v-if="hasTwoLevels" class="space-y-1">
          <base-collapse
            v-for="(subContent, contentKey) in element.content"
            :key="contentKey"
            :title="subContent.title"
          >
            <slot :name="`content[${dataKey}][${contentKey}]`">
              <div class="px-4 pb-2 pt-4 text-sm text-gray-500">
                {{ subContent.content }}
              </div>
            </slot>
          </base-collapse>
        </div>
        <div v-else class="space-y-1">
          {{ element.content }}
        </div>
      </slot>
    </base-collapse>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref } from "vue";
import BaseCollapse from "./BaseCollapse.vue";

type Collapse = {
  title: string;
  id: string;
  content?: [{ title: string; id: string; content: string }];
};

const props = defineProps({
  openCollapseState: {
    type: Object,
    required: false,
    default: () => ({}),
  },
  hasTwoLevels: {
    type: Boolean,
    required: false,
    default: true,
  },
  showTimelineMarkers: {
    type: Boolean,
    required: false,
    default: false,
  },
  data: {
    type: Array<Collapse>,
    required: false,
    default: [
      {
        title: "collapse 1",
        id: "collapse 1",
        content: [
          {
            title: "collapse 1.1",
            id: "collapse 1.1",
            content: "⊂(◉‿◉)つ",
          },
          {
            title: "collapse 1.2",
            id: "collapse 1.2",
            content: "(ㆆ _ ㆆ)",
          },
          {
            title: "collapse 1.3",
            id: "collapse 1.3",
            content: "☜(⌒▽⌒)☞",
          },
        ],
      },
      {
        title: "collapse 2",
        id: "collapse 2",
        content: [
          {
            title: "collapse 2.1",
            id: "collapse 2.1",
            content: "⤜(ⱺ ʖ̯ⱺ)⤏",
          },
          {
            title: "collapse 2.2",
            id: "collapse 2.2",
            content: "ʕ·͡ᴥ·ʔ",
          },
          {
            title: "collapse 2.3",
            id: "collapse 2.3",
            content: "ʕっ•ᴥ•ʔっ",
          },
        ],
      },
      {
        title: "collapse 3",
        id: "collapse 3",
        content: [
          {
            title: "collapse 3.1",
            id: "collapse 3.1",
            content: "(͡ ° ͜ʖ ͡ °)",
          },
          {
            title: "collapse 3.2",
            id: "collapse 3.2",
            content: "┌( ͝° ͜ʖ͡°)=ε/̵͇̿̿/’̿’̿ ̿",
          },
          {
            title: "collapse 3.3",
            id: "collapse 3.3",
            content: "( ͡° ᴥ ͡°)",
          },
        ],
      },
      {
        title: "collapse 4",
        id: "collapse 4",
        content: [
          {
            title: "collapse 4.1",
            id: "collapse 4.1",
            content: "(◕ᴥ◕ʋ)",
          },
          {
            title: "collapse 4.2",
            id: "collapse 4.2",
            content: "(｡◕‿‿◕｡)",
          },
          {
            title: "collapse 4.3",
            id: "collapse 4.3",
            content: "༼ つ ◕_◕ ༽つ",
          },
        ],
      },
    ],
  },
});

const emit = defineEmits<{
  (e: "update:openCollapseState", value: Record<string, boolean>): void;
}>();

const baseCollapseRefs = ref<Record<string, InstanceType<typeof BaseCollapse>>>(
  {},
);

const setCollapseRef = async (
  id: string,
  el: InstanceType<typeof BaseCollapse>,
) => {
  await nextTick();
  if (el) baseCollapseRefs.value[id] = el;
};

const handleCollapseToggle = (title: string, value: boolean) => {
  const updatedState = { ...props.openCollapseState, [title]: value };
  emit("update:openCollapseState", updatedState);
};

defineExpose({
  baseCollapseRefs,
});
</script>
