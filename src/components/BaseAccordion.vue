<template>
  <div class="space-y-3">
    <base-collapse
      v-for="(element, dataKey) in props.data"
      :key="dataKey"
      :ref="
        (el) =>
          setCollapseRef(element.id, el as InstanceType<typeof BaseCollapse>)
      "
      :title="element.title"
      title-class="flex items-center justify-center"
      :is-open="props.openCollapseState[element.title]"
      @update:is-open="(value) => handleCollapseToggle(element.title, value)"
    >
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
